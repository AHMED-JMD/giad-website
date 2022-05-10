import React from "react";

const HomeServices = () => {
  return (
    <div className="home-services">
      {/* <!-- SERVICES SECTION STARTS HERE --> */}
      <div id="services-section" className="services-section">
        <div className="text-center mb-3">
          <img src="assets/images/wheel.png" width="70px" alt="" />
        </div>
        <h2 className="main-header mx-auto text-center">
          <span>باقة</span> خدماتنا
        </h2>
        <p className="main-text text-center mb-5">
          تشكيلة من بعض الخدمات التي نقدمها
        </p>
        <div className="row container-fluid mx-auto">
          <div
            className="aos-init col-lg-4 col-md-6 col-xs-12"
            data-aos="fade-left"
          >
            <div className="card-container text-center">
              <div className="card services-card">
                <img
                  src="assets/images/card-2.png"
                  alt=""
                  className="card-img-top"
                />
                <div className="card-body">
                  <h4 className="card-title text-center">
                    <div className="card-icon">
                      <img src="assets/images/selling.png" alt="" />
                    </div>
                    البيع المباشر
                  </h4>
                  <p className="card-text">
                    خدمات البيع المباشر بمقر الشركة ومعارضها المختلفة.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="aos-init col-lg-4 col-md-6 col-xs-12"
            data-aos="fade-top"
          >
            <div className="card-container">
              <div className="card services-card">
                <img
                  src="assets/images/card-1.png"
                  alt=""
                  className="card-img-top"
                />
                <div className="card-body">
                  <h4 className="card-title text-center">
                    <div className="card-icon">
                      <img src="assets/images/spare-part.png" alt="" />
                    </div>
                    قطع الغيار الأصلية
                  </h4>
                  <p className="card-text">
                    توفير قطع الغيار الأصلية (نيسان ، BYD ،هونداي، شاحنات سينو،
                    شيري وهاو).
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="aos-init col-lg-4 col-md-6 col-xs-12"
            data-aos="fade-right"
          >
            <div className="card-container">
              <div className="card services-card">
                <img
                  src="assets/images/card-3.png"
                  alt=""
                  className="card-img-top"
                />
                <div className="card-body">
                  <h4 className="card-title text-center">
                    <div className="card-icon">
                      <img src="assets/images/oil-bottle.png" alt="" />
                    </div>
                    زيوت ماكينة لوب
                  </h4>
                  <p className="card-text">
                    توفير زيوت MAKINALUBE وكل متعلقاتها (تروس، فرامل، شحوم
                    وجربوكس).
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="aos-init col-lg-4 col-md-6 col-xs-12 mx-auto"
            data-aos="fade-left"
          >
            <div className="card-container">
              <div className="card services-card">
                <img
                  src="assets/images/card-4.png"
                  alt=""
                  className="card-img-top"
                />
                <div className="card-body">
                  <h4 className="card-title text-center">
                    <div className="card-icon">
                      <img src="assets/images/warranty.png" alt="" />
                    </div>
                    خدمات الضمان
                  </h4>
                  <p className="card-text">
                    توفير خدمات الضمان لكل منتجات جياد من السيارات والشاحنات
                    وفقا لشروط الضمان الخاصة بالمنتج المعني.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="aos-init col-lg-4 col-md-6 col-xs-12 mx-auto"
            data-aos="fade-right"
          >
            <div className="card-container text-center">
              <div className="card services-card">
                <img
                  src="assets/images/card-5.png"
                  alt=""
                  className="card-img-top"
                />
                <div className="card-body">
                  <h4 className="card-title text-center">
                    <div className="card-icon">
                      <img src="assets/images/maintenance.png" alt="" />
                    </div>
                    الصيانة
                  </h4>
                  <p className="card-text">
                    الصيانة بمعايير عالية الجودة ومتوافقة مع شهادات ال ISO ويتم
                    ذلك بواسطة الورش المتخصصة.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
