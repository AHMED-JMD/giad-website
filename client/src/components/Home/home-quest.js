import React, { useContext } from "react";
import { Languages } from "../../context/languages";
import { LangContext } from "../../context/langContext";

const HomeQuestions = () => {
  const { language } = useContext(LangContext);

  return (
    <div className="home-questions">
      {/* <!-- Frequently asked questions starts Here --> */}
      <section className="service-faq py-5" dir={`${Languages[language].dir}`}>
        <div className="text-center mb-3">
          <img src="assets/images/wheel.png" width="70px" alt="" />
        </div>
        <h2 className="main-header text-center">
          <span>{Languages[language].Home.HomeQuestions.header[0]} </span>
          {Languages[language].Home.HomeQuestions.header[1]}
        </h2>
        <div className="faq-box">
          <div id="accordion" className="accordion">
            <div className="aos-init card" data-aos="fade-left">
              <div className="card-header" id="headingOne">
                <h5
                  className="heading-title"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  {Languages[language].Home.HomeQuestions.body.quest1[0]}{" "}
                </h5>
              </div>
              <div
                id="collapseOne"
                className="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div className="card-body">
                  <ul>
                    <li>
                      {Languages[language].Home.HomeQuestions.body.quest1[1]}
                    </li>
                    <li>
                      {Languages[language].Home.HomeQuestions.body.quest1[2]}
                    </li>
                    <li>
                      {Languages[language].Home.HomeQuestions.body.quest1[3]}
                    </li>
                    <li>
                      {Languages[language].Home.HomeQuestions.body.quest1[4]}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="aos-init card" data-aos="fade-left">
              <div className="card-header" id="headingTwo">
                <h5
                  className="heading-title collapsed"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  {Languages[language].Home.HomeQuestions.body.quest2[0]}{" "}
                </h5>
              </div>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordion"
              >
                <div className="card-body">
                  {Languages[language].Home.HomeQuestions.body.quest2[1]}{" "}
                  <ul>
                    <li>
                      {" "}
                      {
                        Languages[language].Home.HomeQuestions.body.quest2[2]
                      }{" "}
                    </li>
                    <li>
                      {" "}
                      {
                        Languages[language].Home.HomeQuestions.body.quest2[3]
                      }{" "}
                    </li>
                    <li>
                      {" "}
                      {
                        Languages[language].Home.HomeQuestions.body.quest2[4]
                      }{" "}
                    </li>
                    <li>
                      {" "}
                      {
                        Languages[language].Home.HomeQuestions.body.quest2[5]
                      }{" "}
                    </li>
                    <li>
                      {" "}
                      {
                        Languages[language].Home.HomeQuestions.body.quest2[6]
                      }{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="aos-init card" data-aos="fade-left">
              <div className="card-header" id="headingThree">
                <h5
                  className="heading-title collapsed"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  {Languages[language].Home.HomeQuestions.body.quest3[0]}{" "}
                </h5>
              </div>
              <div
                id="collapseThree"
                className="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordion"
              >
                <div className="card-body">
                  <ul>
                    <li>
                      {Languages[language].Home.HomeQuestions.body.quest3[1]}
                    </li>
                    <li>
                      {Languages[language].Home.HomeQuestions.body.quest3[2]}
                    </li>
                    <li>
                      {Languages[language].Home.HomeQuestions.body.quest3[3]}{" "}
                    </li>
                    <li>
                      {Languages[language].Home.HomeQuestions.body.quest3[4]}
                    </li>
                    <li>
                      {" "}
                      {Languages[language].Home.HomeQuestions.body.quest3[5]}
                    </li>
                    <li>
                      {Languages[language].Home.HomeQuestions.body.quest3[6]}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="aos-init card" data-aos="fade-left">
              <div className="card-header" id="headingFour">
                <h5
                  className="heading-title collapsed"
                  data-toggle="collapse"
                  data-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  {Languages[language].Home.HomeQuestions.body.quest4[0]}{" "}
                </h5>
              </div>
              <div
                id="collapseFour"
                className="collapse"
                aria-labelledby="headingFour"
                data-parent="#accordion"
              >
                <div className="card-body">
                  <p>
                    {" "}
                    {Languages[language].Home.HomeQuestions.body.quest4[1]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeQuestions;
