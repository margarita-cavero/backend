import { Schema, model } from 'mongoose';

const WorkSchema = new Schema({
    originalActor: {
        type: String,
        required: [true, 'Original actor is required']
    },
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    character: {
        type: String,
        required: [true, 'Character is required']
    },
    year: {
        type: Number,
        required: [true, 'Year is required']
    },
    imageURL: {
        type: String,
        required: [true, 'Image is required']
    }
},
    {
        timestamps: true,
        versionKey: false
    });


export const Work = model('Work', WorkSchema);