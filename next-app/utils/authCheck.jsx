import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import jwt from "jsonwebtoken";

const authCheck = () => {
    const [loginUser, setLoginUser] = useState({ username: "", login_id: "" })
    const router = useRouter()

    //トークンを取り出して検証
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (!token) {
            router.push("/infomation/login")
        }

        try {
            //トークンを検証
            const decoded = jwt.verify(token, process.env.NEXT_PUBLIC_SECRET_KEY)
            setLoginUser(decoded)
        } catch (error) {
            router.push("/infomation/login")
        }
    })
}

export default authCheck
