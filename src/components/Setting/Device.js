import React, { useContext } from "react";
import "./Device.scss";
import { EnvContext } from "../Context/EnvContext";
import Button from "../Lib/Button";
import ButtonSetting from "../Lib/ButtonSetting";
import BarTank from "../Lib/BarTank";
import BarTankSetting from "../Lib/BarTankSetting";
import Gauge from "../Lib/Gauge";
import GaugeSetting from "../Lib/GaugeSetting";
import SliderBar from "../Lib/SliderBar";
import SliderSetting from "../Lib/SliderSetting";
import SwitchToggle from "../Lib/SwitchToggle";
import SwitchToggleSetting from "../Lib/SwitchToggleSetting";
import TablePro from "../Lib/TablePro";
import TableProSetting from "../Lib/TableProSetting";
import Number from "../Lib/Number";
import NumberSetting from "../Lib/NumberSetting";
import Lamp from "../Lib/Lamp";
import LampSetting from "../Lib/LampSetting";
import BarChartHorizontal from "../Lib/BarChartHorizontal";
import BarChartHorizontalSetting from "../Lib/BarChartHorizontalSetting";
import NumberH from "../Lib/NumberH";
import NumberHSetting from "../Lib/NumberHSetting";
import LineChartSetting from "../Lib/LineChartSetting";
import LineChartLib from "../Lib/LineChartLib";

export default function Device() {
  const {
    tablepro,
    barchart,
    lamp,
    number,
    button,
    bardata,
    type,
    gauge,
    slider,
    numberh,
    switchtoggle,
    envDispatch,
    linechart,
  } = useContext(EnvContext);
  const handleChangeLib = (e) => {
    var temp = e.currentTarget.value;
    envDispatch({ type: "SET_TYPE", payload: temp });
  };

  const data = {
    Button: <Button setting={button}></Button>,
    Bar: <BarTank setting={bardata}></BarTank>,
    Gauge: <Gauge setting={gauge}></Gauge>,
    SliderBar: <SliderBar setting={slider}></SliderBar>,
    SwitchToggle: <SwitchToggle setting={switchtoggle}></SwitchToggle>,
    TablePro: <TablePro setting={tablepro}></TablePro>,
    Number: <Number setting={number}></Number>,
    Lamp: <Lamp setting={lamp}></Lamp>,
    BarChart: <BarChartHorizontal setting={barchart}></BarChartHorizontal>,
    NumberH: <NumberH setting={numberh}></NumberH>,
    LineChartLib: <LineChartLib setting= {linechart}></LineChartLib>,
  };

  const setting = {
    Button: <ButtonSetting />,
    Bar: <BarTankSetting />,
    Gauge: <GaugeSetting />,
    SliderBar: <SliderSetting />,
    SwitchToggle: <SwitchToggleSetting />,
    TablePro: <TableProSetting />,
    Number: <NumberSetting />,
    Lamp: <LampSetting />,
    BarChart: <BarChartHorizontalSetting />,
    NumberH: <NumberHSetting/>,
    LineChartLib: <LineChartSetting/>,
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

      <div className="Device_Content-Container">
        <div className="Device_Content-Container-SelectLib">
          <select onChange={(e) => handleChangeLib(e)}>
            <option value={"Button"}>Button</option>
            <option value={"Bar"}>Bar</option>
            <option value={"Gauge"}>Gauge</option>
            <option value={"SliderBar"}>Slider</option>
            <option value={"SwitchToggle"}>SwitchToggle</option>
            <option value={"TablePro"}>TablePro</option>
            <option value={"Number"}>Number</option>
            <option value={"Lamp"}>Lamp</option>
            <option value={"BarChart"}>BarChart</option>
            <option value={"NumberH"}>NumberH</option>
            <option value={"LineChartLib"}>LineChart</option>
          </select>
        </div>
        <div className="Device_Content-Container-Group">
          <div className="Device_Content-Container-Group-Head">Giao diện</div>
          <div className="Device_Content-Container-Group-Body">
            {data[type]}
          </div>
        </div>
        <div className="Device_Content-Container-Group">
          <div className="Device_Content-Container-Group-Head">Cài Đặt</div>
          <div className="Device_Content-Container-Group-Body">
            {setting[type]}
          </div>
        </div>
      </div>
    </div>
  );
}
