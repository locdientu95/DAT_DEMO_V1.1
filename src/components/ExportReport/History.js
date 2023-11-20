import React from "react";
import "./ExportReport.scss";

export default function History() {
  return (
    <div className="DAT_History">
      <div className="DAT_History-Row">
        <div className="DAT_History-Row-Label">Gửi đến</div>
        <input />
      </div>

      <div className="DAT_History-Row">
        <div className="DAT_History-Row-Label">Người gửi</div>
        <input />
      </div>

      <div className="DAT_History-Row">
        <div className="DAT_History-Row-Label">Nội dung</div>
        <textarea></textarea>
      </div>

      <div className="DAT_History-Button">
        <button>Lưu</button>
      </div>
    </div>
  );
}
