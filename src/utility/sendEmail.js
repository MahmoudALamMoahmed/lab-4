import { createTransport } from "nodemailer";
import { emailTemplate } from "./emailTemplate.js";

export default async function sendEmail(email) {
  const transporter = createTransport({
    service: "gmail",
    auth: {
      user: "mos@gmail.com",
      pass: "bbms almn skdk sdsd ",
    },
  });

  const info = await transporter.sendMail({
    from: '"mmm@gmail.com 👻" <maddison53@ethereal.email>',
    to: email,
    subject: "Hello ✔",
    text: "Hello world?",
    html: emailTemplate(email),
  });

  console.log("Message sent: %s", info.messageId);
}
