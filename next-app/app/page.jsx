import Footer from "./component/Layout/footer";
import Header from "./component/Layout/header";
import Image from 'next/image'
import Link from "next/link";

export default function InfomationTop() {
    return (
        <>
            <Header />
            <div className="py-5 pb-10">
                <div className='grid grid-cols-2 gap-2 py-10'>
                    <div className='h-auto max-w-full p-20 text-center'>
                        <div className='py-5 pb-10'>
                            <span className='font-sans text-5xl font-bold text-gray-700'>
                                お気に入りの
                            </span>
                            <br></br>
                            <br></br>
                            <span className='font-sans font-bold text-gray-700 text-7xl'>
                                "場所"を
                            </span>
                            <span className='font-sans text-5xl font-bold text-gray-700'>
                                共有しよう
                            </span>
                        </div>
                        <div className='py-5 pb-10 pl-10 text-start'>
                            <span className='font-bold text-gray-700 text-1xl'>
                                お気に入りのお店やお気に入りのお出かけスポット<br></br>
                                あなたが推したい"場所"、あなたのお気に入りの"場所"共有しよう！
                            </span>
                        </div>
                    </div>
                    <div className='h-auto mx-auto'>
                        <Image
                            src="/images/infomation/sammy-phone-with-map-and-geolocation.gif"
                            width={300}
                            height={100}
                            priority
                            alt="info-first Logo"
                        />
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-2 py-10'>
                    <div className='h-auto mx-auto'>
                        <Image
                            src="/images/infomation/bloom-28.png"
                            width={400}
                            height={100}
                            priority
                            alt="info-secound Logo"
                        />
                    </div>
                    <div className='h-auto max-w-full p-20 text-center'>
                        <div className='py-5 pb-10'>
                            <span className='font-sans text-5xl font-bold text-gray-700'>
                                新しい
                            </span>
                            <br></br>
                            <br></br>
                            <span className='font-sans font-bold text-gray-700 text-7xl'>
                                "場所"を
                            </span>
                            <span className='font-sans text-5xl font-bold text-gray-700'>
                                発見しよう
                            </span>
                        </div>
                        <div className='py-5 pb-10 pl-10 text-start'>
                            <span className='font-bold text-gray-700 text-1xl'>
                                共有された"場所"を見てみましょう！<br></br>
                                あなたのとっての新しいお気に入りの"場所"が見つかるかもしれません。
                            </span>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-2 py-10'>
                    <div className='h-auto max-w-full p-20 text-center'>
                        <div className='py-5 pb-10'>
                            <span className='font-sans text-5xl font-bold text-gray-700'>
                                お気に入りの
                            </span>
                            <br></br>
                            <br></br>
                            <span className='font-sans font-bold text-gray-700 text-7xl'>
                                "場所"を
                            </span>
                            <span className='font-sans text-5xl font-bold text-gray-700'>
                                保存しよう
                            </span>
                        </div>
                        <div className='py-5 pb-10 pl-10 text-start'>
                            <span className='font-bold text-gray-700 text-1xl'>
                                あなたが気に入っている"場所"を保存できます。<br></br>
                                住所や店名、ルートなどを保存していつでも気軽に確認することができます。
                            </span>
                        </div>
                    </div>
                    <div className='h-auto mx-auto'>
                        <Image
                            src="/images/infomation/social-mobile-app-with-gps-navigator-on-phone.png"
                            width={400}
                            height={100}
                            priority
                            alt="info-secound Logo"
                        />
                    </div>
                </div>
                <div className="text-center">
                    <div className="py-5 my-5">
                        <Image
                            className="p-3 mx-auto"
                            src="/images/infomation/clip-uniting-the-world.png"
                            width={300}
                            height={100}
                            priority
                            alt="info-secound Logo"
                        />
                        <Link
                            href="/myfavoriteplace/top"
                            className="w-full px-6 py-4 text-4xl font-bold text-white bg-blue-400 border-2 border-white rounded-full focus:outline-none hover:bg-white hover:text-gray-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
                        >
                            みんなのお気に入りの"場所"を見に行く？
                        </Link>
                    </div>
                    <div className="py-5">
                        <Image
                            className="p-3 mx-auto"
                            src="/images/infomation/3d-fluency-map-marker-empty.png"
                            width={300}
                            height={100}
                            priority
                            alt="info-secound Logo"
                        />
                        <Link
                            href="/myfavoriteplace/mypage"
                            className="w-full px-6 py-4 text-4xl font-bold text-white bg-blue-400 border-2 border-white rounded-full focus:outline-none hover:bg-white hover:text-gray-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
                        >
                            あなたのお気に入りの"場所"を共有する？
                        </Link>
                    </div>
                </div >
            </div>
            <Footer />
        </>
    )
}
