import { Schema, model } from "mongoose"; 

const ContactSchema = new Schema({
    firstName:{
        type: String,
        required: [true, 'First name is required'],
        min: [3, 'The firstName must have at least 3 characters.'],
        max: [10, 'The firstName must have a maximum of 10 characters.']
    },
    lastName:{
        type: String,
        required: [true, 'Last name is required'],
        min: [3, 'The lastName must have at least 3 characters.'],
        max: [30, 'The lastName must have a maximum of 30 characters.']
    },
    email:{
        type: String,
        // unique: true,
        required: [true, 'Email is required'],
        match: [/.+\@.+\..+/, '** Email is invalid **'],
        max: [50, 'The email must have a maximum of 50 characters.']
    },
    message:{
        type: String,
        required: [true, 'Message is required'],
        min: [30, 'The message must have at least 30 characters.'],
        max: [1000, 'The message must have a maximum of 1000 characters.']
    }
},
    {
        timestamps: true,
        versionKey: false
    });

export const Contact = model('Contact', ContactSchema);