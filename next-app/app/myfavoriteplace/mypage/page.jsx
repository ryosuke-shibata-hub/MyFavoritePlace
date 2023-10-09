"use client"
import React, { useState } from 'react'
import UserInfo from '/components/UserInfo'
import Footer from "../../../components/Layout/footer";
import Header from "../../../components/Layout/mainHeader";

const MyPage = () => {
    return (
        <>
            <Header />
            <UserInfo />
            <Footer />
        </>

    )
}
export default MyPage
