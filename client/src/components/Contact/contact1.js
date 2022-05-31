import React, { useContext } from "react";
import { Languages } from "../../context/languages";
import { LangContext } from "../../context/langContext";

const Contact1 = () => {
  const { language } = useContext(LangContext);

  return (
    <div className="contact1" dir={`${Languages[language].dir}`}>
      {/* <!-- CONTACT US SECTION --> */}
      <div className="contactus-section container-fluid py-5">
        <div className="text-center mb-3">
          <img src="assets/images/wheel.png" width="70px" alt="" />
        </div>
        <h2 className="main-header text-center mb-5">
          <span> {Languages[language].Contact.header[2]}</span>{" "}
          {Languages[language].Contact.header[3]}
        </h2>
        <form className="form" id="contact-form">
          <div className="aos-init row" data-aos="fade-left">
            <div className="col-lg-6 col-sm-12">
              <label>
                <span>*</span>
                {Languages[language].Contact.body.form[0]}
              </label>
              <input type="name" className="form-control" id="name" required />
            </div>
            <div className="col-lg-6 col-sm-12">
              <label>
                <span>*</span>
                {Languages[language].Contact.body.form[1]}
              </label>
              <input
                type="phone"
                className="form-control"
                id="phoneNum"
                required
              />
            </div>
            <div className="col-lg-6 col-sm-12">
              <label> {Languages[language].Contact.body.form[2]}</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="col-lg-6 col-sm-12">
              <label>{Languages[language].Contact.body.form[3]}</label>
              <input type="name" className="form-control" id="subject" />
            </div>
            <div className="col-12">
              <label>
                <span>*</span>
                {Languages[language].Contact.body.form[4]}
              </label>
              <textarea
                className="form-control"
                rows="3"
                id="textarea"
                required
              ></textarea>
            </div>
            <button className="btn contact-btn btn-effect">
              {Languages[language].Contact.body.form[5]}
            </button>
          </div>
          <div id="back-message" className="back-message text-center"></div>
        </form>
      </div>
      <div className="contact-methods mb-5 ">
        <div className="aos-init row mx-auto" data-aos="fade-right">
          <div className="col-md-6 col-sm-12 mb-3 d-flex">
            <div className="">
              <i className="fas fa-phone mr-2"></i>
            </div>
            <div>
              <h4>{Languages[language].Contact.body.info[0]}</h4>
              <p>2605</p>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 mb-3 d-flex">
            <div className="">
              <i className="fas fa-fax mr-2"></i>
            </div>
            <div>
              <h4>{Languages[language].Contact.body.info[1]}</h4>
              <p>1831476981</p>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 mx mb-3 d-flex">
            <div className="">
              <i className="fas fa-envelope mr-2"></i>
            </div>
            <div>
              <h4>{Languages[language].Contact.body.info[2]}</h4>
              <p>info@giadmotorservices.com</p>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 mx mb-3 d-flex">
            <div className="">
              <i className="fas fa-home mr-2"></i>
            </div>
            <div>
              <h4>{Languages[language].Contact.body.info[3]}</h4>
              <p>{Languages[language].Contact.body.info[4]}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="aos-init container-fluid map" data-aos="fade-top">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.6314494381836!2d32.519782714330766!3d15.557875757071814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x168e8fc58db521bb%3A0x89275a10276d5060!2sGiad%20Motor%20Services!5e0!3m2!1sen!2sus!4v1631518398198!5m2!1sen!2sus"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact1;
