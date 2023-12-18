import React, { useContext, useState } from "react";
import { EnvContext } from "../Context/EnvContext";
import "./Setting.scss";
import { useRef } from "react";
import { Box, Button, Input, InputFist } from "./FunctionElement";
import axios from "axios";

export default function SwitchToggleSetting() {
  const { switchtoggle, envDispatch } = useContext(EnvContext);
  const [bgison, setBgison] = useState(switchtoggle.bgon);
  const [bgisoff, setBgisoff] = useState(switchtoggle.bgoff);
  const [txtcolor, setTxtcolor] = useState(switchtoggle.txtcoloron);
  const [txtcoloroff, setTxtcoloroff] = useState(switchtoggle.txtcoloroff);
  const [txton, setTxton] = useState(switchtoggle.texton);
  const [txtoff, setTxtoff] = useState(switchtoggle.textoff);
  const [txtsize, setTxtsize] = useState(switchtoggle.textsize);
  const [borcolor, setBorcolor] = useState(switchtoggle.bordercolor);
  const wid = useRef(switchtoggle.w);
  const hei = useRef(switchtoggle.h);
  const bor = useRef(switchtoggle.border);
  const radius = useRef(switchtoggle.borderradius);

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

  const handleSaveChange1 = (e) => {
    if (txton !== "") {
      switchtoggle.texton = txton;
    }
    if (bgison !== "") {
      switchtoggle.bgon = bgison;
    }
    if (txtcolor) {
      switchtoggle.txtcoloron = txtcolor;
    }
    envDispatch({ type: "SET_TOGGLE", payload: switchtoggle });
  };

  const handleSaveChange2 = (e) => {
    if (txtoff !== "") {
      switchtoggle.textoff = txtoff;
    }
    if (bgisoff !== "") {
      switchtoggle.bgoff = bgisoff;
    }
    if (txtcoloroff !== "") {
      switchtoggle.txtcoloroff = txtcoloroff;
    }
    envDispatch({ type: "SET_TOGGLE", payload: switchtoggle });
  };

  const handleSaveChange3 = (e) => {
    if (wid.current.value !== "") {
      switchtoggle.w = wid.current.value;
    }
    if (hei.current.value !== "") {
      switchtoggle.h = hei.current.value;
    }
    if (txtsize !== "") {
      switchtoggle.textsize = txtsize;
    }
    envDispatch({ type: "SET_TOGGLE", payload: switchtoggle });

    wid.current.value = "";
    hei.current.value = "";
  };

  const handleSaveChange4 = (e) => {
    if (bor.current.value !== "") {
      switchtoggle.border = bor.current.value;
    }

    if (radius.current.value !== "") {
      switchtoggle.borderradius = radius.current.value;
    }

    switchtoggle.bordercolor = borcolor;

    envDispatch({ type: "SET_TOGGLE", payload: switchtoggle });

    bor.current.value = "";
    radius.current.value = "";
  };

  const handlePushData = () => {
    axios.put(process.env.REACT_APP_API_URL + "/switch/pushAllData", {
      texton: switchtoggle.texton,
      textoff: switchtoggle.textoff,
      bgon: switchtoggle.bgon,
      bgoff: switchtoggle.bgoff,
      txtcoloron: switchtoggle.txtcoloron,
      txtcoloroff: switchtoggle.txtcoloroff,
      textsize: switchtoggle.textsize,
      w: switchtoggle.w,
      h: switchtoggle.h,
      border: switchtoggle.border,
      borderradius: switchtoggle.borderradius,
      bordercolor: switchtoggle.bordercolor,
      borderradiusicon: switchtoggle.borderradiusicon,
    },
    { credential : true}
    )
    .then((res) => {
    
    })
  };

  return (
    <div>
      <div className="DAT_Setting-Switch">
        <div className="DAT_Setting-Switch-Row" id="3">
          {InputFist("", "Width: " + switchtoggle.w, wid)}
          {Input("", "Height: " + switchtoggle.h, hei)}
          <input
            type="number"
            placeholder={"Text size: " + switchtoggle.textsize}
            onChange={(e) => setTxtsize(e.currentTarget.value)}
          />
          {Button(handleSaveChange3, "Chọn")}
        </div>

        <div className="DAT_Setting-Switch-Row" id="1">
          {InputFist("", "ON: 7")}
          <input
            placeholder={"TEXT: " + switchtoggle.texton}
            onChange={(e) => setTxton(e.currentTarget.value)}
          />
          <div className="DAT_Setting-Switch-Row-BackgroundColorOn">
            Màu button
            <input
              type="color"
              value={bgison}
              onChange={(e) => setBgison(e.currentTarget.value)}
            />
          </div>
          <div className="DAT_Setting-Switch-Row-TextColor">
            Màu text
            <input
              type="color"
              value={txtcolor}
              onChange={(e) => setTxtcolor(e.currentTarget.value)}
            />
          </div>
          {Button(handleSaveChange1, "Chọn")}
        </div>

        <div className="DAT_Setting-Switch-Row" id="2">
          {InputFist("", "OFF: 8")}
          <input
            placeholder={"TEXT: " + switchtoggle.textoff}
            onChange={(e) => setTxtoff(e.currentTarget.value)}
          ></input>
          <div className="DAT_Setting-Switch-Row-BackgroundColorOff">
            Màu button
            <input
              type="color"
              value={bgisoff}
              onChange={(e) => setBgisoff(e.currentTarget.value)}
            ></input>
          </div>
          <div className="DAT_Setting-Switch-Row-TextColorOff">
            Màu text
            <input
              type="color"
              value={txtcoloroff}
              onChange={(e) => setTxtcoloroff(e.currentTarget.value)}
            ></input>
          </div>
          {Button(handleSaveChange2, "Chọn")}
        </div>

        <div className="DAT_Setting-Switch-Row" id="4">
          {InputFist("number", "Border: " + switchtoggle.border, bor)}
          {Input("", "Border radius: " + switchtoggle.borderradius, radius)}
          <div className="DAT_Setting-Switch-Row-BorderColor">
            Màu border:
            <input
              type="color"
              value={borcolor}
              onChange={(e) => setBorcolor(e.currentTarget.value)}
            ></input>
          </div>
          {Button(handleSaveChange4, "Chọn")}
        </div>

        <div className="DAT_Setting-Switch-Row" id="5">
          {Box(base)}
        </div>

        <div className="DAT_Setting-Switch-Row" id="7">
          {InputFist("text", "Nhập thanh ghi read")}
          <button>Chọn</button>
        </div>

        <div className="DAT_Setting-Switch-Last" id="8">
          <input placeholder="0" />
          <button
            className="DAT_Setting-Bar-Row-Confirm"
            onClick={handlePushData()}
          >
            Xác nhận
          </button>
        </div>
      </div>
    </div>
  );
}
