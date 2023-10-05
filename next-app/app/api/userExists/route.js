import connectDB from "@/utils/connectDB";
import { UserModel } from "@/utils/shemaModels";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectDB()
        const { login_id,email } = await req.json()
        const userExistsEmail = await UserModel.findOne({ email }).select("_id")
        const userExistsLoginId = await UserModel.findOne({ login_id }).select("_id")
        console.log(userExistsEmail);
        console.log(userExistsLoginId);

        return NextResponse.json({ userExistsLoginId, userExistsEmail })

    } catch (error) {
        console.log(error);
    }
}
