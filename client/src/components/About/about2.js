import React from "react";
import { Languages } from "../../context/languages";

const About2 = () => {
  return (
    <div className="about2">
      <div className="another-about-section">
        <div className="row container mx-auto">
          <div
            className="aos-init col-lg-6 col-sm-12 mb-3"
            data-aos="fade-left"
          >
            <h2>
              <i className="fas fa-check-circle mr-2"></i>
              {Languages.Ar.About.body2.vision[0]}
            </h2>
            <p>{Languages.Ar.About.body2.vision[1]}</p>
          </div>
          <div
            className="aos-init col-lg-6 col-sm-12 mb-3"
            data-aos="fade-right"
          >
            <h2>
              <i className="fas fa-check-circle mr-2"></i>{" "}
              {Languages.Ar.About.body2.message[0]}
            </h2>
            <p>{Languages.Ar.About.body2.message[1]}</p>
          </div>
          <div
            className="aos-init col-lg-6 col-sm-12 mb-3"
            data-aos="fade-left"
          >
            <h2>
              <i className="fas fa-check-circle mr-2"></i>{" "}
              {Languages.Ar.About.body2.values[0]}
            </h2>
            <ul>
              <li>
                <i className="fa"></i>
                {Languages.Ar.About.body2.values[1]}
              </li>
              <li>
                <i className="fa"></i>
                {Languages.Ar.About.body2.values[2]}{" "}
              </li>
              <li>
                <i className="fa"></i>
                {Languages.Ar.About.body2.values[3]}.
              </li>
              <li>
                <i className="fa"></i>
                {Languages.Ar.About.body2.values[4]}.
              </li>
              <li>
                <i className="fa"></i>
                {Languages.Ar.About.body2.values[5]} .
              </li>
            </ul>
          </div>

          {/* <!-- --> */}
          <div
            className="aos-init col-lg-6 col-sm-12 mb-3"
            data-aos="fade-right"
          >
            <h2>
              <i className="fas fa-check-circle mr-2"></i>{" "}
              {Languages.Ar.About.body2.certificates[0]}
            </h2>
            <ul>
              <li> {Languages.Ar.About.body2.certificates[1]}</li>
              <li> {Languages.Ar.About.body2.certificates[2]}</li>
              <li> {Languages.Ar.About.body2.certificates[3]}.</li>
              <li>{Languages.Ar.About.body2.certificates[4]}</li>
            </ul>
          </div>
          {/* <!--    --> */}

          <div className="aos-init col-12 mb-3" data-aos="fade-top">
            <h2>
              <i className="fas fa-check-circle mr-2"></i>{" "}
              {Languages.Ar.About.body2.accomplishments[0]}
            </h2>
            <ul>
              <li>{Languages.Ar.About.body2.accomplishments[1]}</li>
              <li>{Languages.Ar.About.body2.accomplishments[2]}</li>
              <li>{Languages.Ar.About.body2.accomplishments[3]}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About2;
