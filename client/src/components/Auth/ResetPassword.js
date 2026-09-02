import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Languages } from "../../context/languages";
import { LangContext } from "../../context/langContext";
import { AuthContext } from "../../context/authContext";
import "./login.css";

const labels = {
  Ar: {
    title: "إعادة تعيين كلمة المرور",
    home: "الرئيسية",
    checking: "جار التحقق من الرابط...",
    intro: "أدخل كلمة المرور الجديدة لحسابك",
    password: "كلمة المرور الجديدة",
    confirmPassword: "تأكيد كلمة المرور",
    submit: "حفظ كلمة المرور",
    submitting: "جار الحفظ...",
    success: "تم تغيير كلمة المرور بنجاح. سيتم تحويلك لصفحة تسجيل الدخول...",
    mismatch: "كلمتا المرور غير متطابقتين",
    tooShort: "كلمة المرور يجب ألا تقل عن 6 أحرف",
    invalidLink: "رابط إعادة التعيين غير صالح أو منتهي الصلاحية",
    requestNew: "طلب رابط جديد",
    backToLogin: "العودة لتسجيل الدخول",
    error: "تعذر تغيير كلمة المرور، حاول مرة أخرى",
  },
  En: {
    title: "Reset password",
    home: "Home",
    checking: "Checking your link...",
    intro: "Enter a new password for your account",
    password: "New password",
    confirmPassword: "Confirm password",
    submit: "Save password",
    submitting: "Saving...",
    success: "Password changed successfully. Redirecting to login...",
    mismatch: "Passwords do not match",
    tooShort: "Password must be at least 6 characters",
    invalidLink: "This reset link is invalid or has expired",
    requestNew: "Request a new link",
    backToLogin: "Back to login",
    error: "Could not reset the password, please try again",
  },
};

const ResetPassword = () => {
  const { language } = useContext(LangContext);
  const { verifyResetToken, resetPassword } = useContext(AuthContext);
  const { token } = useParams();
  const navigate = useNavigate();
  const t = labels[language] || labels.En;

  const [checking, setChecking] = useState(true);
  const [tokenValid, setTokenValid] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Validate the token up front so an expired link shows a clear message
  // instead of letting the user type a password for nothing.
  useEffect(() => {
    let active = true;

    const checkToken = async () => {
      try {
        await verifyResetToken(token);
        if (active) {
          setTokenValid(true);
        }
      } catch (err) {
        if (active) {
          setTokenValid(false);
        }
      } finally {
        if (active) {
          setChecking(false);
        }
      }
    };

    checkToken();

    return () => {
      active = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password.length < 6) {
      setError(t.tooShort);
      return;
    }

    if (password !== confirmPassword) {
      setError(t.mismatch);
      return;
    }

    setSubmitting(true);
    try {
      await resetPassword(token, password);
      setDone(true);
      setTimeout(() => navigate("/login", { replace: true }), 2500);
    } catch (err) {
      setError(err.response?.data?.msg || t.error);
    } finally {
      setSubmitting(false);
    }
  };

  const renderBody = () => {
    if (checking) {
      return (
        <div className="login-status-row">
          <span
            className="spinner-border spinner-border-sm mx-2"
            role="status"
            aria-hidden="true"
          ></span>
          {t.checking}
        </div>
      );
    }

    if (!tokenValid) {
      return (
        <>
          <div className="alert alert-danger py-2 login-error">
            {t.invalidLink}
          </div>
          <div className="login-links-row">
            <Link className="login-link" to="/forgot-password">
              {t.requestNew}
            </Link>
            <Link className="login-link" to="/login">
              {t.backToLogin}
            </Link>
          </div>
        </>
      );
    }

    if (done) {
      return (
        <>
          <div className="alert alert-success py-2 login-error">
            {t.success}
          </div>
          <div className="login-links-row">
            <Link className="login-link" to="/login">
              {t.backToLogin}
            </Link>
          </div>
        </>
      );
    }

    return (
      <>
        <p className="login-form-intro">{t.intro}</p>

        <div className="mb-3 login-field-wrap">
          <label className="login-field-label">{t.password}</label>
          <input
            type="password"
            className="form-control login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={6}
            required
          />
        </div>

        <div className="mb-3 login-field-wrap">
          <label className="login-field-label">{t.confirmPassword}</label>
          <input
            type="password"
            className="form-control login-input"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            minLength={6}
            required
          />
        </div>

        {error ? (
          <div className="alert alert-danger py-2 login-error">{error}</div>
        ) : null}

        <button
          type="submit"
          className="btn login-submit-btn w-100"
          disabled={submitting}
        >
          {submitting ? (
            <>
              <span
                className="spinner-border spinner-border-sm mx-2"
                role="status"
                aria-hidden="true"
              ></span>
              {t.submitting}
            </>
          ) : (
            t.submit
          )}
        </button>

        <div className="login-links-row">
          <Link className="login-link" to="/login">
            {t.backToLogin}
          </Link>
        </div>
      </>
    );
  };

  return (
    <div className="login-page" dir={`${Languages[language].dir}`}>
      <div className="wt-bnr-inr overlay-wraper bg-center">
        <div className="overlay-main site-bg-primary opacity-09"></div>
        <div className="container">
          <div className="wt-bnr-inr-entry">
            <div className="banner-title-outer">
              <div className="banner-title-name">
                <h2 className="site-text-white">
                  <i className="bx bx-lock-open-alt"></i> {t.title}
                </h2>
              </div>
            </div>
            <div>
              <ul className="wt-breadcrumb breadcrumb-style-2">
                <li>
                  <Link to="/">{t.home}</Link>
                </li>
                <li>{t.title}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="login-content-wrap py-5">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-8 col-sm-12">
            <form className="login-form-card" onSubmit={handleSubmit}>
              <h4 className="login-form-title mb-3">{t.title}</h4>
              {renderBody()}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
