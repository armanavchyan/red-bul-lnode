import nodemailer from "nodemailer";

export async function sentMail(email, content) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    tls: { rejectUnauthorized: false },
    auth: {
      user: "readboolyan@gmail.com", // generated ethereal user
      pass: "readbool888", // generated ethereal password
    },
  });

  const info = await transporter.sendMail({
    from: "\"RedBull 👻\" readboolyan@gmail.com", // sender address
    to: email, // list of receivers
    subject: `Hello ${email}`, // Subject line
    // text: content, // plain text body
    html: content, // html body
  });
  return info;
}
export function createPasswordContent(password) {
  return `<div>
    Password : ${password}
  </div>`;
}

export function createJWTContent(jwt) {
  return `<div>
    Token: ${jwt}
  </div>`;
}
