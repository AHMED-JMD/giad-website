import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      {/* <!-- INNER PAGE BANNER --> */}
      <div className="wt-bnr-inr overlay-wraper bg-center">
        <div className="overlay-main site-bg-primary opacity-09"></div>
        <div className="container">
          <div className="wt-bnr-inr-entry">
            <div className="banner-title-outer">
              <div className="banner-title-name">
                <h2 className="site-text-white">404</h2>
              </div>
            </div>
            {/* <!-- BREADCRUMB ROW -->                             */}

            <div>
              <ul className="wt-breadcrumb breadcrumb-style-2">
                <li>
                  <Link to="/">الرئيسية</Link>
                </li>
                <li>404</li>
              </ul>
            </div>

            {/* <!-- BREADCRUMB ROW END -->                         */}
          </div>
        </div>
      </div>
      {/* <!-- 404 SECTION --> */}
      <div className="error-section-container">
        <div className="error-section text-center mx-auto my-5">
          <img src="/assets/images/wheel.png" width="100px" alt="" />
          <h2>
            <span className="dot"></span>خطأ<span class="dot"></span>
          </h2>
          <h1>404</h1>
          <p className="mb-3">الصفحة غير موجودة</p>
          <a href="/" class="btn main-btn">
            الرجوع إلى الرئيسية
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
