import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Languages } from "../../context/languages";
import { LangContext } from "../../context/langContext";

const HomeAbout = () => {
  const { language } = useContext(LangContext);

  return (
    <div className="home-about" dir={`${Languages[language].dir}`}>
      {/* <!-- Modal --> */}
     

      {/* <!-- ABOUT US SECTION STARTS HERE --> */}
      <div className="aboutus-section container py-5" id="aboutus-section">
        <div className="text-center mb-3">
          <img src="assets/images/wheel.png" width="70px" alt="" />
        </div>
        <h2 className="main-header mx-auto text-center">
          <span> {Languages[language].Home.HomeAbout.header[0]}</span>{" "}
          {Languages[language].Home.HomeAbout.header[1]}{" "}
        </h2>
        <p className="main-text text-center mb-5">
          {Languages[language].Home.HomeAbout.header[2]}{" "}
        </p>
        <div className="container-fluid row mx-auto">
          <div className="aos-init col-lg-6 col-md-12" data-aos="fade-left">
            <p>
              <span>
                {Languages[language].Home.HomeAbout.body[0]}
              </span>
            </p>
            <p>
              {Languages[language].Home.HomeAbout.body[1]}
            </p>
        <div className="text-center">
        <Link to="/about" className="btn btn-effect mx-auto text-center mb-4" href="/contact">
          {Languages[language].Home.HomeAbout.AboutBtn}
            </Link>
        </div>
          </div>
          <div
            className="aos-init col-lg-6 col-md-12 px-0 mx-auto text-center"
            data-aos="fade-right"
          >
            <div className="aboutus-img">
              <img
                src="assets/images/giad-family.png"
                alt=""
              />
              <div className="video-icon">
                <a
                  className="video-btn"
                  data-toggle="modal"
                  data-src="https://www.youtube.com/embed/hKCCJFLnh-8"
                  data-target="#myModal"
                >
                  <i className="bx bx-play-circle"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
