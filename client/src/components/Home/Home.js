import React from "react";
import { Link } from "react-router-dom";
import Footer from "../footer";
import HomeAbout from "./home-about";
import HomeProgress from "./home-progress";
import HomeQuestions from "./home-quest";
import HomeServices from "./home-services";
import HomeWhyUs from "./home-whyUs";
import { Languages } from "../../context/languages";
const Home = () => {
  return (
    <div className="home">
      {/* <!-- Slider Area Start Here --> */}
      <div className="slider-area slider-layout1">
        <div className="bend niceties preview-1">
          <div id="ensign-nivoslider-4" className="slides">
            <img
              src="assets/images/slider1.png"
              alt="slider"
              title="#slider-direction-1"
            />
            <img
              src="assets/images/slider2.png"
              alt="slider"
              title="#slider-direction-2"
            />
          </div>
          <div id="slider-direction-1" className="t-cn slider-direction">
            <div className="slider-content s-tb slide-1">
              <div className="text-right title-container s-tb-c">
                <div className="container">
                  <div className="slider-big-text">
                    <h1>
                      <div className="contain"></div>
                      جياد لخدمات السيارات
                    </h1>
                  </div>
                  <div className="slider-paragraph">
                    خدمات إحترافية بجودة عالية
                  </div>
                  <div className="slider-btn-area">
                    <a
                      href="#services-section"
                      className="item-btn-fill page-scroll"
                    >
                      تعرف على خدماتنا
                      <i className="fa fa-angle-left"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="slider-direction-2" className="t-cn slider-direction">
            <div className="slider-content s-tb slide-2">
              <div className="text-right title-container s-tb-c">
                <div className="container">
                  <div className="contain"></div>
                  <div className="slider-big-text">
                    <h1>
                      <div className="contain"></div>
                      جياد لخدمات السيارات
                    </h1>
                  </div>
                  <div className="slider-paragraph">
                    نعمل بتفاني .. لإرضاء عملائنا
                  </div>
                  <div className="slider-btn-area">
                    <a
                      href="#aboutus-section"
                      className="item-btn-fill page-scroll"
                    >
                      عرض المزيد
                      <i className="fa fa-angle-left"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* inside section */}
      <HomeAbout />
      <HomeServices />
      <HomeProgress />
      <HomeWhyUs />

      {/* banner section for the manager */}
      <section className="container-fluid bannar-section text-center">
        <div className="bannar-caption">
          <img
            src="assets/images/logo2.png"
            className="mb-3"
            width="120px"
            alt=""
          />
          <h2> {Languages.Ar.Home.HomeBanner.Text[0]}</h2>
          <p>
            ISO <span>9001:2015</span> | <span>14001:2015</span> |{" "}
            <span>14001:2018</span> | <span>45001:2018</span>
          </p>
          <Link to="/contact" className="btn main-btn">
            {Languages.Ar.Home.HomeBanner.Text[1]}{" "}
          </Link>
        </div>
      </section>

      {/* frequently questions section */}
      <HomeQuestions />

      {/* our Agents section */}
      <section className="agents-bannar text-center">
        <div className="row">
          <div
            className="aos-init col-lg-5 col-md-12 mb-5"
            data-aos="fade-left"
          >
            <h4> {Languages.Ar.Home.HomeClients[0]} </h4>
          </div>
          <div className="aos-init col-lg-7 col-md-12" data-aos="fade-right">
            <Link to="/services-centers" className="btn mr-5">
              {Languages.Ar.Home.HomeClients[1]}
            </Link>
            <img src="assets/images/sami.png" width="220px" alt="" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
