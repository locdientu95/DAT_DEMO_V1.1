import React, { useEffect, useRef, useState } from "react";
import "./ExportReport.scss";
import ListForm from "./ListForm.js";
import History from "./History.js";
import axios from "axios";

export default function ExportReport() {
  const [filename, setFilename] = useState(null);

  const tit = {
    listform: "Danh Sách Form",
    history: "Thống Kê",
  };

  const color = {
    cur: "blue",
    pre: "black",
  };

  const [nav, setNav] = useState("listform");
  const handleNav = (e) => {
    var id = e.currentTarget.id;
    setNav(id);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", filename);
    // const result = await axios.post(
    //   "http://172.16.0.204:3000/file/upload",
    //   formData,
    //   {
    //     headers: { "Content-Type": "multipart/form-data" },
    //   }
    // );
  };
  const onInputChange = (e) => {
    setFilename(e.target.files[0]);



    const [file] = e.target.files;
    const reader = new FileReader();
    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws);
      setData(data);
    };
    reader.readAsBinaryString(file);


    
  };

  return (
    <div className="DAT_ExportReport">
      <div className="DAT_ExportReport-Header">
        <div className="DAT_ExportReport-Header-Dashboard">
          <div className="DAT_ExportReport-Header-Dashboard-Heading">
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
            Xuất Báo Cáo - {tit[nav]}
          </div>
          <div className="DAT_ExportReport-Header-Dashboard-SubHead">
            Example dashboard overview and content summary
          </div>
        </div>
      </div>

      {/* <div className="DAT_ExportReport-Container">
        <div className="DAT_ExportReport-Container-Group-head">
          <form onSubmit={onSubmit}>
            <input type="file" onChange={onInputChange} />
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div className="DAT_ExportReport-Container-Group-Table"></div>
      </div> */}

      <div className="DAT_ExportReport-Main">
        <div className="DAT_ExportReport-Main-Nav">
          <div
            className="DAT_ExportReport-Main-Nav-Item"
            id="listform"
            style={{ color: nav === "listform" ? color.cur : color.pre }}
            onClick={(e) => handleNav(e)}
          >
            Danh Sách Form
          </div>

          <div
            className="DAT_ExportReport-Main-Nav-Item"
            id="history"
            style={{ color: nav === "history" ? color.cur : color.pre }}
            onClick={(e) => handleNav(e)}
          >
            Thống Kê
          </div>
        </div>

        <div className="DAT_ExportReport-Main-Content">
          {(() => {
            switch (nav) {
              case "listform":
                return (
                  <>
                    <ListForm></ListForm>
                  </>
                );
              case "history":
                return (
                  <>
                    <History></History>
                  </>
                );
              default:
                <></>;
            }
          })()}
        </div>
      </div>
    </div>
  );
}
