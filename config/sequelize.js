const { Sequelize } = require("sequelize");

const parsePort = (value, fallback) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

const createSequelizeInstance = () => {
  const mysqlUri = process.env.MYSQL_URI || process.env.DATABASE_URL;

  if (mysqlUri) {
    return new Sequelize(mysqlUri, {
      dialect: "mysql",
      logging: false,
    });
  }

  const database = process.env.MYSQL_DATABASE || process.env.MYSQL_DB_NAME;
  const username = process.env.MYSQL_USER || process.env.MYSQL_USERNAME;
  const password = process.env.MYSQL_PASSWORD || "";
  const host = process.env.MYSQL_HOST || "127.0.0.1";
  const port = parsePort(process.env.MYSQL_PORT, 3306);

  return new Sequelize(database, username, password, {
    host,
    port,
    dialect: "mysql",
    logging: false,
  });
};

const sequelize = createSequelizeInstance();

module.exports = sequelize;
