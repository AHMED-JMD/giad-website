import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      {/* <!-- FOOTER STARTS HERE  -->                    */}
      <section className="container-fluid upper-footer pb-2 mx-auto justify-content-center">
        <div className="row px-0  mx-auto text-center pb-5">
          <div className="col-12 giad-shortcut mb-5">
            <img
              src="assets/images/white-logo.png"
              className="mx-auto mb-4"
              width="100px"
              alt=""
            />
            <p>
              شركة رائدة تعمل في مجال خدمات صيانة السيارات وخدمات ما بعد البيع
            </p>
          </div>
          <div className="col-lg-4 col-sm-6 col-xs-12">
            <h2>روابط سريعة</h2>
            <p>
              <a href="/about">من نحن</a>
            </p>
            <p>
              <a href="/products">المنتجات</a>
            </p>
            <p>
              <a href="/services-centers">مراكز الخدمات</a>
            </p>
            <p>
              <a href="/contact">تواصل معنا</a>
            </p>
          </div>
          <div className="col-lg-4 col-sm-6 col-xs-12">
            <h2>التواصل</h2>
            <p>الهاتف : 2605</p>
            <p>فاكس: 1831476981</p>
            <p>
              البريد الإلكتروني:{" "}
              <a href="mailto:info@mail.com">info@giadmotorservices.com</a>
            </p>
            <p>الخرطوم, جنوب غرب سباق الخيل.</p>
          </div>
          <div className="col-lg-4 col-sm-6 col-xs-12">
            <h2>تابعنا على مواقع التواصل</h2>
            <li className="social-media">
              <ul>
                <li>
                  <a href="https://www.facebook.com/giadmsco/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
              </ul>
            </li>
            <a className="btn btn-effect mb-4" href="/contact">
              لديك أي أسئلة؟
            </a>{" "}
            <li className="nav-item opening-hour ">
              <i className="far fa-clock mr-0"></i>
              <span>الأحد - الخميس: 3pm - 7am</span>
            </li>
          </div>
        </div>
      </section>
      <footer className="container-fluid mx-auto text-center">
        <div className="row items-align-center">
          <div className="col-lg-6 col-sm-12 mb-1">
            <p className="text-center">
              كل الحقوق محفوظة ©{" "}
              <script>document.write(new Date().getFullYear())</script>
              <span> جياد للسيارات </span>
            </p>
          </div>
          <div className="col-lg-6 col-sm-12">
            <a href="#nowhere">سياسة الخصوصية</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
