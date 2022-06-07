import React, { useContext } from "react";
import { Languages } from "../../context/languages";
import { LangContext } from "../../context/langContext";

const Products1 = () => {
  const { language } = useContext(LangContext);

  return (
    <div className="product1 container-fluid" dir={`${Languages[language].dir}`}>
      {/* <!-- Products SECTION --> */}
      <div className="products-section container-fluid py-5">
        <div className="text-center mb-3">
          <img src="assets/images/wheel.png" width="70px" alt="" />
        </div>
        <h2 className="main-header text-center mb-5">
          <span>{Languages[language].Products.body.header[0]}</span>{" "}
          {Languages[language].Products.body.header[1]}
        </h2>

        <h4 className="aos-init side-header text-center" data-aos="fade-left">
          {Languages[language].Products.body.oils.title[0]}
        </h4>
        <p data-aos="fade-left" className="aos-init p-0 m-0 text-center">
          {Languages[language].Products.body.oils.title[1]}
        </p>
        <p data-aos="fade-left" className="aos-init text-center">
          {Languages[language].Products.body.oils.title[2]}
        </p>
        <div className="row mx-auto">
          <div className="col-lg-3 col-sm-6 col-xs-12 mb-3">
            <div className="card products-card">
              <div className="inner-info">
                <div className="d-flex">
                  <div>
                    <ul>
                      <li>Rally</li>
                      <li>Rally HP</li>
                      <li>Rally HP PLUS</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>Unimex</li>
                      <li>Unimex HP</li>
                      <li>Unimex HP PLUS</li>
                    </ul>
                  </div>
                </div>
                <h4>Grade</h4>
                <p> 40/50/60/5w30/5w40/10w30/10w40/10w50</p>
              </div>
              <img
                src="assets/images/2.png"
                alt=""
                className="card-img-top mx-auto"
              />
              <div className="card-body text-center">
                <h4 className="card-title">
                  {Languages[language].Products.body.oils.oil[0]}
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12 mb-3">
            <div className="card products-card">
              <div className="inner-info">
                <div className="d-flex">
                  <div>
                    <ul>
                      <li>Super</li>
                      <li>Super HP</li>
                      <li>Super HP PLUS</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>Ultra</li>
                      <li>Ultra HP</li>
                      <li>Ultra HP PLUS</li>
                    </ul>
                  </div>
                </div>
                <h4>Grade</h4>
                <p> 40/50/60/10w40/15w40/20w50/20w60</p>
              </div>
              <img
                src="assets/images/7.png"
                alt=""
                className="card-img-top mx-auto"
              />
              <div className="card-body text-center">
                <h4 className="card-title">
                  {Languages[language].Products.body.oils.oil[1]}
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12 mb-3">
            <div className="card products-card">
              <div className="inner-info">
                <div className="d-flex">
                  <div>
                    <ul>
                      <li>Tridon Gear</li>
                      <li>Tridon Super Gear </li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>Tridon Super Gear HP</li>
                    </ul>
                  </div>
                </div>
                <h4>Grade</h4>
                <p> 90/140/80w90/75w80/75w90/75w140/85w140</p>
              </div>
              <img
                src="assets/images/5.png"
                alt=""
                className="card-img-top mx-auto"
              />
              <div className="card-body text-center">
                <h4 className="card-title">
                  {Languages[language].Products.body.oils.oil[2]}
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12 mb-3">
            <div className="card products-card">
              <div className="inner-info">
                <div>
                  <ul>
                    <li>Tridon Coolant</li>
                  </ul>
                  <ul>
                    <li>30%/40%/50%/100%</li>
                  </ul>
                </div>
              </div>
              <img
                src="assets/images/15.png"
                alt=""
                className="card-img-top mx-auto"
              />
              <div className="card-body text-center">
                <h4 className="card-title">
                  {Languages[language].Products.body.oils.oil[3]}
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12 mb-3">
            <div className="card products-card">
              <div className="inner-info">
                <div>
                  <ul>
                    <li>Tridon H</li>
                  </ul>
                  <ul>
                    <li>10w/32/64/68/100/150/220</li>
                  </ul>
                </div>
              </div>
              <img
                src="assets/images/17.png"
                alt=""
                className="card-img-top mx-auto"
              />
              <div className="card-body text-center">
                <h4 className="card-title">
                  {Languages[language].Products.body.oils.oil[4]}
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12 mb-3">
            <div className="card products-card">
              <div className="inner-info">
                <div>
                  <ul>
                    <li>Tridon</li>
                  </ul>
                </div>
                <div className="d-flex">
                  <div>
                    <ul>
                      <li>BF-3</li>
                      <li>BF-4</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>BF-5</li>
                      <li>BF-6</li>
                    </ul>
                  </div>
                </div>
              </div>
              <img
                src="assets/images/19.png"
                alt=""
                className="card-img-top mx-auto"
              />
              <div className="card-body text-center">
                <h4 className="card-title">
                  {Languages[language].Products.body.oils.oil[5]}
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12 mb-3">
            <div className="card products-card">
              <div className="inner-info">
                <div>
                  <ul>
                    <li>Tridon</li>
                  </ul>
                  <div className="d-flex">
                    <div>
                      <ul>
                        <li>Ep-2</li>
                        <li>Ep-3</li>
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li>MP-2</li>
                        <li>MP-3</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <img
                src="assets/images/1.png"
                alt=""
                className="card-img-top mx-auto"
              />
              <div className="card-body text-center">
                <h4 className="card-title">
                  {Languages[language].Products.body.oils.oil[6]}
                </h4>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-5" />
        <h4 className="aos-init side-header" data-aos="fade-left">
          {Languages[language].Products.body.filters[0]}
        </h4>
        <div className="row mx-auto">
          <div className="col-lg-3 col-sm-6 col-xs-12 mb-3">
            <div className="card products-card filter-card">
              <img
                src="assets/images/f-1.png"
                alt=""
                className="card-img-top mx-auto"
              />
              <div className="card-body text-center">
                <h4 className="card-title">
                  {Languages[language].Products.body.filters[1]}
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12 mb-3">
            <div className="card products-card filter-card">
              <img
                src="assets/images/f-2.png"
                alt=""
                className="card-img-top mx-auto"
              />
              <div className="card-body text-center">
                <h4 className="card-title">
                  {Languages[language].Products.body.filters[2]}
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12 mb-3">
            <div className="card products-card filter-card">
              <img
                src="assets/images/f-3.png"
                alt=""
                className="card-img-top mx-auto"
              />
              <div className="card-body text-center">
                <h4 className="card-title">
                  {Languages[language].Products.body.filters[3]}{" "}
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12 mb-3">
            <div className="card products-card filter-card">
              <img
                src="assets/images/f-4.png"
                alt=""
                className="card-img-top mx-auto"
              />
              <div className="card-body text-center">
                <h4 className="card-title">
                  {Languages[language].Products.body.filters[4]}
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12 mb-3">
            <div className="card products-card filter-card">
              <img
                src="assets/images/f-5.png"
                alt=""
                className="card-img-top mx-auto"
              />
              <div className="card-body text-center">
                <h4 className="card-title">
                  {Languages[language].Products.body.filters[5]}
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12 mb-3">
            <div className="card products-card filter-card">
              <img
                src="assets/images/f-6.png"
                alt=""
                className="card-img-top mx-auto"
              />
              <div className="card-body text-center">
                <h4 className="card-title">
                  {Languages[language].Products.body.filters[6]}
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12 mb-3">
            <div className="card products-card filter-card">
              <img
                src="assets/images/f-7.png"
                alt=""
                className="card-img-top mx-auto"
              />
              <div className="card-body text-center">
                <h4 className="card-title">
                  {Languages[language].Products.body.filters[7]}{" "}
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12 mb-3">
            <div className="card products-card filter-card">
              <img
                src="assets/images/f-8.png"
                alt=""
                className="card-img-top mx-auto"
              />
              <div className="card-body text-center">
                <h4 className="card-title">
                  {Languages[language].Products.body.filters[8]}{" "}
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12 mb-3">
            <div className="card products-card filter-card">
              <img
                src="assets/images/f-9.png"
                alt=""
                className="card-img-top mx-auto"
              />
              <div className="card-body text-center">
                <h4 className="card-title">
                  {Languages[language].Products.body.filters[9]}
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12 mb-3">
            <div className="card products-card filter-card">
              <img
                src="assets/images/f-10.png"
                alt=""
                className="card-img-top mx-auto"
              />
              <div className="card-body text-center">
                <h4 className="card-title">
                  {Languages[language].Products.body.filters[10]}
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12 mb-3">
            <div className="card products-card filter-card">
              <img
                src="assets/images/f-11.png"
                alt=""
                className="card-img-top mx-auto"
              />
              <div className="card-body text-center">
                <h4 className="card-title">
                  {Languages[language].Products.body.filters[11]}{" "}
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12 mb-3">
            <div className="card products-card filter-card">
              <img
                src="assets/images/f-14.png"
                alt=""
                className="card-img-top mx-auto"
              />
              <div className="card-body text-center">
                <h4 className="card-title">
                  {Languages[language].Products.body.filters[12]}{" "}
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12 mb-3">
            <div className="card products-card filter-card">
              <img
                src="assets/images/f-15.png"
                alt=""
                className="card-img-top mx-auto"
              />
              <div className="card-body text-center">
                <h4 className="card-title">
                  {Languages[language].Products.body.filters[13]}{" "}
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12 mb-3">
            <div className="card products-card filter-card">
              <img
                src="assets/images/f-16.png"
                alt=""
                className="card-img-top mx-auto"
              />
              <div className="card-body text-center">
                <h4 className="card-title">
                  {Languages[language].Products.body.filters[14]}{" "}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products1;
