import React from "react";
import DataTable from "react-data-table-component";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { EnvContext } from "../Context/EnvContext";
import axios from "axios";

export default function ProjectManager(props) {
  const { projectfilter, envDispatch, sidebarid } = useContext(EnvContext);
  const [record, setRecord] = useState(projectfilter.displayarray);

  const handleDelete = (e, row) => {
    var newData = record;
    newData = newData.filter((data) => data.projectid != e.target.value);
    newData.map((data, index) => {
      data["id"] = index + 1;
    });
    projectfilter.display = true;
    envDispatch({ type: "SET_PROJECTFILTER", payload: projectfilter });
    setRecord(newData);
  };

  useEffect(() => {
    var newData = data;
    newData.map((data, index) => {
      data["id"] = index + 1;
    });
    //projectfilter.displayarray=newData
    envDispatch({
      type: "SET_PROJECTFILTER",
      payload: { ...projectfilter, displayarray: newData },
    });
    setRecord(projectfilter.displayarray);
  }, [projectfilter.displayarray]);

  const handleChange = (e) => {
    projectfilter.detail = e.currentTarget.id;
    projectfilter.display = true;
    envDispatch({ type: "SET_PROJECTFILTER", payload: projectfilter });
  };

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    var data = JSON.parse(localStorage.getItem("data"));
    console.log(data.user);
    console.log(sidebarid)
    axios.post(process.env.REACT_APP_API_URL + "/projectdata", {
      bu: sidebarid, user: data.user
    }, {
      credential: true
    }).then((res) => {
      console.log(res.data.data);
      setData(res.data.data);
      setIsLoading(false);
    })
  },[])

  const paginationComponentOptions = {
    rowsPerPageText: "Số hàng",
    rangeSeparatorText: "đến",
    selectAllRowsItem: true,
    selectAllRowsItemText: "tất cả",
  };

  const column = [
    {
      name: "Project ID",
      selector: (row) => row.projectid,
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
        data={data}
        pagination
        paginationComponentOptions={paginationComponentOptions}
      />
    </div>
  );
}
