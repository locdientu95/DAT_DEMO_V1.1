import React, { useState } from "react";
import "./Account.scss";
import Info from "./Info";
import Security from "./Security";
import Language from "./Language";

export default function Account() {   

    const tit = {
        info: "Thông Tin",
        security: "Bảo Mật",
        language: "Ngôn Ngữ",
    }

    const color = {
        cur: "blue",
        pre: "black"
    }

    const [nav, setNav] = useState("info");
    const handleNav = (e) => {
        var id = e.currentTarget.id;

        console.log(id);
        setNav(id);
    };

    return(
        <div className="DAT_Account">
            {/* Header */}
            <div className="DAT_Account_Header">
                <div className="DAT_Account_Header_Content">
                    <div className="DAT_Account_Header_Content_Icon">                        
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="16" 
                            height="16" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            className="feather feather-user"
                        >
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </div>
                    <div className="DAT_Account_Header_Content_Text">
                        Cài đặt tài khoản - {tit[nav]}
                    </div>
                </div>
            </div>

            {/* Main */}
            <div className="DAT_Account_Main">
                {/* Nav */}
                <div className="DAT_Account_Main_Nav">
                    <div className="DAT_Account_Main_Nav_Item" id="info" style={{color: (nav === "info") ? color.cur : color.pre}} onClick={(e) => {handleNav(e)}}>
                        Thông Tin
                    </div>

                    <div className="DAT_Account_Main_Nav_Item" id="security" style={{color: (nav === "security") ? color.cur : color.pre}}  onClick={(e) => {handleNav(e)}}>
                        Bảo Mật
                    </div>

                    <div className="DAT_Account_Main_Nav_Item" id="language" style={{color: (nav === "language") ? color.cur : color.pre}} onClick={(e) => {handleNav(e)}}>
                        Ngôn Ngữ
                    </div>
                </div>

                {/* Content */}
                <div className="DAT_Account_Main_Content">
                    {(() => {
                        switch (nav) {
                            case "info":
                                return (
                                    <><Info></Info></>
                                )
                            case "security":
                                return (
                                    <><Security></Security></>
                                )
                            case "language":
                                return (
                                    <><Language></Language></>
                                )
                            default: 
                                <></>
                        }
                    })()}
                </div>
            </div>
        </div>
    );
}