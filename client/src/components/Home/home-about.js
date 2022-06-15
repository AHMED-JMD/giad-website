import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { Link } from "react-router-dom";
import { Languages } from "../../context/languages";
import { LangContext } from "../../context/langContext";

const HomeAbout = () => {
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
    <div className="home-about" dir={`${Languages[language].dir}`}>
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
      <div className="aboutus-section container py-5" id="aboutus-section">
        <div className="text-center mb-3">
          <img src="assets/images/wheel.png" width="70px" alt="" />
        </div>
        <h2 className="main-header mx-auto text-center">
          <span> {Languages[language].Home.HomeAbout.header[0]}</span>{" "}
          {Languages[language].Home.HomeAbout.header[1]}{" "}
        </h2>
        <p className="main-text text-center mb-5">
          {Languages[language].Home.HomeAbout.header[2]}{" "}
        </p>
        <div className="container-fluid row mx-auto">
          <div className="aos-init col-lg-6 col-md-12" data-aos="fade-left">
            <p>
              <span>{Languages[language].Home.HomeAbout.body[0]}</span>
            </p>
            <p>{Languages[language].Home.HomeAbout.body[1]}</p>
            <div className="text-center">
              <a
                className="btn btn-effect mx-auto text-center mb-4"
                href="/contact"
              >
                {Languages[language].Home.HomeAbout.AboutBtn}
              </a>
            </div>
          </div>
          <div
            className="aos-init col-lg-6 col-md-12 px-0 mx-auto text-center"
            data-aos="fade-right"
          >
            <div className="aboutus-img">
              <img src="assets/images/giad-family.png" alt="" />
              <div className="video-icon">
                <a
                  data-src="https://www.youtube.com/embed/hKCCJFLnh-8"
                  onClick={handleOpen}
                >
                  <i className="bx bx-play-circle"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
