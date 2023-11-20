import React, { useEffect, useRef, useState } from "react";
import Spreadsheet from "react-spreadsheet";
import "./ExportReport.scss";
import axios from "axios";

export default function ExportReport() {
  const [filename, setFilename] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", filename);
    const result = await axios.post(
      "http://172.16.0.169:3000/upload",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
  };
  const onInputChange = (e) => {
    setFilename(e.target.files[0]);
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
                className="feather feather-filter"
                style={{ paddingRight: "10px" }}
              >
                <polyline points="17 1 21 5 17 9"></polyline>
                <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
                <polyline points="7 23 3 19 7 15"></polyline>
                <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
              </svg>
              Xuất Báo Cáo
            </div>
            <div className="DAT_Content-Header-Main-Dashboard-SubHead">
              Example dashboard overview and content summary
            </div>
          </div>
        </div>
      </div>

      <div className="DAT_Content-Container">
        {/* <div>
                  <input type='text' placeholder='Location to start. Ex: A' ref={loca}/>
                  <input type='text' placeholder='Number of start Ex: 1' ref={num}/>
                  <button  placeholder='Confirm' style={{width:'50px', height:'40px'}} onClick={e => handleInput(e)}/>
          </div> */}

        <div className="DAT_Content-Container-Group-head">
          <form onSubmit={onSubmit}>
            <input type="file" onChange={onInputChange} />
            <input type="submit" value="Submit" />
          </form>
        </div>

        <div className="DAT_Content-Container-Group-Table"></div>
      </div>
    </div>
  );
}
