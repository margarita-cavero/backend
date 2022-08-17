import { Contact } from "../models/Contact";
import { transporter } from "../config/mailer"; 
import { info } from "../helpers/mail";

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

        info(firstName, lastName, email, message);

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