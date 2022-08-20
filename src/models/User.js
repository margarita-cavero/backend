import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required!']
    },
    password: {
        type: String,
        required: [true, 'Password is required!']
    }
},
    {
        timestamps: true,
        versionKey: false
    });

export const User = model('User', UserSchema);