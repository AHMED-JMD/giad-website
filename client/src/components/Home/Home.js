import React, { useContext } from "react";
import Footer from "../footer";
import HomeAbout from "./home-about";
import HomeProgress from "./home-progress";
import HomeQuestions from "./home-quest";
import HomeServices from "./home-services";
import HomeWhyUs from "./home-whyUs";
import { Languages } from "../../context/languages";
import { LangContext } from "../../context/langContext";
import Slider from "react-slick";

const Home = () => {
  const { language } = useContext(LangContext);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
  };

  return (
    <div className="home" dir={`${Languages[language].dir}`}>
      <Slider {...settings}>
        <div className="slide">
          <img
            src="assets/images/giad-bg8.jpg"
            className="mx-auto"
            width={"100%"}
            alt="video"
          />
          <div className="caption" dir={`${Languages[language].dir}`}>
            <h2>{Languages[language].Home.slide1[0]}</h2>
            <p>{Languages[language].Home.slide1[1]}</p>
            <a
              href="#services-section"
              className="btn btn-outline-light shadow-none page-scroll"
            >
              {Languages[language].Home.slide1[2]}{" "}
             <i className={language === 'Ar'? "fa fa-angle-left mx-1" : "fa fa-angle-right mx-1"}></i>
            </a>
          </div>
        </div>
        <div className="slide">
          <img
            src="assets/images/giad-bg7.jpg"
            className="mx-auto"
            width={"100%"}
            alt="video"
          />
          <div className="caption" dir={`${Languages[language].dir}`}>
            <h2> {Languages[language].Home.slide2[0]}</h2>
            <p>{Languages[language].Home.slide2[1]}</p>
            <a
              href="#services-section"
              className="btn btn-outline-light shadow-none page-scroll"
            >
              {Languages[language].Home.slide2[2]}
            <i className={language === 'Ar'? "fa fa-angle-left mx-1" : "fa fa-angle-right mx-1"}></i>
            </a>
          </div>
        </div>
      </Slider>
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
          <h2> {Languages[language].Home.HomeBanner.Text[0]}</h2>
          <div className="iso">
            <p className="ms-1">ISO 9001:2015</p>{" "}
            <p className="ms-1">ISO 14001:2015</p>
            <p className="ms-1">ISO 14001:2018</p>{" "}
            <p className="ms-1">ISO 45001:2018</p>
          </div>
          <a href="/contact" className="btn main-btn">
            {Languages[language].Home.HomeBanner.Text[1]}{" "}
          </a>
        </div>
      </section>

      {/* frequently questions section */}
      <HomeQuestions />

      {/* our Agents section */}
      <section className="agents-bannar text-center">
        <div className="row">
          <div
            className="aos-init col-lg-5 col-md-12 mb-5 d-flex align-items-center justify-content-center pt-5"
            data-aos="fade-left"
          >
            <h4> {Languages[language].Home.HomeClients[0]} </h4>
          </div>
          <div className="aos-init col-lg-7 col-md-12" data-aos="fade-right">
            <a href="/services-centers" className="btn mr-5">
              {Languages[language].Home.HomeClients[1]}
            </a>
            <img src="assets/images/sami.png" width="220px" alt="" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
