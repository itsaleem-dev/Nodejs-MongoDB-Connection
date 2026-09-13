import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

console.log(process.env.MONGO_URI, '=====>> Mongo_URI');


export function connectDB() {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log('MongoDB is connected.')
        })
        .catch((error) => {
            console.log(error.message);
        })
}