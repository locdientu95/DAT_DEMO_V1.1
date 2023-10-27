import React, { useContext } from "react";
import "./Setting.scss";
import { EnvContext } from "../Context/EnvContext";

export default function NumberHSetting() {
  const { numberh, envDispatch } = useContext(EnvContext);

  const handleAdd = (e) => {};

  return (
    <div className="DAT_Setting-NumberH">
      <div className="DAT_Setting-NumberH-Row">
        <input
          className="DAT_Setting-NumberH-Row-Item1"
          placeholder="Nhập số hàng muốn thêm: "
          type="number"
          // ref={width}
        />
        <button onClick={(e) => handleAdd(e)}>Chọn</button>
      </div>

      <div className="DAT_Setting-NumberH-Row">
        <span
          className="DAT_Setting-NumberH-Row-Item1"
          style={{ width: "100%" }}
        >
          Xóa hàng từ STT:
        </span>
        <input
          placeholder="Nhập số hàng từ STT: "
          type="number"
          // ref={border}
        />
        <span style={{ width: "100%" }}>Đến:</span>
        <input
          placeholder="Nhập số hàng đến STT: "
          type="number"
          // ref={border}
        />
        <button>Chọn</button>
      </div>

      <div className="DAT_Setting-NumberH-Row">
        <span
          className="DAT_Setting-NumberH-Row-Item1"
          style={{ width: "100%" }}
        >
          Chọn id cần thay đổi:
        </span>
        <select>
          <option>1</option>
        </select>
        <span style={{ width: "100%" }}>
          Chọn vị trí cột cần thay đổi giá trị:
        </span>
        <select>
          <option>1</option>
          <option>1</option>
          <option>1</option>
          <option>1</option>
        </select>
        <input type="text" placeholder="Nội dung" />
        <button>Chọn</button>
      </div>
    </div>
  );
}
