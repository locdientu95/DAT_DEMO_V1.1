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
    setStep("step2");
  };

  const onForm = (e) => {
    setStep("step3");
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
                        <>Kéo và thả file vào đây</>
                      ) : (
                        <>
                          {filename.name}
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
                        </>
                      )}
                    </div>
                  </div>
                  {/* <input type="submit" value="Submit" /> */}
                </div>
                <button onClick={onUpload}>upload</button>
              </>
            );
          case "step2":
            return (
              <>
                <div className="DAT_UploadFile-Select" id="step2">
                  <div>Chọn form</div>
                  <select>
                    <option>a</option>
                    <option>b</option>
                    <option>c</option>
                  </select>
                  <button onClick={onForm}>upload</button>
                </div>
              </>
            );
          case "step3":
            return (
              <>
                <div className="DAT_UploadFile-Button" id="step3">
                  <button onClick={onDown}>Tải file</button>
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
