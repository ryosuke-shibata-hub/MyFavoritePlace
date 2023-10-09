import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function Footer() {
    return (
        <>
            <footer>
                <div className="w-full p-3 bg-blue-300">
                    <div
                        className="p-1 pb-2 pl-10 font-mono text-lg font-bold text-center text-white bg-blue-300 rounded-3xl">
                        <div className="text-left">
                            <span className="pt-5 text-3xl font-bold text-white">
                                MyFavoritePlace
                            </span>
                        </div>
                        <div className="pr-10 text-right">
                            <span className="text-sm font-bold">
                                プライバシーポリシー
                            </span>
                            <br></br>
                            <span className="text-sm font-bold">
                                お問合せ
                            </span>
                            <br></br>
                            <span className="text-sm font-bold">
                                <FontAwesomeIcon icon={faTwitter} />
                            </span>
                            <span className="text-sm font-bold">

                            </span>
                        </div>

                        {/* <br></br> */}

                    </div>
                </div>
            </footer>
        </>
    )
}
