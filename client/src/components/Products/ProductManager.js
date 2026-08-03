import React, { useContext, useEffect, useMemo, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";
import { Languages } from "../../context/languages";
import { LangContext } from "../../context/langContext";
import { AuthContext } from "../../context/authContext";
import "./product-manager.css";
import { getCategories } from "../../services/categoryService";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../../services/productService";

const labels = {
  Ar: {
    title: "منتجاتنا",
    subtitle: "تصفح منتجاتنا المتوفرة",
    addBtn: "إضافة منتج",
    editBtn: "تعديل",
    deleteBtn: "حذف",
    cancel: "إلغاء",
    save: "حفظ",
    saving: "جار الحفظ...",
    deleting: "جار الحذف...",
    nameAr: "اسم المنتج (عربي)",
    nameEn: "اسم المنتج (English)",
    category: "الفئة",
    selectCategory: "اختر الفئة",
    noCategoriesYet: "لا توجد فئات حالياً. أضف فئة من الملف الإداري أولاً.",
    goToAdmin: "فتح الملف الإداري",
    noProductsInCategory: "لا توجد منتجات ضمن هذه الفئة حتى الآن",
    uncategorized: "منتجات بدون فئة",
    imageFile: "صورة المنتج",
    imageHint: "اختر صورة للمنتج ليتم حفظها تلقائياً في الخادم",
    price: "السعر",
    empty: "لا توجد منتجات حتى الآن",
    editTitle: "تعديل المنتج",
    addTitle: "إضافة منتج جديد",
    deleteTitle: "تأكيد حذف المنتج",
    deleteMessage: "سيتم حذف المنتج التالي نهائياً:",
    deleteAction: "حذف المنتج",
    confirmDelete: "هل أنت متأكد من حذف هذا المنتج؟",
    loadError: "حدث خطأ أثناء تحميل المنتجات",
    allCategories: "كل الفئات",
    adminTools: "اختر فئة معينة",
    adminHint: "سجل الدخول كمدير لإظهار خيارات الإضافة والتعديل والحذف",
  },
  En: {
    title: "Our Products",
    subtitle: "Browse our available products",
    addBtn: "Add Product",
    editBtn: "Edit",
    deleteBtn: "Delete",
    cancel: "Cancel",
    save: "Save",
    saving: "Saving...",
    deleting: "Deleting...",
    nameAr: "Product Name (Arabic)",
    nameEn: "Product Name (English)",
    category: "Category",
    selectCategory: "Select category",
    noCategoriesYet: "No categories found. Add one first from Admin Profile.",
    goToAdmin: "Open Admin Profile",
    noProductsInCategory: "No products in this category yet",
    uncategorized: "Uncategorized Products",
    imageFile: "Product Image",
    imageHint: "Choose an image file and it will be stored on the server",
    price: "Price",
    empty: "No products yet",
    editTitle: "Edit Product",
    addTitle: "Add New Product",
    deleteTitle: "Confirm Product Deletion",
    deleteMessage: "This product will be deleted permanently:",
    deleteAction: "Delete Product",
    confirmDelete: "Are you sure you want to delete this product?",
    loadError: "Failed to load products",
    allCategories: "All Categories",
    adminTools: "Choose a Category",
    adminHint: "Login as admin to show add, edit and delete actions",
  },
};

const emptyForm = {
  nameAr: "",
  nameEn: "",
  categoryId: "",
  price: "",
};

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 680,
  width: "90%",
  bgcolor: "#f9fcff",
  boxShadow: 24,
  borderRadius: "14px",
  p: 4,
};

const deleteModalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 460,
  width: "90%",
  bgcolor: "#f9fcff",
  boxShadow: 24,
  borderRadius: "14px",
  p: 3,
};

const pickLocalized = (product, base, language) => {
  const preferred = language === "Ar" ? `${base}Ar` : `${base}En`;
  const secondary = language === "Ar" ? `${base}En` : `${base}Ar`;
  return product[preferred] || product[secondary] || product[base] || "";
};

const ProductManager = () => {
  const { language } = useContext(LangContext);
  const { isAdmin } = useContext(AuthContext);
  const t = labels[language] || labels.En;
  const UNCATEGORIZED_FILTER = "__uncategorized__";

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [imageFile, setImageFile] = useState(null);
  const [formError, setFormError] = useState("");
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setLoadError("");
    try {
      const [productsRes, categoriesRes] = await Promise.all([
        getProducts(),
        getCategories(),
      ]);
      setProducts(productsRes.data || []);
      setCategories(categoriesRes.data || []);
    } catch (err) {
      setLoadError(t.loadError);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCategoryId = (product) => {
    if (!product?.categoryRef) return "";
    if (typeof product.categoryRef === "string") return product.categoryRef;
    if (typeof product.categoryRef === "object") {
      return product.categoryRef._id || "";
    }
    return "";
  };

  const getCategoryName = (product) => {
    if (product?.categoryRef && typeof product.categoryRef === "object") {
      if (language === "Ar") {
        return product.categoryRef.nameAr || product.categoryRef.name || "";
      }
      return product.categoryRef.nameEn || product.categoryRef.name || "";
    }
    if (typeof product?.category === "string") {
      return product.category;
    }
    return "";
  };

  const getCategoryLabel = (categoryItem) => {
    if (language === "Ar") {
      return categoryItem?.nameAr || categoryItem?.name || "";
    }
    return categoryItem?.nameEn || categoryItem?.name || "";
  };

  const getCategoryDescription = (categoryItem) => {
    if (language === "Ar") {
      return categoryItem?.descriptionAr || categoryItem?.description || "";
    }
    return categoryItem?.descriptionEn || categoryItem?.description || "";
  };

  const categoryProductMap = useMemo(() => {
    const map = {};
    categories.forEach((category) => {
      map[category._id] = [];
    });

    products.forEach((product) => {
      const categoryId = getCategoryId(product);
      if (categoryId && map[categoryId]) {
        map[categoryId].push(product);
      }
    });

    return map;
  }, [categories, products]);

  const uncategorizedProducts = useMemo(() => {
    const validCategoryIds = new Set(
      categories.map((category) => category._id),
    );
    return products.filter((product) => {
      const categoryId = getCategoryId(product);
      return !categoryId || !validCategoryIds.has(categoryId);
    });
  }, [categories, products]);

  useEffect(() => {
    if (
      selectedCategoryId &&
      selectedCategoryId !== UNCATEGORIZED_FILTER &&
      !categories.some(
        (categoryItem) => categoryItem._id === selectedCategoryId,
      )
    ) {
      setSelectedCategoryId("");
    }
  }, [categories, selectedCategoryId]);

  const visibleCategories = useMemo(() => {
    if (selectedCategoryId === UNCATEGORIZED_FILTER) {
      return [];
    }
    if (!selectedCategoryId) {
      return categories;
    }
    return categories.filter(
      (categoryItem) => categoryItem._id === selectedCategoryId,
    );
  }, [categories, selectedCategoryId]);

  const visibleUncategorizedProducts = useMemo(() => {
    if (selectedCategoryId === UNCATEGORIZED_FILTER) {
      return uncategorizedProducts;
    }
    if (!selectedCategoryId) {
      return uncategorizedProducts;
    }
    return [];
  }, [selectedCategoryId, uncategorizedProducts]);

  const openAddModal = () => {
    setEditingId(null);
    setForm(emptyForm);
    setImageFile(null);
    setFormError("");
    setShowModal(true);
  };

  const openEditModal = (product) => {
    setEditingId(product._id);
    setForm({
      nameAr: product.nameAr || "",
      nameEn: product.nameEn || product.name || "",
      categoryId: getCategoryId(product),
      price: product.price,
    });
    setImageFile(null);
    setFormError("");
    setShowModal(true);
  };

  const closeModal = () => {
    if (saving) return;
    setShowModal(false);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    if (!form.categoryId) {
      setFormError(t.selectCategory);
      return;
    }

    setSaving(true);
    try {
      const payload = new FormData();
      payload.append("nameAr", form.nameAr);
      payload.append("nameEn", form.nameEn);
      payload.append("name", form.nameEn || form.nameAr);
      payload.append("categoryId", form.categoryId);
      payload.append("price", Number(form.price));
      if (imageFile) {
        payload.append("image", imageFile);
      }

      if (editingId) {
        const res = await updateProduct(editingId, payload);
        setProducts((prev) =>
          prev.map((p) => (p._id === editingId ? res.data : p)),
        );
      } else {
        const res = await createProduct(payload);
        setProducts((prev) => [res.data, ...prev]);
      }
      setShowModal(false);
    } catch (err) {
      setFormError(err.response?.data?.msg || t.loadError);
    } finally {
      setSaving(false);
    }
  };

  const openDeleteModal = (product) => {
    setDeleteTarget({
      id: product._id,
      name: pickLocalized(product, "name", language),
    });
  };

  const closeDeleteModal = () => {
    if (deletingId) return;
    setDeleteTarget(null);
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setDeletingId(deleteTarget.id);
    try {
      await deleteProduct(deleteTarget.id);
      setProducts((prev) => prev.filter((p) => p._id !== deleteTarget.id));
      setDeleteTarget(null);
    } catch (err) {
      setLoadError(err.response?.data?.msg || t.loadError);
    } finally {
      setDeletingId(null);
    }
  };

  const renderProductCard = (product) => {
    const displayName = pickLocalized(product, "name", language);
    const displayCategory = getCategoryName(product);

    return (
      <div
        className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-4"
        key={product._id}
      >
        <div className="card products-card filter-card position-relative pm-card">
          <div className="pm-card-image-wrap">
            <img
              src={product.imgLink}
              alt={displayName}
              className="card-img-top mx-auto"
            />
            {displayCategory ? (
              <span className="badge pm-category-pill">{displayCategory}</span>
            ) : null}

            <div className="card-body">
              <h4 className="card-title">{displayName}</h4>
              <p className="fw-bold pm-price">
                ${Number(product.price || 0).toFixed(2)}
              </p>

              {isAdmin ? (
                <div className="d-flex gap-2 mt-2 pm-actions-row">
                  <button
                    className="btn btn-sm pm-action-btn pm-edit-btn"
                    onClick={() => openEditModal(product)}
                  >
                    <i className="bx bx-edit"></i> {t.editBtn}
                  </button>
                  <button
                    className="btn btn-sm pm-action-btn pm-delete-btn"
                    onClick={() => openDeleteModal(product)}
                    disabled={deletingId === product._id}
                  >
                    {deletingId === product._id ? (
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    ) : (
                      <>
                        <i className="bx bx-trash"></i> {t.deleteBtn}
                      </>
                    )}
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className="product-manager container-fluid py-5"
      dir={`${Languages[language].dir}`}
    >
      <div className="text-center mb-3 pm-wheel-wrap">
        <img src="assets/images/wheel.png" width="70px" alt="" />
      </div>
      <h2 className="main-header text-center mb-2">
        <span>{t.title}</span>
      </h2>
      <p className="main-text text-center mb-4 pm-subtitle">{t.subtitle}</p>

      <div className="pm-toolbar mb-4">
        <div className="pm-toolbar-main-row">
          <div className="pm-toolbar-head">
            <h5 className="pm-toolbar-title mb-0">{t.title}</h5>
          </div>

          <div className="pm-toolbar-actions">
            <select
              className="form-control pm-select"
              value={selectedCategoryId}
              onChange={(e) => setSelectedCategoryId(e.target.value)}
            >
              <option value="">{t.allCategories}</option>
              {categories.map((categoryItem) => (
                <option key={categoryItem._id} value={categoryItem._id}>
                  {getCategoryLabel(categoryItem)}
                </option>
              ))}
              <option value={UNCATEGORIZED_FILTER}>{t.uncategorized}</option>
            </select>

            {isAdmin ? (
              <button className="btn pm-add-btn" onClick={openAddModal}>
                <i className="bx bx-plus"></i> {t.addBtn}
              </button>
            ) : null}
          </div>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-5">
          <span
            className="spinner-border"
            role="status"
            aria-hidden="true"
          ></span>
        </div>
      ) : loadError ? (
        <div className="alert alert-danger text-center">{loadError}</div>
      ) : categories.length === 0 && products.length === 0 ? (
        <p className="text-center">{t.empty}</p>
      ) : (
        <>
          {categories.length === 0 ? (
            <div className="alert alert-info text-center pm-no-categories">
              {t.noCategoriesYet}
              {isAdmin ? (
                <Link
                  to="/admin/profile"
                  className="btn btn-sm pm-admin-link-btn ms-2"
                >
                  {t.goToAdmin}
                </Link>
              ) : null}
            </div>
          ) : (
            visibleCategories.map((categoryItem) => (
              <section className="pm-category-section" key={categoryItem._id}>
                <div className="pm-category-heading">
                  <h4 className="pm-category-title text-center">
                    {getCategoryLabel(categoryItem)}
                  </h4>
                  <p className="pm-category-description mb-0 text-center">
                    {getCategoryDescription(categoryItem)}
                  </p>
                </div>

                {categoryProductMap[categoryItem._id]?.length ? (
                  <div className="row mx-auto">
                    {categoryProductMap[categoryItem._id].map((product) =>
                      renderProductCard(product),
                    )}
                  </div>
                ) : (
                  <p className="pm-category-empty text-center">
                    {t.noProductsInCategory}
                  </p>
                )}
              </section>
            ))
          )}

          {visibleUncategorizedProducts.length ? (
            <section className="pm-category-section">
              <div className="pm-category-heading">
                <h4 className="pm-category-title">{t.uncategorized}</h4>
              </div>
              <div className="row mx-auto">
                {visibleUncategorizedProducts.map((product) =>
                  renderProductCard(product),
                )}
              </div>
            </section>
          ) : null}
        </>
      )}

      <Modal open={showModal} onClose={closeModal}>
        <Box sx={modalStyle} className="pm-modal-box">
          <h4 className="mb-3 pm-modal-title">
            {editingId ? t.editTitle : t.addTitle}
          </h4>
          <form onSubmit={handleSubmit}>
            <div className="row pm-form-grid">
              <div className="col-md-6 mb-3">
                <label className="pm-label">{t.nameAr}</label>
                <input
                  type="text"
                  name="nameAr"
                  className="form-control pm-input"
                  value={form.nameAr}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="pm-label">{t.nameEn}</label>
                <input
                  type="text"
                  name="nameEn"
                  className="form-control pm-input"
                  value={form.nameEn}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="pm-label">{t.category}</label>
                <select
                  name="categoryId"
                  className="form-control pm-input"
                  value={form.categoryId}
                  onChange={handleChange}
                  required
                >
                  <option value="">{t.selectCategory}</option>
                  {categories.map((categoryItem) => (
                    <option key={categoryItem._id} value={categoryItem._id}>
                      {getCategoryLabel(categoryItem)}
                    </option>
                  ))}
                </select>
                {categories.length === 0 ? (
                  <small className="pm-field-hint">{t.noCategoriesYet}</small>
                ) : null}
              </div>
            </div>
            <div className="mb-3">
              <label className="pm-label">{t.imageFile}</label>
              <input
                type="file"
                accept="image/*"
                className="form-control pm-input"
                onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                required={!editingId}
              />
              <small className="pm-field-hint">{t.imageHint}</small>
            </div>
            <div className="mb-3">
              <label className="pm-label">{t.price}</label>
              <input
                type="number"
                name="price"
                step="0.01"
                min="0"
                className="form-control pm-input"
                value={form.price}
                onChange={handleChange}
                required
              />
            </div>

            {formError ? (
              <div className="alert alert-danger py-2">{formError}</div>
            ) : null}

            <div className="d-flex justify-content-end gap-2 pm-modal-actions">
              <button
                type="button"
                className="btn btn-outline-secondary pm-modal-btn"
                onClick={closeModal}
                disabled={saving}
              >
                {t.cancel}
              </button>
              <button
                type="submit"
                className="btn pm-save-btn pm-modal-btn"
                disabled={saving || categories.length === 0}
              >
                {saving ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm mx-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    {t.saving}
                  </>
                ) : (
                  t.save
                )}
              </button>
            </div>
          </form>
        </Box>
      </Modal>

      <Modal open={Boolean(deleteTarget)} onClose={closeDeleteModal}>
        <Box sx={deleteModalStyle} className="pm-modal-box pm-delete-modal-box">
          <h4 className="mb-2 pm-modal-title">{t.deleteTitle}</h4>
          <p className="pm-delete-message mb-2">{t.deleteMessage}</p>
          <p className="pm-delete-product-name mb-3">
            {deleteTarget?.name || "-"}
          </p>

          <div className="d-flex justify-content-end gap-2 pm-modal-actions">
            <button
              type="button"
              className="btn btn-outline-secondary pm-modal-btn"
              onClick={closeDeleteModal}
              disabled={Boolean(deletingId)}
            >
              {t.cancel}
            </button>
            <button
              type="button"
              className="btn pm-delete-confirm-btn pm-modal-btn"
              onClick={handleDelete}
              disabled={Boolean(deletingId)}
            >
              {deletingId ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm mx-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  {t.deleting}
                </>
              ) : (
                t.deleteAction
              )}
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ProductManager;
