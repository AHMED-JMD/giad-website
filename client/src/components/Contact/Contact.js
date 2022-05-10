import React from "react";
import { Link } from "react-router-dom";
import Footer from "../footer";
import Contact1 from "./contact1";

const Contact = () => {
  return (
    <div className="contact">
      {/* <!-- INNER PAGE BANNER --> */}
      <div className="wt-bnr-inr overlay-wraper bg-center">
        <div className="overlay-main site-bg-primary opacity-09"></div>
        <div className="container">
          <div className="wt-bnr-inr-entry">
            <div className="banner-title-outer">
              <div className="banner-title-name">
                <h2 className="site-text-white">تواصل معنا</h2>
              </div>
            </div>
            {/* <!-- BREADCRUMB ROW -->                             */}

            <div>
              <ul className="wt-breadcrumb breadcrumb-style-2">
                <li>
                  <Link to="/">الرئيسية</Link>
                </li>
                <li>تواصل معنا</li>
              </ul>
            </div>

            {/* <!-- BREADCRUMB ROW END -->                         */}
          </div>
        </div>
      </div>

      <Contact1 />
      <Footer />
    </div>
  );
};

export default Contact;
