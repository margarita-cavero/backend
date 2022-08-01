import nodemailer from 'nodemailer';


export let info = async (firstName, lastName, email, message) => {
    // let testAccount = await nodemailer.createTestAccount();
    const test = await nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.MAIL_USER, // generated ethereal user
            pass: process.env.MAIL_PASS, // generated ethereal password
        }
    })

    await test.sendMail({
        from: `"Fred Foo 👻" <${process.env.MAIL_USER}>`, // sender address
        to: `developer@daniel-espanadero.com`, // list of receivers
        subject: "Prueba de envío de mensaje", // Subject line
        html: `
            <p>Nombre: ${firstName}</p>
            <p>Apellido: ${lastName}</p>
            <p>Correo: ${email}</p>
            <p>Mensaje: ${message}</p>
            `, // html body
    });
}