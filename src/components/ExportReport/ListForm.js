import React, { useState } from "react";
import "./ExportReport.scss";
import DataTable from "react-data-table-component";
import { IoTrashOutline, IoAddCircleOutline, IoClose } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { useEffect } from "react";
import { useContext } from "react";
import { EnvContext } from "../Context/EnvContext";
import { useRef } from "react";
import { Alert } from "bootstrap";

export default function ListForm() {
  const { listform, envDispatch } = useContext(EnvContext);
  const [data, setData] = React.useState(listform);
  const [edit, setEdit] = useState();
  const [display, setDisplay] = useState(false);
  const [config, setConfig] = useState([]);
  const [flag, setFlag] = useState();

  useEffect(() => {
    console.log(edit);
    console.log(config);
  });

  useEffect(() => {
    var newData = data;
    newData.map((data, index) => {
      return (data["id"] = index + 1);
    });
    setData(newData);
  }, [data]);

  // useEffect(() => {
  //   envDispatch({
  //     type: "SET_LISTFORM",
  //     payload: data,
  //   })
  // },[data])

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
      selector: (row) => (
        <div
          style={{ cursor: "pointer" }}
          id={row.name}
          onClick={(e) => handleEditName(e)}
        >
          {row.name}
        </div>
      ),
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
                  id={[key] + "_" + row.config[key] + "_" + row.name}
                  onClick={(event) => handleEditConfig(event)}
                >
                  <FiEdit style={{ color: "blue" }} />
                </button>
                <div
                  style={{ cursor: "pointer", color: "red" }}
                  id={row.config[key] + "_" + row.name}
                  onClick={(e) => handleDeleteConfig(e)}
                >
                  <IoTrashOutline />
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  id={row.formid}
                  onClick={(e) => handleAddConfig(e)}
                >
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
  const handleAddConfig = (e) => {
    setDisplay(true);
    setFlag("addconfig");
    const temp = e.currentTarget.id;
    setEdit("");
    setConfig(temp);
  };

  const handleEditName = (e) => {
    setDisplay(true);
    setFlag("name");
    const temp = e.currentTarget.id;
    setEdit(temp);
    setConfig(temp);
  };

  const handleClose = (e) => {
    setDisplay(false);
  };

  const handleEditConfig = (event) => {
    // Nút sửa
    setFlag("config");
    setDisplay(true);
    const temp = event.currentTarget.id.split("_");
    setEdit(temp[1]);
    setConfig(temp);
  };

  const handleDeleteConfig = (e) => {
    // Xóa config
    const arr = e.currentTarget.id.split("_");
    console.log(arr);
    var newData = data;
    const i = newData.findIndex((data) => data.name === arr[1]);
    if (data[i].config.length === 1) {
      alert("Ít nhất phải có 1 cấu hình");
    } else {
      newData[i].config = newData[i].config.filter((data) => data !== arr[0]);
      setData([...newData]);
    }
  };

  const handleDelete = (e) => {
    // Xóa 1 dòng trong form
    var newData = data.filter((data) => data.name !== e.target.id);
    setData(newData);
  };

  const handleEdit = (e) => {
    setEdit(e.currentTarget.value);
  };

  const handleSaveEdit = (e) => {
    setDisplay(false);
    // console.log(config); //(3) ['0', 'a', 'name1']

    // if (flag === "config") {
    //   const index = data.findIndex((data) => data.name === config[2]);
    //   data[index].config[parseInt(config[0])] = edit;
    // } else if (flag === "name") {
    //   const index = data.findIndex((data) => data.name === config);
    //   data[index].name = edit;
    // } else if (flag === "addconfig") {
    //   const index = data.findIndex((data) => data.formid === config);
    //   data[index].config.push(edit);
    // }

    switch (flag) {
      case "config": {
        const index = data.findIndex((data) => data.name === config[2]);
        data[index].config[parseInt(config[0])] = edit;
        break;
      }
      case "name": {
        const index = data.findIndex((data) => data.name === config);
        data[index].name = edit;
        break;
      }
      case "addconfig": {
        const index = data.findIndex((data) => data.formid === config);
        if (data[index].config.filter((data) => data === edit).length > 0) {
          alert("Yêu cầu không trùng cấu hình");
          break;
        } else {
          data[index].config.push(edit);
          break;
        }
      }
      default: {
        break;
      }
    }
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
