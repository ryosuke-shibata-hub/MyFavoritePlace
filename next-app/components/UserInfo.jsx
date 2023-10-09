"use client"
import { signOut } from "next-auth/react";
import { useSession } from 'next-auth/react';
import Image from 'next/image'

export default function UserInfo() {
    const { data: session } = useSession()
    const imagePath = "/images/users/profile"

    return (
        <div className="grid h-screen place-items-center">
            <div className="flex flex-col gap-2 p-8 my-6 shadow-lg bg-zinc-300/10">
                <div>
                    <div>
                        メールアドレス:<span className="font-bold">{session?.user?.email}</span>
                    </div>
                    <div>
                        ユーザーネーム:<span className="font-bold">{session?.user?.name}</span>
                    </div>
                    <div>
                        イメージ:<Image
                            width={300}
                            height={100}
                            priority
                            alt="info-first Logo"
                            src={imagePath + session?.user?.image}
                            className="font-bold"
                        />
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
