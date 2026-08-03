const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    nameAr: {
      type: String,
      required: [true, "Please add an Arabic category name"],
      trim: true,
    },
    nameEn: {
      type: String,
      required: [true, "Please add an English category name"],
      trim: true,
    },
    descriptionAr: {
      type: String,
      required: [true, "Please add an Arabic category description"],
      trim: true,
    },
    descriptionEn: {
      type: String,
      required: [true, "Please add an English category description"],
      trim: true,
    },
    // Legacy fields retained temporarily for compatibility with old records/UI fallbacks.
    name: {
      type: String,
      trim: true,
      default: "",
    },
    description: {
      type: String,
      trim: true,
      default: "",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Category", CategorySchema);
