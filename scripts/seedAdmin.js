// Run with: npm run seed:admin
// Creates (or updates) an admin user using ADMIN_NAME / ADMIN_EMAIL / ADMIN_PASSWORD from .env
require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("../config/db");
const User = require("../models/User");

const run = async () => {
  const { ADMIN_NAME, ADMIN_EMAIL, ADMIN_PASSWORD } = process.env;

  if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
    console.log(
      "Please set ADMIN_NAME, ADMIN_EMAIL and ADMIN_PASSWORD in your .env file"
    );
    process.exit(1);
  }

  await connectDB();

  try {
    let admin = await User.findOne({ email: ADMIN_EMAIL }).select("+password");

    if (admin) {
      admin.name = ADMIN_NAME || admin.name;
      admin.password = ADMIN_PASSWORD;
      admin.role = "admin";
      await admin.save();
      console.log(`Admin user updated: ${ADMIN_EMAIL}`);
    } else {
      admin = await User.create({
        name: ADMIN_NAME || "Admin",
        email: ADMIN_EMAIL,
        password: ADMIN_PASSWORD,
        role: "admin",
      });
      console.log(`Admin user created: ${ADMIN_EMAIL}`);
    }
  } catch (err) {
    console.error(err);
  } finally {
    await mongoose.connection.close();
    process.exit(0);
  }
};

run();
