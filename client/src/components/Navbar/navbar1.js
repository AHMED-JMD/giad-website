import React, { useContext } from "react";
import { Languages } from "../../context/languages";
import { LangContext } from "../../context/langContext";

const Navbar1 = () => {
  const { language } = useContext(LangContext);

  return (
    <div className="contain" dir={`${Languages[language].dir}`}>
      <nav className="navbar navbar-1 navbar-expand-md" id="header-topbar">
        <a className="navbar-brand ml-5" href="/">
          <img
            src="assets/images/logo.png"
            className="white-logo"
            width="90px"
            alt="logo"
          />
        </a>
        <ul name="navbar-nav ml-auto align-items-center">
          <a className="btn main-btn" href="tel:00249183463543">
            <i className="fas fa-phone mr-1"></i>{" "}
            {Languages[language].Navbar.content[0]}
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar1;
