import React from "react";

const ServicesCenter1 = () => {
  return (
    <div className="services-center1">
      {/* <!-- OUR SUPPLIERS SECTION --> */}
      <div className="services-centers-section mx-auto text-center py-5">
        <div className="text-center mb-3">
          <img src="assets/images/wheel.png" width="70px" alt="" />
        </div>
        <h2 className="main-header text-center mb-5">
          <span>وكلائنا</span> المعتمدين
        </h2>
        <div
          className="aos-init agents-table mx-auto table-responsive-md"
          data-aos="fade-left"
        >
          <table className="table table-striped table-hover thead-dark text-center table-borderless">
            <thead>
              <tr>
                <th>Agent</th>
                <th>المدينة</th>
                <th>العنوان</th>
                <th>الهاتف</th>
                <th>الفاكس</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>مركز قطع الغيار</td>
                <td>الخرطوم</td>
                <td>الخرطوم جنوب، غرب مجمع ساريا الصناعي</td>
                <td>0123205061 0123205068</td>
                <td>0157807334</td>
              </tr>
              <tr>
                <td>الورشة الرئيسية (مركز تبيان)</td>
                <td>الخرطوم</td>
                <td>الخرطوم جنوب، غرب مجمع ساريا الصناعي</td>
                <td>0183463533</td>
                <td>018348630</td>
              </tr>
              <tr>
                <td>البربري الهندسية </td>
                <td>الخرطوم</td>
                <td>الخرطوم جنوب، جنوب صينية إبراهيم شمس الدين</td>
                <td>0183485191</td>
                <td>-</td>
              </tr>
              <tr>
                <td>البربري الهندسية </td>
                <td>بحري</td>
                <td>شارع مستشفى الأمل شمال س للغلال</td>
                <td>0185210176 0185212840</td>
                <td>-</td>
              </tr>
              <tr>
                <td>شركة البحرالأحمر </td>
                <td>الخرطوم</td>
                <td>الطريق السريع غرب الميناء البري</td>
                <td>0155119090 0912391792</td>
                <td>0155123000</td>
              </tr>
              <tr>
                <td>جامعة وادي النيل</td>
                <td>عطبرة</td>
                <td>عطبرة جوار المطاحن الجديدة</td>
                <td>0912987194</td>
                <td>0211827177</td>
              </tr>
              <tr>
                <td>أوسيام</td>
                <td>بورتسودان</td>
                <td>بورتسودان جوار مطاحن غلال عبدربه</td>
                <td>0912310460</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ServicesCenter1;
