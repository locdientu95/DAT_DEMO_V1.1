import React, { useContext, useRef, useState } from "react";
import { EnvContext } from "../Context/EnvContext";
import "./Setting.scss";

export default function SwitchToggleSetting() {
  const { switchtoggle, envDispatch } = useContext(EnvContext);
  const [bgison, setBgison] = useState(switchtoggle.bgon);
  const [txtcolor, setTxtcolor] = useState(switchtoggle.txtcoloron);

  const handleSaveChange = (e) => {
    envDispatch({
      type: "SET_TOGGLE",
      payload: {
        ...switchtoggle,
        bgon: bgison,
        txtcoloron: txtcolor,
      },
    });
    console.log(txtcolor, bgison);
    console.log(switchtoggle);
  };

  return (
    <div>
      <div className="DAT_Setting-Switch">
        <div className="DAT_Setting-Switch-Row" id="1">
          <input placeholder="ON: 7"></input>
          <input placeholder="TEXT:ON"></input>
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
          <input placeholder="TEXT:OFF"></input>
          <div className="DAT_Setting-Switch-Row-BackgroundColorOff">
            Màu button
            <input type="color"></input>
          </div>
          <input
            className="DAT_Setting-Switch-Row-TextSize"
            type="number"
            defaultValue={20}
            min={6}
            max={100}
            step={2}
          ></input>
          <button>Chọn</button>
        </div>
        <div className="DAT_Setting-Switch-Row" id="3">
          <input placeholder="Width: "></input>
          <input placeholder="Height: "></input>
          <button>Chọn</button>
        </div>
        <div className="DAT_Setting-Switch-Row" id="4">
          <input
            className="DAT_Setting-Switch-Row-BorderRadius"
            type="number"
            defaultValue={1}
            step={1}
            placeholder="Border: 1"
          ></input>
          <input placeholder="Border radius: 10%"></input>
          <div className="DAT_Setting-Switch-Row-BorderColor">
            Màu border:
            <input type="color"></input>
          </div>
          <button>Chọn</button>
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
