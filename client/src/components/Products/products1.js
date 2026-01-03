import React, { useContext } from "react";
import { Languages } from "../../context/languages";
import { LangContext } from "../../context/langContext";

const Products1 = () => {
  const { language } = useContext(LangContext);

  return (
    <div
      className="product1 container-fluid"
      dir={`${Languages[language].dir}`}
    >
      {/* <!-- Products SECTION --> */}
      <div className="products-section container-fluid py-5">
        <div className="text-center mb-3">
          <img src="assets/images/wheel.png" width="70px" alt="" />
        </div>
        <h2 className="main-header text-center mb-5">
          <span>{Languages[language].Products.body.header[0]}</span>{" "}
          {Languages[language].Products.body.header[1]}
        </h2>
        <div className="row">
          <div className="col-lg-6 col-xs-12 ">
            <div className="container mb-5">
              <p data-aos="fade-left" className="aos-init">
                {Languages[language].Products.body.header2.title[0]}
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-xs-12 ">
            <div className="container mb-5 aos-init" data-aos="fade-up">
              <input
                type="text"
                className="form-control"
                id="search-input"
                placeholder={Languages[language].Products.body.header2.title[1]}
                onKeyUp={() => {
                  const input = document.getElementById("search-input");
                  const filter = input.value.toUpperCase();
                  const cards = document.getElementsByClassName("filter-card");
                  const header = document.getElementsByClassName("side-header");
                  //hide headers if filter applied
                  if (filter.length > 0) {
                    for (let i = 0; i < header.length; i++) {
                      header[i].style.display = "none";
                    }
                  } else {
                    for (let i = 0; i < header.length; i++) {
                      header[i].style.display = "block";
                    }
                  }

                  //filter cards
                  for (let i = 0; i < cards.length; i++) {
                    const titleElement = cards[i].getElementsByClassName(
                      "card-title"
                    )[0];
                    const txtValue =
                      titleElement.textContent || titleElement.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                      cards[i].style.display = "";
                    } else {
                      cards[i].style.display = "none";
                    }
                  }
                }}
              />
            </div>
          </div>
        </div>

        {/* //-- Giad Oils SECTION --// */}
        {/* <div className="inner-info">
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
        </div> */}
        <h4 className="aos-init side-header mb-5" data-aos="fade-left">
          {Languages[language].Products.body.giadOils.title}
        </h4>
        <div className="row mx-auto">
          {Languages[language].Products.body.giadOils.products &&
            Languages[language].Products.body.giadOils.products.map(
              (oil, index) => {
                return (
                  <div className="col-lg-3 col-sm-6 col-xs-12 mb-3" key={index}>
                    <div className="card products-card filter-card">
                      <img
                        src={`assets/images/${oil.image}`}
                        alt=""
                        className="card-img-top mx-auto"
                      />
                      <div className="card-body text-center">
                        <h4 className="card-title">{oil.title}</h4>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
        </div>

        {/* //-- Batteries SECTION --// */}
        <hr className="my-3" />
        <h4 className="aos-init side-header mb-5" data-aos="fade-left">
          {Languages[language].Products.body.batteries.title}
        </h4>
        <div className="row mx-auto">
          {Languages[language].Products.body.batteries.products &&
            Languages[language].Products.body.batteries.products.map(
              (battery, index) => {
                return (
                  <div className="col-lg-3 col-sm-6 col-xs-12 mb-3" key={index}>
                    <div className="card products-card filter-card">
                      <img
                        src={`assets/images/${battery.image}`}
                        alt=""
                        className="card-img-top mx-auto"
                      />
                      <div className="card-body text-center">
                        <h4 className="card-title">{battery.title}</h4>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
        </div>

        {/* //-- Filters SECTION --// */}
        <hr className="my-3" />
        <h4 className="aos-init side-header mb-5" data-aos="fade-left">
          {Languages[language].Products.body.filters.title}
        </h4>
        <div className="row mx-auto">
          {Languages[language].Products.body.filters.products &&
            Languages[language].Products.body.filters.products.map(
              (filter, index) => {
                return (
                  <div className="col-lg-3 col-sm-6 col-xs-12 mb-3" key={index}>
                    <div className="card products-card filter-card">
                      <img
                        src={`assets/images/${filter.image}`}
                        alt=""
                        className="card-img-top mx-auto"
                      />
                      <div className="card-body text-center">
                        <h4 className="card-title">{filter.title}</h4>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
        </div>
      </div>
    </div>
  );
};

export default Products1;
