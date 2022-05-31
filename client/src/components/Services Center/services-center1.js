import React, { useContext } from "react";
import { Languages } from "../../context/languages";
import { LangContext } from "../../context/langContext";

const ServicesCenter1 = () => {
  const { language } = useContext(LangContext);

  return (
    <div className="services-center1" dir={`${Languages[language].dir}`}>
      {/* <!-- OUR SUPPLIERS SECTION --> */}
      <div className="services-centers-section mx-auto text-center py-5">
        <div className="text-center mb-3">
          <img src="assets/images/wheel.png" width="70px" alt="" />
        </div>
        <h2 className="main-header text-center mb-5">
          <span>{Languages[language].ServicesCenter.header[2]}</span>{" "}
          {Languages[language].ServicesCenter.header[3]}
        </h2>
        <div
          className="aos-init agents-table mx-auto table-responsive-md"
          data-aos="fade-left"
        >
          <table className="table table-striped table-hover thead-dark text-center table-borderless">
            <thead>
              <tr>
                <th>{Languages[language].ServicesCenter.body.tr1[0]}</th>
                <th>{Languages[language].ServicesCenter.body.tr1[1]}</th>
                <th>{Languages[language].ServicesCenter.body.tr1[2]}</th>
                <th>{Languages[language].ServicesCenter.body.tr1[3]}</th>
                <th>{Languages[language].ServicesCenter.body.tr1[4]}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{Languages[language].ServicesCenter.body.tr2[0]}</td>
                <td>{Languages[language].ServicesCenter.body.tr2[1]}</td>
                <td>{Languages[language].ServicesCenter.body.tr2[2]}</td>
                <td>0123205061 0123205068</td>
                <td>0157807334</td>
              </tr>
              <tr>
                <td>{Languages[language].ServicesCenter.body.tr3[0]}</td>
                <td>{Languages[language].ServicesCenter.body.tr3[1]}</td>
                <td>{Languages[language].ServicesCenter.body.tr3[2]}</td>
                <td>0183463533</td>
                <td>018348630</td>
              </tr>
              <tr>
                <td>{Languages[language].ServicesCenter.body.tr4[0]} </td>
                <td>{Languages[language].ServicesCenter.body.tr4[1]}</td>
                <td>{Languages[language].ServicesCenter.body.tr4[2]}</td>
                <td>0183485191</td>
                <td>-</td>
              </tr>
              <tr>
                <td>{Languages[language].ServicesCenter.body.tr5[0]} </td>
                <td>{Languages[language].ServicesCenter.body.tr5[1]}</td>
                <td>{Languages[language].ServicesCenter.body.tr5[2]}</td>
                <td>0185210176 0185212840</td>
                <td>-</td>
              </tr>
              <tr>
                <td>{Languages[language].ServicesCenter.body.tr6[0]}</td>
                <td>{Languages[language].ServicesCenter.body.tr6[1]}</td>
                <td>{Languages[language].ServicesCenter.body.tr6[2]}</td>
                <td>0155119090 0912391792</td>
                <td>0155123000</td>
              </tr>
              <tr>
                <td>{Languages[language].ServicesCenter.body.tr7[0]}</td>
                <td>{Languages[language].ServicesCenter.body.tr7[1]}</td>
                <td>{Languages[language].ServicesCenter.body.tr7[2]}</td>
                <td>0912987194</td>
                <td>0211827177</td>
              </tr>
              <tr>
                <td>{Languages[language].ServicesCenter.body.tr8[0]}</td>
                <td>{Languages[language].ServicesCenter.body.tr8[1]}</td>
                <td>{Languages[language].ServicesCenter.body.tr8[2]}</td>
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
