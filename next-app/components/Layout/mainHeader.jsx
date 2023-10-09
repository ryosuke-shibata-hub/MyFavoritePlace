import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import LogOutBtn from "../Ui/LinkBtn/LogOutBtn";

export default function MainHeader() {
    return (
        <>
            <div className="w-full p-3">
                <div className="flex p-1 pb-2 pl-10 font-mono text-lg font-bold text-center text-white bg-blue-300 rounded-full">
                    <span className='pt-3 mx-auto'>
                        MyFavoritePlace <FontAwesomeIcon icon={faLocationDot} size="2xl" className='text-lg font-bold text-red-500' />
                    </span>
                    <div className='pt-2 -mr-2'>
                        <LogOutBtn />
                    </div>
                </div>
            </div>
        </>
    )
}
