require("dotenv").config();
const nodemailer = require("nodemailer");

const gmailUser = process.env.GMAIL_USER;
const gmailPass = process.env.GMAIL_APP_PASSWORD || process.env.GMAIL_PASS;
const receiverEmail =
  process.env.CONTACT_RECEIVER_EMAIL || "contact.giadms@gmail.com";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailUser,
    pass: gmailPass,
  },
});

const sendMail = (name, email, subject, text, phoneNum, cb) => {
  if (!gmailUser || !gmailPass) {
    cb(
      new Error(
        "Gmail transporter is not configured. Set GMAIL_USER and GMAIL_APP_PASSWORD.",
      ),
      null,
    );
    return;
  }

  const safeSubject = subject || "Contact Form Message";
  const normalizedEmail = (email || "").trim();

  const data = {
    from: `"GIAD Website" <${gmailUser}>`,
    to: receiverEmail,
    subject: "Message From The Website",
    text: `name is ${name}\nsubject is ${safeSubject}\nmessage is ${text}\nphone number is ${phoneNum}`,
  };

  if (normalizedEmail) {
    data.replyTo = normalizedEmail;
  }

  transporter.sendMail(data, (error, info) => {
    if (error) {
      cb(error, null);
      return;
    }

    cb(null, info);
  });
};

module.exports = sendMail;
