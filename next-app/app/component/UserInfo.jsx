"use client"
import { signOut } from "next-auth/react";

export default function UserInfo() {
    return (
        <div className="grid h-screen place-items-center">
            <div className="flex flex-col gap-2 p-8 my-6 shadow-lg bg-zinc-300/10">
                <div>
                    <div>
                        Name:<span className="font-bold">John</span>
                    </div>
                    <div>
                        loginId:<span className="font-bold">test</span>
                    </div>
                    <button
                        onClick={() => signOut()}
                        className="px-6 py-2 mt-3 font-bold text-white bg-red-500">
                        Log Out
                    </button>
                </div>
            </div>
        </div>
    )
}
