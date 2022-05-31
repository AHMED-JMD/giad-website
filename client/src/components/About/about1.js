import React, { useContext } from "react";
import { Languages } from "../../context/languages";
import { LangContext } from "../../context/langContext";

const About1 = () => {
  const { language } = useContext(LangContext);

  return (
    <div className="about1" dir={`${Languages[language].dir}`}>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="myModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              {/* <!-- 16:9 aspect ratio --> */}
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  title="video-player"
                  src=""
                  id="video"
                  allowscriptaccess="always"
                  allow="autoplay"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- ABOUT US SECTION STARTS HERE --> */}
      <div className="aboutus-section py-5 mb-5">
        <div className="text-center mb-3">
          <img src="assets/images/wheel.png" width="70px" alt="" />
        </div>
        <h2 className="main-header mx-auto text-center">
          <span> {Languages[language].About.body1.header[0]}</span>{" "}
          {Languages[language].About.body1.header[1]}{" "}
        </h2>
        <p className="main-text text-center mb-5">
          {Languages[language].About.body1.header[2]}{" "}
        </p>
        <div className="container-fluid row mx-auto">
          <div className="aos-init col-lg-6 col-md-12" data-aos="fade-left">
            <p>
              <span className="bold">
                {Languages[language].About.body1.body[0]}{" "}
              </span>
            </p>
            <p>{Languages[language].About.body1.body[1]} </p>
          </div>
          <div className="col-lg-6 col-md-12 mx-auto text-center img-container">
            <div className="img-bg"></div>
            <div className="aos-init aboutus-img" data-aos="fade-right">
              <img
                className="aboutus-img"
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
                  {" "}
                  <i className="fas fa-play-circle"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- --> */}
    </div>
  );
};

export default About1;
