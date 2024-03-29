import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Languages } from "../context/languages";
import { LangContext } from "../context/langContext";

const ErrorPage = () => {
  const { language } = useContext(LangContext);

  return (
    <div className="page404" dir={`${Languages[language].dir}`}>
      {/* <!-- INNER PAGE BANNER --> */}
      <div className="wt-bnr-inr overlay-wraper bg-center">
        <div className="overlay-main site-bg-primary opacity-09"></div>
        <div className="container">
          <div className="wt-bnr-inr-entry">
            <div className="banner-title-outer">
              <div className="banner-title-name">
                <h2 className="site-text-white">
                  {Languages[language].Page404.content[0]}
                </h2>
              </div>
            </div>
            {/* <!-- BREADCRUMB ROW -->                             */}

            <div>
              <ul className="wt-breadcrumb breadcrumb-style-2">
                <li>
                  <Link to="/">{Languages[language].Page404.content[1]}</Link>
                </li>
                <li>{Languages[language].Page404.content[0]}</li>
              </ul>
            </div>

            {/* <!-- BREADCRUMB ROW END -->                         */}
          </div>
        </div>
      </div>
      {/* <!-- 404 SECTION --> */}
      <div className="error-section-container">
        <div className="error-section text-center mx-auto my-5">
          <img src="/assets/images/wheel.png" width="80px" alt="" />
          <h2>
            <span className="dot"></span>
            {Languages[language].Page404.content[2]}
            <span className="dot"></span>
          </h2>
          <h1>{Languages[language].Page404.content[0]}</h1>
          <p className="mb-3">{Languages[language].Page404.content[3]}</p>
          <a href="/" className="btn main-btn">
            {Languages[language].Page404.content[4]}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
