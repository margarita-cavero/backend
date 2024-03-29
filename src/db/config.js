import { connect } from "mongoose";

import config from '../config';

export const connectDB = async () => {
    try {
        await connect(config.mongoURL);
        console.log('Database connected successfully.');
    } catch (error) {
        console.log('Failed to connect database.');
    };
};