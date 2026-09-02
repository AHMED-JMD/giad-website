require("dotenv").config();
const nodemailer = require("nodemailer");

// Domain email (SMTP) settings. These point at the mail server that hosts the
// company domain (e.g. mail.giadms.com) instead of Gmail, so mail is sent from
// a real @domain address and is far less likely to be flagged as spoofed.
const smtpHost = process.env.SMTP_HOST;
const smtpPort = Number(process.env.SMTP_PORT) || 465;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASSWORD;

// Port 465 is implicit TLS. 587/25 start plain and upgrade with STARTTLS.
const smtpSecure =
  process.env.SMTP_SECURE !== undefined
    ? String(process.env.SMTP_SECURE).toLowerCase() === "true"
    : smtpPort === 465;

const fromName = process.env.MAIL_FROM_NAME || "GIAD Website";
const fromAddress = process.env.MAIL_FROM_ADDRESS || smtpUser;
const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || fromAddress;

const isConfigured = () => Boolean(smtpHost && smtpUser && smtpPass);

const missingConfigError = () =>
  new Error(
    "SMTP transporter is not configured. Set SMTP_HOST, SMTP_USER and SMTP_PASSWORD.",
  );

let transporter = null;

const getTransporter = () => {
  if (!isConfigured()) {
    return null;
  }

  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      // Many shared hosting mail servers ship a certificate issued for the
      // hosting provider rather than the customer domain. Opt out only when
      // SMTP_ALLOW_SELF_SIGNED is explicitly enabled.
      tls: {
        rejectUnauthorized:
          String(process.env.SMTP_ALLOW_SELF_SIGNED).toLowerCase() !== "true",
      },
    });
  }

  return transporter;
};

// Verify credentials/connectivity at boot so misconfiguration shows up in the
// server log instead of only when a visitor submits the contact form.
const verifyTransport = async () => {
  const activeTransporter = getTransporter();

  if (!activeTransporter) {
    throw missingConfigError();
  }

  await activeTransporter.verify();
  return true;
};

const send = async (message) => {
  const activeTransporter = getTransporter();

  if (!activeTransporter) {
    throw missingConfigError();
  }

  return activeTransporter.sendMail({
    from: `"${fromName}" <${fromAddress}>`,
    ...message,
  });
};

// @desc Contact form message forwarded to the company inbox
const sendContactMail = (name, email, subject, text, phoneNum, cb) => {
  const safeSubject = subject || "Contact Form Message";
  const normalizedEmail = (email || "").trim();

  const message = {
    to: receiverEmail,
    subject: "Message From The Website",
    text: `name is ${name}\nsubject is ${safeSubject}\nmessage is ${text}\nphone number is ${phoneNum}`,
  };

  if (normalizedEmail) {
    message.replyTo = normalizedEmail;
  }

  send(message)
    .then((info) => cb(null, info))
    .catch((err) => cb(err, null));
};

const escapeHtml = (value) =>
  String(value === undefined || value === null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

// @desc Password reset link, sent bilingually to match the site
const sendPasswordResetEmail = async ({
  to,
  name,
  resetUrl,
  expiresInMinutes,
}) => {
  const safeName = escapeHtml(name || "");
  const safeUrl = escapeHtml(resetUrl);

  const text = [
    `مرحباً ${name || ""},`,
    "",
    "لقد تلقينا طلباً لإعادة تعيين كلمة المرور الخاصة بحسابك في موقع جياد.",
    "يمكنك إعادة تعيين كلمة المرور من خلال الرابط التالي:",
    resetUrl,
    "",
    `هذا الرابط صالح لمدة ${expiresInMinutes} دقيقة فقط.`,
    "إذا لم تطلب إعادة تعيين كلمة المرور، يمكنك تجاهل هذه الرسالة.",
    "",
    "----------------------------------------",
    "",
    `Hello ${name || ""},`,
    "",
    "We received a request to reset the password for your GIAD website account.",
    "Use the link below to set a new password:",
    resetUrl,
    "",
    `This link is valid for ${expiresInMinutes} minutes only.`,
    "If you did not request a password reset, you can safely ignore this email.",
  ].join("\n");

  const html = `
  <div style="background:#f3f6fa;padding:24px 12px;font-family:Segoe UI,Tahoma,Arial,sans-serif;">
    <div style="max-width:560px;margin:auto;background:#ffffff;border:1px solid #e6edf5;border-radius:14px;overflow:hidden;">
      <div style="background:linear-gradient(90deg,#00aece 0%,#1d64a7 100%);padding:22px 24px;">
        <h2 style="margin:0;color:#ffffff;font-size:20px;">GIAD</h2>
      </div>

      <div dir="rtl" style="padding:26px 24px;color:#214467;text-align:right;">
        <h3 style="margin:0 0 14px;color:#0f2f57;font-size:18px;">إعادة تعيين كلمة المرور</h3>
        <p style="margin:0 0 10px;line-height:1.8;">مرحباً ${safeName},</p>
        <p style="margin:0 0 18px;line-height:1.8;">
          لقد تلقينا طلباً لإعادة تعيين كلمة المرور الخاصة بحسابك. اضغط على الزر أدناه لتعيين كلمة مرور جديدة.
        </p>
        <p style="margin:0 0 18px;text-align:center;">
          <a href="${safeUrl}" style="display:inline-block;background:linear-gradient(90deg,#00aece 0%,#1d64a7 100%);color:#ffffff;text-decoration:none;font-weight:700;padding:13px 30px;border-radius:10px;">
            إعادة تعيين كلمة المرور
          </a>
        </p>
        <p style="margin:0 0 8px;line-height:1.8;font-size:13px;color:#5a7391;">
          هذا الرابط صالح لمدة ${expiresInMinutes} دقيقة فقط. إذا لم تطلب ذلك، تجاهل هذه الرسالة.
        </p>
      </div>

      <div style="height:1px;background:#e6edf5;"></div>

      <div dir="ltr" style="padding:26px 24px;color:#214467;text-align:left;">
        <h3 style="margin:0 0 14px;color:#0f2f57;font-size:18px;">Reset your password</h3>
        <p style="margin:0 0 10px;line-height:1.7;">Hello ${safeName},</p>
        <p style="margin:0 0 18px;line-height:1.7;">
          We received a request to reset your account password. Click the button below to choose a new one.
        </p>
        <p style="margin:0 0 18px;text-align:center;">
          <a href="${safeUrl}" style="display:inline-block;background:linear-gradient(90deg,#00aece 0%,#1d64a7 100%);color:#ffffff;text-decoration:none;font-weight:700;padding:13px 30px;border-radius:10px;">
            Reset password
          </a>
        </p>
        <p style="margin:0 0 8px;line-height:1.7;font-size:13px;color:#5a7391;">
          This link expires in ${expiresInMinutes} minutes. If you did not request it, please ignore this email.
        </p>
        <p style="margin:0;font-size:12px;color:#8298b0;word-break:break-all;">${safeUrl}</p>
      </div>
    </div>
  </div>`;

  return send({
    to,
    subject: "إعادة تعيين كلمة المرور | Reset your password",
    text,
    html,
  });
};

module.exports = {
  sendContactMail,
  sendPasswordResetEmail,
  verifyTransport,
  isConfigured,
};
