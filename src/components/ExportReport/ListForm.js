import React from "react";
import "./ExportReport.scss";
import DataTable from "react-data-table-component";
import { IoTrashOutline, IoAddCircleOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { useEffect } from "react";
import { useContext } from "react";
import { EnvContext } from "../Context/EnvContext";

export default function ListForm() {
  const { listform } = useContext(EnvContext);
  const [data, setData] = React.useState(listform);

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
    selectAllRowsItemText: "tất cả",
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
                <button id={key} onClick={(e) => handleDelete(e)}>
                  <FiEdit style={{  color: "blue" }} />
                </button>
                <div style={{ cursor: "pointer", color: "red" }} id={"kkk"} onClick={(e) => handleDelete(e)}>
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
            <div style={{ cursor: "pointer", color: "red" }}>Xóa</div>
          </div>
        </>
      ),
      width: "100px",
      center: true,
    },
  ];

  const handleDelete = (e) => {
    console.log(e.target.id);
  }

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
    </div>
  );
}
