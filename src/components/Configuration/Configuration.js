import React, { useState } from "react";
import "./Configuration.scss";
import Project from "./Project";
import Devices from "./Devices";

export default function Configuration() {
  const tit = {
    project: "Dự Án",
    device: "Thiết Bị",
  };

  const color = {
    cur: "blue",
    pre: "black",
  };

  const [nav, setNav] = useState("project");
  const handleNav = (e) => {
    var id = e.currentTarget.id;

    console.log(id);
    setNav(id);
  };

  return (
    <div className="DAT_Configuration">
      <div className="DAT_Configuration-Header">
        <div className="DAT_Configuration-Header-Dashboard">
          <div className="DAT_Configuration-Header-Dashboard-Heading">
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
            Cấu Hình - {tit[nav]}
          </div>
          <div className="DAT_Configuration-Header-Dashboard-SubHead">
            Example dashboard overview and content summary
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="DAT_Configuration_Main">
        {/* Nav */}
        <div className="DAT_Configuration_Main_Nav">
          <div
            className="DAT_Configuration_Main_Nav_Item"
            id="project"
            style={{ color: nav === "project" ? color.cur : color.pre }}
            onClick={(e) => {
              handleNav(e);
            }}
          >
            Dự Án
          </div>

          <div
            className="DAT_Configuration_Main_Nav_Item"
            id="device"
            style={{ color: nav === "device" ? color.cur : color.pre }}
            onClick={(e) => {
              handleNav(e);
            }}
          >
            Thiết Bị
          </div>
        </div>

        {/* Content */}
        <div className="DAT_Configuration_Main_Content">
          {(() => {
            switch (nav) {
              case "project":
                return (
                  <>
                    <Project></Project>
                  </>
                );
              case "device":
                return (
                  <>
                    <Devices></Devices>
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
