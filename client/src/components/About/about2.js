import React from "react";

const About2 = () => {
  return (
    <div className="about2">
      <div className="another-about-section">
        <div className="row container mx-auto">
          <div
            className="aos-init col-lg-6 col-sm-12 mb-3"
            data-aos="fade-left"
          >
            <h2>
              <i className="fas fa-check-circle mr-2"></i>الرؤية
            </h2>
            <p>
              أن نكون الرواد إقليميا في تقديم خدمات الصيانة للمركبات بمعايير
              عالمية.
            </p>
          </div>
          <div
            className="aos-init col-lg-6 col-sm-12 mb-3"
            data-aos="fade-right"
          >
            <h2>
              <i className="fas fa-check-circle mr-2"></i>الرسالة
            </h2>
            <p>
              تقديم خدمات الصيانة بمعايير عالمية مستعينين بكوادرنا المؤهلة
              واستخدام أحدث الأنظمة مع توفير وتوطين بعض قطع الغيار بأسعار منافسة
              وعمل شراكات متميزة.
            </p>
          </div>
          <div
            className="aos-init col-lg-6 col-sm-12 mb-3"
            data-aos="fade-left"
          >
            <h2>
              <i className="fas fa-check-circle mr-2"></i>القيم
            </h2>
            <ul>
              <li>
                <i className="fa"></i>قيادة ملهمة.
              </li>
              <li>
                <i className="fa"></i>العمل بروح الفريق.
              </li>
              <li>
                <i className="fa"></i>الإلتزام.
              </li>
              <li>
                <i className="fa"></i>صداقة مع البيئة.
              </li>
              <li>
                <i className="fa"></i>الإبداع والابتكار.
              </li>
            </ul>
          </div>

          {/* <!-- --> */}
          <div
            className="aos-init col-lg-6 col-sm-12 mb-3"
            data-aos="fade-right"
          >
            <h2>
              <i className="fas fa-check-circle mr-2"></i>المميزات والشهادات
            </h2>
            <ul>
              <li>تقوم الشركة بعمل كورسات لتأهيل العاملين بها. </li>
              <li>للعاملين بها سوق تعاوني بأسعار مدعومة .</li>
              <li>حصلت الشركة على شهادة ال ISO في العام 2006.</li>
              <li>
                حصلت على التوكيل الحصري والأقليمي لزيوت MAKINA LUBE في العام
                2020.
              </li>
            </ul>
          </div>
          {/* <!--    --> */}

          <div className="aos-init col-12 mb-3" data-aos="fade-top">
            <h2>
              <i className="fas fa-check-circle mr-2"></i>الإنجازات
            </h2>
            <ul>
              <li>
                قامت الشركة بشراكات ذكية مع MAN الألمانية و RENAULT الفرنسية
                وشركات سيارات مثل هونداي و BYD الصينية.{" "}
              </li>
              <li>
                لشركة جياد شراكات تشغيلية واستثمارية مع القوات المسلحة في ورشة
                الشجرة لصيانة الشاحنات العسكرية وإعادة تأهيل عربات الدفع
                الرباعي، وورشة كافوري لصيانة العربات القيادية والوظيفية ، وأيضا
                هنالك شراكة استثمارية بشركة NTC لصيانة السيارات مع القوات
                المسلحة.
              </li>
              <li>
                ساهمت في دعم الأسر الفقيرة وتأهيل البنية التحتية ودعم النوادي
                والمنتديات الثقافية في محيط الشركة.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About2;
