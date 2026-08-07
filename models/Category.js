const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Category = sequelize.define(
  "Category",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    nameAr: {
      type: DataTypes.STRING,
      allowNull: false,
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
      set(value) {
        this.setDataValue(
          "nameEn",
          typeof value === "string" ? value.trim() : value,
        );
      },
    },
    descriptionAr: {
      type: DataTypes.TEXT,
      allowNull: false,
      set(value) {
        this.setDataValue(
          "descriptionAr",
          typeof value === "string" ? value.trim() : value,
        );
      },
    },
    descriptionEn: {
      type: DataTypes.TEXT,
      allowNull: false,
      set(value) {
        this.setDataValue(
          "descriptionEn",
          typeof value === "string" ? value.trim() : value,
        );
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
      set(value) {
        this.setDataValue(
          "name",
          typeof value === "string" ? value.trim() : value,
        );
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: "",
      set(value) {
        this.setDataValue(
          "description",
          typeof value === "string" ? value.trim() : value,
        );
      },
    },
    createdBy: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
  },
  {
    tableName: "categories",
    timestamps: true,
  },
);

module.exports = Category;
