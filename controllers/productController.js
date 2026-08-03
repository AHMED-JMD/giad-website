const xssFilter = require("xss-filters");
const Product = require("../models/Product");
const Category = require("../models/Category");

// @desc   Get all products (optionally filter by category or search by name)
// @route  GET /api/products
// @access Public
exports.getProducts = async (req, res) => {
  try {
    const filterParts = [];
    if (req.query.category) {
      filterParts.push({ categoryRef: req.query.category });
    }
    if (req.query.search) {
      filterParts.push({
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { nameEn: { $regex: req.query.search, $options: "i" } },
          { nameAr: { $regex: req.query.search, $options: "i" } },
        ],
      });
    }

    const filter = filterParts.length > 0 ? { $and: filterParts } : {};

    const products = await Product.find(filter)
      .populate(
        "categoryRef",
        "nameAr nameEn descriptionAr descriptionEn name description",
      )
      .sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server error" });
  }
};

// @desc   Get single product
// @route  GET /api/products/:id
// @access Public
exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate(
      "categoryRef",
      "nameAr nameEn descriptionAr descriptionEn name description",
    );
    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    console.log(err);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Product not found" });
    }
    res.status(500).json({ msg: "Server error" });
  }
};

// @desc   Create a product
// @route  POST /api/products
// @access Private/Admin
exports.createProduct = async (req, res) => {
  try {
    let { name, nameAr, nameEn, categoryId, price } = req.body;
    const uploadedImg = req.file
      ? `/uploads/products/${req.file.filename}`
      : null;

    const sanitize = (value) =>
      typeof value === "string" ? xssFilter.inHTMLData(value).trim() : "";

    nameAr = sanitize(nameAr);
    nameEn = sanitize(nameEn);
    categoryId = sanitize(categoryId);
    name = sanitize(name) || nameEn || nameAr;

    if (
      !name ||
      !nameAr ||
      !nameEn ||
      !categoryId ||
      !uploadedImg ||
      price === undefined
    ) {
      return res.status(400).json({ msg: "Please enter all fields" });
    }

    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(400).json({ msg: "Invalid category" });
    }

    const parsedPrice = Number(price);
    if (Number.isNaN(parsedPrice) || parsedPrice < 0) {
      return res.status(400).json({ msg: "Invalid price" });
    }

    const product = await Product.create({
      name,
      nameAr,
      nameEn,
      category: category.nameEn || category.nameAr || category.name || "",
      categoryRef: category._id,
      imgLink: uploadedImg,
      price: parsedPrice,
    });

    const createdProduct = await Product.findById(product._id).populate(
      "categoryRef",
      "nameAr nameEn descriptionAr descriptionEn name description",
    );
    res.status(201).json(createdProduct);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server error" });
  }
};

// @desc   Update a product
// @route  PUT /api/products/:id
// @access Private/Admin
exports.updateProduct = async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }

    let { name, nameAr, nameEn, categoryId, price } = req.body;
    const uploadedImg = req.file
      ? `/uploads/products/${req.file.filename}`
      : null;

    const sanitize = (value) =>
      typeof value === "string" ? xssFilter.inHTMLData(value).trim() : "";

    if (nameAr !== undefined) product.nameAr = sanitize(nameAr);
    if (nameEn !== undefined) product.nameEn = sanitize(nameEn);

    if (name !== undefined) product.name = sanitize(name);

    if (categoryId !== undefined) {
      const normalizedCategoryId = sanitize(categoryId);
      const category = await Category.findById(normalizedCategoryId);
      if (!category) {
        return res.status(400).json({ msg: "Invalid category" });
      }
      product.categoryRef = category._id;
      product.category = category.nameEn || category.nameAr || category.name || "";
    }

    product.name = product.name || product.nameEn || product.nameAr || "";

    if (!product.nameAr || !product.nameEn || !product.categoryRef) {
      return res
        .status(400)
        .json({
          msg: "Arabic and English product names and category are required",
        });
    }

    if (uploadedImg) {
      product.imgLink = uploadedImg;
    }
    if (price !== undefined) {
      const parsedPrice = Number(price);
      if (Number.isNaN(parsedPrice) || parsedPrice < 0) {
        return res.status(400).json({ msg: "Invalid price" });
      }
      product.price = parsedPrice;
    }

    await product.save();
    const populatedProduct = await Product.findById(product._id).populate(
      "categoryRef",
      "nameAr nameEn descriptionAr descriptionEn name description",
    );
    res.json(populatedProduct);
  } catch (err) {
    console.log(err);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Product not found" });
    }
    res.status(500).json({ msg: "Server error" });
  }
};

// @desc   Delete a product
// @route  DELETE /api/products/:id
// @access Private/Admin
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }

    await product.deleteOne();
    res.json({ msg: "Product removed" });
  } catch (err) {
    console.log(err);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Product not found" });
    }
    res.status(500).json({ msg: "Server error" });
  }
};
