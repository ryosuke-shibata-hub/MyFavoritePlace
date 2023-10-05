import React from "react";
import jwt from "jsonwebtoken";
import connectDB from "@/utils/connectDB";
import { UserModel } from "@/utils/shemaModels";
import { NextResponse } from "next/server";
import { resolve } from "styled-jsx/css";

export async function POST(req) {
    const bcrypt = require('bcrypt');

    function comparePassword(plaintextPassword, hashedPassword) {
        return new Promise((resolve, reject) => {
            bcrypt.compare(plaintextPassword, hashedPassword, (err, result) => {
                if (err) {
                    console.log(err);
                    reject(err)
                    //パスワードが一致した時
                } else {
                    resolve(result)
                }
            })
        })
    }

    try {
        await connectDB()
        // const bcrypt = require('bcrypt');
        const body = await req.json()
        const requestLoginId = body.login_id
        const requestPassword = body.password
        const saveUser = await UserModel.findOne({ login_id: requestLoginId })
        const isPasswordMatch = await comparePassword(requestPassword, saveUser.password)

        if (!saveUser) {
            return NextResponse.json({
                message: "ログインIDまたはパスワードが間違っています。", status: 400
            })
        }
        //パスワードが一致した時
        if (isPasswordMatch) {
            //jsonwebtokenの発行
            const token = jwt.sign({
                username: saveUser.username,
                login_id: requestLoginId,
            }, process.env.NEXT_PUBLIC_SECRET_KEY, { expiresIn: "2m" })
            return NextResponse.json(
                {
                    message: "ログイン成功", status: 200, token: token
                }
            )
        } else {
            console.log("パスが一致しない");
            return NextResponse.json({
                message: "ログインIDまたはパスワードが間違っています。", status: 400
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
