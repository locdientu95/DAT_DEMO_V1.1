import React, { useContext } from "react";
import "./Setting.scss";
import { EnvContext } from "../Context/EnvContext";
import DataTable from "react-data-table-component";

export default function NumberH() {
  const { numberh } = useContext(EnvContext);

  const data = [
    {
      name: "Tên",
      code: "label",
      selector: (row) => (
        <div>
          {row.label}
          <div
            style={{
              color: "gray",
              fontSize: "10px",
              position: "absolute",
              bottom: "0",
              right: "3px",
            }}
          >
            {row.id}
          </div>
        </div>
      ),
      center: true,
    },
    {
      name: "Giá trị",
      code: "value",
      selector: (row) => row.value,
      center: true,
    },
    {
      name: "Đơn vị",
      code: "unit",
      selector: (row) => row.unit,
      center: true,
    },
  ];

  return (
    <div className="DAT_NumberH">
      <div className="DAT_NumberH-Table">
        <DataTable data={numberh.data} columns={data} />
      </div>
    </div>
  );
}
