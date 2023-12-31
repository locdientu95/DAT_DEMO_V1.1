import React, { useEffect } from "react";
import "./ErrorSetting.scss";
import DataTable from "react-data-table-component";
import { useRef } from "react";
import { useState } from "react";
import { useContext } from "react";
import { EnvContext } from "../Context/EnvContext";
import { IoClose, IoTrashOutline } from "react-icons/io5";
import axios from "axios";
import { errsettingid } from "./ErrorSetting";



export default function InfoSetting() {
  const datainrow = useRef("");
  const [pop, setPop] = useState(false);
  const [idrow, setIdrow] = useState("");
  const { errsetting, envDispatch } = useContext(EnvContext);

 

  const handleChange2 = (e) => {
    setIdrow(e.currentTarget.id);
    setPop(true);
  };

  const handleSaveRow = (e) => {
    e.preventDefault();

    const data = datainrow.current.value;
    const t = idrow.split("_");
    var newData = errsetting.infodata;
    const index = newData.findIndex((newData) => newData.id == t[1]);

    if (t[0] == "ErrCode") {
      for (let i = 0; i < errsetting.infodata.length; i++) {
        if (errsetting.infodata[i].ErrCode != data) {
          newData[index][t[0]] = data;
          break;
        } else {
          alert("Trùng mã lỗi");
          break;
        }
      }
    } else {
      newData[index][t[0]] = data;
    }

    setPop(false);
    axios.post(process.env.REACT_APP_API_URL + "/errsetting/saveInfo",
    {_id: errsettingid.value,
    infodata: newData
    },
    { credential: true })
      .then((res) => {
        envDispatch({
          type: "SET_ERR",
          payload: {
            ...errsetting,
            infodata: newData,
          },
        });
      });
  };

  const infoCol = [
    {
      name: "STT",
      code: "id",
      selector: (row) => row.id,
      sortable: true,
      width: "60px",
      center: true,
    },
    {
      name: "Mã Lỗi",
      code: "ErrCode",
      selector: (row) => (
        <>
          <div
            id={"ErrCode_" + row.id}
            onClick={(e) => handleChange2(e)}
            style={{ cursor: "pointer" }}
          >
            {row.ErrCode}{" "}
          </div>
        </>
      ),
      width: "100px",
      center: true,
    },
    {
      name: "Tên Lỗi",
      code: "ErrName",
      selector: (row) => (
        <>
          <div
            id={"ErrName_" + row.id}
            onClick={(e) => handleChange2(e)}
            style={{ cursor: "pointer" }}
          >
            {row.ErrName}{" "}
          </div>
        </>
      ),
      center: true,
    },
    {
      name: "Loại Lỗi",
      code: "ErrType",
      selector: (row) => (
        <>
          <div
            id={"ErrType_" + row.id}
            onClick={(e) => handleChange2(e)}
            style={{ cursor: "pointer" }}
          >
            {row.ErrType}{" "}
          </div>
        </>
      ),
      width: "150px",
      center: true,
    },
    {
      name: "Nguyên Nhân",
      code: "info",
      selector: (row) => (
        <>
          <div
            id={"info_" + row.id}
            onClick={(e) => handleChange2(e)}
            style={{ cursor: "pointer" }}
          >
            {row.info}{" "}
          </div>
        </>
      ),
    },
    {
      name: "Biện Pháp",
      code: "solution",
      selector: (row) => (
        <>
          <div
            id={"solution_" + row.id}
            onClick={(e) => handleChange2(e)}
            style={{ cursor: "pointer" }}
          >
            {row.solution}{" "}
          </div>
        </>
      ),
    },
    {
      name: "",
      selector: (row) => (
        <>
          <div
            id={row.id}
            onClick={(e) => handleDeleInfoRow(e)}
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

  const handleAddInfo = (e) => {
    var leng = errsetting.infoDataRow;
    var newData = errsetting.infodata;
    newData = [
      ...newData,
      {
        id: leng,
        ErrCode: "...",
        ErrName: "...",
        ErrType: "...",
        info: "...",
        solution: "...",
      },
    ];
    leng++;
    newData.map((data, index) => {
      data.id = index + 1;
    });

    axios.post(process.env.REACT_APP_API_URL + "/errsetting/addInfo",
    {_id: errsettingid.value,
    infodata: newData,
    infoDataRow: leng
    },
    { credential: true })
      .then((res) => {
        envDispatch({
          type: "SET_ERR",
          payload: {
            ...errsetting,
            infodata: newData,
            infoDataRow: leng,
          },
        });
      });

  };

  const handleDeleInfoRow = (e) => {
    var newData = errsetting.infodata;
    newData = newData.filter((newData) => {
      return newData.id != parseInt(e.currentTarget.id);
    });
    newData.map((data, index) => {
      data.id = index + 1;
    });
    axios.post(process.env.REACT_APP_API_URL + "/errsetting/deleteInfo",
    {_id: errsettingid.value,
    infodata: newData
    },
    { credential: true })
      .then((res) => {
        envDispatch({
          type: "SET_ERR",
          payload: {
            ...errsetting,
            infodata: newData,
          },
        });
      });
  };

  const handleClose2 = (e) => {
    setPop(false);
  };

  return (
    <div className="DAT_InfoSetting">
      <div className="DAT_InfoSetting-Tit">Cài Đặt Thông Tin</div>
      <div className="DAT_InfoSetting-Table">
        <DataTable columns={infoCol} data={errsetting.infodata} />
        <button onClick={(e) => handleAddInfo(e)}>Thêm</button>
      </div>
      <div
        className="DAT_InfoSetting-Config"
        style={{ display: pop ? "block" : "none" }}
      >
        <form
          className="DAT_InfoSetting-Config-Group"
          onSubmit={(e) => handleSaveRow(e)}
        >
          <div className="DAT_InfoSetting-Config-Group-Tit">
            Chỉnh Sửa
            <div
              className="DAT_InfoSetting-Config-Group-Tit-Close"
              onClick={(e) => handleClose2(e)}
            >
              <IoClose />
            </div>
          </div>
          <input type="text" required ref={datainrow}></input>
          <button>Lưu</button>
        </form>
      </div>
    </div>
  );
}
