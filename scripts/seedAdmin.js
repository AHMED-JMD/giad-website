// Run with: npm run seed:admin
// Creates (or updates) an admin user using ADMIN_NAME / ADMIN_EMAIL / ADMIN_PASSWORD from .env
require("dotenv").config();
const sequelize = require("../config/sequelize");
const connectDB = require("../config/db");
const { User } = require("../models");

const run = async () => {
  const { ADMIN_NAME, ADMIN_EMAIL, ADMIN_PASSWORD } = process.env;

  if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
    console.log(
      "Please set ADMIN_NAME, ADMIN_EMAIL and ADMIN_PASSWORD in your .env file",
    );
    process.exit(1);
  }

  const connected = await connectDB();

  if (!connected) {
    process.exit(1);
  }

  let exitCode = 0;

  try {
    let admin = await User.scope("withPassword").findOne({
      where: { email: ADMIN_EMAIL },
    });

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
    exitCode = 1;
  } finally {
    await sequelize.close();
    process.exit(exitCode);
  }
};

run();
