import React from "react";
import jwt from "jsonwebtoken";
import connectDB from "@/utils/connectDB";
import { UserModel } from "@/utils/shemaModels";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {

        const body = await req.json()
        const requestLoginId = body.login_id
        await connectDB()
        const saveUser = await UserModel.findOne({ login_id: requestLoginId })
        console.log(saveUser);
        if (saveUser) {
            if (body.password === saveUser.password) {
                //jsonwebtokenの発行
                const token = jwt.sign({
                    username: saveUser.username,
                    login_id: body.login_id,
                }, process.env.NEXT_PUBLIC_SECRET_KEY, { expiresIn: "2m" })
                return NextResponse.json({
                    message: "ログイン成功",
                    token: token
                }, {
                    status: 200
                })
            } else {
                return NextResponse.json({
                    message: "ログインIDまたはパスワードが間違っています。"
                }, {
                    status: 400
                })
            }
        } else {
            return NextResponse.json({
                message: "ログインIDまたはパスワードが間違っています。"
            }, {
                status: 400
            })
        }
    } catch (error) {
        console.log("例外エラー");
        console.log(error);
        return NextResponse.json({
            message: "ログイン失敗"
        }, {
            status: 400
        })
    }
}
