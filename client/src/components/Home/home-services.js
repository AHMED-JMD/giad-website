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
            {/* services body here */}

          {Languages[language].Home.HomeServices.body 
           && Languages[language].Home.HomeServices.body.map((service, index) => {
            return (
              <div
                className="aos-init col-lg-4 col-md-6 col-xs-12 mb-5"
                data-aos={service.aos_dir}
                key={index}
              >
                <div className="card services-card">
                  <div className="card-body">
                    <h4 className="card-title text-center">
                      <div className="card-icon mx-auto">
                        <i className={service.iconClass}></i>
                      </div>
                      {service.title}{" "}
                    </h4>
                    <p className="card-text">
                      {service.description}{" "}
                    </p>
                  </div>
                  <i className={service.iconClass + ' bg-icon'}></i>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
};

export default HomeServices;
