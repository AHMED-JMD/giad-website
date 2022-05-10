import React from "react";

const HomeProgress = () => {
  return (
    <div className="home-progress">
      {/* <!-- Progress Area Start Here --> */}
      <section className="progress-wrap-layout1 section-padding-12">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8 col-12">
              <div
                className="aos-init progress-box-layout1"
                data-aos="fade-left"
              >
                <h2 className="item-title">
                  كل المتخصصين لدينا يمتلكون أعلى درجات الخبرة والتدريب
                </h2>
                <div className="item-content">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="counter-item">
                        <div className="counter count-number" data-num="29572">
                          +29572
                        </div>
                        <div className="count-title">مشروع منجز</div>
                        <div className="bg-icon">
                          <i className="far fa-thumbs-up"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="counter-item">
                        <div className="counter count-number" data-num="14384">
                          +14384
                        </div>
                        <div className="count-title">عميل متفائل</div>
                        <div className="bg-icon">
                          <i className="far fa-smile"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeProgress;
