import React, { useContext, useState } from "react";
import { EnvContext } from "../Context/EnvContext";
import "./Setting.scss";
import { useRef } from "react";

export default function SwitchToggleSetting() {
  const { switchtoggle, envDispatch } = useContext(EnvContext);
  const [bgison, setBgison] = useState(switchtoggle.bgon);
  const [bgisoff, setBgisoff] = useState(switchtoggle.bgoff);
  const [txtcolor, setTxtcolor] = useState(switchtoggle.txtcoloron);
  const [txton, setTxton] = useState(switchtoggle.texton);
  const [txtoff, setTxtoff] = useState(switchtoggle.textoff);
  const [txtsize, setTxtsize] = useState(switchtoggle.textsize);
  const [borcolor, setBorcolor] = useState(switchtoggle.bordercolor);
  const wid = useRef(switchtoggle.w);
  const hei = useRef(switchtoggle.h);
  const bor = useRef(switchtoggle.border)
  const radius = useRef(switchtoggle.borderradius)

  const handleSaveChange = (e) => {
    switchtoggle.bgoff = bgisoff;
    switchtoggle.bgon = bgison;
    switchtoggle.txtcoloron = txtcolor;
    switchtoggle.texton = txton;
    switchtoggle.textoff = txtoff;
    switchtoggle.textsize = txtsize;
    switchtoggle.w = wid.current.value;
    switchtoggle.h = hei.current.value;
    switchtoggle.border = bor.current.value;
    switchtoggle.borderradius = radius.current.value;
    switchtoggle.bordercolor = borcolor;
    envDispatch({ type: "SET_TOGGLE", payload: switchtoggle });
    console.log(switchtoggle);
  };

  return (
    <div>
      <div className="DAT_Setting-Switch">
        <div className="DAT_Setting-Switch-Row" id="1">
          <input placeholder="ON: 7"></input>
          <input
            placeholder="TEXT:ON"
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
          <button onClick={(e) => handleSaveChange(e)}>Chọn</button>
        </div>
        <div className="DAT_Setting-Switch-Row" id="2">
          <input placeholder="OFF: 8"></input>
          <input
            placeholder="TEXT:OFF"
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
          <input
            className="DAT_Setting-Switch-Row-TextSize"
            type="number"
            defaultValue={txtsize}
            min={6}
            max={100}
            step={2}
            onChange={(e)=>setTxtsize(e.currentTarget.value)}
          ></input>
          <button onClick={(e)=>handleSaveChange(e)}>Chọn</button>
        </div>
        <div className="DAT_Setting-Switch-Row" id="3">
          <input placeholder="Width: " ref={wid} ></input>
          <input placeholder="Height: "ref={hei} ></input>
          <button onClick={(e)=>handleSaveChange(e)}>Chọn</button>
        </div>
        <div className="DAT_Setting-Switch-Row" id="4">
          <input
            className="DAT_Setting-Switch-Row-BorderRadius"
            type="number"
            defaultValue={6}
            step={1}
            placeholder="Border: 6px"
            ref={bor}
          ></input>
          <input placeholder="Border radius: 55px" ref={radius}></input>
          <div className="DAT_Setting-Switch-Row-BorderColor">
            Màu border:
            <input type="color" value={borcolor} onChange={(e) => setBorcolor(e.currentTarget.value)}></input>
          </div>
          <button onClick={(e)=>handleSaveChange(e)}>Chọn</button>
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
