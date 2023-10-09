"use client"
import { signOut } from "next-auth/react";
import { useSession } from 'next-auth/react';
import Image from 'next/image'

export default function TopPage() {

    return (
        <div className="grid h-screen place-items-center">
            <div className="flex flex-col gap-2 p-8 my-6 shadow-lg bg-zinc-300/10">
                <div>
                    <span className="font-bold">ようこそ！</span>
                </div>
                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                    <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                        マイページは
                        <a href="/myfavoriteplace/mypage" className="text-gray-700 underline">
                            こちら
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}
