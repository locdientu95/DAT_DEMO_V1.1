import React from "react";
import "./ErrorSetting.scss";
import DataTable from "react-data-table-component";
import { useRef } from "react";
import { useState } from "react";
import { useContext } from "react";
import { EnvContext } from "../Context/EnvContext";

export default function ReaderSetting() {
  const datainaddressrow = useRef("");
  const [infopop, setInfoPop] = useState(false);
  const [addrow, setAddrow] = useState("");
  const { errsetting, envDispatch } = useContext(EnvContext);

  const addcol = [
    {
      name: "STT",
      code: "id",
      selector: (row) => row.id,
      sortable: true,
      width: "60px",
      center: true,
    },
    {
      name: "Địa Chỉ Mã Lỗi",
      code: "addressCode",
      selector: (row) => (
        <>
          <div
            id={"addressCode_" + row.id}
            onClick={(e) => handleChange(e)}
            style={{ cursor: "pointer" }}
          >
            {row.addressCode}{" "}
          </div>
        </>
      ),
      center: true,
    },
    {
      name: "Địa Chỉ",
      code: "addressState",
      selector: (row) => (
        <>
          <div
            id={"addressState_" + row.id}
            onClick={(e) => handleChange(e)}
            style={{ cursor: "pointer" }}
          >
            {row.addressState}{" "}
          </div>
        </>
      ),
      center: true,
    },
    {
      name: "Giá Trị",
      code: "value",
      selector: (row) => (
        <>
          <div
            id={"value_" + row.id}
            onClick={(e) => handleChange(e)}
            style={{ cursor: "pointer" }}
          >
            {row.value}{" "}
          </div>
        </>
      ),
      center: true,
    },
    {
      name: "",
      selector: (row) => (
        <>
          <div
            id={row.id}
            onClick={(e) => handleDeleAddressRow(e)}
            style={{ cursor: "pointer", color: "red" }}
          >
            Xóa
          </div>
        </>
      ),
      width: "100px",
      center: true,
    },
  ];

  const handleChange = (e) => {
    setAddrow(e.currentTarget.id);
    setInfoPop(true);
  };

  const handleAdd = (e) => {
    var leng = errsetting.addDataRow;
    var newData = errsetting.adddata;
    newData = [
      ...newData,
      { id: leng, addressCode: "...", addressState: "...", value: "..." },
    ];
    leng++;
    console.log(leng);
    newData.map((data, index) => {
      return (data.id = index + 1);
    });
    envDispatch({
      type: "SET_ERR",
      payload: {
        ...errsetting,
        adddata: newData,
        addDataRow: leng,
      },
    });
  };

  const handleSaveAddressRow = (e) => {
    e.preventDefault();
    const data = datainaddressrow.current.value;
    const t = addrow.split("_");
    var newData = errsetting.adddata;
    const index = newData.findIndex((newData) => newData.id === t[1]);
    newData[index][t[0]] = data;
    setInfoPop(false);
    envDispatch({
      type: "SET_ERR",
      payload: {
        ...errsetting,
        adddata: newData,
      },
    });
  };

  const handleDeleAddressRow = (e) => {
    var newData = errsetting.adddata;
    newData = newData.filter((newData) => {
      return newData.id !== parseInt(e.currentTarget.id);
    });
    newData.map((data, index) => {
      return (data.id = index + 1);
    });
    envDispatch({
      type: "SET_ERR",
      payload: {
        ...errsetting,
        adddata: newData,
      },
    });
  };

  const handleClose = (e) => {
    setInfoPop(false);
  };

  return (
    <div className="DAT_ReaderSetting-Main-Content">
      <div className="DAT_ReaderSetting-Main-Content-Tit">
        Cài Đặt Thanh Ghi
      </div>
      <div className="DAT_ReaderSetting-Main-Content-Table">
        <DataTable columns={addcol} data={errsetting.adddata} />
        <button onClick={(e) => handleAdd(e)}>Thêm</button>
      </div>
      <div
        className="DAT_ReaderSetting-Main-Content-Config"
        style={{ display: infopop ? "block" : "none" }}
      >
        <form
          className="DAT_ReaderSetting-Main-Content-Config-Group"
          onSubmit={(e) => handleSaveAddressRow(e)}
        >
          <div className="DAT_ReaderSetting-Main-Content-Config-Group-Tit">
            <div>Chỉnh Sửa</div>
            <div
              className="DAT_ReaderSetting-Main-Content-Config-Group-Tit-Close"
              onClick={(e) => handleClose(e)}
            >
              x
            </div>
          </div>
          <input type="text" required ref={datainaddressrow}></input>
          <button>Lưu</button>
        </form>
      </div>
    </div>
  );
}
