import React, { useContext } from "react";
import { Languages } from "../../context/languages";
import { LangContext } from "../../context/langContext";

const HomeWhyUs = () => {
  const { language } = useContext(LangContext);

  return (
    <div className="home-whyUs" dir={`${Languages[language].dir}`}>
      {/* <!-- Why Choose Area STARTS Here --> */}
      <section className="whygiad-section py-5">
        <div className="container">
          <div className="text-center mb-3">
            <img src="assets/images/wheel.png" width="70px" alt="" />
          </div>
          <h2 className="main-header mx-auto text-center">
            <span> {Languages[language].Home.HomeWhyUs.header[0]} </span>
            {Languages[language].Home.HomeWhyUs.header[1]} <span>{language === 'Ar'? '؟' : '?'}</span>
          </h2>
          <p className="main-text text-center mb-5">
            {Languages[language].Home.HomeWhyUs.header[2]}
          </p>
          <div className="row gutters-3">
            <div className="col-lg-4 mb-4">
              <div
                className="aos-init why-choose-box-layout2"
                data-aos="fade-left"
              >
                <div className="item-icon">
                  <i className="fas fa-check"></i>
                </div>
                <div className="item-content">
                  <h3 className="item-title">
                    {Languages[language].Home.HomeWhyUs.body.reason1[0]}
                  </h3>
                  <p> {Languages[language].Home.HomeWhyUs.body.reason1[1]}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div
                className="aos-init why-choose-box-layout2"
                data-aos="fade-top"
              >
                <div className="item-icon">
                  <i className="fas fa-check"></i>
                </div>
                <div className="item-content">
                  <h3 className="item-title">
                    
                    {Languages[language].Home.HomeWhyUs.body.reason2[0]}
                  </h3>
                  <p>{Languages[language].Home.HomeWhyUs.body.reason2[1]}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div
                className="aos-init why-choose-box-layout2"
                data-aos="fade-right"
              >
                <div className="item-icon">
                  <i className="fas fa-check"></i>
                </div>
                <div className="item-content">
                  <h3 className="item-title">
                    
                    {Languages[language].Home.HomeWhyUs.body.reason3[0]}
                  </h3>
                  <p> {Languages[language].Home.HomeWhyUs.body.reason3[1]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeWhyUs;
