import React, { useContext, useEffect, useRef, useState } from "react";
import "./ErrorReport.scss";
import DataTable from "react-data-table-component";
import { CSVLink } from "react-csv";
import { EnvContext } from "../Context/EnvContext";

export default function ErrorReport() {
  const { errorlogs, errornoti, envDispatch } = useContext(EnvContext);
  const [data, setRecord] = useState([]);
  const [err, setErr] = useState("");
  const fill = useRef(errornoti.ErrCode);

  useEffect(() => {
    var newData = errorlogs;
    newData.map((data, index) => {
      return (data["id"] = index + 1);
    });

    console.log(newData);
    setRecord(errorlogs);
  }, [errorlogs]);

  useEffect(() => {
    console.log(errornoti.ErrCode);
    fill.current = errornoti.ErrCode;
    // var newdb = errorlogs;
    // var input = errornoti.ErrCode;
    // if (errornoti.ErrCode === "") {
    //   setRecord(newdb);
    // } else {
    //   const newData = errorlogs.filter((row) => {
    //     return (
    //       // row.id === parseInt(input) ||
    //       // row.DeviceID.includes(input) ||
    //       row.ErrCode.includes(input) ||
    //       // row.DeviceType.includes(input) ||
    //       // row.ErrStt.includes(input) ||
    //       // row.ErrType.toLowerCase().includes(input) ||
    //       // row.ProjectName.includes(input) ||
    //       // row.DeviceID.toLowerCase().includes(input) ||
    //       row.ErrCode.toLowerCase().includes(input)
    //       // row.DeviceType.toLowerCase().includes(input) ||
    //       // row.ErrStt.toLowerCase().includes(input) ||
    //       // row.ErrType.toLowerCase().includes(input) ||
    //       // row.ProjectName.toLowerCase().includes(input) ||
    //       // row.Datetime.includes(input)
    //     );
    //   });

    //   setRecord(newData);
    // }

    var newData = errorlogs.filter((row) => {
      return (
        row.ErrCode.includes(errornoti.ErrCode) ||
        row.ErrCode.toLowerCase().includes(errornoti.ErrCode)
      );
    });
    console.log(newData);
    setRecord(newData);
  }, [errornoti.ErrCode]);

  const paginationComponentOptions = {
    rowsPerPageText: "Số hàng",
    rangeSeparatorText: "đến",
    selectAllRowsItem: true,
    selectAllRowsItemText: "tất cả",
  };

  const column = [
    {
      name: "STT",
      code: "id",
      sortable: true,
      selector: (row) => row.id,
      width: "60px",
    },
    {
      name: "Mã Lỗi",
      code: "Errcode",
      selector: (row) => row.ErrCode,
      width: "100px",
    },
    {
      name: "Thiết Bị",
      code: "DeviceType",
      selector: (row) => row.DeviceType,
    },
    {
      name: "Trạng Thái",
      code: "ErrStt",
      selector: (row) => row.ErrStt,
    },
    {
      name: "Loại Lỗi",
      code: "ErrType",
      selector: (row) => row.ErrType,
    },
    {
      name: "Tên Dự Án",
      code: "ProjectName",
      selector: (row) => row.ProjectName,
    },
    {
      name: "Gateway",
      code: "DeviceID",
      selector: (row) => row.DeviceID,
    },
    {
      name: "Thời Gian",
      code: "Datetime",
      selector: (row) => row.Datetime,
      width: "200px",
    },
    {
      name: "",
      selector: (row) => (
        <div
          id={row.id}
          onClick={(e) => handleDelete(e)}
          style={{ cursor: "pointer", color: "red" }}
        >
          xóa
        </div>
      ),
      width: "70px",
      center: true,
    },
  ];

  const handleInput = (e) => {
    fill.current = e.target.value;
    var newdb = errorlogs;
    var input = e.target.value;
    if (e.target.value === "") {
      setRecord(newdb);
    } else {
      const newData = errorlogs.filter((row) => {
        return (
          row.id === parseInt(input) ||
          row.DeviceID.includes(input) ||
          row.ErrCode.includes(input) ||
          row.DeviceType.includes(input) ||
          row.ErrStt.includes(input) ||
          row.ErrType.toLowerCase().includes(input) ||
          row.ProjectName.includes(input) ||
          row.DeviceID.toLowerCase().includes(input) ||
          row.ErrCode.toLowerCase().includes(input) ||
          row.DeviceType.toLowerCase().includes(input) ||
          row.ErrStt.toLowerCase().includes(input) ||
          row.ErrType.toLowerCase().includes(input) ||
          row.ProjectName.toLowerCase().includes(input) ||
          row.Datetime.includes(input)
        );
      });

      setRecord(newData);
    }
  };

  const handleDelete = (e) => {
    var newData = errorlogs;
    newData = newData.filter((data) => data.id !== parseInt(e.target.id));
    console.log(newData);
    envDispatch({
      type: "SET_ERRORLOGS",
      payload: newData,
    });
  };

  return (
    <div className="DAT_Content">
      <div className="DAT_Content-Header">
        <div className="DAT_Content-Header-Main">
          <div className="DAT_Content-Header-Main-Dashboard">
            <div className="DAT_Content-Header-Main-Dashboard-Heading">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-filter"
                style={{ paddingRight: "10px" }}
              >
                <polyline points="17 1 21 5 17 9"></polyline>
                <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
                <polyline points="7 23 3 19 7 15"></polyline>
                <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
              </svg>
              Báo Cáo Lỗi
            </div>
            <div className="DAT_Content-Header-Main-Dashboard-SubHead">
              Example dashboard overview and content summary
            </div>
          </div>
        </div>
      </div>

      <div className="DAT_Content-Container">
        <div className="DAT_Content-Container-Group">
          <div className="DAT_Content-Container-Group-Table">
            <div className="DAT_Content-Container-Group-Table-head">
              <CSVLink data={data}>
                <button>Xuất Báo Cáo</button>
              </CSVLink>

              <input
                type="text"
                placeholder="Tìm kiếm"
                value={fill.current}
                onChange={(e) => handleInput(e)}
              />
            </div>

            <div className="DAT_Content-Container-Group-Table-Content">
              <div className="DAT_Content-Container-Group-Table-Content-tit">
                Danh Sách Lỗi
              </div>

              <div className="DAT_Content-Container-Group-Table-Content-tb">
                <DataTable
                  columns={column}
                  data={data}
                  pagination
                  paginationComponentOptions={paginationComponentOptions}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
