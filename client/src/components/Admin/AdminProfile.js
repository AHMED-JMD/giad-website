import React, { useContext, useEffect, useMemo, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import { Languages } from "../../context/languages";
import { LangContext } from "../../context/langContext";
import { AuthContext } from "../../context/authContext";
import {
  createCategory,
  deleteCategory as deleteCategoryApi,
  getCategories,
} from "../../services/categoryService";
import "./admin-profile.css";

const labels = {
  Ar: {
    title: "الملف الإداري",
    subtitle: "إدارة الفئات وتحديث كلمة المرور من لوحة واحدة",
    categoriesTitle: "إضافة فئة جديدة",
    categoriesSubtitle: "كل فئة تحتوي على اسم ووصف واضح للمنتجات.",
    categoryNameAr: "اسم الفئة (عربي)",
    categoryNameEn: "اسم الفئة (English)",
    categoryDescriptionAr: "وصف الفئة (عربي)",
    categoryDescriptionEn: "وصف الفئة (English)",
    addCategory: "إضافة الفئة",
    addingCategory: "جار الإضافة...",
    categoriesListTitle: "الفئات الحالية",
    noCategories: "لا توجد فئات بعد",
    passwordTitle: "تغيير كلمة المرور",
    currentPassword: "كلمة المرور الحالية",
    newPassword: "كلمة المرور الجديدة",
    confirmPassword: "تأكيد كلمة المرور الجديدة",
    changePassword: "تحديث كلمة المرور",
    changingPassword: "جار التحديث...",
    passwordsMismatch: "كلمتا المرور غير متطابقتين",
    categoryAdded: "تمت إضافة الفئة بنجاح",
    categoryDeleted: "تم حذف الفئة بنجاح",
    relatedProductsDeleted: "المنتجات المرتبطة المحذوفة",
    relatedProductsCount: "عدد المنتجات المرتبطة",
    deleteCategoryBtn: "حذف الفئة",
    deleteModalTitle: "تأكيد حذف الفئة",
    deleteModalMessage: "سيتم حذف الفئة التالية نهائياً:",
    deleteModalWarning: "تحذير: جميع المنتجات المرتبطة بهذه الفئة سيتم حذفها.",
    deleteConfirmBtn: "نعم، حذف الفئة",
    deletingCategory: "جار حذف الفئة...",
    cancel: "إلغاء",
    passwordUpdated: "تم تحديث كلمة المرور بنجاح",
    unauthorized: "هذه الصفحة متاحة للمدير فقط",
    loginFirst: "يرجى تسجيل الدخول كمدير",
  },
  En: {
    title: "Admin Profile",
    subtitle: "Manage categories and update your password in one dashboard",
    categoriesTitle: "Add New Category",
    categoriesSubtitle: "Every category includes a name and clear description.",
    categoryNameAr: "Category Name (Arabic)",
    categoryNameEn: "Category Name (English)",
    categoryDescriptionAr: "Category Description (Arabic)",
    categoryDescriptionEn: "Category Description (English)",
    addCategory: "Add Category",
    addingCategory: "Adding...",
    categoriesListTitle: "Existing Categories",
    noCategories: "No categories yet",
    passwordTitle: "Change Password",
    currentPassword: "Current Password",
    newPassword: "New Password",
    confirmPassword: "Confirm New Password",
    changePassword: "Update Password",
    changingPassword: "Updating...",
    passwordsMismatch: "Passwords do not match",
    categoryAdded: "Category added successfully",
    categoryDeleted: "Category deleted successfully",
    relatedProductsDeleted: "Related products deleted",
    relatedProductsCount: "Related products count",
    deleteCategoryBtn: "Delete Category",
    deleteModalTitle: "Confirm Category Deletion",
    deleteModalMessage: "This category will be deleted permanently:",
    deleteModalWarning:
      "Warning: all related products in this category will be deleted.",
    deleteConfirmBtn: "Yes, Delete Category",
    deletingCategory: "Deleting category...",
    cancel: "Cancel",
    passwordUpdated: "Password updated successfully",
    unauthorized: "This page is for admin users only",
    loginFirst: "Please login as admin",
  },
};

const deleteModalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 520,
  width: "90%",
  bgcolor: "#f9fcff",
  boxShadow: 24,
  borderRadius: "14px",
  p: 3,
};

const AdminProfile = () => {
  const { language } = useContext(LangContext);
  const { isAuthenticated, isAdmin, loading, changePassword } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const t = labels[language] || labels.En;

  const [categories, setCategories] = useState([]);
  const [categoryForm, setCategoryForm] = useState({
    nameAr: "",
    nameEn: "",
    descriptionAr: "",
    descriptionEn: "",
  });
  const [categorySaving, setCategorySaving] = useState(false);
  const [categoryError, setCategoryError] = useState("");
  const [categorySuccess, setCategorySuccess] = useState("");
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [deletingCategoryId, setDeletingCategoryId] = useState(null);

  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [passwordSaving, setPasswordSaving] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [passwordSuccess, setPasswordSuccess] = useState("");

  useEffect(() => {
    if (loading) return;
    if (!isAuthenticated) {
      navigate("/login", { replace: true, state: { from: "/admin/profile" } });
      return;
    }
    if (!isAdmin) {
      navigate("/products", { replace: true });
    }
  }, [isAdmin, isAuthenticated, loading, navigate]);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const res = await getCategories();
        setCategories(res.data || []);
      } catch (err) {
        setCategoryError(
          err.response?.data?.msg || "Failed to load categories",
        );
      }
    };

    if (isAdmin) {
      loadCategories();
    }
  }, [isAdmin]);

  const canRender = useMemo(
    () => isAuthenticated && isAdmin,
    [isAuthenticated, isAdmin],
  );

  const handleCategorySubmit = async (e) => {
    e.preventDefault();
    setCategoryError("");
    setCategorySuccess("");
    setCategorySaving(true);

    try {
      const payload = {
        nameAr: categoryForm.nameAr,
        nameEn: categoryForm.nameEn,
        descriptionAr: categoryForm.descriptionAr,
        descriptionEn: categoryForm.descriptionEn,
      };
      const res = await createCategory(payload);
      setCategories((prev) => [res.data, ...prev]);
      setCategoryForm({
        nameAr: "",
        nameEn: "",
        descriptionAr: "",
        descriptionEn: "",
      });
      setCategorySuccess(t.categoryAdded);
    } catch (err) {
      setCategoryError(err.response?.data?.msg || "Failed to add category");
    } finally {
      setCategorySaving(false);
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setPasswordError("");
    setPasswordSuccess("");

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setPasswordError(t.passwordsMismatch);
      return;
    }

    setPasswordSaving(true);
    try {
      const res = await changePassword(
        passwordForm.currentPassword,
        passwordForm.newPassword,
      );
      setPasswordSuccess(res?.msg || t.passwordUpdated);
      setPasswordForm({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (err) {
      setPasswordError(err.response?.data?.msg || "Failed to update password");
    } finally {
      setPasswordSaving(false);
    }
  };

  const getCategoryName = (category) => {
    if (!category) return "-";
    if (language === "Ar") {
      return category.nameAr || category.name || "-";
    }
    return category.nameEn || category.name || "-";
  };

  const openDeleteModal = (category) => {
    setCategoryError("");
    setCategorySuccess("");
    setDeleteTarget({
      id: category._id,
      name: getCategoryName(category),
    });
  };

  const closeDeleteModal = () => {
    if (deletingCategoryId) return;
    setDeleteTarget(null);
  };

  const handleDeleteCategory = async () => {
    if (!deleteTarget) return;

    setCategoryError("");
    setCategorySuccess("");
    setDeletingCategoryId(deleteTarget.id);
    try {
      const res = await deleteCategoryApi(deleteTarget.id);
      const deletedProducts = Number(res?.data?.deletedProducts || 0);
      setCategories((prev) =>
        prev.filter((item) => item._id !== deleteTarget.id),
      );
      setDeleteTarget(null);
      setCategorySuccess(
        `${t.categoryDeleted} (${t.relatedProductsDeleted}: ${deletedProducts})`,
      );
    } catch (err) {
      setCategoryError(err.response?.data?.msg || "Failed to delete category");
    } finally {
      setDeletingCategoryId(null);
    }
  };

  if (!canRender) {
    return (
      <div className="admin-profile-page" dir={`${Languages[language].dir}`}>
        <div className="container py-5">
          <div className="alert alert-warning text-center">
            {isAuthenticated ? t.unauthorized : t.loginFirst}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-profile-page" dir={`${Languages[language].dir}`}>
      <div className="container py-5">
        <div className="ap-hero mb-4">
          <h2 className="ap-title mb-2">{t.title}</h2>
          <p className="ap-subtitle mb-0">{t.subtitle}</p>
        </div>

        <div className="row g-4">
          <div className="col-lg-7">
            <div className="ap-panel h-100">
              <h4 className="ap-panel-title">{t.categoriesTitle}</h4>
              <p className="ap-panel-subtitle">{t.categoriesSubtitle}</p>

              <form onSubmit={handleCategorySubmit}>
                <div className="mb-3">
                  <label className="ap-label">{t.categoryNameAr}</label>
                  <input
                    type="text"
                    className="form-control ap-input"
                    value={categoryForm.nameAr}
                    onChange={(e) =>
                      setCategoryForm((prev) => ({
                        ...prev,
                        nameAr: e.target.value,
                      }))
                    }
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="ap-label">{t.categoryNameEn}</label>
                  <input
                    type="text"
                    className="form-control ap-input"
                    value={categoryForm.nameEn}
                    onChange={(e) =>
                      setCategoryForm((prev) => ({
                        ...prev,
                        nameEn: e.target.value,
                      }))
                    }
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="ap-label">{t.categoryDescriptionAr}</label>
                  <textarea
                    className="form-control ap-input ap-textarea"
                    value={categoryForm.descriptionAr}
                    onChange={(e) =>
                      setCategoryForm((prev) => ({
                        ...prev,
                        descriptionAr: e.target.value,
                      }))
                    }
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="ap-label">{t.categoryDescriptionEn}</label>
                  <textarea
                    className="form-control ap-input ap-textarea"
                    value={categoryForm.descriptionEn}
                    onChange={(e) =>
                      setCategoryForm((prev) => ({
                        ...prev,
                        descriptionEn: e.target.value,
                      }))
                    }
                    required
                  />
                </div>

                {categoryError ? (
                  <div className="alert alert-danger py-2">{categoryError}</div>
                ) : null}
                {categorySuccess ? (
                  <div className="alert alert-success py-2">
                    {categorySuccess}
                  </div>
                ) : null}

                <button
                  type="submit"
                  className="btn ap-primary-btn"
                  disabled={categorySaving}
                >
                  {categorySaving ? t.addingCategory : t.addCategory}
                </button>
              </form>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="ap-panel h-100">
              <h4 className="ap-panel-title">{t.passwordTitle}</h4>

              <form onSubmit={handlePasswordSubmit}>
                <div className="mb-3">
                  <label className="ap-label">{t.currentPassword}</label>
                  <input
                    type="password"
                    className="form-control ap-input"
                    value={passwordForm.currentPassword}
                    onChange={(e) =>
                      setPasswordForm((prev) => ({
                        ...prev,
                        currentPassword: e.target.value,
                      }))
                    }
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="ap-label">{t.newPassword}</label>
                  <input
                    type="password"
                    className="form-control ap-input"
                    value={passwordForm.newPassword}
                    onChange={(e) =>
                      setPasswordForm((prev) => ({
                        ...prev,
                        newPassword: e.target.value,
                      }))
                    }
                    required
                    minLength={6}
                  />
                </div>

                <div className="mb-3">
                  <label className="ap-label">{t.confirmPassword}</label>
                  <input
                    type="password"
                    className="form-control ap-input"
                    value={passwordForm.confirmPassword}
                    onChange={(e) =>
                      setPasswordForm((prev) => ({
                        ...prev,
                        confirmPassword: e.target.value,
                      }))
                    }
                    required
                    minLength={6}
                  />
                </div>

                {passwordError ? (
                  <div className="alert alert-danger py-2">{passwordError}</div>
                ) : null}
                {passwordSuccess ? (
                  <div className="alert alert-success py-2">
                    {passwordSuccess}
                  </div>
                ) : null}

                <button
                  type="submit"
                  className="btn ap-primary-btn"
                  disabled={passwordSaving}
                >
                  {passwordSaving ? t.changingPassword : t.changePassword}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="ap-panel mt-4">
          <h4 className="ap-panel-title mb-3">{t.categoriesListTitle}</h4>
          {categories.length === 0 ? (
            <p className="mb-0 ap-muted">{t.noCategories}</p>
          ) : (
            <div className="row g-3">
              {categories.map((category) => (
                <div className="col-lg-4 col-md-6" key={category._id}>
                  <div className="ap-category-card h-100">
                    <div className="ap-category-card-head">
                      <h6 className="ap-category-name mb-1">
                        {language === "Ar"
                          ? category.nameAr || category.name || "-"
                          : category.nameEn || category.name || "-"}
                      </h6>
                      <button
                        type="button"
                        className="btn btn-sm ap-delete-btn"
                        onClick={() => openDeleteModal(category)}
                      >
                        {t.deleteCategoryBtn}
                      </button>
                    </div>
                    <p className="ap-category-alt-name mb-2">
                      {language === "Ar"
                        ? category.nameEn || category.name || "-"
                        : category.nameAr || category.name || "-"}
                    </p>
                    <div className="ap-category-count mb-2">
                      {t.relatedProductsCount}:{" "}
                      {Number(category.relatedProductsCount || 0)}
                    </div>
                    <p className="ap-category-description mb-0">
                      {language === "Ar"
                        ? category.descriptionAr || category.description || "-"
                        : category.descriptionEn || category.description || "-"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Modal open={Boolean(deleteTarget)} onClose={closeDeleteModal}>
        <Box sx={deleteModalStyle} className="ap-delete-modal-box">
          <h4 className="mb-2 ap-panel-title">{t.deleteModalTitle}</h4>
          <p className="ap-delete-message mb-2">{t.deleteModalMessage}</p>
          <p className="ap-delete-category-name mb-2">
            {deleteTarget?.name || "-"}
          </p>
          <p className="ap-delete-warning mb-3">{t.deleteModalWarning}</p>

          <div className="d-flex justify-content-end gap-2 ap-delete-actions">
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={closeDeleteModal}
              disabled={Boolean(deletingCategoryId)}
            >
              {t.cancel}
            </button>
            <button
              type="button"
              className="btn ap-danger-btn"
              onClick={handleDeleteCategory}
              disabled={Boolean(deletingCategoryId)}
            >
              {deletingCategoryId ? t.deletingCategory : t.deleteConfirmBtn}
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default AdminProfile;
