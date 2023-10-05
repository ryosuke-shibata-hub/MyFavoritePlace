import connectDB from "@/utils/connectDB";
import { UserModel } from "@/utils/shemaModels";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

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

const bcrypt = require('bcrypt');
const saltRounds = 10

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
            },

            async authorize(credentials) {
                const { login_id, password } = credentials
                try {
                    await connectDB()
                    const user = await UserModel.findOne({ login_id })

                    if (!user) {
                        return null
                    }
                    // const hashedPassword = await bcrypt.hash(password, saltRounds)
                    const isPasswordMatch = await comparePassword(password, user.password)
                    if (!isPasswordMatch) {
                        return null
                    }

                    return user
                } catch (error) {
                    console.log("例外エラー");
                    console.log(error);
                }
            },
        }),
    ],
    session: {
        strategy:"jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn:"/infomation/login",
    },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST };
