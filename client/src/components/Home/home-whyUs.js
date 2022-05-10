import React from "react";

const HomeWhyUs = () => {
  return (
    <div className="home-whyUs">
      {/* <!-- Why Choose Area STARTS Here --> */}
      <section className="whygiad-section py-5">
        <div className="container">
          <div className="text-center mb-3">
            <img src="assets/images/wheel.png" width="70px" alt="" />
          </div>
          <h2 className="main-header mx-auto text-center">
            <span>لماذا</span> جياد لخدمات السيارات<span>؟</span>
          </h2>
          <p className="main-text text-center mb-5">
            إليك الأسباب التي ستجعلك عميلا لدينا
          </p>
          <div className="row gutters-3">
            <div className="col-lg-4 mb-4">
              <div
                className="aos-init why-choose-box-layout2"
                data-aos="fade-left"
              >
                <div className="item-icon">
                  <i className="fas fa-check"></i>
                </div>
                <div className="item-content">
                  <h3 className="item-title">عمال موثوقين</h3>
                  <p>
                    لنا عاملين موثوقين، مثابرين، وينجزون أعمالهم في أقل فترة
                    ممكنة، يتم عمل ورش تأهيلية لهم مما يجعلهم أكفاء.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div
                className="aos-init why-choose-box-layout2"
                data-aos="fade-top"
              >
                <div className="item-icon">
                  <i className="fas fa-check"></i>
                </div>
                <div className="item-content">
                  <h3 className="item-title">فعالية من حيث التكلفة</h3>
                  <p>
                    خدمات متوفرة، جودة عالية، التزام في التنفيذ، ودقة في العمل،
                    كل هذا بأقل تكلفة ممكنة.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div
                className="aos-init why-choose-box-layout2"
                data-aos="fade-right"
              >
                <div className="item-icon">
                  <i className="fas fa-check"></i>
                </div>
                <div className="item-content">
                  <h3 className="item-title">إرضاء 100%</h3>
                  <p>
                    جميع الخدمات المقدمة تخضع لأعلى معايير الجودة والسلامة مما
                    يجعلها الخيار الأول لتحقيق سعادة عملائنا.
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

export default HomeWhyUs;
