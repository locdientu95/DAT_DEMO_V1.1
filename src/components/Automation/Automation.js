import React, { useEffect, useRef, useState } from "react";
import "./Automation.scss";
import DeviceManager from "../Manager/DeviceManager";
import ProjectManager from "../Manager/ProjectManager";
import { useContext } from "react";
import { EnvContext } from "../Context/EnvContext";

export default function Automation(props) {
  const { sidebarid, pjdata, pjm, dvdata, dvm, projectfilter, envDispatch } =
    useContext(EnvContext);
  const [project, setProject] = useState([]);
  const [device, setDevice] = useState([]);
  const [display, setDisplay] = useState(projectfilter.detail);
  const dataIncome = useRef("");
  const [newproject, setNewproject] = useState(project);
  // PROJECTS
  useEffect(() => {
    var projectm = pjm;
    projectm = projectm.filter((pjdata) => pjdata.code == sidebarid);
    projectm = projectm.filter(
      (pjdata) => pjdata.code == sidebarid && pjdata.username == props.name
    );
    setProject([]);
    projectm.map((p) => {
      var d = pjdata;
      d = d.filter((d) => d.projectid == p.projectid);
      return setProject((pre) => [...pre, d[0]]);
    });
    projectfilter.displayarray = project;
    envDispatch({
      type: "SET_PROJECTFILTER",
      payload: { ...projectfilter, displayarray: project },
    });
  }, []);

  useEffect(() => {
    setDisplay(projectfilter.display);
  }, [projectfilter.display]);

  // DEVICES
  useEffect(() => {
    var device = dvm;
    device = device.filter(
      (dvdata) => dvdata.code == sidebarid && dvdata.username == props.name
    );
    setDevice([]);
    device.map((p) => {
      var d = dvdata;
      d = d.filter((d) => d.gateway == p.deviceid); /// tim 1 thang
      return setDevice((old) => [...old, d[0]]);
    });
  }, []);

  const handleChangeData = (e) => {
    projectfilter.display = false;
    setDisplay(projectfilter.filter);
    e.preventDefault();
    const data = dataIncome.current.value;
    const temp = projectfilter.detail.split("_"); //['company', '1']
    var newData = projectfilter.displayarray; //data
    const index = newData.findIndex((newData) => newData.id == temp[1]);
    newData[index][temp[0]] = data;
    setProject(newData);
    envDispatch({
      type: "SET_PROJECTFILTER",
      payload: { ...projectfilter, displayarray: newData },
    });
  };

  const handleClose = (e) => {
    projectfilter.display = false;
    setDisplay(projectfilter.filter);
  };

  return (
    <div className="DAT_Content">
      <div className="DAT_Content-Header">
        <div className="DAT_Content-Header-Main">
          <div className="DAT_Content-Header-Main-Dashboard">
            <div className="DAT_Content-Header-Main-Dashboard-Heading">
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
            <div className="DAT_Content-Header-Main-Dashboard-SubHead">
              Example dashboard overview and content summary
            </div>
          </div>
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
          {/* UPDATE DATA */}
          {projectfilter.display ? (
            <div
              className="Automation_Content-Container-Group-UpdateBox"
              // style={{ display: change ? "block" : "none" }}
            >
              <form
                className="Automation_Content-Container-Group-UpdateBox-Group"
                // onSubmit={(e) => handleSaveRow(e)}
              >
                <div className="Automation_Content-Container-Group-UpdateBox-Group-Tit">
                  <div>Chỉnh Sửa</div>
                  <div
                    className="Automation_Content-Container-Group-UpdateBox-Group-Tit-Close"
                    onClick={(e) => handleClose(e)}
                  >
                    x
                  </div>
                </div>
                <input type="text" required ref={dataIncome}></input>
                <button onClick={(e) => handleChangeData(e)}>Lưu</button>
              </form>
            </div>
          ) : (
            <></>
          )}
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
  );
}
