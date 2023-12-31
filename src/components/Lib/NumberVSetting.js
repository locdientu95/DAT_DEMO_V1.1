import React, { useContext, useRef } from "react";
import "./Setting.scss";
import { EnvContext } from "../Context/EnvContext";
import axios from "axios";

export default function NumberVSetting() {
  const { numberv, envDispatch } = useContext(EnvContext);

  const col = useRef();
  const handleAdd = (e) => {
    const leng = numberv.col;
    const sum = parseInt(leng) + parseInt(col.current.value);
    const newHeader = numberv.header;
    for (var i = leng + 1; i <= sum; i++) {
      newHeader.push({
        name: "...",
        code: "label_" + (i - 1),
      });
    }

    const newData = [];
    numberv.data.map((data, index) => {
      var x = data;
      for (var i = leng; i <= sum; i++) {
        x["label_" + i] = "...";
      }
      newData.push(x);
    });

    axios
      .put(
        process.env.REACT_APP_API_URL + "/numberv/add",
        {
          header: newHeader,
          data: newData,
          col: sum,
        },
        { credential: true }
      )
      .then((res) => {
        envDispatch({
          type: "SET_NUMBERV",
          payload: {
            ...numberv,
            header: newHeader,
            data: newData,
            col: sum,
          },
        });
      });

    col.current.value = "";
  };

  const from = useRef();
  const to = useRef();
  const handleDelete = (e) => {
    const label = "label_";
    // var num =
    //   parseInt(numberv.col) -
    //   parseInt(parseInt(to.current.value) - parseInt(from.current.value));
    const condition = numberv.col - to.current.value;

    if (numberv.col <= 2) {
      alert("Số cột tối thiểu là 2");
    } else {
      if (from.current.value <= 0 || to.current.value <= 0) {
        alert("Nhập sai, vui lòng nhập lại");
      } else if (from.current.value > to.current.value) {
        alert("Nhập sai, vui lòng nhập lại");
      } else if (from.current.value == "" || to.current.value == "") {
        alert("Nhập sai, vui lòng nhập lại");
      } else if (condition >= 2) {
        var newHeader = numberv.header;
        for (var i = from.current.value; i <= to.current.value; i++) {
          newHeader = newHeader.filter(
            (newHeader) => newHeader.code != label + i
          );
        }

        const newData = numberv.data;
        newData.map((data, index) => {
          for (var i = from.current.value; i <= to.current.value; i++) {
            delete data["label_" + i];
          }
        });

        axios
          .put(
            process.env.REACT_APP_API_URL + "/numberv/delete",
            {
              header: newHeader,
              data: newData,
            },
            { credential: true }
          )
          .then((res) => {
            envDispatch({
              type: "SET_NUMBERV",
              payload: {
                ...numberv,
                header: newHeader,
                data: newData,
              },
            });
          });
      } else {
        alert("Số cột tối thiểu là 2");
      }
    }

    from.current.value = "";
    to.current.value = "";
  };

  const selID = useRef();
  const tit = useRef();
  const handleChangeTit = (e) => {
    var newHead = numberv.header;
    newHead.map((data, index) => {
      if (index == parseInt(selID.current.value)) {
        data.name = tit.current.value;
      }
    });

    axios
      .put(
        process.env.REACT_APP_API_URL + "/numberv/updateTit",
        { header: newHead },
        { credential: true }
      )
      .then((res) => {
        envDispatch({
          type: "SET_NUMBERV",
          payload: {
            ...numberv,
            header: newHead,
          },
        });
      });

    tit.current.value = "";
  };

  const selHead = useRef();
  const selVal = useRef();
  const value = useRef();
  const handleSave = (e) => {
    var newData = numberv.data;
    const index = newData.findIndex(
      (newData) => newData.label === selVal.current.value
    );

    // console.log(index);

    newData[index][selHead.current.value] = value.current.value;

    // console.log(newData);

    axios
      .put(
        process.env.REACT_APP_API_URL + "/numberv/updateData",
        { data: newData },
        { credential: true }
      )
      .then((res) => {
        envDispatch({
          type: "SET_NUMBERV",
          payload: {
            ...numberv,
            data: newData,
          },
        });
      });

    value.current.value = "";
  };

  return (
    <div className="DAT_Setting-NumberV">
      <div className="DAT_Setting-NumberV-Row">
        <input
          className="DAT_Setting-NumberV-Row-Item1"
          placeholder="Nhập số cột muốn thêm: "
          type="number"
          ref={col}
        />
        <button onClick={(e) => handleAdd(e)}>Thêm</button>
      </div>

      <div className="DAT_Setting-NumberV-Row">
        <span
          className="DAT_Setting-NumberV-Row-Item1"
          style={{ width: "100%" }}
        >
          Xóa cột từ STT:
        </span>
        <input placeholder="Nhập số cột từ STT: " type="number" ref={from} />
        <span style={{ width: "100%" }}>Đến:</span>
        <input placeholder="Nhập số cột đến STT: " type="number" ref={to} />
        <button onClick={(e) => handleDelete(e)}>Xóa</button>
      </div>

      <div className="DAT_Setting-NumberV-Row">
        <span className="DAT_Setting-NumberV-Row-Item1">
          Chọn cột cần thay đổi:
        </span>
        <select ref={selID}>
          {numberv.header.map((data, index) => {
            return <option key={index}>{index}</option>;
          })}
        </select>
        <input type="text" ref={tit} />
        <button onClick={(e) => handleChangeTit(e)}>Lưu</button>
      </div>

      <div className="DAT_Setting-NumberV-Row">
        <span
          className="DAT_Setting-NumberV-Row-Item1"
          style={{ width: "100%" }}
        >
          Chọn nội dung cần thay đổi:
        </span>
        <select ref={selVal}>
          {numberv.data.map((data, index) => {
            return (
              <option key={index} value={data.label}>
                {data.label}
              </option>
            );
          })}
        </select>
        <span style={{ width: "100%" }}>Chọn cột cần thay đổi:</span>
        <select ref={selHead}>
          {numberv.header.map((data, index) => {
            return (
              <option key={index} value={data.code}>
                {index}
              </option>
            );
          })}
        </select>
        <input type="text" placeholder="Nhập giá trị" ref={value} />
        <button onClick={(e) => handleSave(e)}>Lưu</button>
      </div>
    </div>
  );
}
