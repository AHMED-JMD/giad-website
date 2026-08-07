const User = require("./User");
const Category = require("./Category");
const Product = require("./Product");

User.hasMany(Category, {
  foreignKey: "createdBy",
  as: "createdCategories",
});

Category.belongsTo(User, {
  foreignKey: "createdBy",
  as: "creator",
});

Category.hasMany(Product, {
  foreignKey: "categoryRef",
  as: "products",
  onDelete: "CASCADE",
});

Product.belongsTo(Category, {
  foreignKey: "categoryRef",
  as: "categoryDetails",
});

module.exports = {
  User,
  Category,
  Product,
};
