import React, { useState } from "react";
import "./ErrorSetting.scss";
import ReaderSetting from "./ReaderSetting";
import InfoSetting from "./InfoSetting";

export default function ErrorSetting() {
  const tit = {
    info: "Cài Đặt Thanh Ghi",
    security: "Cài Đặt Thông Tin",
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
    <div className="DAT_ErrorSetting">
      <div className="DAT_ErrorSetting-Header">
        <div className="DAT_ErrorSetting-Header-Dashboard">
          <div className="DAT_ErrorSetting-Header-Dashboard-Heading">
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
              color="rgba(255, 255, 255, 0.5)"
              style={{ paddingRight: "10px" }}
            >
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
            Cài đặt lỗi - {tit[nav]}
          </div>
          <div className="DAT_ErrorSetting-Header-Dashboard-SubHead">
            Example dashboard overview and content summary
          </div>
        </div>
      </div>

      <div className="DAT_ErrorSetting-Main">
        <div className="DAT_ErrorSetting-Main_Nav">
          <div
            className="DAT_ErrorSetting-Main_Nav_Item"
            id="info"
            style={{ color: nav === "info" ? color.cur : color.pre }}
            onClick={(e) => {
              handleNav(e);
            }}
          >
            Cài Đặt Thanh Ghi
          </div>

          <div
            className="DAT_ErrorSetting-Main_Nav_Item"
            id="security"
            style={{ color: nav === "security" ? color.cur : color.pre }}
            onClick={(e) => {
              handleNav(e);
            }}
          >
            Cài Đặt Thông Tin
          </div>
        </div>

        <div className="DAT_ErrorSetting-Main_Content">
          {(() => {
            switch (nav) {
              case "info":
                return (
                  <>
                    <ReaderSetting></ReaderSetting>
                  </>
                );
              case "security":
                return (
                  <>
                    <InfoSetting></InfoSetting>
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
