import React, { useState } from "react";
import "./ExportReport.scss";
import axios from "axios";
import { IoCloudUpload, IoTrashOutline } from "react-icons/io5";

export default function UploadFile() {
  const [filename, setFilename] = useState(null);
  const [step, setStep] = useState("step1");
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

  const onUpload = (e) => {
    if (filename === null) {
      alert("chưa chọn file");
    } else {
      setStep("step2");
    }
  };

  const onForm = (e) => {
    alert("upload success");
  };

  const onDown = (e) => {
    setStep("step1");
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
    console.log(e.dataTransfer.files[0]);
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
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  id="step1"
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
                      onClick={() =>
                        document.querySelector(".inputfile").click()
                      }
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
                    upload
                  </button>
                </div>
              </>
            );
          case "step2":
            return (
              <>
                <div className="DAT_UploadFile-Form" id="step2">
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
                      {filename === null ? (
                        <div style={{ marginBottom: "10px" }}>
                          Kéo và thả file vào đây
                        </div>
                      ) : (
                        <div>
                          <div>
                            <div>{filename.name}</div>
                          </div>
                        </div>
                      )}
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
              </>
            );
          default:
            return <></>;
        }
      })()}
    </div>
  );
}
