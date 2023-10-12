"use client"

import { useState } from "react";
import UserDataUpdateForm from '/components/User/UserDataUpdateForm'
import Footer from "/components/Layout/footer";
import Header from "/components/Layout/mainHeader";

const UserUpdateForm= () => {
    return (
        <>
            <Header />
            <UserDataUpdateForm />
            <Footer />
        </>

    )
}

export default UserUpdateForm
