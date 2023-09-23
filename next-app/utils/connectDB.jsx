import mongose from "mongose";

const connectDB = async () => {
    try {
        await mongose.connect(process.env.DB_API_KEY)
        console.log("success mongoseDB");
    } catch (error) {
        console.log("fail connect mongoseDB");
        throw new Error()
    }
}

export default connectDB
