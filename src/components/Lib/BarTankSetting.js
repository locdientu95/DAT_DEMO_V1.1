import React, { useContext, useRef, useState } from "react";
import { EnvContext } from "../Context/EnvContext";
import "./Setting.scss";
import { Box, Button, Input, InputFist } from "./FunctionElement";

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

  const base = [
    "Cơ số 10",
    "Cơ số 16",
    "Cơ số 2_0",
    "Cơ số 2_1",
    "Cơ số 2_2",
    "Cơ số 2_3",
    "Cơ số 2_4",
    "Cơ số 2_5",
    "Cơ số 2_6",
    "Cơ số 2_7",
    "Cơ số 2_8",
    "Cơ số 2_9",
    "Cơ số 2_10",
    "Cơ số 2_11",
    "Cơ số 2_12",
    "Cơ số 2_13",
    "Cơ số 2_14",
    "Cơ số 2_15",
  ];

  //BAR FUNCTION
  const handlePushData = (e) => {
    bardata.realdata = value.current.value;
    envDispatch({ type: "SET_BARDATA", payload: bardata });
  };

  const handleSaveChange1 = (e) => {
    if (mini.current.value !== "") {
      bardata.min = mini.current.value;
    }

    envDispatch({ type: "SET_BARDATA", payload: bardata });
    mini.current.value = "";
  };

  const handleSaveChange2 = (e) => {
    if (maxi.current.value !== "") {
      bardata.max = maxi.current.value;
    }
    envDispatch({ type: "SET_BARDATA", payload: bardata });
    maxi.current.value = "";
  };

  const handleSaveChange3 = (e) => {
    if (wi.current.value !== "") {
      bardata.w = wi.current.value + "px";
    }
    if (he.current.value !== "") {
      bardata.h = he.current.value + "px";
    }
    envDispatch({ type: "SET_BARDATA", payload: bardata });

    wi.current.value = "";
    he.current.value = "";
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
    if (step !== "") {
      bardata.scale = step;
    }

    envDispatch({ type: "SET_BARDATA", payload: bardata });
  };

  return (
    <div className="DAT_Setting-Bar">
      <div className="DAT_Setting-Bar-Row" id="3">
        {InputFist("", "Width: " + bardata.w, wi)}
        {Input("", "Height: " + bardata.h, he)}
        {Button(handleSaveChange3, "Chọn")}
      </div>

      <div className="DAT_Setting-Bar-Row1" id="1">
        <input
          className="DAT_Setting-Bar-Row1_Item1"
          placeholder={"Min: " + bardata.min}
          ref={mini}
        />
        <input
          className="DAT_Setting-Bar-Row1_Item2"
          placeholder="Nhập thanh ghi"
        />
        {Button(handleSaveChange1, "Chọn")}
      </div>

      <div className="DAT_Setting-Bar-Row1" id="2">
        <input
          className="DAT_Setting-Bar-Row1_Item1"
          placeholder={"Max: " + bardata.max}
          ref={maxi}
        />
        <input
          className="DAT_Setting-Bar-Row1_Item2"
          placeholder="Nhập thanh ghi"
        />
        <button onClick={(e) => handleSaveChange2(e)}>Chọn</button>
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
          />
        </div>

        <div className="DAT_Setting-Bar-Row-ValueColor">
          Màu giá trị
          <input
            type="color"
            value={vlbar}
            onChange={(e) => setVlbar(e.currentTarget.value)}
          />
        </div>
        {Button(handleSaveChange4, "Chọn")}
      </div>

      <div className="DAT_Setting-Bar-Row" id="5">
        <input
          className="DAT_Setting-Bar-Row-Item1"
          placeholder={"Scale: " + bardata.scale}
          value={step}
          onChange={(e) => setStep(e.currentTarget.value)}
        />

        <div className="DAT_Setting-Bar-Row-ValueColor">
          Thước đo
          <input type="color" />
        </div>
        {Button(handleSaveChange5, "Chọn")}
      </div>

      <div className="DAT_Setting-Bar-Row" id="6">
        {Box(base)}
      </div>

      <div className="DAT_Setting-Bar-Row" id="7">
        {InputFist("text", "Nhập thanh ghi read")}
        <button>Chọn</button>
      </div>

      <div className="DAT_Setting-Bar-Last" id="8">
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
