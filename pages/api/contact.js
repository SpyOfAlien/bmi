export default function (req, res) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "spyofalien@gmail.com",
      pass: process.env.SENDER_EMAIL_PASS,
    },
    secure: true,
  });

  const mailData = {
    from: "spyofalien@gmail.com",
    to: "doanquangbao.it@gmail.com",
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p><p>Company: ${req.body.company} - ${req.body.companyLocation}</p><p>Product request: ${req.body.product}</p>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log("error", err);

      res.status(422).json({ success: false });
    } else res.status(200).json({ success: true });
  });
}
