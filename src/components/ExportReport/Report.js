import React, { useState } from "react";
import "./ExportReport.scss";
import { FaFileExcel } from "react-icons/fa";

export default function ListForm() {
  const [form, setForm] = useState("Month");
  const handleChange = (e) => {
    setForm(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="DAT_Report">
      <div className="DAT_Report-Left">
        <div className="DAT_Report-Left-Title" style={{ color: "#035afc" }}>
          Chọn loại báo cáo
        </div>
        <select onChange={(e) => handleChange(e)}>
          <option value={"Month"}>Báo cáo theo tháng</option>
          <option value={"Day"}>Báo cáo theo ngày</option>
        </select>
      </div>

      <div className="DAT_Report-Right">
        {(() => {
          switch (form) {
            case "Month":
              return (
                <>
                  <div id="Month">
                    <div
                      className="DAT_Report-Right-Title"
                      style={{ color: "#035afc" }}
                    >
                      Báo cáo theo tháng
                    </div>
                    <div className="DAT_Report-Right-Content">
                      <div className="DAT_Report-Right-Content-Select">
                        <span>Thiết bị</span>
                        <select>
                          <option>Nghiền đĩa đế 1 </option>
                          <option>Nghiền đĩa đế 2 </option>
                          <option>Nghiền đĩa đế 3</option>
                          <option>Nghiền đĩa đế 4</option>
                          <option>Thủy lực đế 3</option>
                          <option>Thủy lực đế 4</option>
                          <option>Thủy lực đế 6</option>
                          <option>Thủy lực đế 7</option>
                          <option>Thủy lực màu 1</option>
                          <option>Thủy lực màu 2</option>
                        </select>
                      </div>

                      <div className="DAT_Report-Right-Content-Date">
                        <span>Từ ngày</span>
                        <input type="date" />
                        <span>Đến ngày</span>
                        <input type="date" />
                      </div>

                      <div className="DAT_Report-Right-Content-Button">
                        <span style={{ color: "grey" }}>
                          Xuất file tại đây -{">"}
                        </span>
                        <div className="DAT_Report-Right-Content-Button-Icon">
                          <FaFileExcel size={24} style={{ color: "green" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            case "Day":
              return (
                <>
                  <div id="Day">
                    <div
                      className="DAT_Report-Right-Title"
                      style={{ color: "#035afc" }}
                    >
                      Báo cáo theo ngày
                    </div>
                    <div className="DAT_Report-Right-Content">
                      <div className="DAT_Report-Right-Content-Select">
                        <span style={{ width: "80px", textAlign: "left" }}>
                          Thiết bị
                        </span>
                        <select>
                          <option>Nghiền đĩa đế 1 </option>
                          <option>Nghiền đĩa đế 2 </option>
                          <option>Nghiền đĩa đế 3</option>
                          <option>Nghiền đĩa đế 4</option>
                          <option>Thủy lực đế 3</option>
                          <option>Thủy lực đế 4</option>
                          <option>Thủy lực đế 6</option>
                          <option>Thủy lực đế 7</option>
                          <option>Thủy lực màu 1</option>
                          <option>Thủy lực màu 2</option>
                        </select>
                      </div>

                      <div className="DAT_Report-Right-Content-Date1">
                        <span style={{ width: "80px", textAlign: "left" }}>
                          Chọn ngày
                        </span>
                        <input type="date" />
                      </div>

                      <div className="DAT_Report-Right-Content-Select">
                        <span style={{ width: "80px", textAlign: "left" }}>
                          Khung giờ
                        </span>
                        <select>
                          <option>Tùy chỉnh</option>
                          <option>Giờ cao điểm</option>
                          <option>Giờ thấp điểm</option>
                          <option>Giờ bình thường</option>
                        </select>
                      </div>

                      <div className="DAT_Report-Right-Content-Date2">
                        <span>Từ giờ</span>
                        <div className="DAT_Report-Right-Content-Select">
                          <select>
                            <option>0h</option>
                            <option>0h30</option>
                            <option>...</option>
                          </select>
                        </div>
                        <span>Đến giờ</span>
                        <div className="DAT_Report-Right-Content-Select">
                          <select>
                            <option>0h</option>
                            <option>0h30</option>
                            <option>...</option>
                          </select>
                        </div>
                      </div>

                      <div className="DAT_Report-Right-Content-Button">
                        <span style={{ color: "grey" }}>
                          Xuất file tại đây -{">"}
                        </span>
                        <div className="DAT_Report-Right-Content-Button-Icon">
                          <FaFileExcel size={24} style={{ color: "green" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            default:
              return <></>;
          }
        })()}
      </div>
    </div>
  );
}
