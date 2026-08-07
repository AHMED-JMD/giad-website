const jwt = require("jsonwebtoken");
const { User } = require("../models");

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
    const user = await User.findByPk(decoded.id);

    if (!user) {
      return res.status(401).json({ msg: "Not authorized, user not found" });
    }

    req.user = {
      id: user.id,
      _id: String(user.id),
      name: user.name,
      email: user.email,
      role: user.role,
    };

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
