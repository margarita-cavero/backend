// import nodemailer from 'nodemailer';

// export const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true, // true for 465, false for other ports
//     auth: {
//         type: 'OAuth2',
//         user: process.env.MAIL_USER, // generated ethereal user
//         pass: process.env.MAIL_PASS // generated ethereal password
//     },
// });

// transporter.verify()
//     .then(()=> console.log('Ready for send emails'))
//     .catch(()=> console.log(error))