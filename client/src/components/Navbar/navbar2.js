import React from "react";
import { Link } from "react-router-dom";
const Navbar2 = () => {
  return (
    <nav className="navbar navbar-2 navbar-expand-md" id="header-menu">
      <Link className="navbar-brand ml-5" to="/">
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
              الرئيسية
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              من نحن
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">
              المنتجات
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/services-centers">
              <span className="mr-1">مراكز</span>الخدمات
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              التواصل
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link english-btn" href="/en">
              English
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
      </li>
    </nav>
  );
};

export default Navbar2;
