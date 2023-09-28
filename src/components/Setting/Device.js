import React, { useContext } from "react";
import "./Device.scss";
import Button from "../Lib/Button";
import BarChartSetting from "../Lib/BarChartSetting";
import ButtonSetting from "../Lib/ButtonSetting";
import BarChart from "../Lib/BarChart";
import { EnvContext } from "../Context/EnvContext";
import Gauge from "../Lib/Gauge";
import GaugeSetting from "../Lib/GaugeSetting";
import SliderBar from "../Lib/SliderBar";


export default function Device() {
  const { button, type, gauge, bardata, envDispatch } = useContext(EnvContext);
  const handleChangeLib = (e) => {
    var temp = e.currentTarget.value;
    envDispatch({ type: "SET_TYPE", payload: temp });
  };

  return (
    <div className="Device_Content">
      <div className="Device_Content-Header">
        <div className="Device_Content-Header-Avatars">
          <div className="Device_Content-Header-Avatars-Heading">
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
              className="feather feather-grid"
            >
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
            </svg>
            Cài Đặt Thiết Bị
          </div>
          <div className="Device_Content-Header-Avatars-SubHead">
            Create single and group avatars of different sizes with this custom
            component.
          </div>
        </div>
      </div>

      <div className="Device_Content-SelectLib">
        <select
          style={{ margin: "auto !important" }}
          onChange={(e) => handleChangeLib(e)}
        >
            <option value={"Button"}>Button</option>
            <option value={"Bar"}>Bar</option>
            <option value={"Gauge"}>Gauge</option>
            <option value={"SliderBar"}>Slider</option>
        </select>
      </div>

      <div className="Device_Content-Container">
        <div className="Device_Content-Container-Group">
          <div className="Device_Content-Container-Group-ListTag">
            <div className="Device_Content-Container-Group-ListTag-Tag">
              <div className="Device_Content-Container-Group-ListTag-Tag-Info">
                <div className="Device_Content-Container-Group-ListTag-Tag-Info-Head">
                  Giao diện
                </div>
                <div className="Device_Content-Container-Group-ListTag-Tag-Info-Body">
                  <div className="Device_Content-Container-Group-ListTag-Tag-Info-Body-Preview">
                    <div className="Device_Content-Container-Group-ListTag-Tag-Info-Body-Preview-Content">
                      {(() => {
                        switch (type) {
                          case "Button":
                            return <Button setting={button}></Button>;
                          case "Bar":
                            return <BarChart setting={bardata}></BarChart>;
                          case "Gauge":
                              return <Gauge setting={gauge}></Gauge>; 
                          case "Slider":
                            return <SliderBar></SliderBar> 
                          default:
                            return <></>
                        }
                      })()}
                    </div>
                    <div className="Device_Content-Container-Group-ListTag-Tag-Info-Body-Preview-Text">
                      {/* vxcx */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Device_Content-Container-Group-ListTag">
            <div className="Device_Content-Container-Group-ListTag-Tag">
              <div className="Device_Content-Container-Group-ListTag-Tag-Info">
                <div className="Device_Content-Container-Group-ListTag-Tag-Info-Head">
                  Cài đặt
                </div>
                <div className="Device_Content-Container-Group-ListTag-Tag-Info-Body">
                  <div className="Device_Content-Container-Group-ListTag-Tag-Info-Body-Preview">
                    <div className="Device_Content-Container-Group-ListTag-Tag-Info-Body-Preview-Content">
                    {(() => {
                        switch (type) {
                          case "Button":
                            return <ButtonSetting></ButtonSetting>;
                          case "Bar":
                            return <BarChartSetting setting={bardata}></BarChartSetting>;
                          case "Gauge":
                              return <GaugeSetting setting={gauge}></GaugeSetting>;  
                          case "Slider":
                              return <SliderBar></SliderBar>
                          default:
                            return <></>
                        }
                      })()}
                    </div>
                    <div className="Device_Content-Container-Group-ListTag-Tag-Info-Body-Preview-Text">
                      {/* vxcx */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
