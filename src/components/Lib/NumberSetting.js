import React from "react";
import "./Setting.scss";

export default function NumberSetting() {
  return (
    <div className="DAT_Setting-Number">
      <div className="DAT_Setting-Number-Row1">
        <input placeholder="Width" className="DAT_Setting-Number-Row1-Item1" />
        <input placeholder="Height" />
        <input placeholder="Đơn vị" />
        <button>Chọn</button>
      </div>

      <div className="DAT_Setting-Number-Row2">
        <input placeholder="Border" className="DAT_Setting-Number-Row2-Item1" />
        <input placeholder="Border Radius" />
        <input type="color" />
        <button>Chọn</button>
      </div>

      <div className="DAT_Setting-Number-Row3">
        <input placeholder="Number" className="DAT_Setting-Number-Row3-Item1" />
        <input type="color" />
        <input type="color" />
        <button>Chọn</button>
      </div>

      <div className="DAT_Setting-Number-Row4">
        <select>
          <option>Read</option>
          <option>Write</option>
        </select>
      </div>

      <div className="DAT_Setting-Number-Row5">
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

      <div className="DAT_Setting-Number-Row6">
        <input placeholder="Nhập thanh ghi read" />
        <button>Chọn</button>
      </div>

      <div className="DAT_Setting-Number-Row7">
        <input placeholder="0"></input>
        <button>Xác nhận</button>
      </div>
    </div>
  );
}
