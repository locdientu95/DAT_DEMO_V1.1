import React from "react";
import "./ExportReport.scss";
import DataTable from "react-data-table-component";
import { IoTrashOutline, IoAddCircleOutline, IoClose } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";

export default function ListForm() {
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
      name: "Mã Form",
      selector: (row) => row.formId,
    },
    {
      name: "Tên Form",
      selector: (row) => row.name,
    },
    {
      name: "Cấu hình",
      selector: (row) => (
        <>
          <div
            style={{
              display: "flex",
              gap: "16px",
              padding: "8px",
            }}
          >
            <div> {row.key} </div>
            <div style={{ cursor: "pointer", color: "blue" }}>
              <FiEdit />
            </div>
            <div style={{ cursor: "pointer", color: "red" }}>
              <IoTrashOutline />
            </div>
            <div style={{ cursor: "pointer" }}>
              <IoAddCircleOutline />
            </div>
          </div>
          {/* <div
            style={{
              display: "flex",
              gap: "16px",
              padding: "8px",
            }}
          >
            <div> {row.key} </div>
            <div style={{ cursor: "pointer", color: "blue" }}>
              <FiEdit />
            </div>
            <div style={{ cursor: "pointer", color: "red" }}>
              <IoTrashOutline />
            </div>
          </div> */}
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

  const data = [
    {
      id: 1,
      formId: "1",
      name: "a",
      key: "company",
    },
    {
      id: 2,
      formId: "2",
      name: "b",
      key: "company",
    },
    {
      id: 3,
      formId: "3",
      name: "c",
      key: "company",
    },
  ];

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

      <div
        className="DAT_ListForm-Config"
        // style={{ display: pop ? "block" : "none" }}
      >
        <form
          className="DAT_ListForm-Config-Group"
          // onSubmit={(e) => handleSaveRow(e)}
        >
          <div className="_ListForm-Config-Group-Tit">
            <div>Chỉnh Sửa</div>
            <div
              className="_ListForm-Config-Group-Tit-Close"
              // onClick={(e) => handleClose2(e)}
            >
              <IoClose />
            </div>
          </div>
          <input
            type="text"
            required
            // ref={datainrow}
          ></input>
          <button>Lưu</button>
        </form>
      </div>
    </div>
  );
}
