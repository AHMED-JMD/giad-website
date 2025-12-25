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
                <th>{Languages[language].ServicesCenter.table.thead[0]}</th>
                <th>{Languages[language].ServicesCenter.table.thead[1]}</th>
                <th>{Languages[language].ServicesCenter.table.thead[2]}</th>
                <th>{Languages[language].ServicesCenter.table.thead[3]}</th>
                <th>{Languages[language].ServicesCenter.table.thead[4]}</th>
              </tr>
            </thead>
            
            <tbody>
              <tr>
                <th colSpan="5" className="table-active">
                  {Languages[language].ServicesCenter.table.thead2[0]}
                </th>
              </tr>
              <tr>
                <td>{Languages[language].ServicesCenter.table.trC1[0]}</td>
                <td>{Languages[language].ServicesCenter.table.trC1[1]}</td>
                <td>{Languages[language].ServicesCenter.table.trC1[2]}</td>
                <td>{Languages[language].ServicesCenter.table.trC1[3]}</td>
                <td>{Languages[language].ServicesCenter.table.trC1[4]}</td>
              </tr>
              <tr>
                <td>{Languages[language].ServicesCenter.table.trC2[0]}</td>
                <td>{Languages[language].ServicesCenter.table.trC2[1]}</td>
                <td>{Languages[language].ServicesCenter.table.trC2[2]}</td>
                <td>{Languages[language].ServicesCenter.table.trC2[3]}</td>
                <td>{Languages[language].ServicesCenter.table.trC2[4]}</td>
              </tr>
              <tr>
                <td>{Languages[language].ServicesCenter.table.trC3[0]} </td>
                <td>{Languages[language].ServicesCenter.table.trC3[1]}</td>
                <td>{Languages[language].ServicesCenter.table.trC3[2]}</td>
                <td>{Languages[language].ServicesCenter.table.trC3[3]}</td>
                <td>{Languages[language].ServicesCenter.table.trC3[4]}</td>
              </tr>
              <tr>
                <td>{Languages[language].ServicesCenter.table.trC4[0]} </td>
                <td>{Languages[language].ServicesCenter.table.trC4[1]}</td>
                <td>{Languages[language].ServicesCenter.table.trC4[2]}</td>
                <td>{Languages[language].ServicesCenter.table.trC4[3]}</td>
                <td>{Languages[language].ServicesCenter.table.trC4[4]}</td>
              </tr>
              <tr>
                <td>{Languages[language].ServicesCenter.table.trC5[0]}</td>
                <td>{Languages[language].ServicesCenter.table.trC5[1]}</td>
                <td>{Languages[language].ServicesCenter.table.trC5[2]}</td>
                <td>{Languages[language].ServicesCenter.table.trC5[3]}</td>
                <td>{Languages[language].ServicesCenter.table.trC5[4]}</td>
              </tr>
              <tr>
                <th colSpan="5" className="table-active">
                  {Languages[language].ServicesCenter.table.thead2[1]}
                </th>
              </tr>
              <tr>
                <td>{Languages[language].ServicesCenter.table.trA1[0]}</td>
                <td>{Languages[language].ServicesCenter.table.trA1[1]}</td>
                <td>{Languages[language].ServicesCenter.table.trA1[2]}</td>
                <td>{Languages[language].ServicesCenter.table.trA1[3]}</td>
                <td>{Languages[language].ServicesCenter.table.trA1[4]}</td>
              </tr>
              <tr>
                <td>{Languages[language].ServicesCenter.table.trA2[0]}</td>
                <td>{Languages[language].ServicesCenter.table.trA2[1]}</td>
                <td>{Languages[language].ServicesCenter.table.trA2[2]}</td>
                <td>{Languages[language].ServicesCenter.table.trA2[3]}</td>
                <td>{Languages[language].ServicesCenter.table.trA2[4]}</td>
              </tr>
              <tr>
                <td>{Languages[language].ServicesCenter.table.trA3[0]}</td>
                <td>{Languages[language].ServicesCenter.table.trA3[1]}</td>
                <td>{Languages[language].ServicesCenter.table.trA3[2]}</td>
                <td>{Languages[language].ServicesCenter.table.trA3[3]}</td>
                <td>{Languages[language].ServicesCenter.table.trA3[4]}</td>
              </tr>
              <tr>
                <td>{Languages[language].ServicesCenter.table.trA4[0]}</td>
                <td>{Languages[language].ServicesCenter.table.trA4[1]}</td>
                <td>{Languages[language].ServicesCenter.table.trA4[2]}</td>
                <td>{Languages[language].ServicesCenter.table.trA4[3]}</td>
                <td>{Languages[language].ServicesCenter.table.trA4[4]}</td>
              </tr>
              <tr>
                <td>{Languages[language].ServicesCenter.table.trA5[0]}</td>
                <td>{Languages[language].ServicesCenter.table.trA5[1]}</td>
                <td>{Languages[language].ServicesCenter.table.trA5[2]}</td>
                <td>{Languages[language].ServicesCenter.table.trA5[3]}</td>
                <td>{Languages[language].ServicesCenter.table.trA5[4]}</td>
              </tr>
              <tr>
                <td>{Languages[language].ServicesCenter.table.trA6[0]}</td>
                <td>{Languages[language].ServicesCenter.table.trA6[1]}</td>
                <td>{Languages[language].ServicesCenter.table.trA6[2]}</td>
                <td>{Languages[language].ServicesCenter.table.trA6[3]}</td>
                <td>{Languages[language].ServicesCenter.table.trA6[4]}</td>
              </tr>
              <tr>
                <td>{Languages[language].ServicesCenter.table.trA7[0]}</td>
                <td>{Languages[language].ServicesCenter.table.trA7[1]}</td>
                <td>{Languages[language].ServicesCenter.table.trA7[2]}</td>
                <td>{Languages[language].ServicesCenter.table.trA7[3]}</td>
                <td>{Languages[language].ServicesCenter.table.trA7[4]}</td>
              </tr>
              <tr>
                <td>{Languages[language].ServicesCenter.table.trA8[0]}</td>
                <td>{Languages[language].ServicesCenter.table.trA8[1]}</td>
                <td>{Languages[language].ServicesCenter.table.trA8[2]}</td>
                <td>{Languages[language].ServicesCenter.table.trA8[3]}</td>
                <td>{Languages[language].ServicesCenter.table.trA8[4]}</td>
              </tr>
              <tr>
                <td>{Languages[language].ServicesCenter.table.trA9[0]}</td>
                <td>{Languages[language].ServicesCenter.table.trA9[1]}</td>
                <td>{Languages[language].ServicesCenter.table.trA9[2]}</td>
                <td>{Languages[language].ServicesCenter.table.trA9[3]}</td>
                <td>{Languages[language].ServicesCenter.table.trA9[4]}</td>
              </tr>
              <tr>
                <td>{Languages[language].ServicesCenter.table.trA10[0]}</td>
                <td>{Languages[language].ServicesCenter.table.trA10[1]}</td>
                <td>{Languages[language].ServicesCenter.table.trA10[2]}</td>
                <td>{Languages[language].ServicesCenter.table.trA10[3]}</td>
                <td>{Languages[language].ServicesCenter.table.trA10[4]}</td>
              </tr>
              <tr>
                <td>{Languages[language].ServicesCenter.table.trA11[0]}</td>
                <td>{Languages[language].ServicesCenter.table.trA11[1]}</td>
                <td>{Languages[language].ServicesCenter.table.trA11[2]}</td>
                <td>{Languages[language].ServicesCenter.table.trA11[3]}</td>
                <td>{Languages[language].ServicesCenter.table.trA11[4]}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ServicesCenter1;
