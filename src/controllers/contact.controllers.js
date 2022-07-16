import { Contact } from "../models/Contact";
import { transporter } from "../config/mailer"; 

export const contact = async (req, res) => {
    try {

        const { firstName, lastName, email, message } = req.body;

        const newContact = await new Contact({
            firstName,
            lastName,
            email,
            message
        });

        const saveContact = await newContact.save();

        // let info = await transporter.sendMail({
        //     from: `"Fred Foo 👻" <${process.env.MAIL}>`, // sender address
        //     to: `developer@daniel-espanadero.com`, // list of receivers
        //     subject: "Prueba de envío de mensaje", // Subject line
        //     html: `
        //     <p>Nombre: ${firstName}</p>
        //     <p>Apellido: ${lastName}</p>
        //     <p>Correo: ${email}</p>
        //     <p>Mensaje: ${message}</p>
        //     `, // html body
        // });

        res.status(200).json({
            saveContact,
            info
        });

    } catch (error) {
        console.log(error);
        res.status(400).json({
            error
        });
    };
};