import { connect } from "mongoose";

export const connectDB = async () => {
    try {
        await connect(process.env.MONGO_URL);
        console.log('Database connected successfully.');
    } catch (error) {
        console.log('Failed to connect database.');
    };
};