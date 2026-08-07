const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Product = sequelize.define(
  "Product",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    nameAr: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
      set(value) {
        this.setDataValue(
          "nameAr",
          typeof value === "string" ? value.trim() : value,
        );
      },
    },
    nameEn: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
      set(value) {
        this.setDataValue(
          "nameEn",
          typeof value === "string" ? value.trim() : value,
        );
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value) {
        this.setDataValue(
          "name",
          typeof value === "string" ? value.trim() : value,
        );
      },
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
      set(value) {
        this.setDataValue(
          "category",
          typeof value === "string" ? value.trim() : value,
        );
      },
    },
    categoryRef: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    imgLink: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value) {
        this.setDataValue(
          "imgLink",
          typeof value === "string" ? value.trim() : value,
        );
      },
    },
    price: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: false,
      validate: {
        min: 0,
      },
    },
  },
  {
    tableName: "products",
    timestamps: true,
  },
);

module.exports = Product;
