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
        <>
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
        </>
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

  const handleSelect = (e) => {
    console.log("Selected");
  };

  const handleDelete = () => {
    console.log("Deleted");
  };

  const handleAdd = () => {
    console.log("Add " + num.current.value + " successful");
  };
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
