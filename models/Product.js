const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    nameAr: {
      type: String,
      trim: true,
      default: "",
    },
    nameEn: {
      type: String,
      trim: true,
      default: "",
    },
    name: {
      type: String,
      required: [true, "Please add a product name"],
      trim: true,
    },
    category: {
      type: String,
      trim: true,
      default: "",
    },
    categoryRef: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "Please add a category"],
    },
    imgLink: {
      type: String,
      required: [true, "Please add an image link"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Please add a price"],
      min: [0, "Price cannot be negative"],
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Product", ProductSchema);
