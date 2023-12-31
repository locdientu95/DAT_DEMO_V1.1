import React, { useContext, useState } from "react";
import "./Account.scss";
import Info from "./Info";
import Security from "./Security";
import UserList from "./UserList";
import { EnvContext } from "../Context/EnvContext";

export default function Account() {
  const { login } = useContext(EnvContext);

  const tit = {
    info: "Thông Tin",
    security: "Bảo Mật",
    userList: "Danh Sách Người Dùng",
  };

  const color = {
    cur: "blue",
    pre: "black",
  };

  const [nav, setNav] = useState("info");
  const handleNav = (e) => {
    var id = e.currentTarget.id;
    setNav(id);
  };

  return (
    <div className="DAT_Account">
      <div className="DAT_Account-Header">
        <div className="DAT_Account-Header-Dashboard">
          <div className="DAT_Account-Header-Dashboard-Heading">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-activity"
              style={{ paddingRight: "10px" }}
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            Cài Đặt Tài Khoản - {tit[nav]}
          </div>
          <div className="DAT_Account-Header-Dashboard-SubHead">
            Example dashboard overview and content summary
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="DAT_Account_Main">
        {/* Nav */}
        <div className="DAT_Account_Main_Nav">
          <div
            className="DAT_Account_Main_Nav_Item"
            id="info"
            style={{ color: nav === "info" ? color.cur : color.pre }}
            onClick={(e) => {
              handleNav(e);
            }}
          >
            Thông Tin
          </div>

          <div
            className="DAT_Account_Main_Nav_Item"
            id="security"
            style={{ color: nav === "security" ? color.cur : color.pre }}
            onClick={(e) => {
              handleNav(e);
            }}
          >
            Bảo Mật
          </div>

          <div
            className="DAT_Account_Main_Nav_Item"
            id="userList"
            style={{
              color: nav === "userList" ? color.cur : color.pre,
              display: login.role === "admin" ? "block" : "none",
            }}
            onClick={(e) => {
              handleNav(e);
            }}
          >
            Danh Sách Người Dùng
          </div>
        </div>

        {/* Content */}
        <div className="DAT_Account_Main_Content">
          {(() => {
            switch (nav) {
              case "info":
                return (
                  <>
                    <Info></Info>
                  </>
                );
              case "security":
                return (
                  <>
                    <Security></Security>
                  </>
                );
              // case "language":
              //   return (
              //     <>
              //       <Language></Language>
              //     </>
              //   );
              case "userList":
                return (
                  <>
                    <UserList></UserList>
                  </>
                );
              default:
                <></>;
            }
          })()}
        </div>
      </div>
    </div>
  );
}
