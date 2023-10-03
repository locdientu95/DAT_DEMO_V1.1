import React, { useContext, useRef, useState } from "react";
import { EnvContext } from "../Context/EnvContext";
import "./Setting.scss";

export default function BarTankSetting() {
  const { bardata, envDispatch } = useContext(EnvContext);
  // BAR VARIABLES
  const mini = useRef(0);
  const maxi = useRef(100);
  const value = useRef(30);
  const wi = useRef("100px");
  const he = useRef("400px");
  const [bgbar, setBgbar] = useState(bardata.bgcolor);
  const [vlbar, setVlbar] = useState(bardata.realdatacolor);
  const [step, setStep] = useState(bardata.scale);
  const [type, setType] = useState(bardata.type);

  //BAR FUNCTION
  const handlePushData = (e) => {
    bardata.realdata = value.current.value;
    envDispatch({ type: "SET_BARDATA", payload: bardata });
    console.log("minvalue", bardata);
    console.log(type);
  };

  const handleSaveChange1 = (e) => {
    if (mini.current.value !== "") {
      bardata.min = mini.current.value;
    }

    envDispatch({ type: "SET_BARDATA", payload: bardata });
    console.log(bardata);
  };

  const handleSaveChange2 = (e) => {
    if (maxi.current.value !== "") {
      bardata.max = maxi.current.value;
    }
    envDispatch({ type: "SET_BARDATA", payload: bardata });
    console.log(bardata);
  };

  const handleSaveChange3 = (e) => {
    if (wi.current.value !== "") {
      bardata.w = wi.current.value + "px";
    }
    if (he.current.value !== "") {
      bardata.h = he.current.value + "px";
    }
    envDispatch({ type: "SET_BARDATA", payload: bardata });
  };

  const handleSaveChange4 = (e) => {
    if (type !== "") {
      bardata.type = type;
    }
    if (bgbar !== "") {
      bardata.bgcolor = bgbar;
    }
    if (vlbar !== "") {
      bardata.realdatacolor = vlbar;
    }
    envDispatch({ type: "SET_BARDATA", payload: bardata });
  };

  const handleSaveChange5 = (e) => {
    bardata.scale = step;
    envDispatch({ type: "SET_BARDATA", payload: bardata });
  };

  return (
    <div className="DAT_Setting-Bar">
      <div className="DAT_Setting-Bar-Row" id="1">
        <input
          className="DAT_Setting-Bar-Row-MinValue"
          placeholder={"Min: " + bardata.min} 
          ref={mini}
        ></input>
        <input
          className="DAT_Setting-Bar-Row-AddMin"
          placeholder="Nhập thanh ghi"
        ></input>
        <button onClick={(e) => handleSaveChange1(e)}>Chọn</button>
      </div>
      <div className="DAT_Setting-Bar-Row" id="2">
        <input
          className="DAT_Setting-Bar-Row-MaxValue"
          placeholder={"Max: " + bardata.max}
          ref={maxi}
        ></input>
        <input
          className="DAT_Setting-Bar-Row-AddMax"
          placeholder="Nhập thanh ghi"
        ></input>
        <button onClick={(e) => handleSaveChange2(e)}>Chọn</button>
      </div>
      <div className="DAT_Setting-Bar-Row" id="3">
        <input
          className="DAT_Setting-Bar-Row-Width"
          placeholder={"Width: "+ bardata.w}
          ref={wi}
        ></input>
        <input
          className="DAT_Setting-Bar-Row-Height"
          placeholder={"Height: "+ bardata.h}
          ref={he}
        ></input>
        <button onClick={(e) => handleSaveChange3(e)}>Chọn</button>
      </div>
      <div className="DAT_Setting-Bar-Row" id="4">
        <select onChange={(e) => setType(e.currentTarget.value)}>
          <option value={"vertical"}>Chiều đứng</option>
          <option value={"horizontal"}>Chiều ngang</option>
        </select>
        <div className="DAT_Setting-Bar-Row-BackgroundColor">
          Màu nền
          <input
            type="color"
            value={bgbar}
            onChange={(e) => setBgbar(e.currentTarget.value)}
          ></input>
        </div>
        <div className="DAT_Setting-Bar-Row-ValueColor">
          Màu giá trị
          <input
            type="color"
            value={vlbar}
            onChange={(e) => setVlbar(e.currentTarget.value)}
          ></input>
        </div>
        <button onClick={(e) => handleSaveChange4(e)}>Chọn</button>
      </div>
      <div className="DAT_Setting-Bar-Row" id="5">
        <input
          className="DAT_Setting-Bar-Row-Scale"
          placeholder="Scale: 25"
          value={step}
          onChange={(e) => setStep(e.currentTarget.value)}
        ></input>
        <div className="DAT_Setting-Bar-Row-ValueColor">
          Thước đo
          <input type="color"></input>
        </div>
        <button onClick={(e) => handleSaveChange5(e)}>Chọn</button>
      </div>
      <div className="DAT_Setting-Bar-Row" id="6">
        <select>
          <option defaultValue="Inching">Cơ số 10</option>
          <option value="Invert">Cơ số 16</option>
          <option value="Invert">Cơ số 2_0</option>
          <option value="Invert">Cơ số 2_1</option>
          <option value="Invert">Cơ số 2_2</option>
          <option value="Invert">Cơ số 2_3</option>
          <option value="Invert">Cơ số 2_4</option>
          <option value="Invert">Cơ số 2_5</option>
          <option value="Invert">Cơ số 2_6</option>
          <option value="Invert">Cơ số 2_7</option>
          <option value="Invert">Cơ số 2_8</option>
          <option value="Invert">Cơ số 2_9</option>
          <option value="Invert">Cơ số 2_10</option>
          <option value="Invert">Cơ số 2_11</option>
          <option value="Invert">Cơ số 2_12</option>
          <option value="Invert">Cơ số 2_13</option>
          <option value="Invert">Cơ số 2_14</option>
          <option value="Invert">Cơ số 2_15</option>
        </select>
      </div>
      <div className="DAT_Setting-Bar-Row" id="7">
        <input placeholder="Nhập thanh ghi read"></input>
        <button>Chọn</button>
      </div>
      <div className="DAT_Setting-Bar-Row" id="8">
        <input placeholder="0" ref={value}></input>
        <button
          className="DAT_Setting-Bar-Row-Confirm"
          onClick={(e) => handlePushData(e)}
        >
          Xác nhận
        </button>
      </div>
    </div>
  );
}