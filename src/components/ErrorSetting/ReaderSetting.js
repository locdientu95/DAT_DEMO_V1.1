import React from "react";
import "./ErrorSetting.scss";
import DataTable from "react-data-table-component";
import { useRef } from "react";
import { useState } from "react";
import { useContext } from "react";
import { EnvContext } from "../Context/EnvContext";
import { IoClose, IoTrashOutline } from "react-icons/io5";
import { errsettingid } from "./ErrorSetting";
import axios from "axios";

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
            <IoTrashOutline />
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
    newData.map((data, index) => {
      return (data.id = index + 1);
    });

    axios.post(process.env.REACT_APP_API_URL + "/errsetting/addAddress",
    {_id: errsettingid.value,
      adddata: newData,
      addDataRow: leng
    },
    { credential: true })
      .then((res) => {
        envDispatch({
          type: "SET_ERR",
          payload: {
            ...errsetting,
            adddata: newData,
            addDataRow: leng,
          },
        });
      });

  };

  const handleSaveAddressRow = (e) => {
    e.preventDefault();
    const data = datainaddressrow.current.value;
    const t = addrow.split("_");
    var newData = errsetting.adddata;
    const index = newData.findIndex((newData) => newData.id == t[1]);
    newData[index][t[0]] = data;

    setInfoPop(false);

    axios.post(process.env.REACT_APP_API_URL + "/errsetting/saveAddress",
    {_id: errsettingid.value,
      adddata: newData
    },
    { credential: true })
      .then((res) => {
        envDispatch({
          type: "SET_ERR",
          payload: {
            ...errsetting,
            adddata: newData,
          },
        });
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
    axios.post(process.env.REACT_APP_API_URL + "/errsetting/deleteAddress",
    {_id: errsettingid.value,
      adddata: newData
    },
    { credential: true })
      .then((res) => {
        envDispatch({
          type: "SET_ERR",
          payload: {
            ...errsetting,
            adddata: newData,
          },
        });
      });

  };

  const handleClose = (e) => {
    setInfoPop(false);
  };

  return (
    <div className="DAT_ReaderSetting">
      <div className="DAT_ReaderSetting-Tit">Cài Đặt Thanh Ghi</div>
      <div className="DAT_ReaderSetting-Table">
        <DataTable columns={addcol} data={errsetting.adddata} />
        <button onClick={(e) => handleAdd(e)}>Thêm</button>
      </div>
      <div
        className="DAT_ReaderSetting-Config"
        style={{ display: infopop ? "block" : "none" }}
      >
        <form
          className="DAT_ReaderSetting-Config-Group"
          onSubmit={(e) => handleSaveAddressRow(e)}
        >
          <div className="DAT_ReaderSetting-Config-Group-Tit">
            <div>Chỉnh Sửa</div>
            <div
              className="DAT_ReaderSetting-Config-Group-Tit-Close"
              onClick={(e) => handleClose(e)}
            >
              <IoClose />
            </div>
          </div>
          <input type="text" required ref={datainaddressrow}></input>
          <button>Lưu</button>
        </form>
      </div>
    </div>
  );
}
