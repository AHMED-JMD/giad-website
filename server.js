const express = require("express");
const app = express();
const { sendContactMail, verifyTransport } = require("./mail");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const xssFilter = require("xss-filters");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const categoryRoutes = require("./routes/categoryRoutes");

//middlewares
app.use(express.static("client/build"));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
//url validation middleware to catch malformed URLs and return a 400 error
app.use((req, res, next) => {
  const rawPath = (req.originalUrl || req.url || "").split("?")[0];
  try {
    decodeURIComponent(rawPath);
    return next();
  } catch (e) {
    return res.status(400).json({ msg: "Malformed URL" });
  }
});

//api routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);

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

  if (!name || !text || !phoneNum) {
    return res.status(400).json({ msg: "please enter all feilds" });
  }

  email = email || "";
  subject = subject || "Contact Form Message";

  //filter input feilds
  ((name = xssFilter.inHTMLData(name)),
    (email = xssFilter.inHTMLData(email)),
    (subject = xssFilter.inHTMLData(subject)),
    (text = xssFilter.inHTMLData(text)),
    (phoneNum = xssFilter.inHTMLData(phoneNum)));

  // I need to verify email address soon

  try {
    sendContactMail(name, email, subject, text, phoneNum, (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).json({ err1: "internal error" });
      } else {
        res.json("تم ارسال الرسالة بنجاح, سيتم التواصل قي اقرب وقت ممكن ");
      }
    });
  } catch (e) {
    console.log("error sending email", e);
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.use((err, req, res, next) => {
  if (!err) return next();
  return res.status(500).json({ msg: "Server error" });
});

//listening to port
const port = process.env.PORT || 7892;

const startServer = async () => {
  const dbConnected = await connectDB();

  if (!dbConnected) {
    console.warn(
      "Server started without MySQL. Check MYSQL_* variables and database access.",
    );
  }

  // Surface a bad mail setup at boot instead of when a user tries to send.
  try {
    await verifyTransport();
    console.log("SMTP transporter ready");
  } catch (mailErr) {
    console.warn(`SMTP transporter unavailable: ${mailErr.message}`);
  }

  app.listen(port, () => console.log(`server running on port ${port}`));
};

startServer();
