import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_API_KEY)
        console.log("success mongooseDB");

    } catch (error) {
        console.log("fail connect mongooseDB");
        throw new Error()
    }
}

export default connectDB
