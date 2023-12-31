import React, { useContext, useEffect, useState } from "react";
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
import View32bit from "../Lib/View32bit";
import View32bitSetting from "../Lib/View32bitSetting";
import NumberV from "../Lib/NumberV";
import NumberVSetting from "../Lib/NumberVSetting";
import View16bit from "../Lib/View16bit";
import View16bitSetting from "../Lib/View16bitSetting";
import axios from "axios";
import { IoClose, IoEllipsisVertical } from "react-icons/io5";
import { signal } from "@preact/signals-react";

export const tableproid = signal("");

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
    view32bit,
    numberv,
    view16bit,
  } = useContext(EnvContext);

  const handleChangeLib = (e) => {
    var temp = e.currentTarget.value;
    envDispatch({ type: "SET_TYPE", payload: temp });
  };

  const [pop, setPop] = useState(false);
  const handlePop = (e) => {
    setPop(true);
  };

  const handleClose = (e) => {
    setPop(false);
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
    LineChartLib: <LineChartLib setting={linechart}></LineChartLib>,
    View32bit: <View32bit setting={view32bit} />,
    NumberV: <NumberV setting={numberv} />,
    View16bit: <View16bit setting={view16bit} />,
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
    NumberH: <NumberHSetting />,
    LineChartLib: <LineChartSetting />,
    View32bit: <View32bitSetting />,
    NumberV: <NumberVSetting />,
    View16bit: <View16bitSetting />,
  };

  useEffect(() => {
    // Get dữ liệu Button
    axios
      .get(process.env.REACT_APP_API_URL + "/button", { credential: true })
      .then((res) => {
        envDispatch({ type: "SET_BTN", payload: res.data.data[0] });
      });

    // Get dữ liệu BarTank
    axios
      .get(process.env.REACT_APP_API_URL + "/bar", { credential: true })
      .then((res) => {
        envDispatch({ type: "SET_BARDATA", payload: res.data.data[0] });
      });

    // Get dữ liệu View16bit
    axios
      .get(process.env.REACT_APP_API_URL + "/view16bit", { credential: true })
      .then((res) => {
        envDispatch({ type: "SET_VIEW16BIT", payload: res.data.data[0] });
      });

    // Get dữ liệu View32bit
    axios
      .get(process.env.REACT_APP_API_URL + "/view32bit", { credential: true })
      .then((res) => {
        envDispatch({ type: "SET_VIEW32BIT", payload: res.data.data[0] });
      });

    // Get dữ liệu Switch
    axios
      .get(process.env.REACT_APP_API_URL + "/switch", { credential: true })
      .then((res) => {
        envDispatch({ type: "SET_TOGGLE", payload: res.data.data[0] });
      });

    // Get dữ liệu Bar
    axios
      .get(process.env.REACT_APP_API_URL + "/bar", { credential: true })
      .then((res) => {
        envDispatch({ type: "SET_BARDATA", payload: res.data.data[0] });
      });

    // Get dữ liệu Gauge
    axios
      .get(process.env.REACT_APP_API_URL + "/gauge", { credential: true })
      .then((res) => {
        envDispatch({ type: "SET_GAUGE", payload: res.data.data[0] });
      });

    // Get dữ liệu Slider
    axios
      .get(process.env.REACT_APP_API_URL + "/slider", { credential: true })
      .then((res) => {
        envDispatch({ type: "SET_SLIDER", payload: res.data.data[0] });
      });

    // Get dữ liệu Number
    axios
      .get(process.env.REACT_APP_API_URL + "/number", { credential: true })
      .then((res) => {
        envDispatch({ type: "SET_NUMBER", payload: res.data.data[0] });
      });

    // Get dữ liệu TablePro
    axios
      .get(process.env.REACT_APP_API_URL + "/tablepro", { credential: true })
      .then((res) => {
        tableproid.value = res.data.data[0]._id;
        envDispatch({ type: "SET_TABLEPRO", payload: res.data.data[0] });
      });

    // Get dữ liệu Lamp
    axios
      .get(process.env.REACT_APP_API_URL + "/lamp", { credential: true })
      .then((res) => {
        envDispatch({ type: "SET_LAMP", payload: res.data.data[0] });
      });

    // Get dữ liệu NumberH
    axios
      .get(process.env.REACT_APP_API_URL + "/numberh", { credential: true })
      .then((res) => {
        envDispatch({ type: "SET_NUMBERH", payload: res.data.data[0] });
      });

    // Get dữ liệu NumberV
    axios
      .get(process.env.REACT_APP_API_URL + "/numberv", { credential: true })
      .then((res) => {
        envDispatch({ type: "SET_NUMBERV", payload: res.data.data[0] });
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            <option value={"SwitchToggle"}>SwitchToggle</option>
            <option value={"View32bit"}>View32bit</option>
            <option value={"View16bit"}>View16bit</option>
            <option value={"TablePro"}>TablePro</option>
            <option value={"Gauge"}>Gauge</option>
            <option value={"SliderBar"}>Slider</option>
            <option value={"Lamp"}>Lamp</option>
            <option value={"Number"}>Number</option>
            <option value={"NumberH"}>NumberH</option>
            <option value={"NumberV"}>NumberV</option>
            {/* <option value={"BarChart"}>BarChart</option> */}
            {/* <option value={"LineChartLib"}>LineChart</option> */}
          </select>
        </div>

        <div className="Device_Content-Container-Group">
          <div className="Device_Content-Container-Group-Head">
            Giao diện
            <div
              className="Device_Content-Container-Group-Head-Edit"
              onClick={(e) => handlePop(e)}
            >
              <IoEllipsisVertical />
            </div>
          </div>
          <div className="Device_Content-Container-Group-Body">
            {data[type]}
          </div>
        </div>

        <div
          className="Device_Content-Container-Setting"
          style={{ display: pop ? "block" : "none" }}
        >
          <div className="Device_Content-Container-Setting-Group">
            <div className="Device_Content-Container-Setting-Group-Head">
              Cài Đặt
              <div
                className="Device_Content-Container-Setting-Group-Head-Close"
                style={{ cursor: "pointer" }}
                onClick={(e) => handleClose(e)}
              >
                <IoClose />
              </div>
            </div>
            <div className="Device_Content-Container-Setting-Group-Body">
              {setting[type]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
