const { DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");
const sequelize = require("../config/sequelize");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
      set(value) {
        this.setDataValue(
          "email",
          typeof value === "string" ? value.toLowerCase().trim() : value,
        );
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6, 255],
      },
    },
    role: {
      type: DataTypes.ENUM("user", "admin"),
      allowNull: false,
      defaultValue: "user",
    },
    // SHA-256 hash of the password reset token. The raw token only ever lives
    // in the emailed link, so a leaked database row cannot be used to reset.
    resetPasswordToken: {
      type: DataTypes.STRING(64),
      allowNull: true,
    },
    resetPasswordExpire: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "users",
    timestamps: true,
    defaultScope: {
      attributes: {
        exclude: ["password", "resetPasswordToken", "resetPasswordExpire"],
      },
    },
    scopes: {
      withPassword: {
        attributes: { include: ["password"] },
      },
      withResetToken: {
        attributes: {
          include: ["password", "resetPasswordToken", "resetPasswordExpire"],
        },
      },
    },
  },
);

User.beforeSave(async (user) => {
  if (!user.changed("password")) {
    return;
  }

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
});

User.prototype.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = User;
