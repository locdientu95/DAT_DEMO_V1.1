import React, { useState } from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";

export default function Sidebar(props) {
  const [drop, setDrop] = useState("default");
  const [state, setState] = useState(false);

  const handleDropdown = (e) => {
    var id = e.currentTarget.id;

    if (state) {
      //true
      if (drop !== id) {
        setDrop(id);
      } else {
        setDrop("Default"); //hook
        setState(false); //hook
      }
    } else {
      // false
      setDrop(id);
      setState(true);
    }
  };

  return (
    <div className="DAT_Sidebar" id="Sidebar">
      <div className="DAT_Sidebar_Content">
        {/* Menu */}
        <div className="DAT_Sidebar_Content_Menu">
          {/* Trang chu */}
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <div
              className="DAT_Sidebar_Content_Menu_Item"
              id="Home"
              onClick={(e) => {
                handleDropdown(e);
              }}
            >
              <div className="DAT_Sidebar_Content_Menu_Item_Icon">
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
              <span>Trang Chủ</span>
              <div className="DAT_Sidebar_Content_Menu_Item_Arrow">
                <svg
                  id="Home_Logo"
                  width="16"
                  height="16"
                  className="svg-inline--fa fa-angle-down"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="angle-down"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  data-fa-i2svg=""
                  style={{
                    transform:
                      drop === "Home" ? "rotate(0deg)" : "rotate(-90deg)",
                  }}
                >
                  <path
                    fill="currentColor"
                    d="M169.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 274.7 54.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                  ></path>
                </svg>
              </div>
            </div>
          </Link>

          {/* Trang chu dropdown */}
          {drop === "Home" ? (
            <div className="DAT_Sidebar_Content_Menu_Dropdown" id="Home_Drop">
              <div className="DAT_Sidebar_Content_Menu_Dropdown_List">
                <Link
                  to="/Automation"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="DAT_Sidebar_Content_Menu_Dropdown_List_Item">
                    Tự động hóa
                  </div>
                </Link>
                <Link
                  to="/SolarEnergy"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="DAT_Sidebar_Content_Menu_Dropdown_List_Item">
                    Năng lượng mặt trời
                  </div>
                </Link>
                <Link
                  to="/Elevator"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="DAT_Sidebar_Content_Menu_Dropdown_List_Item">
                    Thang máy
                  </div>
                </Link>
                <Link
                  to="/UPS"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="DAT_Sidebar_Content_Menu_Dropdown_List_Item">
                    Ups
                  </div>
                </Link>
              </div>
            </div>
          ) : (
            <></>
          )}

          {/* Vi tri */}
          <Link
            to={"/Location"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div
              className="DAT_Sidebar_Content_Menu_Item"
              id="ViTri"
              onClick={(e) => {
                handleDropdown(e);
              }}
            >
              <div className="DAT_Sidebar_Content_Menu_Item_Icon">
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
                  className="feather feather-filter"
                >
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                </svg>
              </div>
              <span>Vị Trí</span>
              <div className="DAT_Sidebar_Content_Menu_Item_Arrow">
                {/* <svg
                  id="NhatKy_Logo"
                  width="16"
                  height="16"
                  className="svg-inline--fa fa-angle-down"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="angle-down"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  data-fa-i2svg=""
                  style={{ transform: (drop==="ViTri") ? "rotate(0deg)" : "rotate(-90deg)" }}
                >
                  <path
                    fill="currentColor"
                    d="M169.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 274.7 54.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                  ></path>
                </svg> */}
              </div>
            </div>
          </Link>

          {/* Vi tri dropdown */}
          {/* {drop === "NhatKy" ? (
            <div className="DAT_Sidebar_Content_Menu_Dropdown" id="NhatKy_Drop">
              <div className="DAT_Sidebar_Content_Menu_Dropdown_List">
                <div className="DAT_Sidebar_Content_Menu_Dropdown_List_Item">
                  Lịch sử truy cập
                </div>
                <div className="DAT_Sidebar_Content_Menu_Dropdown_List_Item">
                  Lịch sử cài đặt
                </div>
              </div>
            </div>
          ) : (
            <></>
          )} */}

          {/* Thong bao */}
          <Link
            to="/Notification"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div
              className="DAT_Sidebar_Content_Menu_Item"
              id="ThongBao"
              onClick={(e) => {
                handleDropdown(e);
              }}
            >
              <div className="DAT_Sidebar_Content_Menu_Item_Icon">
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
                  className="feather feather-bell"
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </div>
              <span>Thông Báo</span>
              <div className="DAT_Sidebar_Content_Menu_Item_Arrow">
                {/* <svg
                  id="ThongBao_Logo"
                  width="16"
                  height="16"
                  className="svg-inline--fa fa-angle-down"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="angle-down"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  data-fa-i2svg=""
                  style={{ transform: (drop==="ThongBao") ? "rotate(0deg)" : "rotate(-90deg)" }}
                >
                  <path
                    fill="currentColor"
                    d="M169.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 274.7 54.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                  ></path>
                </svg> */}
              </div>
            </div>
          </Link>

          {/* SMS */}
          <Link to="/SMS" style={{ textDecoration: "none", color: "black" }}>
            <div
              className="DAT_Sidebar_Content_Menu_Item"
              id="SMS"
              onClick={(e) => {
                handleDropdown(e);
              }}
            >
              <div className="DAT_Sidebar_Content_Menu_Item_Icon">
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
                  className="feather feather-mail"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <span>SMS</span>
              <div className="DAT_Sidebar_Content_Menu_Item_Arrow">
                {/* <svg
                  id="ThongBao_Logo"
                  width="16"
                  height="16"
                  className="svg-inline--fa fa-angle-down"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="angle-down"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  data-fa-i2svg=""
                  style={{ transform: (drop==="SMS") ? "rotate(0deg)" : "rotate(-90deg)" }}
                >
                  <path
                    fill="currentColor"
                    d="M169.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 274.7 54.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                  ></path>
                </svg> */}
              </div>
            </div>
          </Link>

          {/* Bao cao */}
          <div
            className="DAT_Sidebar_Content_Menu_Item"
            id="BaoCao"
            onClick={(e) => {
              handleDropdown(e);
            }}
          >
            <div className="DAT_Sidebar_Content_Menu_Item_Icon">
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
                className="feather feather-repeat"
              >
                <polyline points="17 1 21 5 17 9"></polyline>
                <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
                <polyline points="7 23 3 19 7 15"></polyline>
                <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
              </svg>
            </div>
            <span>Báo Cáo</span>
            <div className="DAT_Sidebar_Content_Menu_Item_Arrow">
              <svg
                id="BaoCao_Logo"
                width="16"
                height="16"
                className="svg-inline--fa fa-angle-down"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="angle-down"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                data-fa-i2svg=""
                style={{
                  transform:
                    drop === "BaoCao" ? "rotate(0deg)" : "rotate(-90deg)",
                }}
              >
                <path
                  fill="currentColor"
                  d="M169.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 274.7 54.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                ></path>
              </svg>
            </div>
          </div>

          {/* Bao cao dropdown */}
          {drop === "BaoCao" ? (
            <div className="DAT_Sidebar_Content_Menu_Dropdown" id="BaoCao_Drop">
              <div className="DAT_Sidebar_Content_Menu_Dropdown_List">
                <Link
                  to="/ErrorReport"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="DAT_Sidebar_Content_Menu_Dropdown_List_Item">
                    Báo cáo lỗi
                  </div>
                </Link>
                <Link
                  to="/ExportReport"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="DAT_Sidebar_Content_Menu_Dropdown_List_Item">
                    Xuất báo cáo
                  </div>
                </Link>
              </div>
            </div>
          ) : (
            <></>
          )}

          {/* Cai dat */}
          <div
            className="DAT_Sidebar_Content_Menu_Item"
            id="CaiDat"
            onClick={(e) => {
              handleDropdown(e);
            }}
          >
            <div className="DAT_Sidebar_Content_Menu_Item_Icon">
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
                className="feather feather-tool"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
              </svg>
            </div>
            <span>Cài Đặt</span>
            <div className="DAT_Sidebar_Content_Menu_Item_Arrow">
              <svg
                id="CaiDat_Logo"
                width="16"
                height="16"
                className="svg-inline--fa fa-angle-down"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="angle-down"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                data-fa-i2svg=""
                style={{
                  transform:
                    drop === "CaiDat" ? "rotate(0deg)" : "rotate(-90deg)",
                }}
              >
                <path
                  fill="currentColor"
                  d="M169.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 274.7 54.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                ></path>
              </svg>
            </div>
          </div>

          {/* Cai dat dropdown */}
          {drop === "CaiDat" ? (
            <div className="DAT_Sidebar_Content_Menu_Dropdown" id="CaiDat_Drop">
              <div className="DAT_Sidebar_Content_Menu_Dropdown_List">
                <Link
                  to="/DeviceSetting"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="DAT_Sidebar_Content_Menu_Dropdown_List_Item">
                    Thiết bị
                  </div>
                </Link>
                <Link
                  to="/Account"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="DAT_Sidebar_Content_Menu_Dropdown_List_Item">
                    Tài khoản
                  </div>
                </Link>
                <Link
                  to="/Configuration"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="DAT_Sidebar_Content_Menu_Dropdown_List_Item">
                    Cấu hình
                  </div>
                </Link>
                <Link
                  to="/ErrorSetting"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="DAT_Sidebar_Content_Menu_Dropdown_List_Item">
                    Cài đặt lỗi
                  </div>
                </Link>
              </div>
            </div>
          ) : (
            <></>
          )}

          {/* Thong tin DAT */}
          <Link
            to="/DATGroup"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div
              className="DAT_Sidebar_Content_Menu_Item"
              id="DAT"
              onClick={(e) => {
                handleDropdown(e);
              }}
            >
              <div className="DAT_Sidebar_Content_Menu_Item_Icon">
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
                  className="feather feather-grid"
                >
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
              </div>
              <span>DAT Group</span>
              <div className="DAT_Sidebar_Content_Menu_Item_Arrow">
                {/* <svg
                  id="DAT_Logo"
                  width="16"
                  height="16"
                  className="svg-inline--fa fa-angle-down"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="angle-down"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  data-fa-i2svg=""
                  style={{ transform: (drop==="DAT") ? "rotate(0deg)" : "rotate(-90deg)" }}
                >
                  <path
                    fill="currentColor"
                    d="M169.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 274.7 54.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                  ></path>
                </svg>               */}
              </div>
            </div>
          </Link>
        </div>

        {/* Footer */}
        <div className="DAT_Sidebar_Content_Footer">
          <div className="DAT_Sidebar_Content_Footer_Content">
            <div className="DAT_Sidebar_Content_Footer_Content_Title">
              Logged in as:
            </div>
            <div className="DAT_Sidebar_Content_Footer_Content_Text">
              {props.name}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
