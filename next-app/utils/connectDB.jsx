import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://ryosuke-shibata:Ab09024853798@cluster0.rputgjo.mongodb.net/?retryWrites=true&w=majority")
        console.log("success mongooseDB");

    } catch (error) {
        console.log("fail connect mongooseDB");
        throw new Error()
    }
}

export default connectDB
