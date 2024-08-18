// Import mongoose
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Mongoose Func to connect with Mongo DB
export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI!);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};