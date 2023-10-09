import React from "react";
import "./ErrorSetting.scss";

export default function ErrorSetting() {
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
            Dashboard
          </div>
          <div className="DAT_ErrorSetting-Header-Dashboard-SubHead">
            Example dashboard overview and content summary
          </div>
        </div>
      </div>
    </div>
  );
}
