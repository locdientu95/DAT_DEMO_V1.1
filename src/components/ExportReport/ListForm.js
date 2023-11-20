import React, { useState } from "react";
import "./ExportReport.scss";
import DataTable from "react-data-table-component";
import { IoTrashOutline, IoAddCircleOutline, IoClose } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { useEffect } from "react";
import { useContext } from "react";
import { EnvContext } from "../Context/EnvContext";
import { useRef } from "react";

export default function ListForm() {
  const { listform } = useContext(EnvContext);
  const [data, setData] = React.useState(listform);
  const fill = useRef(data);
  const [edit, setEdit] = useState(data);
  const [display, setDisplay] = useState(false);
  const [config, setConfig] = useState([]);

  // useEffect(() => {
  //   console.log(display);
  // });

  useEffect(() => {
    var newData = data;
    newData.map((data, index) => {
      return (data["id"] = index + 1);
    });
    setData(newData);
  }, [data]);

  const paginationComponentOptions = {
    rowsPerPageText: "Số hàng",
    rangeSeparatorText: "đến",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Tất cả",
  };

  const columns = [
    {
      name: "STT",
      selector: (row) => row.id,
      width: "100px",
      center: true,
    },
    {
      name: "ID",
      selector: (row) => row.formid,
      width: "100px",
      center: true,
    },
    {
      name: "Tên Form",
      selector: (row) => row.name,
    },
    {
      name: "Cấu hình",
      selector: (row) => (
        <>
          {Object.entries(row.config).map(([key]) => {
            return (
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  padding: "8px",
                }}
                key={key}
                id={[key]}
              >
                <div> {row.config[key]} </div>
                <button
                  id={[key] + "_" + row.config[key] +"_"+ row.name}
                  onClick={(event) => handleEditConfig(event)}
                >
                  <FiEdit style={{ color: "blue" }} />
                </button>
                <div
                  style={{ cursor: "pointer", color: "red" }}
                  id={"kkk"}
                  onClick={(e) => handleDeleteConfig(e)}
                >
                  <IoTrashOutline />
                </div>
                <div style={{ cursor: "pointer" }}>
                  <IoAddCircleOutline />
                </div>
              </div>
            );
          })}
        </>
      ),
    },
    {
      name: "",
      selector: (row) => (
        <>
          <div>
            <div
              style={{ cursor: "pointer", color: "red" }}
              id={row.name}
              onClick={(e) => handleDelete(e)}
            >
              Xóa
            </div>
          </div>
        </>
      ),
      width: "100px",
      center: true,
    },
  ];

  const handleClose = (e) => {
    setDisplay(false);
  };

  const handleEditConfig = (event) => {
    setDisplay(true);
    // console.log(event.currentTarget.id);
    const temp = event.currentTarget.id.split("_");
    console.log(temp); //(3) ['0', 'a', 'name1'] (index, attribute, name)
    setEdit(temp[1]);
    setConfig(temp)
  };

  const handleDeleteConfig = (e) => {
    console.log(e.currentTarget.id);
  };

  const handleDelete = (e) => {
    console.log(e.currentTarget.id);
    var newData = data.filter((data) => data.name !== e.target.id);
    console.log(newData);
    setData(newData);
  };

  const handleEdit = (e) => {
    setEdit(e.currentTarget.value);
  };

  const handleSaveEdit = (e) => {
    setDisplay(false);
    console.log(edit);
    console.log(config);
  };

  return (
    <div className="DAT_ListForm">
      <div className="DAT_ListForm-Head">
        <form className="DAT_ListForm-Head-Center">
          <div className="DAT_ListForm-Head-Center-Form">
            <input type="search" placeholder="Tìm kiếm" />
            <div className="DAT_ListForm-Head-Center-Form-Icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-search"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
          </div>
        </form>

        <form className="DAT_ListForm-Head-Add">
          <button>Lưu</button>
          <div className="DAT_ListForm-Head-Add-Form">
            <input type="search" placeholder="Thêm" />
            <div className="DAT_ListForm-Head-Add-Form-Icon">
              <IoAddCircleOutline />
            </div>
          </div>
        </form>
      </div>

      <div className="DAT_ListForm-Row">
        <DataTable
          columns={columns}
          data={data}
          pagination
          paginationComponentOptions={paginationComponentOptions}
        />
      </div>
      {display === false ? (
        <></>
      ) : (
        <div
          className="DAT_ListForm-Config"
          // style={{ display: pop ? "block" : "none" }}
        >
          <form
            className="DAT_ListForm-Config-Group"
            onSubmit={(e) => handleSaveEdit(e)}
          >
            <div className="_ListForm-Config-Group-Tit">
              <div>Chỉnh Sửa</div>
              <div
                className="_ListForm-Config-Group-Tit-Close"
                // onClick={(e) => handleClose2(e)}
              >
                <IoClose onClick={(e) => handleClose(e)} />
              </div>
            </div>
            <input
              type="text"
              required
              defaultValue={edit || ""}
              onChange={(e) => handleEdit(e)}
            ></input>
            <button onClick={(e) => handleSaveEdit(e)}>Lưu</button>
          </form>
        </div>
      )}
    </div>
  );
}
