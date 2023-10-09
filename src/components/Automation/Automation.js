import React, { useState } from "react";
import './Automation.scss'
import DeviceManager from "../Manager/DeviceManager";
import ProjectManager from "../Manager/ProjectManager";


export default function Automation() {
  return (
    <div className="DAT_Content">
      <div className="DAT_Content-Header">
        <div className="DAT_Content-Header-Dashboard">
          <div className="DAT_Content-Header-Dashboard-Heading">
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
            Tự Động Hóa
          </div>
          <div className="DAT_Content-Header-Dashboard-SubHead">
            Example dashboard overview and content summary
          </div>
        </div>
      </div>

      <div className="Automation_Content-Container">
        <div className="Automation_Content-Container-Group">
          <div className="Automation_Content-Container-Group-Head">Danh sách dự án</div>
          <div className="Automation_Content-Container-Group-Body">
            {/* <ProjectList></ProjectList> */}
            <ProjectManager></ProjectManager>
          </div>
        </div>
        <div className="Automation_Content-Container-Group">
          <div className="Automation_Content-Container-Group-Head">Danh sách thiết bị</div>
          <div className="Automation_Content-Container-Group-Body">
            {/* <DeviceList></DeviceList> */}
            <DeviceManager></DeviceManager>
          </div>
        </div>
      </div>
    </div>
  );
}
