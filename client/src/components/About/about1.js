import React from "react";

const About1 = () => {
  return (
    <div className="about1">
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
          <span>من</span> نحن؟{" "}
        </h2>
        <p className="main-text text-center mb-5">
          اعرف المزيد عن جياد لخدمات السيارات
        </p>
        <div className="container-fluid row mx-auto">
          <div className="aos-init col-lg-6 col-md-12" data-aos="fade-left">
            <p>
              <span className="bold">شركة جياد لخدمات السيارات المحدودة، </span>
              شركة رائدة تعمل في مجال خدمات صيانة السيارات وخدمات ما بعد البيع ،
              وهي امتداد لشركة جياد لصناعة السيارات - فخر الصناعة في السودان -
              تأسست في عام 2004 ويقع مقرها بمدينة الخرطوم جنوب غرب منطقة سباق
              الخيل كما أن لها وكلاء بمختلف المدن.
            </p>
            <p>
              تمتلك الشركة في مقرها الرئيس ورشاً متطورة لأعمال الصيانة
              الميكانيكية وكهرباء السيارات ،كما تمتلك ورشة لأعمال السمكرة
              والطلاء والتي تقوم بتقديم خدمات تكاملية للسيارات ، بالإضافة لورشة
              متكاملة لخدمات الصيانة الدورية والنظافة وغيار الزيت والفلاتر .
            </p>
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
