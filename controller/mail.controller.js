const nodemailer = require('nodemailer');

const mailCreate = (req, res) => {
  const { email, name, titulo, texto } = req.body;
  console.log(email);
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'jonatanangel88@gmail.com',
      pass: 'ohrhloknnycoqrhm',
    },
  });
  const mailOptions = {
    from: email,
    to: 'jonatanangel88@gmail.com',
    subject: 'EMPLEO FULLSTACK JAVASCRIPT',
    html: `
    <div style="
    font-family: sans-serif;
    font-size: 1.5em;
    width: 20em;
    height: 11em;
    background: #333;
    text-align: center;
    gap: 1em;
    padding: 1em;
    color: #ebebeb;
    ">
    <h1 style='font-weight:400;font-family:Sans-serif;padding:0;margin:0;'>
    ${titulo}
    </h1>
    <div style="
    border: 1px solid #ebebeb;
    min-height: 5em;
    text-align: left;
    padding: 0.5em;
    ">
      ${texto}
    </div>
    <div 
    style="
    text-align: right;
    color: #fff;
    ">
    De ${name}</div>
    </div>
    `,
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return res.status(401).send(err.message);
    }
    res.status(200).json(info);
  });
};
module.exports = mailCreate;
