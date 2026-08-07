// Run with: npm run seed:admin
// Creates (or updates) an admin user using ADMIN_NAME / ADMIN_EMAIL / ADMIN_PASSWORD from .env
require("dotenv").config();
const connectDB = require("../config/db");
const sequelize = require("../config/sequelize");
const { User } = require("../models");

const run = async () => {
  const { ADMIN_NAME, ADMIN_EMAIL, ADMIN_PASSWORD } = process.env;
  const normalizedAdminEmail = (ADMIN_EMAIL || "").trim().toLowerCase();

  if (!normalizedAdminEmail || !ADMIN_PASSWORD) {
    console.log(
      "Please set ADMIN_NAME, ADMIN_EMAIL and ADMIN_PASSWORD in your .env file",
    );
    process.exit(1);
  }

  const dbConnected = await connectDB();
  if (!dbConnected) {
    process.exit(1);
  }

  try {
    let admin = await User.scope("withPassword").findOne({
      where: { email: normalizedAdminEmail },
    });

    if (admin) {
      admin.name = ADMIN_NAME || admin.name;
      admin.password = ADMIN_PASSWORD;
      admin.role = "admin";
      await admin.save();
      console.log(`Admin user updated: ${normalizedAdminEmail}`);
    } else {
      admin = await User.create({
        name: ADMIN_NAME || "Admin",
        email: normalizedAdminEmail,
        password: ADMIN_PASSWORD,
        role: "admin",
      });
      console.log(`Admin user created: ${normalizedAdminEmail}`);
    }
  } catch (err) {
    console.error(err);
  } finally {
    await sequelize.close();
    process.exit(0);
  }
};

run();
