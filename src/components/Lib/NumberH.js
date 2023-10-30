import React, { useContext } from "react";
import "./Setting.scss";
import { EnvContext } from "../Context/EnvContext";
import DataTable from "react-data-table-component";
import { useEffect } from "react";

export default function NumberH() {
  const { numberh } = useContext(EnvContext);

  const data = [
    {
      name: "Tên",
      code: "label",
      selector: (row) => row.label,
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

  useEffect(() => {}, []);

  return (
    <div className="DAT_NumberH">
      <div className="DAT_NumberH-Table">
        <DataTable data={numberh.data} columns={data} />
      </div>
    </div>
  );
}
