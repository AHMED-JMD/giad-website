import React from "react";
import { Link } from "react-router-dom";
import Footer from "../footer";
import Products1 from "./products1";

const Products = () => {
  return (
    <div className="products">
      <div className="wt-bnr-inr overlay-wraper bg-center">
        <div className="overlay-main site-bg-primary opacity-09"></div>
        <div className="container">
          <div className="wt-bnr-inr-entry">
            <div className="banner-title-outer">
              <div className="banner-title-name">
                <h2 className="site-text-white">المنتجات</h2>
              </div>
            </div>
            {/* <!-- BREADCRUMB ROW -->                             */}

            <div>
              <ul className="wt-breadcrumb breadcrumb-style-2">
                <li>
                  <Link to="/">الرئيسية</Link>
                </li>
                <li>المنتجات</li>
              </ul>
            </div>

            {/* <!-- BREADCRUMB ROW END -->                         */}
          </div>
        </div>
      </div>
      <Products1 />
      <Footer />
    </div>
  );
};

export default Products;
