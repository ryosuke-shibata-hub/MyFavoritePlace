"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import jwt from "jsonwebtoken";

const secret_key = "nextmarket"

const authCheck = () => {
    const [loginUser, setLoginUser] = useState("")
    const router = useRouter()
    useEffect(() => {
        const token = localStorage.getItem("token")

        if (!token) {
            router.push("/user/login")
        }
        try {
            const decode = jwt.verify(token, secret_key)
            setLoginUser(decode.email)

        } catch (error) {
            console.log(error);
            router.push("/user/login")
        }
    }, [router])
    return loginUser
}

export default authCheck
