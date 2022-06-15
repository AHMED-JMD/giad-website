import React, { useContext } from "react";
import { Languages } from "../../context/languages";
import { LangContext } from "../../context/langContext";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const About1 = () => {
  const { language } = useContext(LangContext);

  //modal styles
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    height: 500,
    bgcolor: "black",
    border: "1px solid #000",
    boxShadow: 24,
    p: 4,
  };
  //modal state
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="about1" dir={`${Languages[language].dir}`}>
      {/* <!-- Modal --> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              onClick={handleClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
            {/* aspest ratio */}
            <video
              width="600"
              height="400"
              controls
              id="videoTag"
              onContextMenu={(e) => e.preventDefault()}
            >
              <source src="https://www.youtube.com/embed/hKCCJFLnh-8" />
            </video>
          </Typography>
        </Box>
      </Modal>

      {/* <!-- ABOUT US SECTION STARTS HERE --> */}
      <div className="aboutus-section py-5 mb-5">
        <div className="text-center mb-3">
          <img src="assets/images/wheel.png" width="70px" alt="" />
        </div>
        <h2 className="main-header mx-auto text-center">
          <span> {Languages[language].About.body1.header[0]}</span>{" "}
          {Languages[language].About.body1.header[1]}{" "}
        </h2>
        <p className="main-text text-center mb-5">
          {Languages[language].About.body1.header[2]}{" "}
        </p>
        <div className="container-fluid row mx-auto">
          <div className="aos-init col-lg-6 col-md-12" data-aos="fade-left">
            <p>
              <span className="bold">
                {Languages[language].About.body1.body[0]}{" "}
              </span>
            </p>
            <p>{Languages[language].About.body1.body[1]} </p>
          </div>
          <div className="col-lg-6 col-md-12 mx-auto text-center img-container">
            <div className="img-bg"></div>
            <div className="aos-init aboutus-img" data-aos="fade-right">
              <img
                className="aboutus-img"
                src="assets/images/giad-family.png"
                alt=""
              />
              <div className="video-icon">
                <a
                  onClick={handleOpen}
                  data-src="https://www.youtube.com/embed/hKCCJFLnh-8"
                >
                  {" "}
                  <i className="fas fa-play-circle"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- --> */}
    </div>
  );
};

export default About1;
