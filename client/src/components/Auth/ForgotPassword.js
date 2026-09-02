import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Languages } from "../../context/languages";
import { LangContext } from "../../context/langContext";
import { AuthContext } from "../../context/authContext";
import "./login.css";

const labels = {
  Ar: {
    title: "نسيت كلمة المرور",
    home: "الرئيسية",
    intro:
      "أدخل البريد الإلكتروني المرتبط بحسابك وسنرسل لك رابطاً لإعادة تعيين كلمة المرور.",
    email: "البريد الإلكتروني",
    submit: "إرسال رابط الاستعادة",
    submitting: "جار الإرسال...",
    success:
      "إذا كان هناك حساب مرتبط بهذا البريد، فقد تم إرسال رابط إعادة التعيين. يرجى مراجعة بريدك الإلكتروني (وملف الرسائل غير المرغوب فيها).",
    error: "تعذر إرسال الرابط، حاول مرة أخرى",
    backToLogin: "العودة لتسجيل الدخول",
  },
  En: {
    title: "Forgot password",
    home: "Home",
    intro:
      "Enter the email linked to your account and we will send you a password reset link.",
    email: "Email",
    submit: "Send reset link",
    submitting: "Sending...",
    success:
      "If an account exists for that email, a reset link has been sent. Please check your inbox (and your spam folder).",
    error: "Could not send the reset link, please try again",
    backToLogin: "Back to login",
  },
};

const ForgotPassword = () => {
  const { language } = useContext(LangContext);
  const { forgotPassword } = useContext(AuthContext);
  const t = labels[language] || labels.En;

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      await forgotPassword(email);
      setSent(true);
    } catch (err) {
      setError(err.response?.data?.msg || t.error);
    } finally {
      setSubmitting(false);
    }
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
                  <i className="bx bx-key"></i> {t.title}
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

              {sent ? (
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
              ) : (
                <>
                  <p className="login-form-intro">{t.intro}</p>

                  <div className="mb-3 login-field-wrap">
                    <label className="login-field-label">{t.email}</label>
                    <input
                      type="email"
                      className="form-control login-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  {error ? (
                    <div className="alert alert-danger py-2 login-error">
                      {error}
                    </div>
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
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
