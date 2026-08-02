const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Protect routes - require a valid JWT
exports.protect = async (req, res, next) => {
  let token;
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.split(" ")[1];
  }

  if (!token) {
    return res.status(401).json({ msg: "Not authorized, no token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);

    if (!req.user) {
      return res.status(401).json({ msg: "Not authorized, user not found" });
    }

    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ msg: "Not authorized, token failed" });
  }
};

// Restrict routes to admin users only
exports.admin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    return next();
  }
  return res.status(403).json({ msg: "Not authorized as an admin" });
};
