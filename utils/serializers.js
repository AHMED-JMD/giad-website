const toPlain = (record) => {
  if (!record) {
    return null;
  }

  if (typeof record.get === "function") {
    return record.get({ plain: true });
  }

  return record;
};

const serializeUser = (userRecord) => {
  const user = toPlain(userRecord);

  if (!user) {
    return null;
  }

  return {
    id: String(user.id),
    _id: String(user.id),
    name: user.name,
    email: user.email,
    role: user.role,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
};

const serializeCategory = (categoryRecord) => {
  const category = toPlain(categoryRecord);

  if (!category) {
    return null;
  }

  return {
    id: String(category.id),
    _id: String(category.id),
    nameAr: category.nameAr || "",
    nameEn: category.nameEn || "",
    descriptionAr: category.descriptionAr || "",
    descriptionEn: category.descriptionEn || "",
    name: category.name || "",
    description: category.description || "",
    createdBy:
      category.createdBy === null || category.createdBy === undefined
        ? null
        : String(category.createdBy),
    relatedProductsCount:
      category.relatedProductsCount === undefined
        ? undefined
        : Number(category.relatedProductsCount),
    createdAt: category.createdAt,
    updatedAt: category.updatedAt,
  };
};

const serializeProduct = (productRecord) => {
  const product = toPlain(productRecord);

  if (!product) {
    return null;
  }

  const categoryDetails = product.categoryDetails || null;

  return {
    id: String(product.id),
    _id: String(product.id),
    nameAr: product.nameAr || "",
    nameEn: product.nameEn || "",
    name: product.name || "",
    category: product.category || "",
    categoryRef: categoryDetails
      ? serializeCategory(categoryDetails)
      : product.categoryRef
        ? String(product.categoryRef)
        : "",
    imgLink: product.imgLink,
    price: Number(product.price),
    createdAt: product.createdAt,
    updatedAt: product.updatedAt,
  };
};

module.exports = {
  toPlain,
  serializeUser,
  serializeCategory,
  serializeProduct,
};
