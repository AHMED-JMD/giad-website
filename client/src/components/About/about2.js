import React, { useContext } from "react";
import { Languages } from "../../context/languages";
import { LangContext } from "../../context/langContext";

const About2 = () => {
  const { language } = useContext(LangContext);

  return (
    <div className="about2" dir={`${Languages[language].dir}`}>
      <div className="another-about-section">
        <div className="row container mx-auto">
          <div
            className="aos-init col-lg-6 col-sm-12 mb-3"
            data-aos="fade-left"
          >
            <h2>
              <i className="fas fa-check-circle mr-2"></i>
              {Languages[language].About.body2.vision[0]}
            </h2>
            <p>{Languages[language].About.body2.vision[1]}</p>
          </div>
          <div
            className="aos-init col-lg-6 col-sm-12 mb-3"
            data-aos="fade-right"
          >
            <h2>
              <i className="fas fa-check-circle mr-2"></i>{" "}
              {Languages[language].About.body2.message[0]}
            </h2>
            <p>{Languages[language].About.body2.message[1]}</p>
          </div>
          <div
            className="aos-init col-lg-6 col-sm-12 mb-3"
            data-aos="fade-left"
          >
            <h2>
              <i className="fas fa-check-circle mr-2"></i>{" "}
              {Languages[language].About.body2.values[0]}
            </h2>
            <ul>
              <li>
                <i className="fa"></i>
                {Languages[language].About.body2.values[1]}
              </li>
              <li>
                <i className="fa"></i>
                {Languages[language].About.body2.values[2]}{" "}
              </li>
              <li>
                <i className="fa"></i>
                {Languages[language].About.body2.values[3]}.
              </li>
              <li>
                <i className="fa"></i>
                {Languages[language].About.body2.values[4]}.
              </li>
              <li>
                <i className="fa"></i>
                {Languages[language].About.body2.values[5]} .
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
              {Languages[language].About.body2.certificates[0]}
            </h2>
            <ul>
              <li> {Languages[language].About.body2.certificates[1]}</li>
              <li> {Languages[language].About.body2.certificates[2]}</li>
              <li> {Languages[language].About.body2.certificates[3]}.</li>
              <li>{Languages[language].About.body2.certificates[4]}</li>
            </ul>
          </div>
          {/* <!--    --> */}

          <div className="aos-init col-12 mb-3" data-aos="fade-top">
            <h2>
              <i className="fas fa-check-circle mr-2"></i>{" "}
              {Languages[language].About.body2.accomplishments[0]}
            </h2>
            <ul>
              <li>{Languages[language].About.body2.accomplishments[1]}</li>
              <li>{Languages[language].About.body2.accomplishments[2]}</li>
              <li>{Languages[language].About.body2.accomplishments[3]}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About2;
