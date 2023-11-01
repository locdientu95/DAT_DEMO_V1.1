import React, { useRef } from "react";
import "./SMS.scss";
import Mess from "./Mess.js";
import Status from "./StatusSMS.js";
import Config from "./Config.js";
import Project from "./Project.js";
import { useState } from "react";
export default function SMS() {

  const tit = {
    mess: "Mess",
    config: "Cấu Hình",
    status: "Thống Kê",
    project: "Dự án"
  };

  const color = {
    cur: "blue",
    pre: "black",
  };

  const [ nav, setNav ] = useState("mess");
  const handleNav = (e) => {
    var id = e.currentTarget.id;
    setNav(id);
  }

  return (
    <div className="DAT_SMS">
      <div className="DAT_SMS-Header">
          <div className="DAT_SMS-Header-Dashboard">
            <div className="DAT_SMS-Header-Dashboard-Heading">
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
                className="feather feather-filter"
                style={{ paddingRight: "10px" }}
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              SMS - {tit[nav]}
            </div>
            <div className="DAT_SMS-Header-Dashboard-SubHead">
              Example dashboard overview and content summary
            </div>
        </div>
      </div>

      <div className="DAT_SMS-Main">
        <div className="DAT_SMS-Main-Nav">
          <div
            className="DAT_SMS-Main-Nav-Item"
            id="mess"
            style={{ color: nav === "mess" ? color.cur : color.pre }}
            onClick={(e) => handleNav(e)}
          >
            SMS
          </div>

          <div
            className="DAT_SMS-Main-Nav-Item"
            id="config"
            style={{ color: nav === "config" ? color.cur : color.pre }}
            onClick={(e) => handleNav(e)}
          >
            Cấu Hình
          </div>

          <div
            className="DAT_SMS-Main-Nav-Item"
            id="status"
            style={{ color: nav === "status" ? color.cur : color.pre }}
            onClick={(e) => handleNav(e)}
          >
            Thống Kê
          </div>

          {/* <div
            className="DAT_SMS-Main-Nav-Item"
            id="project"
            style={{ color: nav === "project" ? color.cur : color.pre }}
            onClick={(e) => handleNav(e)}
          >
            Dự án
          </div> */}
        </div>

        <div className="DAT_SMS-Main-Content">
          {(() => {
            switch (nav) {
              case "mess":
                return (
                  <>
                    <Mess></Mess>
                  </>
                );
              case "config":
                return (
                  <>
                    <Config></Config>
                  </>
                );
              case "status":
                return (
                  <>
                    <Status></Status>
                  </>
                );
                // case "project":
                // return (
                //   <>
                //     <Project></Project>
                //   </>
                // );
              default:
                <></>;
            }
          })()}
        </div>
      </div>
    </div>
  );
}
