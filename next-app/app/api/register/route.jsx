import React from "react";
import connectDB from "@/utils/connectDB";
import { UserModel } from "@/utils/shemaModels";
import { NextResponse } from "next/server";

async function createUser(req) {
    const body = await req.json();
    // ユーザーの作成ロジック
    await UserModel.create(body);
    return { message: "ユーザー登録成功" };
}


// export async function POST(req, res) {
//     // const body = await req.json()
//     const requestLoginId = req.body.login_id
//     try {
//         if (req.method === "POST") {
//             // DBにユーザーが存在しているかチェック
//             await connectDB()
//             const checkUser = await UserModel.findOne({ login_id: requestLoginId })
//             console.log("チェックおk");
//             console.log(checkUser);
// if (checkUser) {
//     console.log("すでに登録済みのアカウントです。");
//     return NextResponse.json({ message: "すでに登録済みのアカウントです。" })
// } else {
//     console.log("新規アカウント");
//     const res = await createUser(req);
//     return res.status(200).json();
// }
//         }
//         console.log("不正アクセス");
//         console.log(error);
//         return NextResponse.json({ message: "アカウント登録に失敗しました" })

//     } catch (error) {
//         console.log("エラー");
//         console.log(error);
//         return NextResponse.json({ message: "アカウント登録に失敗しました" })
//     }

//     return new Response(JSON.stringify({ body: returnBody }))
// }

export async function RegisterUser(req, res) {
    console.log("koko");
    try {
        await connectDB

        const requestLoginId = req.body.login_id
        const checkUser = await UserModel.findOne({ login_id: requestLoginId })

        if (checkUser) {
            console.log("すでに登録済みのアカウントです。");
            return res.status(400).json({ message: "すでに登録済みのユーザー" })
        } else {
            console.log("新規アカウント");
            await UserModel.create(req.body)
            return res.status(200).json({ message: "ユーザー登録成功" })
        }

    } catch (error) {
        return res.status(400).json({ message: "ユーザー登録失敗" })
    }
}

// export default RegisterUser
