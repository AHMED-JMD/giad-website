import React, { useContext } from "react";
import { Languages } from "../../context/languages";
import { LangContext } from "../../context/langContext";

const Navbar1 = () => {
  const { language } = useContext(LangContext);
  return (
    <div className="contain" dir={`${Languages[language].dir}`}>
        <div className="container-fluid navbar-1 p-0">
        <div className="row gx-0 d-none d-md-flex">
            <div className={language === 'Ar'? "col-md-10 px-5 text-end" : "col-md-10 px-5 text-start"}>
                <div className="h-100 d-inline-flex align-items-center me-4">
                    <small className="fa fa-map-marker-alt text-primary mx-2"></small>
                    <small>{Languages[language].Navbar.content[8]}</small>
                </div>
                <div className="h-100 d-inline-flex align-items-center">
                    <small className="far fa-clock text-primary mx-2"></small>
                    <small>  {Languages[language].Navbar.content[9]}</small>
                </div>
            </div>
            <div className={language === 'Ar'? "col-md-2 px-5 text-start" : "col-md-2 px-5 text-end"}>
                <div className="h-100 d-inline-flex align-items-center mx-n2">
                    <a style={{backgroundColor: '#fff', color: '#001d5c'}} className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" target="_blank" href="https://www.facebook.com/giadmsco/"><i className="fab fa-facebook-f"></i></a>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
};

export default Navbar1;
