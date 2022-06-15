import React, { useContext, useState, useRef, useEffect } from "react";
import { Languages } from "../../context/languages";
import { LangContext } from "../../context/langContext";
import { NavLink } from "react-router-dom";

const Navbar2 = () => {
  const { language, setLanguage } = useContext(LangContext);
  const [toggle, setToggle] = useState(false);
  const node = useRef(null);
  //function to change the language of the App
  const HandleLanguage = (lang) => {
    lang === "Ar" ? setLanguage("En") : setLanguage("Ar");
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
        <a className="navbar-brand" href="/">
          <img
            src="assets/images/logo.png"
            className="white-logo"
            width="80px"
            alt="logo"
          />
        </a>
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
                <i className="bx bx-home-alt-2"></i>{" "}
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
                <i className="bx bx-bookmark"></i>{" "}
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
                <i className="bx bx-purchase-tag-alt"></i>{" "}
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
                <i className="bx bx-spreadsheet"></i>{" "}
                <span className="mr-1">
                  {" "}
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
                <i className="bx bx-message-dots"></i>{" "}
                {Languages[language].Navbar.content[6]}
              </NavLink>
            </li>
            <li className="nav-item m-0">
              <a
                className="nav-link english-btn"
                href="#"
                onClick={() => HandleLanguage(language)}
              >
                {Languages[language].Navbar.content[7]}
              </a>
            </li>
          </ul>
        </div>
        <i
          style={{ fontSize: "30px" }}
          className="bx bx-menu toggler"
          onClick={() => setToggle(!toggle)}
        ></i>
      </div>
      {/* <Link className="navbar-brand ml-5" to="/">
        <img
          src="./assets/images/white-logo.png"
          className="white-logo"
          width="50px"
          alt="logo"
        />
        <img
          src="./assets/images/logo.png"
          className="colored-logo"
          width="65px"
          alt="logo"
        />
      </Link>
      <a className="tel-icon ml-auto" href="tel:00249183463543">
        <i className="fas fa-phone"></i>
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="">
          <i className="fa fa-bars"></i>
        </span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item ">
            <Link className="nav-link active" to="/">
              {Languages[language].Navbar.content[1]}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              {Languages[language].Navbar.content[2]}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">
              {Languages[language].Navbar.content[3]}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/services-centers">
              <span className="mr-1">
                {" "}
                {Languages[language].Navbar.content[4]}
              </span>
              {Languages[language].Navbar.content[5]}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              {Languages[language].Navbar.content[6]}
            </Link>
          </li>
          <li className="nav-item">
            <a
              className="nav-link english-btn"
              href="#"
              onClick={() => HandleLanguage(language)}
            >
              {Languages[language].Navbar.content[7]}
            </a>
          </li>
        </ul>
      </div>
      <li className="social-media">
        {" "}
        <div className="header-topbar-layout1">
          <ul className="header-top-left">
            <li className="nav-item">
              <a href="https://www.facebook.com/giadmsco/">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
          </ul>
        </div>
      </li> */}
    </nav>
  );
};

export default Navbar2;
