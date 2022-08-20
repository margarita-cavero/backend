import nodemailer from 'nodemailer';

import config from '../config';


export let info = async (firstName, lastName, email, message) => {
    // let testAccount = await nodemailer.createTestAccount();
    const test = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: config.mailUser, // generated ethereal user
            pass: config.mailPass, // generated ethereal password
        }
    });

    await test.sendMail({
        from: `"💕👨🏻‍💻 WEB MARGARITACAVERO.COM" <${config.mailUser}>`, // sender address
        to: `developer@daniel-espanadero.com`, // list of receivers
        subject: `${firstName} ${lastName} ha contactado contigo a través de tu web`, // Subject line
        html: `
            <h1 style='font-weight: bold; color: #e60092; text-align: center;'>💕 ¡Hola, Margarita! 💕</h1>
            <br>
            <p style='font-weight: bold; font-size: 20px; text-align: center;'>Aquí te dejo los datos que  han rellenado en el formulario de tu página web para contactar contigo:</p>
            <p style='font-size: 20px;'><span style='font-weight: bold;'>Nombre: </span>${firstName}</p>
            <p style='font-size: 20px;'><span style='font-weight: bold;'>Apellido: </span>${lastName}</p>
            <p style='font-size: 20px;'><span style='font-weight: bold;'>Correo electrónico: </span>${email}</p>
            <p style='font-size: 20px;'><span style='font-weight: bold;'>Mensaje:</p>
            <p style='font-size: 20px;'>${message}</p>
            `, // html body
    });

    test.verify().then(() => {
        console.log('Email sent successfully!');
    });
}