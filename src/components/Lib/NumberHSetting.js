import React, { useContext } from "react";
import "./Setting.scss";
import { EnvContext } from "../Context/EnvContext";

export default function NumberHSetting() {
  const { numberh, envDispatch } = useContext(EnvContext);

  return (
    <div className="DAT_Setting-NumberH">
      <div className="DAT_Setting-NumberH-Row1">
        <input
          className="DAT_Setting-NumberH-Row1-Item1"
          placeholder="Width: "
          type="number"
          // ref={width}
        />
        <input
          placeholder="Height: "
          type="number"
          // ref={height}
        />
        <input placeholder="Đơn vị: " type="text" />
        <button>Chọn</button>
      </div>

      <div className="DAT_Setting-NumberH-Row2">
        <input
          className="DAT_Setting-NumberH-Row2-Item1"
          placeholder="Border: "
          type="number"
          // ref={border}
        />
        <input
          placeholder="Border Radius: "
          type="number"
          // ref={borderradius}
        />
        <span>Màu border: </span>
        <input type="color" />
        <button>Chọn</button>
      </div>

      <div className="DAT_Setting-NumberH-Row3">
        <input
          className="DAT_Setting-NumberH-Row3-Item1"
          placeholder="Font Size: "
          type="number"
          // ref={fontsize}
        />
        <span>Màu nền: </span>
        <input type="color" />
        <span>Màu chữ: </span>
        <input type="color" />
        <button>Chọn</button>
      </div>

      <div className="DAT_Setting-NumberH-Row4">
        <select>
          <option value={"center"}>Center</option>
          <option value={"left"}>Left</option>
          <option value={"right"}>Right</option>
        </select>
      </div>

      <div className="DAT_Setting-NumberH-Row5">
        <select>
          <option value="false">Read</option>
          <option value="true">Write</option>
        </select>
      </div>

      <div className="DAT_Setting-NumberH-Row6">
        <select>
          <option value="0">Cơ số 10</option>
          <option value="1">Cơ số 16</option>
          <option value="2">Cơ số 2_0</option>
          <option value="3">Cơ số 2_1</option>
          <option value="4">Cơ số 2_2</option>
          <option value="5">Cơ số 2_3</option>
          <option value="6">Cơ số 2_4</option>
          <option value="7">Cơ số 2_5</option>
          <option value="8">Cơ số 2_6</option>
          <option value="9">Cơ số 2_7</option>
          <option value="10">Cơ số 2_8</option>
          <option value="11">Cơ số 2_9</option>
          <option value="12">Cơ số 2_10</option>
          <option value="13">Cơ số 2_11</option>
          <option value="14">Cơ số 2_12</option>
          <option value="15">Cơ số 2_13</option>
          <option value="16">Cơ số 2_14</option>
          <option value="17">Cơ số 2_15</option>
        </select>
      </div>

      <div className="DAT_Setting-NumberH-Row7">
        <input placeholder="Nhập thanh ghi read" />
        <button>Chọn</button>
      </div>

      <div className="DAT_Setting-NumberH-Row8">
        <input placeholder="0"></input>
        <button>Xác nhận</button>
      </div>
    </div>
  );
}
