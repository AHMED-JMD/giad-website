const { Sequelize } = require("sequelize");

// Arabic content needs utf8mb4 end to end. Without this Sequelize lets new
// tables inherit the MySQL server default, which on some shared hosts is
// latin1 and rejects Arabic with "Incorrect string value".
const CHARSET = "utf8mb4";
const COLLATE = "utf8mb4_general_ci";

const commonOptions = {
  dialect: "mysql",
  logging: false,
  dialectOptions: { charset: CHARSET },
  define: { charset: CHARSET, collate: COLLATE },
};

const parsePort = (value, fallback) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

const createSequelizeInstance = () => {
  const mysqlUri = process.env.MYSQL_URI || process.env.DATABASE_URL;

  if (mysqlUri) {
    return new Sequelize(mysqlUri, commonOptions);
  }

  const database = process.env.MYSQL_DATABASE || process.env.MYSQL_DB_NAME;
  const username = process.env.MYSQL_USER || process.env.MYSQL_USERNAME;
  const password = process.env.MYSQL_PASSWORD || "";
  const host = process.env.MYSQL_HOST || "127.0.0.1";
  const port = parsePort(process.env.MYSQL_PORT, 3306);

  return new Sequelize(database, username, password, {
    host,
    port,
    ...commonOptions,
  });
};

const sequelize = createSequelizeInstance();

module.exports = sequelize;
