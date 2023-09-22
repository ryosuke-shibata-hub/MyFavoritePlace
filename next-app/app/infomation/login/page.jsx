import React from "react";
// import background from "/images/infomation/juicy-movement-map.png";
import Footer from "../../component/Layout/footer";

export default function LoginPage() {
    return (
        <>
            <div className="bg-blue-100">
                <div
                    style={{ backgroundImage: "url(/images/infomation/juicy-movement-map.png)" }}
                    width={300}
                    height={100}
                >
                    <div className="py-32">
                        <div className="py-10 text-4xl font-bold text-gray-600 ">
                            <span className="">
                                ログイン
                            </span>
                        </div>
                        <div className="">
                            <form className="">
                                <div class="mb-6">
                                    <label for="email" class="font-bold block mb-2 text-base text-gray-600 dark:text-white">メールアドレス</label>
                                    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" placeholder="name@flowbite.com" required />
                                </div>
                                <div class="mb-6">
                                    <label for="password" class="font-bold block mb-2 text-base text-gray-600 dark:text-white">パスワード</label>
                                    <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" required />
                                </div>
                                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5">ログイン</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
