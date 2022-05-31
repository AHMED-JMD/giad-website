import React, { useContext } from "react";
import { Languages } from "../../context/languages";
import { LangContext } from "../../context/langContext";

const HomeServices = () => {
  const { language } = useContext(LangContext);

  return (
    <div className="home-services" dir={`${Languages[language].dir}`}>
      {/* <!-- SERVICES SECTION STARTS HERE --> */}
      <div id="services-section" className="services-section">
        <div className="text-center mb-3">
          <img src="assets/images/wheel.png" width="70px" alt="" />
        </div>
        <h2 className="main-header mx-auto text-center">
          <span> {Languages[language].Home.HomeServices.header[0]} </span>{" "}
          {Languages[language].Home.HomeServices.header[1]}{" "}
        </h2>
        <p className="main-text text-center mb-5">
          {Languages[language].Home.HomeServices.header[2]}{" "}
        </p>
        <div className="row container-fluid mx-auto">
          <div
            className="aos-init col-lg-4 col-md-6 col-xs-12"
            data-aos="fade-left"
          >
            <div className="card-container text-center">
              <div className="card services-card">
                <img
                  src="assets/images/card-2.png"
                  alt=""
                  className="card-img-top"
                />
                <div className="card-body">
                  <h4 className="card-title text-center">
                    <div className="card-icon">
                      <img src="assets/images/selling.png" alt="" />
                    </div>
                    {Languages[language].Home.HomeServices.body.service1[0]}{" "}
                  </h4>
                  <p className="card-text">
                    {Languages[language].Home.HomeServices.body.service1[1]}{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="aos-init col-lg-4 col-md-6 col-xs-12"
            data-aos="fade-top"
          >
            <div className="card-container">
              <div className="card services-card">
                <img
                  src="assets/images/card-1.png"
                  alt=""
                  className="card-img-top"
                />
                <div className="card-body">
                  <h4 className="card-title text-center">
                    <div className="card-icon">
                      <img src="assets/images/spare-part.png" alt="" />
                    </div>
                    {Languages[language].Home.HomeServices.body.service2[0]}{" "}
                  </h4>
                  <p className="card-text">
                    {Languages[language].Home.HomeServices.body.service2[1]}{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="aos-init col-lg-4 col-md-6 col-xs-12"
            data-aos="fade-right"
          >
            <div className="card-container">
              <div className="card services-card">
                <img
                  src="assets/images/card-3.png"
                  alt=""
                  className="card-img-top"
                />
                <div className="card-body">
                  <h4 className="card-title text-center">
                    <div className="card-icon">
                      <img src="assets/images/oil-bottle.png" alt="" />
                    </div>
                    {Languages[language].Home.HomeServices.body.service3[0]}{" "}
                  </h4>
                  <p className="card-text">
                    {Languages[language].Home.HomeServices.body.service3[1]}{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="aos-init col-lg-4 col-md-6 col-xs-12 mx-auto"
            data-aos="fade-left"
          >
            <div className="card-container">
              <div className="card services-card">
                <img
                  src="assets/images/card-4.png"
                  alt=""
                  className="card-img-top"
                />
                <div className="card-body">
                  <h4 className="card-title text-center">
                    <div className="card-icon">
                      <img src="assets/images/warranty.png" alt="" />
                    </div>
                    {Languages[language].Home.HomeServices.body.service4[0]}{" "}
                  </h4>
                  <p className="card-text">
                    {Languages[language].Home.HomeServices.body.service4[1]}{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="aos-init col-lg-4 col-md-6 col-xs-12 mx-auto"
            data-aos="fade-right"
          >
            <div className="card-container text-center">
              <div className="card services-card">
                <img
                  src="assets/images/card-5.png"
                  alt=""
                  className="card-img-top"
                />
                <div className="card-body">
                  <h4 className="card-title text-center">
                    <div className="card-icon">
                      <img src="assets/images/maintenance.png" alt="" />
                    </div>
                    {Languages[language].Home.HomeServices.body.service5[0]}{" "}
                  </h4>
                  <p className="card-text">
                    {Languages[language].Home.HomeServices.body.service5[1]}{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
