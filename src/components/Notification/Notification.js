import React, { useContext, useEffect, useState } from "react";
import "./Notification.scss";
import DataTable from "react-data-table-component";
import { EnvContext } from "../Context/EnvContext";

export default function Notification() {
  const { projectchanges, register } = useContext(EnvContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    var newData = data;
    newData.map((data, index) => {
      return (data["id"] = index + 1);
    });
    setData(newData);
  }, [data]);

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
    },
    {
      name: "Time",
      code: "Time",
      selector: (row) => row.Time,
    },
    {
      name: "Company",
      code: "company",
      selector: (row) => row.company,
    },
    {
      name: "Account",
      code: "account",
      selector: (row) => row.account,
    },
  ];

  const handleInput = (e) => {
    var arr = e.target.value.split("-");
    const dateformat = String(arr[2] + "/" + arr[1] + "/" + arr[0]);
    var newData = projectchanges;
    newData = newData.filter((data, index) => {
      return data.Date === dateformat;
    });
    setData(newData);
  };

  return (
    <div className="DAT_Notification">
      <div className="DAT_Notification-Header">
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

      <div className="DAT_Notification-Container">
        <div className="DAT_Notification-Container-ProjectHistory">
          <div className="DAT_Notification-Container-ProjectHistory-Head">
            <label style={{ color: "#0061F2", fontWeight: "600" }}>
              Projects Changes History
            </label>
          </div>
          <input
            type="date"
            style={{ margin: "20px 0 0 20px" }}
            onChange={(e) => handleInput(e)}
          ></input>
          <div className="DAT_Notification-Container-ProjectHistory-Body">
            <div>
              <DataTable
                columns={column}
                data={data}
                pagination
                paginationComponentOptions={paginationComponentOptions}
              />
            </div>
          </div>
        </div>
        <div className="DAT_Notification-Container-Group">
          <div className="DAT_Notification-Container-Group-ListTag">
            <div className="DAT_Notification-Container-Group-ListTag-Head">
              <label style={{ color: "#0061F2", fontWeight: "600" }}>
                Users Status
              </label>
            </div>
            <div className="DAT_Content-Container-Group-ListTag-Body">
              {Object.entries(register).map(([key]) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "10px",
                    }}
                  >
                    <div>{register[key].username}</div>
                    {register[key].status === true ? (
                      <div style={{ color: "green", fontWeight: "bold" }}>
                        Online
                      </div>
                    ) : (
                      <div style={{ color: "red", fontWeight: "bold" }}>
                        Offline
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="DAT_Notification-Container-Group-ListTag">
            <div className="DAT_Notification-Container-Group-ListTag-Head">
              <label style={{ color: "#0061F2", fontWeight: "600" }}>
                Users Status
              </label>
            </div>
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
        </div>
      </div>
    </div>
  );
}
