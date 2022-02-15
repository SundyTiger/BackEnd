const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODE_MAIL_ID,
    pass: process.env.NODE_MAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});
const mailData = (email, otp) => {
  const mailing = {
    from: process.env.NODE_MAIL_ID,
    to: email,
    subject: "Disney Plus HotStar OTP",
    text: `OTP: ${otp} `,
  };
  return mailing;
};
const transport = (mailData) => {
  transporter.sendMail(mailData, (err, data) => {
    if (err) {
      console.log(err);
      return err;
    } else {
      console.log(data);
      return data;
    }
  });
};
module.exports = {
  transport,
  mailData,
};
