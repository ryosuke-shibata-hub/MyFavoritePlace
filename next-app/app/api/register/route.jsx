import React from "react";
import connectDB from "@/utils/connectDB";
import { UserModel } from "@/utils/shemaModels";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    const body = await req.json()
    const requestLoginId = body.login_id
    try {
        if (req.method === "POST") {
            // DBにユーザーが存在しているかチェック
            await connectDB()
            const checkUser = await UserModel.findOne({ login_id: requestLoginId })
            console.log("チェックおk");
            console.log(checkUser);
            if (checkUser) {
                console.log("すでに登録済みのアカウントです。");
                return NextResponse.json({ message: "すでに登録済みのアカウントです。" })
            } else {
                console.log("新規アカウント");
                await UserModel.create(body)
                return NextResponse.json({ message: "ユーザー登録成功" })
            }
        }
        console.log("不正アクセス");
        console.log(error);
        return NextResponse.json({ message: "アカウント登録に失敗しました" })

    } catch (error) {
        console.log("エラー");
        console.log(error);
        return NextResponse.json({ message: "アカウント登録に失敗しました" })
    }

    return new Response(JSON.stringify({ body: returnBody }))
}
