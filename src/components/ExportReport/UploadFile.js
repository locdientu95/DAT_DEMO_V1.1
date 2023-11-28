import React, { useState } from "react";
import "./ExportReport.scss";
// import axios from "axios";
import { IoCloudUpload, IoTrashOutline } from "react-icons/io5";

export default function UploadFile() {
  const [filename, setFilename] = useState(null);
  const [step, setStep] = useState("step1");
  const onSubmit = async (e) => {
    // e.preventDefault();
    // const formData = new FormData();
    // formData.append("file", filename);
    // const result = await axios.post(
    //   process.env.REACT_APP_API_URL+"/file/upload",
    //   formData,
    //   {
    //     headers: { "Content-Type": "multipart/form-data" },
    //   }
    // );
    // alert("upload success");
  };

  const onUpload = (e) => {
    if (filename === null) {
      alert("Chưa chọn file");
    } else {
      setStep("step2");
    }
  };

  const onForm = (e) => {
    alert("Tải file thành công");
  };

  const onDown = (e) => {
    setStep("step1");
    setFilename(null);
  };

  const onInputChange = (e) => {
    setFilename(e.target.files[0]);
  };

  const handleDrag = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setFilename(e.dataTransfer.files[0]);
  };

  return (
    <div className="DAT_UploadFile">
      {(() => {
        switch (step) {
          case "step1":
            return (
              <>
                <div
                  className="DAT_UploadFile-Form"
                  id="step1"
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <input
                    type="file"
                    id="file"
                    className="inputfile"
                    hidden
                    onChange={onInputChange}
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
                      <IoCloudUpload
                        color="#0061f2"
                        size={50}
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          document.querySelector(".inputfile").click()
                        }
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "18px",
                      }}
                    >
                      {filename === null ? (
                        <div style={{ marginBottom: "10px" }}>
                          Kéo và thả file vào đây
                        </div>
                      ) : (
                        <div style={{ marginBottom: "10px", display: "flex" }}>
                          <div>
                            <div>{filename.name}</div>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: "10px",
                            }}
                            onClick={() => setFilename(null)}
                          >
                            <IoTrashOutline />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  {/* <input type="submit" value="Submit" /> */}
                  <button
                    onClick={onUpload}
                    className="DAT_UploadFile-Form-Button"
                  >
                    Upload
                  </button>
                </div>
              </>
            );
          case "step2":
            return (
              <>
                <div style={{ display: "flex", gap: "16px" }}>
                  <div className="DAT_UploadFile-Info" id="step2">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "18px",
                      }}
                    >
                      <div>
                        <div>Tên: {filename.name}</div>
                        <br />
                        <div>Loại file: {filename.type}</div>
                        <br />
                        <div>Dung lượng file: {filename.size}</div>
                      </div>
                    </div>
                  </div>

                  <div className="DAT_UploadFile-Select" id="step2">
                    <div className="DAT_UploadFile-Select-Form">
                      <div>Chọn form</div>
                      <select>
                        <option>a</option>
                        <option>b</option>
                        <option>c</option>
                      </select>
                    </div>
                    <button onClick={onForm}>Tải xuống</button>
                    <span onClick={onDown}>Chọn file khác</span>
                  </div>
                </div>
              </>
            );
          default:
            return <></>;
        }
      })()}
    </div>
  );
}
