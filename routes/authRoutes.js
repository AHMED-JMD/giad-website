const express = require("express");
const router = express.Router();
const {
  register,
  login,
  getMe,
  changePassword,
  forgotPassword,
  verifyResetToken,
  resetPassword,
} = require("../controllers/authController");
const { protect } = require("../middleware/auth");

router.post("/register", register);
router.post("/login", login);
router.get("/me", protect, getMe);
router.put("/change-password", protect, changePassword);
router.post("/forgot-password", forgotPassword);
router.get("/reset-password/:token", verifyResetToken);
router.put("/reset-password/:token", resetPassword);

module.exports = router;
