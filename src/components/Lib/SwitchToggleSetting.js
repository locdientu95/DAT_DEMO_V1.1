import React, { useContext, useState } from "react";
import { EnvContext } from "../Context/EnvContext";
import "./Setting.scss";
import { useRef } from "react";

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
  };

  const handleSaveChange4 = (e) => {
    switchtoggle.border = bor.current.value;
    switchtoggle.borderradius = radius.current.value;
    switchtoggle.bordercolor = borcolor;
    envDispatch({ type: "SET_TOGGLE", payload: switchtoggle });
  };

  return (
    <div>
      <div className="DAT_Setting-Switch">
        <div className="DAT_Setting-Switch-Row" id="1">
          <input placeholder="ON: 7"></input>
          <input
            placeholder={"TEXT: " + switchtoggle.texton}
            onChange={(e) => setTxton(e.currentTarget.value)}
          ></input>
          <div className="DAT_Setting-Switch-Row-BackgroundColorOn">
            Màu button
            <input
              type="color"
              value={bgison}
              onChange={(e) => setBgison(e.currentTarget.value)}
            ></input>
          </div>
          <div className="DAT_Setting-Switch-Row-TextColor">
            Màu text
            <input
              type="color"
              value={txtcolor}
              onChange={(e) => setTxtcolor(e.currentTarget.value)}
            ></input>
          </div>
          <button onClick={(e) => handleSaveChange1(e)}>Chọn</button>
        </div>
        <div className="DAT_Setting-Switch-Row" id="2">
          <input placeholder="OFF: 8"></input>
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
          <button onClick={(e) => handleSaveChange2(e)}>Chọn</button>
        </div>
        <div className="DAT_Setting-Switch-Row" id="3">
          <input placeholder={"Width: " + switchtoggle.w} ref={wid}></input>
          <input placeholder={"Height: " + switchtoggle.h} ref={hei}></input>
          <input
            className="DAT_Setting-Switch-Row-TextSize"
            type="number"
            defaultValue={txtsize}
            min={6}
            max={100}
            step={2}
            onChange={(e) => setTxtsize(e.currentTarget.value)}
          ></input>
          <button onClick={(e) => handleSaveChange3(e)}>Chọn</button>
        </div>
        <div className="DAT_Setting-Switch-Row" id="4">
          <input
            className="DAT_Setting-Switch-Row-BorderRadius"
            type="number"
            defaultValue={6}
            step={1}
            placeholder={"Border: " + switchtoggle.border}
            ref={bor}
          ></input>
          <input placeholder="Border radius: 55px" ref={radius}></input>
          <div className="DAT_Setting-Switch-Row-BorderColor">
            Màu border:
            <input
              type="color"
              value={borcolor}
              onChange={(e) => setBorcolor(e.currentTarget.value)}
            ></input>
          </div>
          <button onClick={(e) => handleSaveChange4(e)}>Chọn</button>
        </div>
        <div className="DAT_Setting-Switch-Row" id="5">
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
        <div className="DAT_Setting-Switch-Row" id="7">
          <input placeholder="Nhập thanh ghi read"></input>
          <button>Chọn</button>
        </div>
        <div className="DAT_Setting-Switch-Row" id="8">
          <input placeholder="0"></input>
          <button className="DAT_Setting-Bar-Row-Confirm">Xác nhận</button>
        </div>
      </div>
    </div>
  );
}
