// Run with: npm run migrate:reset-password
// sequelize.sync() creates missing tables but never adds columns to an existing
// one, so the password-reset columns need this one-time additive migration.
require("dotenv").config();
const sequelize = require("../config/sequelize");

const COLUMNS = [
  { name: "resetPasswordToken", definition: "VARCHAR(64) NULL" },
  { name: "resetPasswordExpire", definition: "DATETIME NULL" },
];

const columnExists = async (name) => {
  const [rows] = await sequelize.query(
    "SELECT COLUMN_NAME FROM information_schema.COLUMNS " +
      "WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'users' AND COLUMN_NAME = :name",
    { replacements: { name } },
  );
  return rows.length > 0;
};

const run = async () => {
  let exitCode = 0;

  try {
    await sequelize.authenticate();
    console.log("MySQL connected");

    for (const column of COLUMNS) {
      if (await columnExists(column.name)) {
        console.log(`  ok    users.${column.name} already exists`);
        continue;
      }

      await sequelize.query(
        `ALTER TABLE users ADD COLUMN \`${column.name}\` ${column.definition}`,
      );
      console.log(`  added users.${column.name}`);
    }

    console.log("\nPassword reset columns are in place.");
  } catch (err) {
    console.error(err);
    exitCode = 1;
  } finally {
    await sequelize.close();
    process.exit(exitCode);
  }
};

run();
