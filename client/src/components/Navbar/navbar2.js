import React, { useContext, useState, useRef, useEffect } from "react";
import { Languages } from "../../context/languages";
import { LangContext } from "../../context/langContext";
import { AuthContext } from "../../context/authContext";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar2 = () => {
  const { language, ArFunc, EnFunc } = useContext(LangContext);
  const { isAuthenticated, user, logout } = useContext(AuthContext);
  const [toggle, setToggle] = useState(false);
  const node = useRef(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  //function to change the language of the App
  const HandleLanguage = (lang) => {
    lang === "Ar" ? EnFunc() : ArFunc();
  };

  useEffect(() => {
    const clickOutside = (e) => {
      if (node.current && !node.current.contains(e.target)) {
        // outside click
        setToggle(false);
      }
    };
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [node]);

  return (
    <nav
      dir={`${Languages[language].dir}`}
      className="navbar navbar-2 justify-content-between navbar-expand-md py-0"
    >
      <div className="container-fluid px-3">
        <NavLink className="navbar-brand" to="/">
          <img
            src="assets/images/logo.png"
            className="white-logo"
            width="80px"
            alt="logo"
          />
        </NavLink>
        <div className="nav-links">
          <ul
            className={toggle ? "navbar-nav toggled" : "navbar-nav"}
            ref={node}
          >
            <div className="ml-auto mx-3">
              <i
                style={{ fontSize: "30px", color: "#fff" }}
                className="bx bx-x"
                onClick={() => setToggle(!toggle)}
              ></i>
            </div>
            <li className="nav-item m-0 mx-2">
              <NavLink
                className="nav-link"
                activeclassname="active"
                to="/"
                onClick={() => setToggle(!toggle)}
              >
                <i className="bx bx-home-alt-2"></i>
                {Languages[language].Navbar.content[1]}
              </NavLink>
            </li>
            <li className="nav-item m-0 mx-2">
              <NavLink
                className="nav-link"
                activeclassname="active"
                to="/about"
                onClick={() => setToggle(!toggle)}
              >
                <i className="bx bx-bookmark"></i>
                {Languages[language].Navbar.content[2]}
              </NavLink>
            </li>
            <li className="nav-item m-0 mx-2">
              <NavLink
                className="nav-link"
                activeclassname="active"
                to="/products"
                onClick={() => setToggle(!toggle)}
              >
                <i className="bx bx-purchase-tag-alt"></i>
                {Languages[language].Navbar.content[3]}
              </NavLink>
            </li>
            <li className="nav-item m-0 mx-2">
              <NavLink
                className="nav-link"
                activeclassname="active"
                to="/services-centers"
                onClick={() => setToggle(!toggle)}
              >
                <i className="bx bx-spreadsheet"></i>
                <span className="">
                  {Languages[language].Navbar.content[4]}
                </span>
                {Languages[language].Navbar.content[5]}
              </NavLink>
            </li>
            <li className="nav-item m-0 mx-2">
              <NavLink
                className="nav-link"
                activeclassname="active"
                to="/contact"
                onClick={() => setToggle(!toggle)}
              >
                <i className="bx bx-message-dots"></i>
                {Languages[language].Navbar.content[6]}
              </NavLink>
            </li>
            {isAuthenticated && user?.role === "admin" ? (
              <li className="nav-item m-0 mx-2">
                <NavLink
                  className="nav-link"
                  activeclassname="active"
                  to="/admin/profile"
                  onClick={() => setToggle(!toggle)}
                >
                  <i className="bx bx-cog"></i>
                  {language === "Ar" ? "لوحة المدير" : "Admin Profile"}
                </NavLink>
              </li>
            ) : null}
            <li className="nav-item m-0 mx-2">
              {isAuthenticated ? (
                <button
                  className="nav-link english-btn shadow-none"
                  onClick={() => {
                    setToggle(!toggle);
                    handleLogout();
                  }}
                >
                  <i className="bx bx-log-out"></i> {user?.name}
                </button>
              ) : (
                <NavLink
                  className="nav-link"
                  activeclassname="active"
                  to="/login"
                  onClick={() => setToggle(!toggle)}
                >
                  <i className="bx bx-lock-alt"></i>
                  {language === "Ar" ? "دخول" : "Login"}
                </NavLink>
              )}
            </li>
            <li className="nav-item m-0">
              <button
                className="nav-link english-btn shadow-none"
                onClick={() => HandleLanguage(language)}
              >
                {Languages[language].Navbar.content[7]}
              </button>
            </li>
          </ul>
        </div>
        <i
          style={{ fontSize: "30px" }}
          className="bx bx-menu toggler"
          onClick={() => setToggle(!toggle)}
        ></i>
      </div>
    </nav>
  );
};

export default Navbar2;
