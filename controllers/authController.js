const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");
const xssFilter = require("xss-filters");
const { User } = require("../models");
const { serializeUser } = require("../utils/serializers");
const { sendPasswordResetEmail } = require("../mail");

// How long an emailed reset link stays valid.
const RESET_TOKEN_MINUTES = Number(process.env.RESET_TOKEN_MINUTES) || 30;
// Minimum wait between two reset emails for the same address.
const RESET_REQUEST_COOLDOWN_MS = 60 * 1000;
// Same reply whether or not the address exists, so the form cannot be used to
// discover which emails have accounts.
const RESET_GENERIC_MSG =
  "If an account exists for that email, a reset link has been sent.";

// email -> timestamp of the last accepted request (in-memory, per process)
const resetRequestLog = new Map();

const hashToken = (rawToken) =>
  crypto.createHash("sha256").update(rawToken).digest("hex");

const isThrottled = (email) => {
  const lastRequest = resetRequestLog.get(email);
  return Boolean(
    lastRequest && Date.now() - lastRequest < RESET_REQUEST_COOLDOWN_MS,
  );
};

// Keep the throttle map from growing without bound on a long running process.
const pruneResetRequestLog = () => {
  const cutoff = Date.now() - RESET_REQUEST_COOLDOWN_MS;
  for (const [email, timestamp] of resetRequestLog) {
    if (timestamp < cutoff) {
      resetRequestLog.delete(email);
    }
  }
};

// Prefer an explicitly configured public URL; fall back to the request host so
// the link still works in local development.
const buildResetUrl = (req, rawToken) => {
  const configuredBase = process.env.APP_URL || process.env.CLIENT_URL;
  const base = configuredBase
    ? configuredBase.replace(/\/+$/, "")
    : `${req.protocol}://${req.get("host")}`;

  return `${base}/reset-password/${rawToken}`;
};

// Look up a user by the raw token from the link, rejecting expired records.
const findUserByResetToken = async (rawToken) =>
  User.scope("withResetToken").findOne({
    where: {
      resetPasswordToken: hashToken(rawToken),
      resetPasswordExpire: { [Op.gt]: new Date() },
    },
  });

// Sign a JWT for a given user id
const signToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE || "30d",
  });

// @desc   Register a new user
// @route  POST /api/auth/register
// @access Public
exports.register = async (req, res) => {
  try {
    let { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ msg: "Please enter all fields" });
    }

    name = xssFilter.inHTMLData(name).trim();
    email = xssFilter.inHTMLData(email).trim().toLowerCase();

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const user = await User.create({ name, email, password });
    const safeUser = serializeUser(user);

    res.status(201).json({
      token: signToken(safeUser.id),
      user: safeUser,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server error" });
  }
};

// @desc   Login user
// @route  POST /api/auth/login
// @access Public
exports.login = async (req, res) => {
  try {
    let { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ msg: "Please enter all fields" });
    }

    email = xssFilter.inHTMLData(email).trim().toLowerCase();

    const user = await User.scope("withPassword").findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ msg: "Invalid credentials" });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ msg: "Invalid credentials" });
    }

    const safeUser = serializeUser(user);

    res.json({
      token: signToken(safeUser.id),
      user: safeUser,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server error" });
  }
};

// @desc   Get currently logged in user
// @route  GET /api/auth/me
// @access Private
exports.getMe = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    res.json({
      user: serializeUser(user),
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server error" });
  }
};

// @desc   Change current user password
// @route  PUT /api/auth/change-password
// @access Private
exports.changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({ msg: "Please enter all fields" });
    }

    if (newPassword.length < 6) {
      return res
        .status(400)
        .json({ msg: "New password must be at least 6 characters" });
    }

    const user = await User.scope("withPassword").findByPk(req.user.id);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    const isMatch = await user.matchPassword(currentPassword);
    if (!isMatch) {
      return res.status(400).json({ msg: "Current password is incorrect" });
    }

    user.password = newPassword;
    await user.save();

    return res.json({ msg: "Password updated successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Server error" });
  }
};

// @desc   Send a password reset link to a user's email
// @route  POST /api/auth/forgot-password
// @access Public
exports.forgotPassword = async (req, res) => {
  try {
    let { email } = req.body;

    if (!email) {
      return res.status(400).json({ msg: "Please enter your email" });
    }

    email = xssFilter.inHTMLData(email).trim().toLowerCase();

    pruneResetRequestLog();

    if (isThrottled(email)) {
      return res.status(429).json({
        msg: "A reset link was just sent. Please wait a minute before trying again.",
      });
    }

    const user = await User.findOne({ where: { email } });

    // Unknown address: reply exactly as we do for a real one.
    if (!user) {
      return res.json({ msg: RESET_GENERIC_MSG });
    }

    resetRequestLog.set(email, Date.now());

    const rawToken = crypto.randomBytes(32).toString("hex");

    user.resetPasswordToken = hashToken(rawToken);
    user.resetPasswordExpire = new Date(
      Date.now() + RESET_TOKEN_MINUTES * 60 * 1000,
    );
    await user.save();

    try {
      await sendPasswordResetEmail({
        to: user.email,
        name: user.name,
        resetUrl: buildResetUrl(req, rawToken),
        expiresInMinutes: RESET_TOKEN_MINUTES,
      });
    } catch (mailErr) {
      // The link can never be delivered, so do not leave it usable.
      console.log(mailErr);
      user.resetPasswordToken = null;
      user.resetPasswordExpire = null;
      await user.save();
      resetRequestLog.delete(email);

      return res
        .status(500)
        .json({
          msg: "Could not send the reset email. Please try again later.",
        });
    }

    return res.json({ msg: RESET_GENERIC_MSG });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Server error" });
  }
};

// @desc   Check a reset token before showing the new-password form
// @route  GET /api/auth/reset-password/:token
// @access Public
exports.verifyResetToken = async (req, res) => {
  try {
    const { token } = req.params;

    if (!token) {
      return res.status(400).json({ msg: "Reset link is invalid or expired" });
    }

    const user = await findUserByResetToken(token);

    if (!user) {
      return res.status(400).json({ msg: "Reset link is invalid or expired" });
    }

    return res.json({ valid: true, email: user.email });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Server error" });
  }
};

// @desc   Set a new password using a reset token
// @route  PUT /api/auth/reset-password/:token
// @access Public
exports.resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    if (!token || !password) {
      return res.status(400).json({ msg: "Please enter all fields" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ msg: "Password must be at least 6 characters" });
    }

    const user = await findUserByResetToken(token);

    if (!user) {
      return res.status(400).json({ msg: "Reset link is invalid or expired" });
    }

    user.password = password;
    // One link, one reset.
    user.resetPasswordToken = null;
    user.resetPasswordExpire = null;
    await user.save();

    resetRequestLog.delete(user.email);

    return res.json({ msg: "Password has been reset. You can now log in." });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Server error" });
  }
};
