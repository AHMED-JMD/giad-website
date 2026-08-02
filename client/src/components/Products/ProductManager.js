import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Languages } from "../../context/languages";
import { LangContext } from "../../context/langContext";
import { AuthContext } from "../../context/authContext";
import "./product-manager.css";
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
    categoryAr: "الفئة (عربي)",
    categoryEn: "الفئة (English)",
    imgLink: "رابط الصورة",
    imageFile: "صورة المنتج",
    imageHint: "يمكنك رفع صورة مباشرة أو إدخال رابط صورة",
    price: "السعر",
    empty: "لا توجد منتجات حتى الآن",
    editTitle: "تعديل المنتج",
    addTitle: "إضافة منتج جديد",
    confirmDelete: "هل أنت متأكد من حذف هذا المنتج؟",
    loadError: "حدث خطأ أثناء تحميل المنتجات",
    allCategories: "كل الفئات",
    adminTools: "إدارة المنتجات",
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
    categoryAr: "Category (Arabic)",
    categoryEn: "Category (English)",
    imgLink: "Image Link",
    imageFile: "Product Image",
    imageHint: "Upload an image file or provide an image URL",
    price: "Price",
    empty: "No products yet",
    editTitle: "Edit Product",
    addTitle: "Add New Product",
    confirmDelete: "Are you sure you want to delete this product?",
    loadError: "Failed to load products",
    allCategories: "All Categories",
    adminTools: "Products Dashboard",
    adminHint: "Login as admin to show add, edit and delete actions",
  },
};

const emptyForm = {
  nameAr: "",
  nameEn: "",
  categoryAr: "",
  categoryEn: "",
  imgLink: "",
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

const pickLocalized = (product, base, language) => {
  const preferred = language === "Ar" ? `${base}Ar` : `${base}En`;
  const secondary = language === "Ar" ? `${base}En` : `${base}Ar`;
  return product[preferred] || product[secondary] || product[base] || "";
};

const ProductManager = () => {
  const { language } = useContext(LangContext);
  const { isAdmin } = useContext(AuthContext);
  const t = labels[language] || labels.En;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [category, setCategory] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [imageFile, setImageFile] = useState(null);
  const [formError, setFormError] = useState("");
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    setLoadError("");
    try {
      const res = await getProducts(category ? { category } : {});
      setProducts(res.data);
    } catch (err) {
      setLoadError(t.loadError);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  const categories = Array.from(
    new Set(products.map((p) => pickLocalized(p, "category", language))),
  ).filter(Boolean);

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
      categoryAr: product.categoryAr || "",
      categoryEn: product.categoryEn || product.category || "",
      imgLink: product.imgLink,
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
    setSaving(true);
    try {
      const payload = new FormData();
      payload.append("nameAr", form.nameAr);
      payload.append("nameEn", form.nameEn);
      payload.append("categoryAr", form.categoryAr);
      payload.append("categoryEn", form.categoryEn);
      payload.append("name", form.nameEn || form.nameAr);
      payload.append("category", form.categoryEn || form.categoryAr);
      payload.append("price", Number(form.price));
      if (form.imgLink) {
        payload.append("imgLink", form.imgLink);
      }
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

  const handleDelete = async (id) => {
    if (!window.confirm(t.confirmDelete)) return;
    setDeletingId(id);
    try {
      await deleteProduct(id);
      setProducts((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      setLoadError(err.response?.data?.msg || t.loadError);
    } finally {
      setDeletingId(null);
    }
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
        <div className="pm-toolbar-head">
          <h5 className="pm-toolbar-title mb-0">{t.adminTools}</h5>
          {/* {!isAdmin ? (
            <span className="pm-admin-hint">{t.adminHint}</span>
          ) : null} */}
        </div>
        <div className="pm-toolbar-actions">
          <select
            className="form-control pm-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">{t.allCategories}</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          {isAdmin ? (
            <button className="btn pm-add-btn" onClick={openAddModal}>
              <i className="bx bx-plus"></i> {t.addBtn}
            </button>
          ) : null}
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
      ) : products.length === 0 ? (
        <p className="text-center">{t.empty}</p>
      ) : (
        <div className="row mx-auto">
          {products.map((product) => {
            const displayName = pickLocalized(product, "name", language);
            const displayCategory = pickLocalized(
              product,
              "category",
              language,
            );

            return (
              <div
                className="col-lg-3 col-sm-6 col-xs-12 mb-3"
                key={product._id}
              >
                <div className="card products-card filter-card position-relative pm-card">
                  <img
                    src={product.imgLink}
                    alt={displayName}
                    className="card-img-top mx-auto"
                  />
                  <div className="card-body text-center">
                    <h4 className="card-title">{displayName}</h4>
                    <p className="mb-1">
                      <span className="badge pm-category-pill">
                        {displayCategory}
                      </span>
                    </p>
                    <p className="fw-bold pm-price">{product.price}</p>

                    {isAdmin ? (
                      <div className="d-flex justify-content-center gap-2 mt-2 pm-actions-row">
                        <button
                          className="btn btn-sm pm-action-btn pm-edit-btn"
                          onClick={() => openEditModal(product)}
                        >
                          <i className="bx bx-edit"></i> {t.editBtn}
                        </button>
                        <button
                          className="btn btn-sm pm-action-btn pm-delete-btn"
                          onClick={() => handleDelete(product._id)}
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
            );
          })}
        </div>
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
                <label className="pm-label">{t.categoryAr}</label>
                <input
                  type="text"
                  name="categoryAr"
                  className="form-control pm-input"
                  value={form.categoryAr}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="pm-label">{t.categoryEn}</label>
                <input
                  type="text"
                  name="categoryEn"
                  className="form-control pm-input"
                  value={form.categoryEn}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="pm-label">{t.imgLink}</label>
              <input
                type="text"
                name="imgLink"
                className="form-control pm-input"
                value={form.imgLink}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="pm-label">{t.imageFile}</label>
              <input
                type="file"
                accept="image/*"
                className="form-control pm-input"
                onChange={(e) => setImageFile(e.target.files?.[0] || null)}
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

            <div className="d-flex justify-content-end gap-2">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={closeModal}
                disabled={saving}
              >
                {t.cancel}
              </button>
              <button
                type="submit"
                className="btn pm-save-btn"
                disabled={saving}
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
    </div>
  );
};

export default ProductManager;
