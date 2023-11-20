import React from "react";
import "./SMS.scss";

export default function Mess(props) {
  return (
    <div className="DAT_Mess">
      <div className="DAT_Mess-Row">
        <div className="DAT_Mess-Row-Label">Gửi đến</div>
        <input />
      </div>

      <div className="DAT_Mess-Row">
        <div className="DAT_Mess-Row-Label">Người gửi</div>
        <input />
      </div>

      <div className="DAT_Mess-Row">
        <div className="DAT_Mess-Row-Label">Nội dung</div>
        <textarea></textarea>
      </div>

      <div className="DAT_Mess-Button">
        <button>Lưu</button>
      </div>
    </div>
  );
}
