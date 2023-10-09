import Link from "next/link";
import { signOut } from "next-auth/react";

export default function LoginButton() {
    return (
        <>
            <button
                onClick={() => signOut()}
                className="py-2.5 px-5 mr-2 mb-2 text-sm font-bold text-white focus:outline-none bg-red-500 rounded-full border-2 border-white hover:bg-white hover:text-gray-700 focus:z-10 focus:ring-4 focus:ring-gray-200">
                ログアウト
            </button>
        </>
    )
}
