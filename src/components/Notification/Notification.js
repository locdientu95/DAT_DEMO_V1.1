import React, { useContext, useEffect, useRef, useState } from "react";
import "./Notification.scss";
import DataTable from "react-data-table-component";
import { EnvContext } from "../Context/EnvContext";

export default function Notification() {
  const { projectchanges, register, errorlogs } = useContext(EnvContext);
  const [data, setData] = useState([]);
  const [drop, setDrop] = useState(false);
  const fill = useRef("2023-09-28");

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

  useEffect(() => {
    var arr = fill.current.split("-");
    const dateformat = String(arr[2] + "/" + arr[1] + "/" + arr[0]);
    var newData = projectchanges.filter((row) => {
      return row.Date === dateformat;
    });
    setData(newData);
    // console.log(fill.current)
  }, [fill]);

  const column = [
    {
      name: "STT",
      code: "id",
      sortable: true,
      selector: (row) => row.id,
      width: "60px",
    },
    {
      name: "History",
      code: "History",
      selector: (row) => (
        <div>
          {row.account} đã chỉnh sửa dự án {row.projectid}{" "}
        </div>
      ),
    },
    {
      name: "Date",
      code: "Date",
      selector: (row) => (
        <div>
          {row.Time} {row.Date}
        </div>
      ),
    },
  ];

  const handleInput = (e) => {
    fill.current = e.target.value;
    var arr = fill.current.split("-");
    const dateformat = String(arr[2] + "/" + arr[1] + "/" + arr[0]);
    var newData = projectchanges;
    newData = newData.filter((row) => {
      return row.Date === dateformat;
    });
    setData(newData);
  };

  const handleDrop = (e) => {
    if (drop === false) {
      setDrop(true);
    } else {
      setDrop(false);
    }
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
          <div className="DAT_Notification-Container-ProjectHistory-Body">
            <input
              type="date"
              value={fill.current}
              onChange={(e) => handleInput(e)}
            ></input>
            <DataTable
              columns={column}
              data={data}
              pagination
              paginationComponentOptions={paginationComponentOptions}
            />
          </div>
        </div>
        <div className="DAT_Notification-Container-SettingNoti">
          <div className="DAT_Notification-Container-SettingNoti-Head">
            <label style={{ color: "#0061F2", fontWeight: "600" }}>
              Notification Setting
            </label>
          </div>
          <div className="DAT_Notification-Container-SettingNoti-Body">
            <div className="DAT_Notification-Container-SettingNoti-Body-Row">
              <label style={{ fontWeight: "600" }}>Warning Icon:</label>
              <div
                className="DAT_Notification-Container-SettingNoti-Body-Row-IconDrop"
                onClick={(e) => handleDrop(e)}
              >
                Icon storage
              </div>
              <label style={{ fontWeight: "600" }}>for</label>
              <select style={{ fontWeight: "600" }}>
                <option>Warning</option>
                <option>Error</option>
                <option>Success</option>
                <option>Info</option>
              </select>
            </div>
            {drop ? (
              <div className="DAT_Notification-Container-SettingNoti-Body-IconStorage">
                <div
                  className="DAT_Notification-Container-SettingNoti-Body-IconStorage-Item"
                  id="1"
                  onClick={(e) => handleDrop(e)}
                >
                  <div className="DAT_Notification-Container-SettingNoti-Body-IconStorage-Item-Icon">
                    <svg
                      className="svg-inline--fa fa-triangle-exclamation"
                      width="16"
                      height="16"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="triangle-exclamation"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
                      ></path>
                    </svg>
                  </div>
                  <label>Error 1</label>
                </div>
                <div
                  className="DAT_Notification-Container-SettingNoti-Body-IconStorage-Item"
                  id="2"
                  onClick={(e) => handleDrop(e)}
                >
                  <div
                    className="DAT_Notification-Container-SettingNoti-Body-IconStorage-Item-Icon"
                    style={{ backgroundColor: "orange" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-activity"
                    >
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                    </svg>
                  </div>
                  <label>Error 2</label>
                </div>
                <div
                  className="DAT_Notification-Container-SettingNoti-Body-IconStorage-Item"
                  id="3"
                  onClick={(e) => handleDrop(e)}
                >
                  <div
                    className="DAT_Notification-Container-SettingNoti-Body-IconStorage-Item-Icon"
                    style={{ backgroundColor: "aqua" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-bar-chart"
                    >
                      <line x1="12" y1="20" x2="12" y2="10"></line>
                      <line x1="18" y1="20" x2="18" y2="4"></line>
                      <line x1="6" y1="20" x2="6" y2="16"></line>
                    </svg>
                  </div>
                  <label>Error 3</label>
                </div>
                <div
                  className="DAT_Notification-Container-SettingNoti-Body-IconStorage-Item"
                  id="4"
                  onClick={(e) => handleDrop(e)}
                >
                  <div
                    className="DAT_Notification-Container-SettingNoti-Body-IconStorage-Item-Icon"
                    style={{ backgroundColor: "green" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-user-plus"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="8.5" cy="7" r="4"></circle>
                      <line x1="20" y1="8" x2="20" y2="14"></line>
                      <line x1="23" y1="11" x2="17" y2="11"></line>
                    </svg>
                  </div>
                  <label>Error 4</label>
                </div>
              </div>
            ) : (
              <div></div>
            )}
            <div className="DAT_Notification-Container-SettingNoti-Body-Row">
              <label style={{ fontWeight: "600" }}>Set display:</label>
              <input
                className="DAT_Notification-Container-SettingNoti-Body-Row-IconDrop"
                placeholder="Lỗi"
              ></input>
              <label style={{ fontWeight: "600" }}>for</label>
              <select style={{ fontWeight: "600" }}>
                <option>Error</option>
                <option>Warning</option>
                <option>Success</option>
                <option>Info</option>
              </select>
            </div>
            <div
              className="DAT_Notification-Container-SettingNoti-Body-Row"
              style={{ marginBottom: "0px" }}
            >
              <button>Save</button>
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
            <div
              className="DAT_Content-Container-Group-ListTag-Body"
              style={{ padding: "10px" }}
            >
              {Object.entries(register).map(([key]) => {
                return (
                  <div
                    key={key}
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
                Notification History
              </label>
            </div>
            <div
              className="DAT_Content-Container-Group-ListTag-Body"
              style={{ padding: "10px" }}
            >
              {Object.entries(errorlogs).map(([key]) => {
                return (
                  <div
                    key={key}
                    className="DAT_Header_Alert_Item4"
                    id={errorlogs[key].ErrCode + "_errorlogs"}
                  >
                    <div key={key} className="DAT_Header_Alert_Item4-Icon">
                      <svg
                        key={key}
                        className="svg-inline--fa fa-triangle-exclamation"
                        width="16"
                        height="16"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="triangle-exclamation"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
                        ></path>
                      </svg>
                    </div>
                    <div className="DAT_Header_Alert_Item4-Content">
                      <div style={{ color: "grey", fontSize: "12px" }}>
                        {errorlogs[key].Datetime}
                      </div>
                      <div className="DAT_Header_Alert_Item4-Content-bottom">
                        {errorlogs[key].DeviceID +
                          " Lỗi " +
                          errorlogs[key].ErrCode}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
