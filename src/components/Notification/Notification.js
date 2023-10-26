import React, { useContext, useEffect, useRef, useState } from "react";
import "./Notification.scss";
import DataTable from "react-data-table-component";
import { CSVLink } from "react-csv";
import { EnvContext } from "../Context/EnvContext";

export default function Notification() {
  const { projectchanges, envDispatch } = useContext(EnvContext);
  const [data, setData] = useState(projectchanges);
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const datefill = useRef();

  useEffect(() => {
    
    const temp = datefill.current.value; // ['2023', '10', '18']
    const arr = temp.split("-");
    setDay(arr[2]);
    setMonth(arr[1]);
    setYear(arr[0]);
  }, [datefill]);

  useEffect(() => {
    var newData = projectchanges;
    newData.map((data, index) => {
      return (data["id"] = index + 1);
    });
    setData(newData);
  }, [projectchanges]);

  const paginationComponentOptions = {
    rowsPerPageText: "Số hàng",
    rangeSeparatorText: "đến",
    selectAllRowsItem: true,
    selectAllRowsItemText: "tất cả",
  };

  const column = [
    {
      name: "STT",
      code: "id",
      sortable: true,
      selector: (row) => row.id,
      width: "60px",
    },
    {
      name: "Project ID",
      code: "projectid",
      selector: (row) => row.projectid,
      width: "100px",
    },
    {
      name: "Project Name",
      code: "name",
      selector: (row) => row.name,
      width: "250px",
    },
    {
      name: "Date",
      code: "Date",
      selector: (row) => row.Date,
      // width: "100px",
    },
    {
      name: "Time",
      code: "Time",
      selector: (row) => row.Time,
      // width: "100px",
    },
  ];

  const handleInput = (e) => {
    
  }

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
                className="feather feather-filter"
                style={{ paddingRight: "10px" }}
              >
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
              Thông Báo
            </div>
            <div className="DAT_Content-Header-Main-Dashboard-SubHead">
              Example dashboard overview and content summary
            </div>
          </div>
        </div>
      </div>

      <div className="Notification_Content-Container">
        <div className="Notification_Content-Container-Group">
          <div className="Notification_Content-Container-Group-Head">
            <label style={{ color: "#0061F2", fontWeight: "600" }}>
              Projects Changes History
            </label>
          </div>
          <input type="date" ref={datefill} onChange={(e)=>handleInput(e)}></input>
          <div className="Notification_Content-Container-Group-Body">
            <DataTable
              columns={column}
              data={data}
              pagination
              paginationComponentOptions={paginationComponentOptions}
            />
          </div>
        </div>
        <div className="Notification_Content-Container-Group">
          <div className="Notification_Content-Container-Group-Head">
            ádasd{" "}
          </div>
          <div className="Notification_Content-Container-Group-Body">ádab</div>
        </div>
        <div className="DAT_Content-Container-Group">
          <div className="DAT_Content-Container-Group-ListTag">
            <div className="DAT_Content-Container-Group-ListTag-Tag">
              <div className="DAT_Content-Container-Group-ListTag-Tag-Info">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-package feather-xl text-primary mb-3"
                  color="#0061f2"
                >
                  <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
                <div className="DAT_Content-Container-Group-ListTag-Tag-Info-Head">
                  Powerful Components
                </div>
                <div className="DAT_Content-Container-Group-ListTag-Tag-Info-Sub">
                  To create informative visual elements on your pages
                </div>
              </div>
              <img alt="" src="/DAT_Pictures/browser-stats.svg"></img>
            </div>
          </div>
          <div className="DAT_Content-Container-Group-ListTag">
            <div className="DAT_Content-Container-Group-ListTag-Tag">
              <div className="DAT_Content-Container-Group-ListTag-Tag-Info">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-book feather-xl text-secondary mb-3"
                  color="#6900c7"
                >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
                <div className="DAT_Content-Container-Group-ListTag-Tag-Info-Head">
                  Documentation
                </div>
                <div className="DAT_Content-Container-Group-ListTag-Tag-Info-Sub">
                  To keep you on track when working with our toolkit
                </div>
              </div>
              <img alt="" src="/DAT_Pictures/processing.svg"></img>
            </div>
          </div>
          <div className="DAT_Content-Container-Group-ListTag">
            <div className="DAT_Content-Container-Group-ListTag-Tag">
              <div className="DAT_Content-Container-Group-ListTag-Tag-Info">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  color="#00ac69"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-layout feather-xl text-green mb-3"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
                <div className="DAT_Content-Container-Group-ListTag-Tag-Info-Head">
                  Pages & Layouts{" "}
                </div>
                <div className="DAT_Content-Container-Group-ListTag-Tag-Info-Sub">
                  To help get you started when building your new UI{" "}
                </div>
              </div>
              <img alt="" src="/DAT_Pictures/windows.svg"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
