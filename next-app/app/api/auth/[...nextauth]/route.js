import connectDB from "@/utils/connectDB";
import { UserModel } from "@/utils/shemaModels";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

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
                    const passwordMatch = await bcrypt.compare(password, user.password)
                    if (!passwordMatch) {
                        return null
                    }
                    console.log(user);
                    return { username: user.username, login_id: user.login_id, email: user.email }
                } catch (error) {
                    console.log("Error: ", error);
                }
            },
        }),
    ],
    session: {
        strategy:"jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn:"/",
    },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST };
