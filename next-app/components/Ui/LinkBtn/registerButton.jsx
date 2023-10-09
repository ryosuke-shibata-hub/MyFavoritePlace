import Link from "next/link";

export default function LoginButton() {
    return (
        <>
            <Link href="/myfavoriteplace/register"
                className="py-2.5 px-5 mr-2 mb-2 text-sm font-bold text-white focus:outline-none bg-blue-400 rounded-full border-2 border-white hover:bg-white hover:text-gray-700 focus:z-10 focus:ring-4 focus:ring-gray-200">
                会員登録
            </Link>
        </>
    )
}
