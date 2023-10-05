import React from "react";
import connectDB from "@/utils/connectDB";
import { UserModel } from "@/utils/shemaModels";
import { NextResponse } from "next/server";

export async function POST(req) {

    try {
        await connectDB()

        const bcrypt = require('bcrypt');
        const body = await req.json()
        //受け取った値からloginIdのみ取り出す
        const requestLoginId = body.login_id
        //既存アカウントの存在チェック
        const checkUser = await UserModel.findOne({ login_id: requestLoginId })

        if (checkUser) {
            return NextResponse.json({
                message: "このアカウントは作成できません。"
            }, {
                status: 200
            })
        } else {
            //hashのソルトの値
            const saltRounds = 10
            // ユーザーが提供したパスワード
            const plaintextPassword = body.password
            const hashedPassword = await bcrypt.hash(plaintextPassword, saltRounds)
            //提供されたパスワードをhash化
            body.password = hashedPassword

            await UserModel.create(body)
            return NextResponse.json({
                message: "ユーザー登録完了"
            }, {
                status: 200
            })
        }

    } catch (error) {
        return NextResponse.json({
            message: "ユーザー登録に失敗しました。"
        }, {
            status: 500
        })
    }
}
