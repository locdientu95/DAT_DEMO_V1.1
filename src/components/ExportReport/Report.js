import React, { useRef, useState } from "react";
import "./ExportReport.scss";
import { FaFileExcel } from "react-icons/fa";
import { Box } from "../Lib/FunctionElement";

export default function ListForm() {
  // const time = [
  //   "00:00",
  //   "00:30",
  //   "01:00",
  //   "01:30",
  //   "02:00",
  //   "02:30",
  //   "03:00",
  //   "03:30",
  //   "04:00",
  //   "04:30",
  //   "05:00",
  //   "05:30",
  //   "06:00",
  //   "06:30",
  //   "07:00",
  //   "07:30",
  //   "08:00",
  //   "08:30",
  //   "09:00",
  //   "09:30",
  //   "10:00",
  //   "10:30",
  //   "11:00",
  //   "11:30",
  //   "12:00",
  //   "12:30",
  //   "13:00",
  //   "13:30",
  //   "14:00",
  //   "14:30",
  //   "15:00",
  //   "15:30",
  //   "16:00",
  //   "16:30",
  //   "17:00",
  //   "17:30",
  //   "18:00",
  //   "18:30",
  //   "19:00",
  //   "19:30",
  //   "20:00",
  //   "20:30",
  //   "21:00",
  //   "21:30",
  //   "22:00",
  //   "22:30",
  //   "23:00",
  //   "23:30",
  // ];

  // const device = [
  //   "Nghiền đĩa đế 1 ",
  //   "Nghiền đĩa đế 2 ",
  //   "Nghiền đĩa đế 3",
  //   "Nghiền đĩa đế 4",
  //   "Thủy lực đế 3",
  //   "Thủy lực đế 4",
  //   "Thủy lực đế 6",
  //   "Thủy lực đế 7",
  //   "Thủy lực màu 1",
  //   "Thủy lực màu 2",
  // ];

  const [form, setForm] = useState("Month");
  const timetype = useRef();
  const timestart = useRef();
  const timeend = useRef();
  const device = useRef();
  const date = useRef();
  const startDate = useRef();
  const endDate = useRef();
  const handleChange = (e) => {
    setForm(e.target.value);
  };

  const handleExportDay = () => {
    const obj = {
      ExportType: form,
      Device: device.current.value,
      Date: date.current.value,
      Timetype: timetype.current.value,
      TimeStart: timestart.current.value,
      TimeEnd: timeend.current.value,
    };
    console.log(obj);
  };

  const handleExportMonth = () => {
    const obj = {
      ExportType: form,
      Device: device.current.value,
      DateStart: startDate.current.value,
      DateEnd: endDate.current.value,
    };
    if (obj.DateStart > obj.DateEnd) {
      alert("Nhập sai ngày tháng năm gòi");
    } else console.log(obj);
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
                        {/* {Box(device)} */}
                        <select ref={device}>
                          <option value="MC1">Nghiền đĩa đế 1 </option>
                          <option value="MC2">Nghiền đĩa đế 2 </option>
                          <option value="MC3">Nghiền đĩa đế 3</option>
                          <option value="MC4">Nghiền đĩa đế 4</option>
                          <option value="MC5">Thủy lực đế 3</option>
                          <option value="MC6">Thủy lực đế 4</option>
                          <option value="MC7">Thủy lực đế 6</option>
                          <option value="MC8">Thủy lực đế 7</option>
                          <option value="MC9">Thủy lực màu 1</option>
                          <option value="MC10">Thủy lực màu 2</option>
                        </select>
                      </div>

                      <div className="DAT_Report-Right-Content-Date">
                        <span>Từ ngày</span>
                        <input type="date" ref={startDate} />
                        <span>Đến ngày</span>
                        <input type="date" ref={endDate} />
                      </div>

                      <div className="DAT_Report-Right-Content-Button">
                        <span style={{ color: "grey" }}>
                          Xuất file tại đây -{">"}
                        </span>
                        <div className="DAT_Report-Right-Content-Button-Icon">
                          <FaFileExcel
                            size={24}
                            style={{ color: "green" }}
                            onClick={handleExportMonth}
                          />
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
                        {/* {Box(device)} */}
                        <select ref={device}>
                          <option value="MC1">Nghiền đĩa đế 1 </option>
                          <option value="MC2">Nghiền đĩa đế 2 </option>
                          <option value="MC3">Nghiền đĩa đế 3</option>
                          <option value="MC4">Nghiền đĩa đế 4</option>
                          <option value="MC5">Thủy lực đế 3</option>
                          <option value="MC6">Thủy lực đế 4</option>
                          <option value="MC7">Thủy lực đế 6</option>
                          <option value="MC8">Thủy lực đế 7</option>
                          <option value="MC9">Thủy lực màu 1</option>
                          <option value="MC10">Thủy lực màu 2</option>
                        </select>
                      </div>

                      <div className="DAT_Report-Right-Content-Date1">
                        <span style={{ width: "80px", textAlign: "left" }}>
                          Chọn ngày
                        </span>
                        <input type="date" ref={date} />
                      </div>

                      <div className="DAT_Report-Right-Content-Select">
                        <span style={{ width: "80px", textAlign: "left" }}>
                          Khung giờ
                        </span>
                        <select ref={timetype}>
                          <option value="Setting">Tùy chỉnh</option>
                          <option value="High">Giờ cao điểm</option>
                          <option value="Low">Giờ thấp điểm</option>
                          <option value="Normal">Giờ bình thường</option>
                        </select>
                      </div>

                      <div className="DAT_Report-Right-Content-Date2">
                        <span>Từ giờ</span>
                        <div className="DAT_Report-Right-Content-Select">
                          {/* {Box(time)} */}
                        </div>
                        <span>Đến giờ</span>
                        <div className="DAT_Report-Right-Content-Select">
                          {/* {Box(time)} */}
                          <select ref={timestart}>
                            <option>0h</option>
                            <option>0h30</option>
                            <option>...</option>
                          </select>
                        </div>
                        <span>Đến giờ</span>
                        <div className="DAT_Report-Right-Content-Select">
                          <select ref={timeend}>
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
                          <FaFileExcel
                            size={24}
                            style={{ color: "green" }}
                            onClick={handleExportDay}
                          />
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
