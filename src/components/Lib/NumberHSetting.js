import React, { useContext, useRef } from "react";
import "./Setting.scss";
import { EnvContext } from "../Context/EnvContext";

export default function NumberHSetting() {
  const { numberh, envDispatch } = useContext(EnvContext);

  const row = useRef();
  const handleAdd = (e) => {
    var newRow = numberh.row;
    var newData = numberh.data;
    for (let i = 0; i < row.current.value; i++) {
      newData.push({
        id: newRow,
        label: "Gia tri " + newRow,
        value: "0",
        unit: "unit",
      });
      newRow++;
    }

    envDispatch({
      type: "SET_NUMBERH",
      payload: {
        ...numberh,
        row: newRow,
        data: newData,
      },
    });

    row.current.value = "";
  };

  const from = useRef();
  const to = useRef();
  const handleDelete = (e) => {
    var newData = numberh.data;
    newData.splice(
      from.current.value - 1,
      to.current.value - from.current.value + 1
    );

    envDispatch({
      type: "SET_NUMBERH",
      payload: {
        ...numberh,
        data: newData,
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
    var newData = numberh.data;
    const index = newData.findIndex(
      (newData) => newData.id == selID.current.value
    );

    if (name.current.value !== "") {
      newData[index].label = name.current.value;
    }

    if (value.current.value !== "") {
      newData[index].value = value.current.value;
    }

    if (unit.current.value !== "") {
      newData[index].unit = unit.current.value;
    }

    envDispatch({
      type: "SET_NUMBERH",
      payload: {
        ...numberh,
        data: newData,
      },
    });

    name.current.value = "";
    value.current.value = "";
    unit.current.value = "";
  };

  return (
    <div className="DAT_Setting-NumberH">
      <div className="DAT_Setting-NumberH-Row">
        <input
          className="DAT_Setting-NumberH-Row-Item1"
          placeholder="Nhập số hàng muốn thêm: "
          type="number"
          ref={row}
        />
        <button onClick={(e) => handleAdd(e)}>Thêm</button>
      </div>

      <div className="DAT_Setting-NumberH-Row">
        <span
          className="DAT_Setting-NumberH-Row-Item1"
          style={{ width: "100%" }}
        >
          Xóa hàng từ STT:
        </span>
        <input placeholder="Nhập số hàng từ STT: " type="number" ref={from} />
        <span style={{ width: "100%" }}>Đến:</span>
        <input placeholder="Nhập số hàng đến STT: " type="number" ref={to} />
        <button onClick={(e) => handleDelete(e)}>Xóa</button>
      </div>

      <div className="DAT_Setting-NumberH-Row">
        <span
          className="DAT_Setting-NumberH-Row-Item1"
        >
          Chọn id cần thay đổi:
        </span>
        <select ref={selID}>
          {numberh.data.map((data, index) => {
            return (
              <option key={index} value={data.id}>
                {data.id}
              </option>
            );
          })}
        </select>
      </div>

      <div className="DAT_Setting-NumberH-Row">
        <span
          className="DAT_Setting-NumberH-Row-Item1"
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
