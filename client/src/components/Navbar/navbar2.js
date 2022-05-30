import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Languages } from "../../context/languages";
import { LangContext } from "../../context/langContext";

const Navbar2 = () => {
  const { language, setLanguage } = useContext(LangContext);

  return (
    <nav
      dir={`${Languages.Ar.dir}`}
      className="navbar navbar-2 navbar-expand-md"
      id="header-menu"
    >
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
              {Languages.Ar.Navbar.content[1]}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              {Languages.Ar.Navbar.content[2]}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">
              {Languages.Ar.Navbar.content[3]}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/services-centers">
              <span className="mr-1">{Languages.Ar.Navbar.content[4]}</span>
              {Languages.Ar.Navbar.content[5]}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              {Languages.Ar.Navbar.content[6]}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link english-btn" to="#">
              {Languages.Ar.Navbar.content[7]}
            </Link>
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
