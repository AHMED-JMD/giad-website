const sequelize = require("./sequelize");

const shouldSyncModels = () => {
  const rawValue = (process.env.DB_SYNC || "true").toLowerCase();
  return rawValue !== "false" && rawValue !== "0";
};

const connectDB = async () => {
  try {
    // Load all models and relationships before sync/auth calls.
    require("../models");

    await sequelize.authenticate();

    if (shouldSyncModels()) {
      await sequelize.sync();
    }

    console.log("MySQL connected");
    return true;
  } catch (err) {
    console.error(`Error connecting to MySQL: ${err.message}`);
    return false;
  }
};

module.exports = connectDB;
