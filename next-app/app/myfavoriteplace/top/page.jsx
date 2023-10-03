// import authCheck from "../../../utils/authCheck";
import UserInfo from "@/app/component/UserInfo";
import React from "react";

const topPage = () => {
    // const authUser = authCheck()

    // if (authUser) {
        return (
            <>
                <p>トップページ</p>
                <UserInfo />
            </>
        )
    }

// }
export default topPage
