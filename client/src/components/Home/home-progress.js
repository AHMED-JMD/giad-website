import React, { useContext } from "react";
import { LangContext } from "../../context/langContext";

const HomeProgress = () => {
  const { language } = useContext(LangContext);

  return (
    <div className="home-progress">
      {/* <!-- Progress Area Start Here --> */}
      <section className="progress-wrap-layout1 section-padding-12">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8 col-12">
              <div
                className="aos-init progress-box-layout1 d-flex align-items-center flex-column justify-content-center"
                data-aos="fade-left"
              >
                <div><i style={{fontSize: '50px'}} className='bx bx-hard-hat'></i></div>
                <h2 className="item-title">
                  كل المتخصصين لدينا يمتلكون أعلى درجات الخبرة والتدريب
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeProgress;
