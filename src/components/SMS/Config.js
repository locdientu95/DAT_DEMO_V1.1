import React from "react";
import "./SMS.scss";

export default function Config(props) {
  return (
    <div className="DAT_Config">
      <div className="DAT_Config-Row">
        <div className="DAT_Config-Row-Item">
          <div className="DAT_Config-Row-Item-Label">Gateway</div>
          <select>
            <option>1</option>
          </select>
        </div>

        <div className="DAT_Config-Row-Item">
          <div className="DAT_Config-Row-Item-Label">Số điện thoại</div>
          <select>
            <option>1</option>
          </select>
        </div>
      </div>

      <div className="DAT_Config-Row2">
        <div className="DAT_Config-Row2-Label">Thêm số điện thoại</div>
        <div className="DAT_Config-Row2-Content">
          <input />
          <button>Thêm</button>
        </div>
      </div>
    </div>
  );
}
