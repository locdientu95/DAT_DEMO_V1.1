import React, { useEffect, useState } from "react";
import "./Elevator.scss";
import DeviceManager from "../Manager/DeviceManager";
import ProjectManager from "../Manager/ProjectManager";
import pjm from "../Context/ProjectManager.json";
import pjdata from "../Context/Projects.json";
import dvm from "../Context/DeviceManager.json";
import dvdata from "../Context/Devices.json";
import { useContext } from "react";
import { EnvContext } from "../Context/EnvContext";

export default function Elevator(props) {
  const { sidebarid, login } = useContext(EnvContext);
  const [project, setProject] = useState([]);
  const [device, setDevice] = useState([]);


  // PROJECTS
  useEffect(() => {
    var project = pjm;
    project = project.filter(
      (pjdata) => pjdata.code == sidebarid && pjdata.username == props.name
    );
    //console.log(project);
    setProject([]);
    project.map((p) => {
      var d = pjdata;
      d = d.filter((d) => d.projectid == p.projectid);
      return setProject((pre) => [...pre, d[0]]);
    });
  }, []);

  // DEVICES
  useEffect(() => {
    //console.log(dvm);
    var device = dvm;
    device = device.filter(
      (dvdata) => dvdata.code == sidebarid && dvdata.username == props.name
    );
    console.log(device);
    setDevice([]);
    device.map((p) => {
      var d = dvdata;
      d = d.filter((d) => d.gateway == p.deviceid); /// tim 1 thang
      return setDevice((old) => [...old, d[0]]);
    });

  }, []);
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
              style={{ paddingRight: '10px' }}
            >
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
            Thang Máy
          </div>
          <div className="DAT_Content-Header-Dashboard-SubHead">
            Example dashboard overview and content summary
          </div>
        </div>
        <div className="Automation_Content-Container">
        <div className="Automation_Content-Container-Group">
          <div className="Automation_Content-Container-Group-Head">
            Danh sách dự án
          </div>
          <div className="Automation_Content-Container-Group-Body">
            <ProjectManager list={project}></ProjectManager>
          </div>
        </div>
        <div className="Automation_Content-Container-Group">
          <div className="Automation_Content-Container-Group-Head">
            Danh sách thiết bị
          </div>
          <div className="Automation_Content-Container-Group-Body">
            <DeviceManager list={device}></DeviceManager>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
