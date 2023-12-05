import React, { Fragment, useEffect, useState } from "react";
import { useContext } from "react";
import { EnvContext } from "../Context/EnvContext";
import { useRef } from "react";
import { Button, Input, InputFist, Span } from "./FunctionElement";
import { tableproid } from "../Setting/Device";
import axios from "axios";

export default function TableProSetting() {
  const { tablepro, envDispatch } = useContext(EnvContext);
  const width = useRef();
  const height = useRef();
  const row = useRef();
  const fromCol = useRef();
  const toCol = useRef();
  const col = useRef();
  const fromRow = useRef();
  const toRow = useRef();
  const sel = useRef();
  const tit = useRef();
  const selID = useRef();
  const selVal = useRef();
  const newval = useRef();

  const valuesplit = (text) => {
    var t = text;
    t = t.split("_");
    return t[1];
  };

  const handleTable = (e) => {
    if (width.current.value === "") {
    } else {
      envDispatch({
        type: "SET_TABLEPRO",
        payload: {
          ...tablepro,
          width: width.current.value,
          //height: height.current.value
        },
      });
    }

    width.current.value = "";
  };

  const handleAddRow = (e) => {
    const arr = [];
    const updateRow = parseInt(tablepro.row) + parseInt(row.current.value);
    for (let i = 0; i < row.current.value; i++) {
      var newRow = {};
      tablepro.head.map((data, index) => {
        if (index == 0) {
          newRow[data.code] = parseInt(tablepro.row) + i;
        } else {
          newRow[data.code] = 0;
        }
      });
      arr.push(newRow);
    }
    const newDataTable = tablepro.data.concat(arr);
    console.log(newDataTable)
    axios.post(process.env.REACT_APP_API_URL + "/tablepro/addrow",
    {id: tableproid,
    data: newDataTable,
    row: updateRow
    },
    { credential: true })
      .then((res) => {
        console.log(res.data.data)
        envDispatch({
          type: "SET_TABLEPRO",
          payload: {
            ...tablepro,
            row: updateRow,
            data: newDataTable,
          },
        });
      });
  };

  const handleDeleteRow = (e) => {
    const start = fromRow.current.value;
    const end = toRow.current.value;
    if (tablepro.row <= 2) {
      alert("Số hàng tối thiểu là 2");
    } else {
      if (start == "" || end == "") {
        alert("Nhập sai, vui lòng nhập lại");
      } else if (start > end) {
        alert("Nhập sai, vui lòng nhập lại");
      } else if (start <= 0 || end <= 0) {
        alert("Nhập sai, vui lòng nhập lại");
      } else {
        var newData = tablepro.data;
        newData = newData.filter((newData) => {
          return newData.id < parseInt(start) || newData.id > parseInt(end);
        });

        // Tính năng cập nhật lại ID sau khi xóa (Đang tắt)
        // newData.map((data,index) =>{
        //   data.id = index+1
        // })
        axios.post(process.env.REACT_APP_API_URL + "/tablepro/deleterow",
      {id: tableproid,
      data: newData,
      },
    { credential: true })
      .then((res) => {
        console.log(res.data.data)
        envDispatch({
          type: "SET_TABLEPRO",
          payload: {
            ...tablepro,
            data: newData,
            //row: newData.length //Chỉ dùng khi bật tính năng cập nhật
          },
        });
      });
      }
    }
  };

  const handleAddCol = (e) => {
    const leng = tablepro.col;
    const sum = parseInt(col.current.value) + parseInt(leng);
    const newHead = tablepro.head;
    for (var i = leng + 1; i <= sum; i++) {
      newHead.push({ name: "Cột " + (i - 1), code: "val_" + (i - 1) });
    }
    const newData = [];
    tablepro.data.map((data, index) => {
      var x = data;
      for (var i = leng; i <= sum; i++) {
        x["val_" + i] = 0;
      }
      newData.push(x);
    });
    axios.put(process.env.REACT_APP_API_URL + "/tablepro/addcol",
      {id: tableproid,
      data: newData,
      head: newHead,
      col: sum
      },
    { credential: true })
      .then((res) => {
        console.log(res.data.data)
        envDispatch({
          type: "SET_TABLEPRO",
          payload: {
            ...tablepro,
            data: newData,
            head: newHead,
            col: sum,
          },
        });
      });

  };

  const handleDeleteCol = (e) => {
    
    const start = fromCol.current.value;
    const end = toCol.current.value;
    const cond = tablepro.col - parseInt(end)
    if (parseInt(tablepro.col) <= 2) {
      alert("Số cột tối thiểu là 2");
    } else {
      if (start <= 0  || end <= 0 ) {
        alert("Nhập sai, vui lòng nhập lại ");
      } else if (parseInt(start) > parseInt(end) ) {
        alert("Nhập sai, vui lòng nhập lại ");
      } else if (start == "" || end == "") {
        alert("Nhập sai, vui lòng nhập lại ");
      } else if(cond >= 2){
        const label = "val_";
        var num =
          parseInt(tablepro.col) - parseInt(parseInt(end) - parseInt(start));
        var newHead = tablepro.head;
        for (var i = start; i <= end; i++) {
          newHead = newHead.filter((newHead) => newHead.code != label+i);
        }
        const newData = tablepro.data;
        newData.map((data, index) => {
          for (var i = start; i <= end; i++) {
            delete data["val_"+i];
          }
        });
        // Cập nhật lại các tên trên header
        // newHead.map((data,index) =>{
        //   if (index>0){
        //     data.name = "Giá Trị "+index
        //     data.code ="val_"+index
        //   }
        // })
        axios.post(process.env.REACT_APP_API_URL + "/tablepro/deletecol",
      {id: tableproid,
      data: newData,
      head: newHead
      },
    { credential: true })
      .then((res) => {
        console.log(res.data.data)
        envDispatch({
          type: "SET_TABLEPRO",
          payload: {
            ...tablepro,
            head: newHead,
            data: newData,
          },
        });
      });
      }else{
        alert("Số cột tối thiểu là 2")
      }
    }
  };

  const handleChangeTitle = (e) => {
    var valueNumber = sel.current.value;
    const newName = tit.current.value;
    var newHead = tablepro.head;
    newHead.map((data, index) => {
      if (index == parseInt(valueNumber)) {
        data.name = newName;
      }
    });
    axios.post(process.env.REACT_APP_API_URL + "/tablepro/changehead",
    {id: tableproid,
    head: newHead
    },
  { credential: true })
    .then((res) => {
      console.log(res.data.data)
      envDispatch({
        type: "SET_TABLEPRO",
        payload: {
          ...tablepro,
          head: newHead,
        },
      });
    });
  };

  const handleChangeValue = (e) => {
    const row = selID.current.value;
    const col = selVal.current.value;
    const val = newval.current.value;
    var newData = tablepro.data;
    const index = newData.findIndex((newData) => newData.id == row);
    newData[index][col] = val;
    axios.post(process.env.REACT_APP_API_URL + "/tablepro/changevalue",
    {id: tableproid,
    data: newData,
    },
    { credential: true })
    .then((res) => {
      console.log(res.data.data)
      envDispatch({
        type: "SET_TABLEPRO",
        payload: {
          ...tablepro,
          data: newData,
        },
      });
    });
  };

  // useEffect(() => {
  //   console.log("HEAD", tablepro.head)
  //   console.log("DATA", tablepro.data)
  //   console.log("COL", tablepro.col)
  //   console.log("ROW", tablepro.row)
  // }, [tablepro])

  return (
    <div className="DAT_Setting-TablePro">
      <div className="DAT_Setting-TablePro-Row">
        {InputFist("", "Width: " + tablepro.width, width)}
        {/* <input className='DAT_Setting-TablePro-Row1-Height' placeholder='Chiều cao table' ref={height}/> */}
        {Button(handleTable, "Chọn")}
      </div>

      <div className="DAT_Setting-TablePro-Row">
        {InputFist("", "Nhập số hàng muốn thêm: ", row)}
        {Button(handleAddRow, "Thêm")}
      </div>

      <div className="DAT_Setting-TablePro-Row">
        {InputFist("", "Nhập số cột muốn thêm: ", col)}
        {Button(handleAddCol, "Thêm")}
      </div>

      <div className="DAT_Setting-TablePro-Row">
        <span className="DAT_Setting-TablePro-Row-Item1">Xóa hàng từ STT:</span>
        {Input("", "Xóa hàng từ STT", fromRow)}
        {Span("Đến: ")}
        {Input("", "Xóa hàng đến STT", toRow)}
        {Button(handleDeleteRow, "Xóa")}
      </div>

      <div className="DAT_Setting-TablePro-Row">
        <span className="DAT_Setting-TablePro-Row-Item1">Xóa cột từ STT:</span>
        {Input("", "Xóa cột từ STT", fromCol)}
        {Span("Đến: ")}
        {Input("", "Xóa cột đến STT", toCol)}
        {Button(handleDeleteCol, "Xóa")}
      </div>

      <div className="DAT_Setting-TablePro-Row">
        <span className="DAT_Setting-TablePro-Row-Item1">
          Chọn cột cần thay đổi tên
        </span>
        <select ref={sel}>
          {tablepro.head.map((data, index) => {
            return <option key={index}>{index}</option>;
          })}
        </select>
        {Input("", "Nhập tên header", tit)}
        {Button(handleChangeTitle, "Thay đổi")}
      </div>

      <div className="DAT_Setting-TablePro-Row">
        <span className="DAT_Setting-TablePro-Row-Item1">
          Chọn id cần thay đổi
        </span>
        <select ref={selID}>
          {tablepro.data.map((data, index) => {
            return (
              <option key={index} value={data.id}>
                Hàng thứ {data.id}
              </option>
            );
          })}
        </select>
        {Span("Chọn vị trí cột cần thay đổi giá trị")}
        <select ref={selVal}>
          {tablepro.head.map((data, index) => {
            return index !== 0 ? (
              <option key={index} value={data.code}>
                Cột {data.code}
              </option>
            ) : (
              <Fragment key={index}></Fragment>
            );
          })}
        </select>
        {Input("", "Nhập giá trị", newval)}
        {Button(handleChangeValue, "Thay đổi")}
      </div>
    </div>
  );
}
