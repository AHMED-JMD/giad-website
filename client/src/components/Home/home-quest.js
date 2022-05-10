import React from "react";

const HomeQuestions = () => {
  return (
    <div className="home-questions">
      {/* <!-- Frequently asked questions starts Here --> */}
      <section className="service-faq py-5">
        <div className="text-center mb-3">
          <img src="assets/images/wheel.png" width="70px" alt="" />
        </div>
        <h2 className="main-header text-center">
          <span>الأسئلة </span>الشائعة
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
                  ما هي الخدمات والمنتجات التي تقدمها شركة جياد لخدمات السيارات
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
                      خدمة الضمان والصيانة لمنتجات جياد لخدمات السيارات وجياد
                      للشاحنات.{" "}
                    </li>
                    <li>خدمة الصيانة</li>
                    <li>مبيعات قطع الغيار</li>
                    <li>مبيعات الزيوت والشحوم</li>
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
                  من هم وكلاء الصيانة لدينا{" "}
                </h5>
              </div>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordion"
              >
                <div className="card-body">
                  يوجد 5 وكلاء بالولايات الآتية:
                  <ul>
                    <li>بورتسودان</li>
                    <li>الأبيض</li>
                    <li>مدني</li>
                    <li>القضارف</li>
                    <li>كوستي</li>
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
                  ما هى أنواع الإسبيرات المتوفرة لدى الشركة
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
                    <li>هونداي</li>
                    <li>BYD</li>
                    <li>سانق يونق</li>
                    <li>هاو</li>
                    <li>دونق فينق</li>
                    <li>شيري</li>
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
                  ما هى أنواع الزيوت المتوفرة من ماكينة لوب
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
                    زيوت محركات البنزين - زيوت الديزل - زيوت التروس - زيوت
                    هايدرولك - شحوم - زيوت الفرامل - سوائل تبريد - اي زيوت خاصة
                    اخرى
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
