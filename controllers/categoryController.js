const xssFilter = require("xss-filters");
const Category = require("../models/Category");
const Product = require("../models/Product");

// @desc   Get all categories
// @route  GET /api/categories
// @access Public
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find().sort({ createdAt: -1 });

    const categoriesWithCounts = await Promise.all(
      categories.map(async (category) => {
        const legacyCategoryNames = [
          category.nameEn,
          category.nameAr,
          category.name,
        ].filter(Boolean);

        const countFilter = {
          $or: [{ categoryRef: category._id }],
        };

        if (legacyCategoryNames.length > 0) {
          countFilter.$or.push({ category: { $in: legacyCategoryNames } });
        }

        const relatedProductsCount = await Product.countDocuments(countFilter);

        return {
          ...category.toObject(),
          relatedProductsCount,
        };
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

    const existing = await Category.findOne({
      $or: [
        { nameAr: { $regex: `^${nameAr}$`, $options: "i" } },
        { nameEn: { $regex: `^${nameEn}$`, $options: "i" } },
      ],
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
      createdBy: req.user?._id || null,
    });

    res.status(201).json(category);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server error" });
  }
};

// @desc   Delete category and related products
// @route  DELETE /api/categories/:id
// @access Private/Admin
exports.deleteCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ msg: "Category not found" });
    }

    const legacyCategoryNames = [
      category.nameEn,
      category.nameAr,
      category.name,
    ].filter(Boolean);
    const deleteFilter = {
      $or: [{ categoryRef: category._id }],
    };

    if (legacyCategoryNames.length > 0) {
      deleteFilter.$or.push({ category: { $in: legacyCategoryNames } });
    }

    const productDeleteResult = await Product.deleteMany(deleteFilter);
    await category.deleteOne();

    return res.json({
      msg: "Category removed and related products deleted",
      deletedProducts: productDeleteResult.deletedCount || 0,
    });
  } catch (err) {
    console.log(err);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Category not found" });
    }
    return res.status(500).json({ msg: "Server error" });
  }
};
