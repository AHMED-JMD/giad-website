import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Footer from "../footer";
import Contact1 from "./contact1";
import { Languages } from "../../context/languages";
import { LangContext } from "../../context/langContext";

const Contact = () => {
  const { language } = useContext(LangContext);

  return (
    <div className="contact" dir={`${Languages[language].dir}`}>
      {/* <!-- INNER PAGE BANNER --> */}
      <div className="wt-bnr-inr overlay-wraper bg-center">
        <div className="overlay-main site-bg-primary opacity-09"></div>
        <div className="container">
          <div className="wt-bnr-inr-entry">
            <div className="banner-title-outer">
              <div className="banner-title-name">
                <h2 className="site-text-white">
                  {" "}
                  {Languages[language].Contact.header[0]}
                </h2>
              </div>
            </div>
            {/* <!-- BREADCRUMB ROW --> */}

            <div>
              <ul className="wt-breadcrumb breadcrumb-style-2">
                <li>
                  <Link to="/">{Languages[language].Contact.header[1]}</Link>
                </li>
                <li> {Languages[language].Contact.header[0]}</li>
              </ul>
            </div>

            {/* <!-- BREADCRUMB ROW END --> */}
          </div>
        </div>
      </div>

      <Contact1 />
      <Footer />
    </div>
  );
};

export default Contact;
