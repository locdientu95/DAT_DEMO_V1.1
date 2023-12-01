import React, { useState, useRef, useContext, useEffect } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { EnvContext } from "../Context/EnvContext";
import { signal, effect } from "@preact/signals-react";
import { img, preimg } from "../Account/Info";
export const test = signal("")

export default function Header(props) {
  const { errorlogs, errornoti, envDispatch, login } = useContext(EnvContext);
  
  const [arrow, setArrow] = useState(false); //hook
  const [readnoti, setReadnoti] = useState();
  const [ava, setAva] = useState(login.avatar)

  useEffect(()=>{
    preimg.value = login.avatar
    if (img.value != ""){
      preimg.value = img.value
    }
  },[preimg.value])
  
  
  // useEffect(() => {
  //   axios
  //     .post(
  //       process.env.REACT_APP_API_URL + "/getimg",
  //       { username: usr },
  //       { credential: true }
  //     )
  //     .then((res) => {
  //       setAva(res.data.data.avatar);
  //     });
  // }, []);

  const getDrop = (id) => {
    //function

    if (id === "Document") {
      setArrow(true);
    } else {
      setArrow(false);
    }
  };

  const [drop, setDrop] = useState("Default"); //hook
  const [state, setState] = useState(false); //hook

  const handleDropDown = (e) => {
    var id = e.currentTarget.id;

    if (state) {
      //true
      if (drop !== id) {
        setDrop(id);
        getDrop(id);
      } else {
        setDrop("Default"); //hook
        getDrop("Default"); //function
        setState(false); //hook
      }
    } else {
      // false
      setDrop(id);
      getDrop(id);
      setState(true);
    }
  };

  useEffect(() => {
    let newData = errorlogs;
    newData = newData.filter((data) => data.read === false);
    let temp = newData.length;
    // console.log(temp);
    setReadnoti(temp);
  }, [errorlogs]);

  const handleShowError = (e) => {
    let id = e.currentTarget.id;
    let arr = id.split("_");
    errornoti.ErrCode = arr[0];
    let index = errorlogs.findIndex((newData) => newData.id === arr[1]);
    errorlogs[index].read = true;
    // console.log(e.currentTarget);
    envDispatch({ type: "SET_ERRORLOGS", payload: errorlogs });
    envDispatch({ type: "SET_ERRORNOTI", payload: errornoti });
  };

  const search = useRef("");

  const handleSearch = () => {
    console.log("search:", search.current.value);
  };

  const handleSidebar = () => {
    var get = document.getElementById("Sidebar");

    if (get.style.display === "none") {
      get.style.display = "block";
    } else {
      get.style.display = "none";
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    envDispatch({
      type: "SET_LOGIN",
      payload: {
        username: "",
        mail: "",
        avatar: "",
        status: false,
      },
    });
  };

  return (
    <>
      <div className="DAT_Header">
        {/* Menu Button */}
        <div className="DAT_Header-Menu">
          <button
            className="DAT_Header-Menu-Toggle"
            id="Menu"
            onClick={(e) => {
              handleSidebar(e);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Left */}
        <div className="DAT_Header-Left">
          <img alt="" src="/DAT_Pictures/logo_DAT.png" />
        </div>

        {/* Search */}
        <form className="DAT_Header-Center">
          <div className="DAT_Header-Center-Form">
            <input
              type="search"
              placeholder="Search"
              onChange={() => handleSearch()}
              ref={search}
            />
            <div className="DAT_Header-Center-Form-Icon">
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
                className="feather feather-search"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
          </div>
        </form>

        {/* Right Side */}
        <div className="DAT_Header-Right">
          {/* Documentation */}
          <div
            className="DAT_Header-Right-Item1"
            id="Document"
            onClick={(e) => {
              handleDropDown(e);
            }}
          >
            <div className="DAT_Header-Right-Item1-Profile">
              <div className="DAT_Header-Right-Item1-Profile-Documentation">
                Documentation
              </div>
              <div className="DAT_Header-Right-Item1-Profile-DropdownIcon">
                <svg
                  id="Document_Icon"
                  className="svg-inline--fa fa-chevron-right dropdown-arrow"
                  height="10"
                  width="10"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="chevron-right"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  data-fa-i2svg=""
                  style={{
                    transform: arrow ? "rotate(90deg)" : "rotate(0deg)",
                  }}
                >
                  <path
                    fill="currentColor"
                    d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Alert */}
          <div
            className="DAT_Header-Right-Item2"
            id="Alert"
            onClick={(e) => {
              handleDropDown(e);
            }}
          >
            <button className="DAT_Header-Right-Item2-AlertIcon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
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
              <span
                style={{
                  backgroundColor: "red",
                  borderRadius: "50%",
                  width: "15px",
                  height: "15px",
                  fontSize: "12px",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {readnoti}
              </span>
            </button>
          </div>

          {/* Message */}
          <div
            className="DAT_Header-Right-Item3"
            id="Message"
            onClick={(e) => {
              handleDropDown(e);
            }}
          >
            <button className="DAT_Header-Right-Item3-MessageIcon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
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
            </button>
          </div>

          {/* Account */}
          <div
            className="DAT_Header-Right-Item4"
            id="Account"
            onClick={(e) => {
              handleDropDown(e);
            }}
          >
            <button className="DAT_Header-Right-Item4-Account">
              <img
                alt=""
                src={preimg.value}
                style={{ height: "36px", width: "50px", borderRadius: "50%" }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Switch case */}
      {(() => {
        switch (drop) {
          case "Document":
            return (
              <>
                {/* Document Dropdown */}
                <div className="DAT_Header_Document" id="Document_Drop">
                  {/* Item 1 */}
                  <div className="DAT_Header_Document_Item1">
                    <div className="DAT_Header_Document_Item1-Icon">
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
                        className="feather feather-book"
                      >
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                      </svg>
                    </div>
                    <div className="DAT_Header_Document_Item1-Content">
                      <div style={{ color: "grey" }}>Documentation</div>
                      Usage instructions and reference
                    </div>
                  </div>
                  {/* Item 2 */}
                  <div className="DAT_Header_Document_Item2">
                    <div className="DAT_Header_Document_Item2-Icon">
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
                        className="feather feather-code"
                      >
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                      </svg>
                    </div>
                    <div className="DAT_Header_Document_Item2-Content">
                      <div style={{ color: "grey" }}>Components</div>
                      Code snippets and reference
                    </div>
                  </div>
                  {/* Item 3 */}
                  <div className="DAT_Header_Document_Item3">
                    <div className="DAT_Header_Document_Item3-Icon">
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
                        className="feather feather-file-text"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                      </svg>
                    </div>
                    <div className="DAT_Header_Document_Item3-Content">
                      <div style={{ color: "grey" }}>Changelog</div>
                      Updates and changes
                    </div>
                  </div>
                </div>
              </>
            );
          case "Alert":
            return (
              <>
                {/* Alert Dropdown */}
                <div className="DAT_Header_Alert" id="Alert_Drop">
                  {/* Item 1 */}
                  <div className="DAT_Header_Alert_Item1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-bell me-2"
                      style={{ marginTop: "4px", marginRight: "8px" }}
                    >
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                    </svg>
                    Alerts Center
                  </div>
                  {/* Item */}
                  <Link
                    to="/ErrorReport"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {Object.entries(errorlogs).map(([key]) => {
                      return (
                        <div
                          key={key}
                          className="DAT_Header_Alert_Item4"
                          id={errorlogs[key].ErrCode + "_" + errorlogs[key].id}
                          onClick={(e) => handleShowError(e)}
                          style={{
                            backgroundColor: errorlogs[key].read
                              ? "rgb(128, 128, 128, 0.2)"
                              : "white",
                          }}
                        >
                          <div
                            key={key}
                            className="DAT_Header_Alert_Item4-Icon"
                          >
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
                  </Link>

                  <Link
                    to="/Notification"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <div className="DAT_Header_Alert_Item6">
                      View All Alerts
                    </div>
                  </Link>
                </div>
              </>
            );
          case "Message":
            return (
              <>
                {/* Message Dropdown */}
                <div className="DAT_Header_Message" id="Message_Drop">
                  {/* Item 1 */}
                  <div className="DAT_Header_Message_Item1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-mail me-2"
                      style={{ marginTop: "4px", marginRight: "8px" }}
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    Message Center
                  </div>
                  {/* Item 2 */}
                  <div className="DAT_Header_Message_Item2">
                    <div className="DAT_Header_Message_Item2-Icon">
                      <img
                        alt=""
                        src="./DAT_Pictures/user2.png"
                        style={{ height: "36px", borderRadius: "50%" }}
                      ></img>
                    </div>
                    <div className="DAT_Header_Message_Item2-Content">
                      <div className="DAT_Header_Message_Item2-Content-bottom">
                        This is an alert message. It's nothing serious, but it
                        requires your attention.
                      </div>
                      <div style={{ color: "grey", fontSize: "12px" }}>
                        Thomas Wilcox · 58m
                      </div>
                    </div>
                  </div>
                  {/* Item 3 */}
                  <div className="DAT_Header_Message_Item3">
                    <div className="DAT_Header_Message_Item3-Icon">
                      <img
                        alt=""
                        src="./DAT_Pictures/user3.png"
                        style={{ height: "36px", borderRadius: "50%" }}
                      ></img>
                    </div>
                    <div className="DAT_Header_Message_Item3-Content">
                      <div className="DAT_Header_Message_Item3-Content-bottom">
                        A new monthly report is ready. Click here to view!
                      </div>
                      <div style={{ color: "grey", fontSize: "12px" }}>
                        December 29, 2021
                      </div>
                    </div>
                  </div>
                  {/* Item 4 */}
                  <div className="DAT_Header_Message_Item4">
                    <div className="DAT_Header_Message_Item4-Icon">
                      <img
                        alt=""
                        src="./DAT_Pictures/user4.png"
                        style={{ height: "36px", borderRadius: "50%" }}
                      ></img>
                    </div>
                    <div className="DAT_Header_Message_Item4-Content">
                      <div className="DAT_Header_Message_Item4-Content-bottom">
                        A new monthly report is ready. Click here to view!
                      </div>
                      <div style={{ color: "grey", fontSize: "12px" }}>
                        December 29, 2021
                      </div>
                    </div>
                  </div>
                  {/* Item 5 */}
                  <div className="DAT_Header_Message_Item5">
                    <div className="DAT_Header_Message_Item5-Icon">
                      <img
                        alt=""
                        src="./DAT_Pictures/user5.png"
                        style={{ height: "36px", borderRadius: "50%" }}
                      ></img>
                    </div>
                    <div className="DAT_Header_Message_Item5-Content">
                      <div className="DAT_Header_Message_Item5-Content-bottom">
                        A new monthly report is ready. Click here to view!
                      </div>
                      <div style={{ color: "grey", fontSize: "12px" }}>
                        December 29, 2021
                      </div>
                    </div>
                  </div>
                  {/* Item 6 */}
                  <div className="DAT_Header_Message_Item6">
                    Read All Messages
                  </div>
                </div>
              </>
            );
          case "Account":
            return (
              <>
                {/* Account Dropdown */}
                <div className="DAT_Header_Account" id="Account_Drop">
                  <div className="DAT_Header_Account_Header">
                    <div className="DAT_Header_Account_Header_Profile">
                      <img
                        alt=""
                        src={preimg.value}
                        style={{
                          height: "36px",
                          width: "36px",
                          borderRadius: "50%",
                        }}
                      ></img>
                      <div className="DAT_Header_Account_Header_Profile-Details">
                        <div>{props.name}</div>
                        <div style={{ color: "grey", fontSize: "12px" }}>
                          {props.mail}
                        </div>
                      </div>
                    </div>
                    <Link
                      to="/Account"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <div className="DAT_Header_Account_Header_Setting">
                        <div className="DAT_Header_Account_Header_Setting-Icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-settings"
                          >
                            <circle cx="12" cy="12" r="3"></circle>
                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                          </svg>
                        </div>
                        Account
                      </div>
                    </Link>
                    <div
                      className="DAT_Header_Account_Header_Logout"
                      onClick={(e) => handleLogout(e)}
                    >
                      <div className="DAT_Header_Account_Header_Logout-Icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-log-out"
                        >
                          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                          <polyline points="16 17 21 12 16 7"></polyline>
                          <line x1="21" y1="12" x2="9" y2="12"></line>
                        </svg>
                      </div>
                      Logout
                    </div>
                  </div>
                </div>
              </>
            );
          default:
            <></>;
        }
      })()}
    </>
  );
}
