import React from "react";
import DataTable from "react-data-table-component";
import { useEffect } from "react";
import { useState } from "react";
// import data from "../Context/Projects.json";
// import { EnvContext } from "../Context/EnvContext";
// import { useContext } from "react";
// import { useRef } from "react";

export default function ProjectManager(props) {
  const [record, setRecord] = useState([]);
  // const { sidebarid ,login } = useContext(EnvContext);
  // const filter = useRef("");

  useEffect(() => {
    var newData = props.list
    newData.map((data,index)=>{
      data['id']=index+1
    })

    console.log(newData)

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
      name: "ID",
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
      name: "Tên công ty",
      selector: (row) => row.company,
      sortable: true,
      // width: "100px"
    },

    {
      name: "Thông tin",
      selector: (row) => row.info,
      sortable: true,
      // width: "100px"
    },

    {
      name: "Trạng thái",
      selector: (row) => row.statement,
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
    <div>
      <DataTable
        columns={column}
        data={record}
        pagination
        paginationComponentOptions={paginationComponentOptions}
      />
    </div>
  );
}
