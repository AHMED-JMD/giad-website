const xssFilter = require("xss-filters");
const { Op } = require("sequelize");
const { Category, Product } = require("../models");
const { serializeCategory } = require("../utils/serializers");

const MAX_NAME_LENGTH = 255;

const parseId = (value) => {
  const parsed = Number(value);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : null;
};

// @desc   Get all categories
// @route  GET /api/categories
// @access Public
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll({
      order: [["createdAt", "DESC"]],
    });

    const categoriesWithCounts = await Promise.all(
      categories.map(async (category) => {
        const plainCategory = category.get({ plain: true });
        const legacyCategoryNames = [
          plainCategory.nameEn,
          plainCategory.nameAr,
          plainCategory.name,
        ].filter(Boolean);

        const countOr = [{ categoryRef: plainCategory.id }];

        if (legacyCategoryNames.length > 0) {
          countOr.push({ category: { [Op.in]: legacyCategoryNames } });
        }

        const relatedProductsCount = await Product.count({
          where: { [Op.or]: countOr },
        });

        return serializeCategory({
          ...plainCategory,
          relatedProductsCount,
        });
      }),
    );

    res.json(categoriesWithCounts);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server error" });
  }
};

// @desc   Create category
// @route  POST /api/categories
// @access Private/Admin
exports.createCategory = async (req, res) => {
  try {
    let { nameAr, nameEn, descriptionAr, descriptionEn } = req.body;

    nameAr =
      typeof nameAr === "string" ? xssFilter.inHTMLData(nameAr).trim() : "";
    nameEn =
      typeof nameEn === "string" ? xssFilter.inHTMLData(nameEn).trim() : "";
    descriptionAr =
      typeof descriptionAr === "string"
        ? xssFilter.inHTMLData(descriptionAr).trim()
        : "";
    descriptionEn =
      typeof descriptionEn === "string"
        ? xssFilter.inHTMLData(descriptionEn).trim()
        : "";

    if (!nameAr || !nameEn || !descriptionAr || !descriptionEn) {
      return res
        .status(400)
        .json({ msg: "Arabic/English name and description are required" });
    }

    // nameAr/nameEn are VARCHAR(255); reject overlong values here so MySQL
    // does not fail the insert with an opaque "Data too long" error.
    if (nameAr.length > MAX_NAME_LENGTH || nameEn.length > MAX_NAME_LENGTH) {
      return res.status(400).json({
        msg: `Category name must be ${MAX_NAME_LENGTH} characters or less`,
      });
    }

    const existing = await Category.findOne({
      where: {
        [Op.or]: [{ nameAr }, { nameEn }],
      },
    });
    if (existing) {
      return res.status(400).json({ msg: "Category already exists" });
    }

    const category = await Category.create({
      nameAr,
      nameEn,
      descriptionAr,
      descriptionEn,
      // Keep legacy values for old clients and product.category string fallback.
      name: nameEn,
      description: descriptionEn,
      createdBy: req.user?.id || null,
    });

    res.status(201).json(serializeCategory(category));
  } catch (err) {
    if (err?.name === "SequelizeValidationError") {
      return res
        .status(400)
        .json({ msg: err.errors?.[0]?.message || "Invalid category data" });
    }
    if (err?.name === "SequelizeUniqueConstraintError") {
      return res.status(400).json({ msg: "Category already exists" });
    }
    console.log(err);
    res.status(500).json({ msg: "Server error" });
  }
};

// @desc   Delete category and related products
// @route  DELETE /api/categories/:id
// @access Private/Admin
exports.deleteCategory = async (req, res) => {
  try {
    const categoryId = parseId(req.params.id);
    if (!categoryId) {
      return res.status(404).json({ msg: "Category not found" });
    }

    const category = await Category.findByPk(categoryId);
    if (!category) {
      return res.status(404).json({ msg: "Category not found" });
    }

    const plainCategory = category.get({ plain: true });

    const legacyCategoryNames = [
      plainCategory.nameEn,
      plainCategory.nameAr,
      plainCategory.name,
    ].filter(Boolean);
    const deleteOr = [{ categoryRef: plainCategory.id }];

    if (legacyCategoryNames.length > 0) {
      deleteOr.push({ category: { [Op.in]: legacyCategoryNames } });
    }

    const deletedProducts = await Product.destroy({
      where: { [Op.or]: deleteOr },
    });
    await category.destroy();

    return res.json({
      msg: "Category removed and related products deleted",
      deletedProducts,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Server error" });
  }
};
