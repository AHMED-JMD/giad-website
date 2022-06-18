import React, { useContext } from "react";
import { Languages } from "../../context/languages";
import { LangContext } from "../../context/langContext";
import Box from "@mui/material/Box";
import ReactPlayer from "react-player"
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
    maxWidth: 700,
    width: "100%",
    height: 400,
    bgcolor: "white",
    boxShadow: 24,
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
        <ReactPlayer
          width={'100%'}
          height={'100%'}
            controls={true}
            url={
              language === 'Ar'? 'https://www.youtube.com/watch?v=rBuORKUvnC0':
              'https://www.youtube.com/watch?v=rMBqRgH3rRw'}
            />
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
            </div>
          </div>
          <div
            className="aos-init col-lg-6 col-md-12 px-0 mx-auto text-center"
            data-aos="fade-right">
            <div className="aboutus-img">
              <img src="assets/images/giad-family.png" alt="" />
              <div className="video-icon">
                <a
                  data-src="https://www.youtube.com/watch?v=rMBqRgH3rRw"
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

export default About1;
