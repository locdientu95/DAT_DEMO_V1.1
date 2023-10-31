import React, { useContext, useRef } from "react";
import "./Setting.scss";
import { EnvContext } from "../Context/EnvContext";

export default function NumberVSetting() {
  const { numberv, envDispatch } = useContext(EnvContext);

  const col = useRef();
  const handleAdd = (e) => {
    const leng = numberv.col;
    const sum = parseInt(leng) + parseInt(col.current.value);
    const newHeader = numberv.header;
    for (var i = leng; i < sum; i++) {
        newHeader.push({
            name: "...",
            code: "label_" + i,
        });
    }

    const newData = [];
    numberv.data.map((data, index) => {
        var x = data;
        for (var i = leng; i < sum; i++) {
            x["label_" + i] = "...";
        }
        newData.push(x);
    });

    envDispatch({
        type: "SET_NUMBERV",
        payload: {
            ...numberv,
            header: newHeader,
            data: newData,
            col: sum,
        },
    });

    col.current.value = "";
  };

  const from = useRef();
  const to = useRef();
  const handleDelete = (e) => {
    const label = "label_";
    var num =
      parseInt(numberv.col) -
      parseInt(parseInt(to.current.value) - parseInt(from.current.value));

    var newHeader = numberv.header;
    for (var i = from.current.value; i <= to.current.value; i++) {
        newHeader = newHeader.filter((newHeader) => newHeader.code != label + i);
    }

    const newData = numberv.data;
    newData.map((data, index) => {
        for (var i = from.current.value; i <= to.current.value; i++) {
            delete data["label_" + i];
        }
    });

    envDispatch({
        type: "SET_NUMBERV",
        payload: {
            ...numberv,
            header: newHeader,
            data: newData,
            col: num,
        },
    });

    from.current.value = "";
    to.current.value = "";
  };

  const selID = useRef();
  const name = useRef();
  const value = useRef();
  const unit = useRef();
  const handleSave = (e) => {
    // var newData = numberv.data;
    // const index = newData.findIndex(
    //   (newData) => newData.id == selID.current.value
    // );

    // if (name.current.value !== "") {
    //   newData[index].label = name.current.value;
    // }

    // if (value.current.value !== "") {
    //   newData[index].value = value.current.value;
    // }

    // if (unit.current.value !== "") {
    //   newData[index].unit = unit.current.value;
    // }

    // envDispatch({
    //   type: "SET_NumberV",
    //   payload: {
    //     ...numberv,
    //     data: newData,
    //   },
    // });

    name.current.value = "";
    value.current.value = "";
    unit.current.value = "";
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
        <span
          className="DAT_Setting-NumberV-Row-Item1"
        >
          Chọn id cần thay đổi:
        </span>
        <select ref={selID}>
          {numberv.data.map((data, index) => {
            return (
              <option key={index} value={data.id}>
                {data.id}
              </option>
            );
          })}
        </select>
      </div>

      <div className="DAT_Setting-NumberV-Row">
        <span
          className="DAT_Setting-NumberV-Row-Item1"
          style={{ width: "100%" }}
        >
          Tên:
        </span>
        <input type="text" placeholder="Nhập tên" ref={name} />
        <span style={{ width: "100%" }}>Giá trị:</span>
        <input type="text" placeholder="Nhập giá trị" ref={value} />
        <span style={{ width: "100%" }}>Đơn vị:</span>
        <input type="text" placeholder="Nhập đơn vị" ref={unit} />
        <button onClick={(e) => handleSave(e)}>Lưu</button>
      </div>
    </div>
  );
}
