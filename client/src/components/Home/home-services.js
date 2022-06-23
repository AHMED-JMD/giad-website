import React, { useContext } from "react";
import { Languages } from "../../context/languages";
import { LangContext } from "../../context/langContext";

const HomeServices = () => {
  const { language } = useContext(LangContext);

  return (
    <div className="home-services" dir={`${Languages[language].dir}`}>
      {/* <!-- SERVICES SECTION STARTS HERE --> */}
      <div id="services-section" className="services-section py-5">
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
        <div className="row container mx-auto pt-4">
          <div
            className="aos-init col-lg-4 col-md-6 col-xs-12 mb-5"
            data-aos="fade-left"
          >
              <div className="card services-card">
                <div className="card-body">
                  <h4 className="card-title text-center">
                    <div className="card-icon mx-auto">
                    <i className='bx bxs-shopping-bag'></i>
                    </div>
                    {Languages[language].Home.HomeServices.body.service1[0]}{" "}
                  </h4>
                  <p className="card-text">
                    {Languages[language].Home.HomeServices.body.service1[1]}{" "}
                  </p>
                </div>
            <i className='bx bxs-shopping-bag bg-icon'></i>
            </div>
          </div>

          <div
            className="aos-init col-lg-4 col-md-6 col-xs-12 mb-5"
            data-aos="fade-top"
          >
              <div className="card services-card">
                <div className="card-body">
                  <h4 className="card-title text-center">
                    <div className="card-icon mx-auto">
                    <i className='bx bxs-cog'></i>
                    </div>
                    {Languages[language].Home.HomeServices.body.service2[0]}{" "}
                  </h4>
                  <p className="card-text">
                    {Languages[language].Home.HomeServices.body.service2[1]}{" "}
                  </p>
                </div>
            <i className='bx bxs-cog bg-icon'></i>
            </div>
          </div>

          <div
            className="aos-init col-lg-4 col-md-6 col-xs-12 mb-5"
            data-aos="fade-right"
          >
              <div className="card services-card">
                <div className="card-body">
                  <h4 className="card-title text-center">
                    <div className="card-icon mx-auto">
                    <i className='bx bxs-droplet'></i>
                    </div>
                    {Languages[language].Home.HomeServices.body.service3[0]}{" "}
                  </h4>
                  <p className="card-text">
                    {Languages[language].Home.HomeServices.body.service3[1]}{" "}
                  </p>
                </div>
              <i className='bx bxs-droplet bg-icon'></i>
              </div>
          </div>

          <div
            className="aos-init col-lg-4 col-md-6 col-xs-12 mb-5 mx-auto"
            data-aos="fade-left"
          >
              <div className="card services-card">
                <div className="card-body">
                  <h4 className="card-title text-center">
                    <div className="card-icon mx-auto">
                    <i className='bx bxs-shield-alt-2'></i>
                    </div>
                    {Languages[language].Home.HomeServices.body.service4[0]}{" "}
                  </h4>
                  <p className="card-text">
                    {Languages[language].Home.HomeServices.body.service4[1]}{" "}
                  </p>
                </div>
                <i className='bx bxs-shield-alt-2 bg-icon'></i>
              </div>
              
          </div>
          <div
            className="aos-init col-lg-4 col-md-6 col-xs-12 mb-5 mx-auto"
            data-aos="fade-right"
          >
              <div className="card services-card">
                <div className="card-body">
                  <h4 className="card-title text-center">
                    <div className="card-icon mx-auto">
                    <i className='bx bxs-car-garage'></i>
                    </div>
                    {Languages[language].Home.HomeServices.body.service5[0]}{" "}
                  </h4>
                  <p className="card-text">
                    {Languages[language].Home.HomeServices.body.service5[1]}{" "}
                  </p>
                </div>
                <i className='bx bxs-car-garage bg-icon'></i>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
