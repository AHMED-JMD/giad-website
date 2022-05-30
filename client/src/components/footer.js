import React from "react";
import { Languages } from "../context/languages";

const Footer = () => {
  return (
    <div className="footer">
      {/* <!-- FOOTER STARTS HERE  -->                    */}
      <section className="container-fluid upper-footer pb-2 mx-auto justify-content-center">
        <div className="row px-0  mx-auto text-center pb-5">
          <div className="col-12 giad-shortcut mb-5">
            <img
              src="assets/images/white-logo.png"
              className="mx-auto mb-4"
              width="100px"
              alt=""
            />
            <p>{Languages.Ar.Footer.content[0]}</p>
          </div>
          <div className="col-lg-4 col-sm-6 col-xs-12">
            <h2> {Languages.Ar.Footer.content[1]}</h2>
            <p>
              <a href="/about">{Languages.Ar.Footer.content[2]}</a>
            </p>
            <p>
              <a href="/products">{Languages.Ar.Footer.content[3]}</a>
            </p>
            <p>
              <a href="/services-centers"> {Languages.Ar.Footer.content[4]}</a>
            </p>
            <p>
              <a href="/contact"> {Languages.Ar.Footer.content[5]}</a>
            </p>
          </div>
          <div className="col-lg-4 col-sm-6 col-xs-12">
            <h2>{Languages.Ar.Footer.content[6]}</h2>
            <p> {Languages.Ar.Footer.content[7]}</p>
            <p>{Languages.Ar.Footer.content[8]}</p>
            <p>
              {Languages.Ar.Footer.content[9]}
              <a href="mailto:info@mail.com">info@giadmotorservices.com</a>
            </p>
            <p>{Languages.Ar.Footer.content[10]}</p>
          </div>
          <div className="col-lg-4 col-sm-6 col-xs-12">
            <h2> {Languages.Ar.Footer.content[11]}</h2>
            <li className="social-media">
              <ul>
                <li>
                  <a href="https://www.facebook.com/giadmsco/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
              </ul>
            </li>
            <a className="btn btn-effect mb-4" href="/contact">
              {Languages.Ar.Footer.content[12]}
            </a>{" "}
            <li className="nav-item opening-hour ">
              <i className="far fa-clock mr-0"></i>
              <span>{Languages.Ar.Footer.content[13]} </span>
            </li>
          </div>
        </div>
      </section>
      <footer className="container-fluid mx-auto text-center">
        <div className="row items-align-center">
          <div className="col-lg-6 col-sm-12 mb-1">
            <p className="text-center">
              {Languages.Ar.Footer.content[14]}
              <script>document.write(new Date().getFullYear())</script>
              <span> {Languages.Ar.Footer.content[15]} </span>
            </p>
          </div>
          {/* <div className="col-lg-6 col-sm-12">
            <a href="#nowhere">سياسة الخصوصية</a>
          </div> */}
        </div>
      </footer>
    </div>
  );
};

export default Footer;