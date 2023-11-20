import React, { useState } from "react";
import "./ExportReport.scss";
import axios from "axios";

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
      <form className="DAT_UploadFile-Form" onSubmit={onSubmit}>
        <input type="file" id="file" onChange={onInputChange} />
        <input type="submit" value="Submit" />
      </form>

      <div className="DAT_UploadFile-Select">
        <div>Chon form</div>
        <select>
          <option>a</option>
          <option>b</option>
          <option>c</option>
        </select>
      </div>

      <div className="DAT_UploadFile-Button">
        <button>Download</button>
      </div>
    </div>
  );
}
