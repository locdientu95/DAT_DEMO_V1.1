import React, { useRef } from "react";
import "./SMS.scss";
import DataTable from "react-data-table-component";

export default function Config(props) {
  const num = useRef();
  const columns = [
    {
      name: "Số điện thoại",
      selector: (row) => row.phone,
    },
    {
      name: "",
      selector: (row) => (
        <div style={{ display: "flex", gap: "8px" }}>
          <div
            style={{ cursor: "pointer", color: "black" }}
            onClick={handleSelect}
          >
            Chọn
          </div>
          <div
            style={{ cursor: "pointer", color: "red" }}
            onClick={handleDelete}
          >
            Xóa
          </div>
        </div>
      ),
    },
  ];
  const data = [
    {
      phone: "09090909909",
    },
    {
      phone: "0808080808",
    },
    {
      phone: "09090909909",
    },
    {
      phone: "0808080808",
    },
  ];

  const handleSelect = (e) => {};

  const handleDelete = () => {};

  const handleAdd = () => {};

  return (
    <div className="DAT_Config">
      <div className="DAT_Config-Row">
        <div className="DAT_Config-Row-Item">
          <div className="DAT_Config-Row-Item-Label">Thêm số điện thoại</div>
          <div className="DAT_Config-Row-Item-Content">
            <input ref={num} />
            <button onClick={handleAdd}>Thêm</button>
          </div>
        </div>

        <div className="DAT_Config-Row-Item">
          <DataTable data={data} columns={columns}></DataTable>
        </div>
      </div>
    </div>
  );
}
