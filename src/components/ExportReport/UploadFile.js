import React, { useState } from "react";
import "./ExportReport.scss";
import axios from "axios";
import { IoCloudUpload } from "react-icons/io5";

export default function UploadFile() {


  const [filename, setFilename] = useState(null);
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", filename);
    const result = await axios.post(
      "http://172.16.0.169:5000/upload",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    alert("upload success");
  };

  const onInputChange = (e) => {
    setFilename(e.target.files[0]);
  };

  return (
    <div className="DAT_UploadFile">
      <form
        className="DAT_UploadFile-Form"
        onClick={() => document.querySelector(".inputfile").click()}
        // onSubmit={onSubmit}
      >
        <input
          type="file"
          id="file"
          className="inputfile"
          hidden
          // onChange={onInputChange}
        />
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <IoCloudUpload color="#0061f2" size={50} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "18px",
            }}
          >
            Kéo và thả file vào đây
          </div>
        </div>
        {/* <input type="submit" value="Submit" /> */}
      </form>

      <div className="DAT_UploadFile-Select">
        <div>Chọn form</div>
        <select>
          <option>a</option>
          <option>b</option>
          <option>c</option>
        </select>
      </div>

      <div className="DAT_UploadFile-Button">
        <button>Tải file</button>
      </div>
    </div>
  );
}
