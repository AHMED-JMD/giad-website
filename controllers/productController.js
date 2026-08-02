const xssFilter = require("xss-filters");
const Product = require("../models/Product");

// @desc   Get all products (optionally filter by category or search by name)
// @route  GET /api/products
// @access Public
exports.getProducts = async (req, res) => {
  try {
    const filterParts = [];
    if (req.query.category) {
      filterParts.push({
        $or: [
          { category: req.query.category },
          { categoryEn: req.query.category },
          { categoryAr: req.query.category },
        ],
      });
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

    const products = await Product.find(filter).sort({ createdAt: -1 });
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
    const product = await Product.findById(req.params.id);
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
    let {
      name,
      nameAr,
      nameEn,
      category,
      categoryAr,
      categoryEn,
      imgLink,
      price,
    } = req.body;
    const uploadedImg = req.file
      ? `/uploads/products/${req.file.filename}`
      : null;

    const sanitize = (value) =>
      typeof value === "string" ? xssFilter.inHTMLData(value).trim() : "";

    nameAr = sanitize(nameAr);
    nameEn = sanitize(nameEn);
    categoryAr = sanitize(categoryAr);
    categoryEn = sanitize(categoryEn);
    name = sanitize(name) || nameEn || nameAr;
    category = sanitize(category) || categoryEn || categoryAr;

    if (
      !name ||
      !nameAr ||
      !nameEn ||
      !category ||
      !categoryAr ||
      !categoryEn ||
      (!imgLink && !uploadedImg) ||
      price === undefined
    ) {
      return res.status(400).json({ msg: "Please enter all fields" });
    }

    const parsedPrice = Number(price);
    if (Number.isNaN(parsedPrice) || parsedPrice < 0) {
      return res.status(400).json({ msg: "Invalid price" });
    }

    imgLink = uploadedImg || sanitize(imgLink);

    const product = await Product.create({
      name,
      nameAr,
      nameEn,
      category,
      categoryAr,
      categoryEn,
      imgLink,
      price: parsedPrice,
    });
    res.status(201).json(product);
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

    let {
      name,
      nameAr,
      nameEn,
      category,
      categoryAr,
      categoryEn,
      imgLink,
      price,
    } = req.body;
    const uploadedImg = req.file
      ? `/uploads/products/${req.file.filename}`
      : null;

    const sanitize = (value) =>
      typeof value === "string" ? xssFilter.inHTMLData(value).trim() : "";

    if (nameAr !== undefined) product.nameAr = sanitize(nameAr);
    if (nameEn !== undefined) product.nameEn = sanitize(nameEn);
    if (categoryAr !== undefined) product.categoryAr = sanitize(categoryAr);
    if (categoryEn !== undefined) product.categoryEn = sanitize(categoryEn);

    if (name !== undefined) product.name = sanitize(name);
    if (category !== undefined) product.category = sanitize(category);

    product.name = product.name || product.nameEn || product.nameAr || "";
    product.category =
      product.category || product.categoryEn || product.categoryAr || "";

    if (
      !product.nameAr ||
      !product.nameEn ||
      !product.categoryAr ||
      !product.categoryEn
    ) {
      return res
        .status(400)
        .json({ msg: "Arabic and English name/category are required" });
    }

    if (uploadedImg) {
      product.imgLink = uploadedImg;
    } else if (imgLink !== undefined) {
      product.imgLink = sanitize(imgLink);
    }
    if (price !== undefined) {
      const parsedPrice = Number(price);
      if (Number.isNaN(parsedPrice) || parsedPrice < 0) {
        return res.status(400).json({ msg: "Invalid price" });
      }
      product.price = parsedPrice;
    }

    await product.save();
    res.json(product);
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
