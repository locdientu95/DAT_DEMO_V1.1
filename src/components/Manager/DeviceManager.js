import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import { useEffect } from "react";
import { useState } from "react";
import { EnvContext } from "../Context/EnvContext";
import axios from "axios";

export default function DeviceManager(props) {
  const { sidebarid } = useContext(EnvContext);
  const [record, setRecord] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    var data = JSON.parse(localStorage.getItem("data"));
    console.log(data.user);
    console.log(sidebarid);
    axios
      .post(
        process.env.REACT_APP_API_URL + "/devicedata",
        {
          bu: sidebarid,
          user: data.user,
        },
        {
          credential: true,
        }
      )
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      });
  }, []);

  // useEffect(() => {
  //   var newData = data;
  //   newData.map((data, index) => {
  //     data["id"] = index + 1;
  //   });

  //   setData(newData);
  // }, [props.list]);

  const paginationComponentOptions = {
    rowsPerPageText: "Số hàng",
    rangeSeparatorText: "đến",
    selectAllRowsItem: true,
    selectAllRowsItemText: "tất cả",
  };

  const column = [
    // {
    //   name: "STT",
    //   selector: (row) => row.id,
    //   // sortable: true,
    //   width: "60px",
    // },
    {
      name: "Gateway",
      selector: (row) => row.gateway,
      sortable: true,
      // width: "100px",
    },
    {
      name: "Tên dự án",
      selector: (row) => row.name,
      sortable: true,
      // width: "100px"
    },
    {
      name: "Mô tả",
      selector: (row) => row.description,
      sortable: true,
    },

    {
      name: "Thông tin",
      selector: (row) => row.custom,
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
      data={data}
      pagination
      paginationComponentOptions={paginationComponentOptions}
    />
  );
}
