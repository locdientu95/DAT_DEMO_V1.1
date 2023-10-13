import React from "react";
import DataTable from "react-data-table-component";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { EnvContext } from "../Context/EnvContext";

export default function ProjectManager(props) {
  const { projectfilter, envDispatch} = useContext(EnvContext);
  const [record, setRecord] = useState(projectfilter.displayarray);
  const [show, setShow] = useState(false);

  const handleDelete = (e, row) => {
    var newData = record;
    newData = newData.filter((data) => data.projectid != e.target.value);
    newData.map((data, index) => {
      data["id"] = index + 1;
    });
    setRecord(newData);
    console.log(e.target.value);
  };


  useEffect(() => {
    // console.log("hello")
    var newData = props.list;
    newData.map((data, index) => {
      data["id"] = index + 1;
    });
    // console.log(newData)
    //projectfilter.displayarray=newData
    envDispatch({type: "SET_PROJECTFILTER",payload: {...projectfilter,displayarray: newData} })
    setRecord(projectfilter.displayarray);

  }, [projectfilter.displayarray]);

  const handleChange = (e) => {
    projectfilter.detail = e.currentTarget.id
    envDispatch({type: "SET_PROJECTFILTER", payload: projectfilter})
    console.log(projectfilter.detail)    
  }

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
      selector: (row) => (
        <>
          <div
            id={"name_" + row.id}
            onClick={(e) => handleChange(e)}
            style={{ cursor: "pointer" }}
          >
            {row.name}
          </div>
        </>
      ),
      sortable: true,
      // width: "100px"
    },

    {
      name: "Tên công ty",
      selector: (row) => (
        <>
          <div
            id={"company_" + row.id}
            onClick={(e) => handleChange(e)}
            style={{ cursor: "pointer" }}
          >
            {row.company}
          </div>
        </>
      ),
      sortable: true,
      // width: "100px"
    },

    {
      name: "Thông tin",
      selector: (row) => (
        <>
          <div
            id={"info_" + row.id}
            onClick={(e) => handleChange(e)}
            style={{ cursor: "pointer" }}
          >
            {row.info}
          </div>
        </>
      ),
      sortable: true,
      // width: "100px"
    },

    {
      name: "Trạng thái",
      selector: (row) => (
        <>
          <div
            id={"statement_" + row.id}
            onClick={(e) => handleChange(e)}
            style={{ cursor: "pointer" }}
          >
            {row.statement}
          </div>
        </>
      ),
      sortable: true,
      width: "100px",
    },
    {
      name: "Tùy chỉnh",
      selector: (row) => (
        <select
          style={{
            borderRadius: "0px",
            backgroundColor: "transparent",
            border: "1px solid transparent",
            cursor: "pointer",
          }}
          onChange={(e, row) => handleDelete(e, row)}
        >
          <option defaultValue={0}>...</option>
          <option value={row.projectid}>Xóa</option>
        </select>
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
