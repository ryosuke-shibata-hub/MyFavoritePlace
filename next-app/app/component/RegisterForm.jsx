"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faStreetView } from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


export default function RegisterForm() {
    const [login_id, setLoginId] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password_confirmation, setPasswordConfirmation] = useState("")
    const [error, setError] = useState("")
    const roll = 10
    const delete_flg = 0
    const logo = "/default"

    //登録完了後にログイン画面に移動
    const router = useRouter()


    const submitHandler = async (e) => {
        e.preventDefault()

        if (!login_id || !username || !email || !password || !password_confirmation) {
            return setError("アカウント登録情報を全て入力して下さい。")
        }
        if (password != password_confirmation) {
            return setError("パスワードと確認用パスワードには同じ値を入力してください。")
        }
        try {
            const res = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    login_id: login_id,
                    username: username,
                    email: email,
                    password: password,
                    roll: roll,
                    delete_flg: delete_flg,
                    user_logo: logo,
                })
            })
            const data = await res.json()

            if (data.message === "ユーザー登録完了") {
                router.push("/myfavoriteplace/login")
            } else {
                console.log("no");
                setError(data.message)
            }
        } catch (error) {
            console.error("JSONパースエラー:", error);
        }
    }

    return (
        <>
            <section className="bg-white">
                <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                    <section
                        className="relative flex items-end h-32 bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6"
                    >
                        <img
                            alt="Night"
                            src="/images/infomation/juicy-movement-map.png"
                            className="absolute inset-0 object-cover w-full h-full bg-blue-100 opacity-800"
                        />

                        <div className="hidden lg:relative lg:block lg:p-12">
                            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                                お気に入りの場所を共有する・見つける<FontAwesomeIcon icon={faLocationDot} size="2xl" className='text-lg font-bold text-red-500' />
                            </h2>
                        </div>
                    </section>

                    <main
                        className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                    >
                        <div className="max-w-xl lg:max-w-3xl">
                            <div className='col-span-12 sm:col-span-6'>
                                <span className='text-2xl font-bold text-gray-600'>会員登録   <FontAwesomeIcon className='font-bold text-yellow-500' icon={faStreetView} /></span>
                            </div>
                            {error && (
                                <div className='px-3 py-1 mt-2 text-sm text-white bg-red-500 rounded-md w-fit'>
                                    {error}
                                </div>
                            )}
                            <form onSubmit={submitHandler} className="grid grid-cols-6 gap-6 mt-8">
                                <div className="col-span-12 sm:col-span-6">
                                    <label
                                        htmlFor="loginId"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        ログインID
                                    </label>

                                    <input
                                        value={login_id}
                                        onChange={(e) => setLoginId(e.target.value)}
                                        type="text"
                                        id="loginId"
                                        name="login_id"
                                        className="w-full p-3 mt-1 text-sm text-gray-700 bg-white border border-gray-200 rounded-md shadow-md required"
                                    />
                                </div>

                                <div className="col-span-12 sm:col-span-6">
                                    <label
                                        htmlFor="username"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        ユーザーネーム
                                    </label>

                                    <input
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        type="text"
                                        id="username"
                                        name="username"
                                        className="w-full p-3 mt-1 text-sm text-gray-700 bg-white border border-gray-200 rounded-md shadow-md required"
                                    />
                                </div>

                                <div className="col-span-12 sm:col-span-6">
                                    <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                                        メールアドレス
                                    </label>

                                    <input
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                        id="Email"
                                        name="email"
                                        className="w-full p-3 mt-1 text-sm text-gray-700 bg-white border border-gray-200 rounded-md shadow-md required"
                                    />
                                </div>

                                <div className="col-span-12 sm:col-span-6">
                                    <label
                                        htmlFor="Password"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        パスワード
                                    </label>

                                    <input
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        type="password"
                                        id="Password"
                                        name="password"
                                        className="w-full p-3 mt-1 text-sm text-gray-700 bg-white border border-gray-200 rounded-md shadow-md required"
                                    />
                                </div>

                                <div className="col-span-12 sm:col-span-6">
                                    <label
                                        htmlFor="PasswordConfirmation"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        確認用パスワード
                                    </label>

                                    <input
                                        value={password_confirmation}
                                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                                        type="password"
                                        id="PasswordConfirmation"
                                        name="password_confirmation"
                                        className="w-full p-3 mt-1 text-sm text-gray-700 bg-white border border-gray-200 rounded-md shadow-md required"
                                    />
                                </div>

                                <div className="col-span-6">
                                    <p className="text-sm text-gray-500">
                                        アカウントを作成すると、
                                        <a href="#" className="text-gray-700 underline">
                                            利用規約とプライバシー
                                        </a>
                                        と
                                        <a href="#" className="text-gray-700 underline">
                                            ポリシーに同意したことになります。
                                        </a>
                                    </p>
                                </div>

                                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                    <button
                                        className="inline-block px-12 py-3 text-sm font-medium text-white transition bg-blue-600 border border-blue-600 rounded-md shrink-0 hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                                    >
                                        アカウントを作成する
                                    </button>

                                    <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                        すでにアカウントをお持ちですか？
                                        <a href="/myfavoriteplace/login" className="text-gray-700 underline">ログイン</a>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </main>
                </div>
            </section>
        </>
    )

}
