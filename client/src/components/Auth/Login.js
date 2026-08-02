import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Languages } from "../../context/languages";
import { LangContext } from "../../context/langContext";
import { AuthContext } from "../../context/authContext";
import "./login.css";

const labels = {
  Ar: {
    title: "تسجيل الدخول ",
    home: "الرئيسية",
    email: "البريد الإلكتروني",
    password: "كلمة المرور",
    submit: "تسجيل الدخول",
    submitting: "جار تسجيل الدخول...",
    error: "البريد الإلكتروني أو كلمة المرور غير صحيحة",
  },
  En: {
    title: "Login",
    home: "Home",
    email: "Email",
    password: "Password",
    submit: "Login",
    submitting: "Logging in...",
    error: "Invalid email or password",
  },
};

const Login = () => {
  const { language } = useContext(LangContext);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const t = labels[language] || labels.En;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      await login(email, password);
      const redirectTo = location.state?.from || "/products";
      navigate(redirectTo, { replace: true });
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
                  <i className="bx bx-lock-alt"></i> {t.title}
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
              <h4 className="login-form-title mb-4">{t.title}</h4>
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
              <div className="mb-3 login-field-wrap">
                <label className="login-field-label">{t.password}</label>
                <input
                  type="password"
                  className="form-control login-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
