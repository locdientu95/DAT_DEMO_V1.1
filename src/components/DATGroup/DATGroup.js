import React from "react";
import "./DATGroup.scss";
import { Link } from "react-router-dom";

export default function DATGroup() {
  return (
    <div className="DAT_DATGroup">
      <div className="DAT_DATGroup-Header">
        <div className="DAT_DATGroup-Header-Dashboard">
          <div className="DAT_DATGroup-Header-Dashboard-Heading">
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
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
            DAT Group
          </div>
          <div className="DAT_DATGroup-Header-Dashboard-SubHead">
            Example dashboard overview and content summary
          </div>
        </div>
      </div>

      <div className="DAT_DATGroup-Container">
        <div className="DAT_DATGroup-Container-Card">
          <div className="DAT_DATGroup-Container-Card-Body">
            <div className="DAT_DATGroup-Container-Card-Body-Center">
              <div className="DAT_DATGroup-Container-Card-Body-Center-Text">
                <div className="DAT_DATGroup-Container-Card-Body-Center-Text-Tit">
                  Chào mừng đến với DAT Group!
                </div>
                <div className="DAT_DATGroup-Container-Card-Body-Center-Text-Contain">
                  Là nhà cung cấp sản phẩm và phát triển giải pháp dẫn đầu thị
                  trường Việt Nam trong lĩnh vực tự động hóa và năng lượng tái
                  tạo.
                </div>
                <button>Bắt Đầu</button>
              </div>
              <div className="DAT_DATGroup-Container-Card-Body-Center-Img">
                <img alt="" src="/DAT_Pictures/statistics.svg" />
              </div>
            </div>
          </div>
        </div>

        <div className="DAT_DATGroup-Container-Group">
          <Link
            to={"/Automation"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="DAT_DATGroup-Container-Group-ListTag">
              <div
                className="DAT_DATGroup-Container-Group-ListTag-Tag"
                style={{
                  borderLeft: "4px solid #0061f2",
                  borderRadius: "10px",
                }}
              >
                <div className="DAT_DATGroup-Container-Group-ListTag-Tag-Info">
                  <div
                    className="DAT_DATGroup-Container-Group-ListTag-Tag-Info-Head"
                    style={{ color: "#0061f2" }}
                  >
                    Tự Động Hóa
                  </div>
                  <div className="DAT_DATGroup-Container-Group-ListTag-Tag-Info-Sub">
                    To create informative visual elements on your pages
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link
            to={"/SolarEnergy"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="DAT_DATGroup-Container-Group-ListTag">
              <div
                className="DAT_DATGroup-Container-Group-ListTag-Tag"
                style={{
                  borderLeft: "4px solid #6900c7",
                  borderRadius: "10px",
                }}
              >
                <div className="DAT_DATGroup-Container-Group-ListTag-Tag-Info">
                  <div
                    className="DAT_DATGroup-Container-Group-ListTag-Tag-Info-Head"
                    style={{ color: "#6900c7" }}
                  >
                    Năng Lượng Mặt Trời
                  </div>
                  <div className="DAT_DATGroup-Container-Group-ListTag-Tag-Info-Sub">
                    To create informative visual elements on your pages
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link
            to={"/Elevator"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="DAT_DATGroup-Container-Group-ListTag">
              <div
                className="DAT_DATGroup-Container-Group-ListTag-Tag"
                style={{
                  borderLeft: "4px solid #00ac69",
                  borderRadius: "10px",
                }}
              >
                <div className="DAT_DATGroup-Container-Group-ListTag-Tag-Info">
                  <div
                    className="DAT_DATGroup-Container-Group-ListTag-Tag-Info-Head"
                    style={{ color: "#00ac69" }}
                  >
                    Thang Máy
                  </div>
                  <div className="DAT_DATGroup-Container-Group-ListTag-Tag-Info-Sub">
                    To create informative visual elements on your pages
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to={"/UPS"} style={{ textDecoration: "none", color: "black" }}>
            <div className="DAT_DATGroup-Container-Group-ListTag">
              <div
                className="DAT_DATGroup-Container-Group-ListTag-Tag"
                style={{
                  borderLeft: "4px solid #00cfd5",
                  borderRadius: "10px",
                }}
              >
                <div className="DAT_DATGroup-Container-Group-ListTag-Tag-Info">
                  <div
                    className="DAT_DATGroup-Container-Group-ListTag-Tag-Info-Head"
                    style={{ color: "#00cfd5" }}
                  >
                    UPS
                  </div>
                  <div className="DAT_DATGroup-Container-Group-ListTag-Tag-Info-Sub">
                    To create informative visual elements on your pages
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
