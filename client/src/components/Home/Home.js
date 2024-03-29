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
import { Image } from "antd";
import "antd/dist/antd.css";

const Home = () => {
  const { language } = useContext(LangContext);
  const afterChange = () => {
    let captions = document.querySelectorAll(".caption");
    let captionsBg = document.querySelectorAll(".caption-bg");
    let titles = document.querySelectorAll(".caption-title");
    let texts = document.querySelectorAll(".caption-text");
    let btns = document.querySelectorAll(".caption-btn");
    for (const caption of captions) {
      caption.classList.add("slide-animation");
    }
    for (const captionBg of captionsBg) {
      captionBg.classList.add("bg");
    }
    for (const title of titles) {
      title.classList.add("title");
    }
    for (const text of texts) {
      text.classList.add("text");
    }
    for (const btn of btns) {
      btn.classList.add("btn-animation");
    }
  };
  const beforeChange = () => {
    let captions = document.querySelectorAll(".caption");
    let captionsBg = document.querySelectorAll(".caption-bg");
    let titles = document.querySelectorAll(".caption-title");
    let texts = document.querySelectorAll(".caption-text");
    let btns = document.querySelectorAll(".caption-btn");
    for (const caption of captions) {
      caption.classList.remove("slide-animation");
      caption.classList.remove("bg");
    }
    for (const captionBg of captionsBg) {
      captionBg.classList.remove("bg");
    }
    for (const title of titles) {
      title.classList.remove("title");
    }
    for (const text of texts) {
      text.classList.remove("text");
    }
    for (const btn of btns) {
      btn.classList.remove("btn-animation");
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    afterChange,
    beforeChange,
    swipe: false,
    arrows: true,
    autoplaySpeed: 4500,
  };

  const certifs = {
    dots: true,
    infinite: true,
    speed: 500,
    pauseOnHover: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    swipe: true,
    arrows: false,
    autoplaySpeed: 4500,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="home" dir={`${Languages[language].dir}`}>
      <Slider {...settings}>
        <div className="slide">
          <div className="img img-1"></div>
          <div
            className="caption slide-animation"
            dir={`${Languages[language].dir}`}
          >
            <div className="caption-bg bg"></div>
            <h2 className="caption-title title">
              {Languages[language].Home.slide1[0]}
            </h2>
            <p className="caption-text text">
              {Languages[language].Home.slide1[1]}
            </p>
            <a
              href="#services-section"
              style={{ borderRadius: "20px" }}
              className="btn btn-outline-light shadow-none page-scroll px-3 caption-btn btn-animation"
            >
              {Languages[language].Home.slide1[2]}{" "}
              <i
                className={
                  language === "Ar"
                    ? "fa fa-angle-left mx-1"
                    : "fa fa-angle-right mx-1"
                }
              ></i>
            </a>
          </div>
        </div>
        <div className="slide">
          <div className="img img-2"></div>
          <div
            className="caption slide-animation"
            dir={`${Languages[language].dir}`}
          >
            <div className="caption-bg bg"></div>
            <h2 className="caption-title title">
              {" "}
              {Languages[language].Home.slide2[0]}
            </h2>
            <p className="caption-text text">
              {Languages[language].Home.slide2[1]}
            </p>
            <a
              href="#aboutus-section"
              style={{ borderRadius: "20px" }}
              className="btn btn-outline-light shadow-none page-scroll px-3 caption-btn btn-animation"
            >
              {Languages[language].Home.slide2[2]}
              <i
                className={
                  language === "Ar"
                    ? "fa fa-angle-left mx-1"
                    : "fa fa-angle-right mx-1"
                }
              ></i>
            </a>
          </div>
        </div>
      </Slider>
      {/* inside section */}
      <HomeAbout />
      <hr className="m-0" style={{ height: "1px", background: "#ddd" }} />
      <HomeServices />
      <HomeProgress />
      <HomeWhyUs />

      {/* banner section for the manager */}
      <section className="container-fluid bannar-section text-center">
        <div className="bannar-caption">
          <i className="bx bx-award"></i>
          <h2> {Languages[language].Home.HomeBanner.Text[0]}</h2>
          <div className="iso">
            <p className="ms-1">ISO 9001:2015</p>{" "}
            <p className="ms-1">ISO 14001:2015</p>
            <p className="ms-1">ISO 14001:2018</p>{" "}
            <p className="ms-1">ISO 45001:2018</p>
          </div>
          <a href="/contact" className="btn btn-effect shadow-none">
            {Languages[language].Home.HomeBanner.Text[1]}{" "}
          </a>
        </div>
      </section>
      <section className="certifs text-center pt-3">
          <Image.PreviewGroup>
          <Slider {...certifs}>
            <div className=" mb-2">
              <Image width={170} src="assets/images/cer1.png" />
            </div>
            <div className="mb-2">
              <Image width={170} src="assets/images/cer2.png" />
            </div>
            <div className="mb-2">
              <Image width={170} src="assets/images/cer3.png" />
            </div>
            </Slider>
          </Image.PreviewGroup>
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
