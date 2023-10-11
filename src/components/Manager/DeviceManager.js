import React from "react";
import DataTable from "react-data-table-component";
import { useEffect } from "react";
import { useState } from "react";
// import data from "../Context/Devices.json";
// import { EnvContext } from "../Context/EnvContext";
// import { useContext } from "react";
// import { useRef } from "react";

export default function DeviceManager(props) {
  const [record, setRecord] = useState([]);

  useEffect(() => {
    var newData = props.list
    newData.map((data,index)=>{
      data['id']=index+1
    })

    // console.log(newData)

    setRecord(newData);
  }, [props.list]);

  const paginationComponentOptions = {
    rowsPerPageText: "Số hàng",
    rangeSeparatorText: "đến",
    selectAllRowsItem: true,
    selectAllRowsItemText: "tất cả",
  };

  const column = [
    {
      name: "STT",
      selector: (row) => row.id,
      // sortable: true,
      width: "60px",
    },

    {
      name: "Tên dự án",
      selector: (row) => row.name,
      sortable: true,
      // width: "100px"
    },

    {
      name: "Mô tả",
    },

    {
      name: "Thông tin",
      selector: (row) => row.info,
      sortable: true,
      // width: "100px"
    },

    {
      name: "Kết nối",
      selector: (row) => row.statement,
      sortable: true,
      width: "100px",
    },

    {
      name: "Gateway",
      selector: (row) => row.gateway,
      sortable: true,
      width: "100px",
    },

    {
      name: "Tùy chỉnh",
      selector: (row) => (
        <button style={{ border: "none", backgroundColor: "transparent" }}>
          ...
        </button>
      ),
      width: "100px",
    },
  ];

  return (
    <DataTable
      columns={column}
      data={record}
      pagination
      paginationComponentOptions={paginationComponentOptions}
    />
  );
}
