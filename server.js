const express = require("express");
const app = express();
const sendMail = require("./mail");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const xssFilter = require("xss-filters");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");

//connect to MongoDB
connectDB();

//middlewares
app.use(express.static("client/build"));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//api routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

// Handle multer and general API errors consistently
app.use((err, req, res, next) => {
  if (!err) return next();

  if (err.code === "LIMIT_FILE_SIZE") {
    return res.status(400).json({ msg: "Image must be 5MB or less" });
  }

  if (err.message === "Only image files are allowed") {
    return res.status(400).json({ msg: err.message });
  }

  return res.status(500).json({ msg: "Server error" });
});

//post rout
app.post("/email", async (req, res, next) => {
  let { name, email, subject, text, phoneNum } = req.body;

  if (!name || !email || !subject || !text || !phoneNum) {
    return res.status(400).json({ msg: "please enter all feilds" });
  }
  //filter input feilds
  ((name = xssFilter.inHTMLData(name)),
    (email = xssFilter.inHTMLData(email)),
    (subject = xssFilter.inHTMLData(subject)),
    (text = xssFilter.inHTMLData(text)),
    (phoneNum = xssFilter.inHTMLData(phoneNum)));

  // I need to verify email address soon

  try {
    sendMail(name, email, subject, text, phoneNum, (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).json({ err1: "internal error" });
      } else {
        res.json("تم ارسال الرسالة بنجاح, سيتم التواصل قي اقرب وقت ممكن ");
      }
    });
  } catch (e) {
    console.log("error in mailgun ", e);
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

//listening to port
const port = process.env.PORT || 7892;
app.listen(port, () => console.log(`server running on port ${port}`));
