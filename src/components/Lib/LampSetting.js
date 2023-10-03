import React, { useEffect, useRef } from "react";
import "./Setting.scss";
import { useContext } from "react";
import { EnvContext } from "../Context/EnvContext";

export default function LampSetting() {
  const { lamp, envDispatch } = useContext(EnvContext);

  // Map data
  // useEffect(() => {
  //   Object.entries(lamp.data).map(([key]) => console.log(lamp.data[key]));
  // }, []);

  const value = useRef();
  const bgcolor = useRef();
  const text = useRef();
  const textcolor = useRef();
  const handleAdd = (e) => {
    envDispatch({
      type: "SET_LAMP",
      payload: {
        ...lamp,
        data: {
          ...lamp.data,
          [value.current.value]: {
            text: text.current.value,
            color: textcolor.current.value,
            bgcolor: bgcolor.current.value,
          },
        },
      },
    });
    value.current.value = "";
    bgcolor.current.value = "";
    text.current.value = "";
    textcolor.current.value = "";
  };

  const handleDelete = (e) => {
    // const key = e.target.parentNode.parentNode.firstChild.innerHTML;
    // const { [key]: value, ...newData } = lamp.data;
    // console.log(newData);
    // envDispatch({
    //   type: "SET_LAMP",
    //   payload: {
    //     ...lamp,
    //     data: newData,
    //   },
    // });

    // console.log(e.target.parentNode.parentNode.firstChild.innerHTML);
    delete lamp.data[e.target.parentNode.parentNode.firstChild.innerHTML];
    console.log(lamp.data);

    envDispatch({
      type: "SET_LAMP",
      payload: {
        ...lamp,
        data: lamp.data,
      },
    });
  };

  const width = useRef();
  const height = useRef();
  const fontsize = useRef();
  const handleCustom = (e) => {
    envDispatch({
      type: "SET_LAMP",
      payload: {
        ...lamp,
        width: width.current.value,
        height: height.current.value,
        fontsize: fontsize.current.value,
      },
    });
    width.current.value = "";
    height.current.value = "";
    fontsize.current.value = "";
  };

  const border = useRef();
  const borderradius = useRef();
  const bordercolor = useRef();
  const handleBorder = (e) => {
    envDispatch({
      type: "SET_LAMP",
      payload: {
        ...lamp,
        border: border.current.value,
        borderradius: borderradius.current.value,
        bordercolor: bordercolor.current.value,
      },
    });
    border.current.value = "";
    borderradius.current.value = "";
  };

  return (
    <div className="DAT_Setting-Lamp">
      <div className="DAT_Setting-Lamp-Row1">
        <input
          className="DAT_Setting-Lamp-Row1-Item1"
          placeholder={"Value: " + lamp.value}
          ref={value}
        />
        <input type="color" ref={bgcolor} />
        <input placeholder="text" ref={text} />
        <input type="color" ref={textcolor} />
        <button onClick={(e) => handleAdd(e)}>Thêm</button>
      </div>

      <div className="DAT_Setting-Lamp-Row2">
        <table>
          <tbody>
            {Object.entries(lamp.data).map(([key]) => (
              <tr key={key}>
                <td>{key}</td>
                <td style={{ backgroundColor: lamp.data[key].bgcolor }}></td>
                <td>{lamp.data[key].text}</td>
                <td style={{ backgroundColor: lamp.data[key].color }}></td>
                <td>
                  <button onClick={(e) => handleDelete(e)}>Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="DAT_Setting-Lamp-Row3">
        <input
          className="DAT_Setting-Lamp-Row3-Item1"
          placeholder={"Width: " + lamp.width}
          ref={width}
        />
        <input placeholder={"Height: " + lamp.height} ref={height} />
        <input placeholder={"Font Size: " + lamp.fontsize} ref={fontsize} />
        <button onClick={(e) => handleCustom(e)}>Chọn</button>
      </div>

      <div className="DAT_Setting-Lamp-Row4">
        <input
          className="DAT_Setting-Lamp-Row4-Item1"
          placeholder={"Border: " + lamp.border}
          ref={border}
        />
        <input
          placeholder={"Border Radius: " + lamp.borderradius}
          ref={borderradius}
        />
        <input type="color" ref={bordercolor} />
        <button onClick={(e) => handleBorder(e)}>Chọn</button>
      </div>

      <div className="DAT_Setting-Lamp-Row5">
        <select>
          <option value="0">Cơ số 10</option>
          <option value="1">Cơ số 16</option>
          <option value="2">Cơ số 2_0</option>
          <option value="3">Cơ số 2_1</option>
          <option value="4">Cơ số 2_2</option>
          <option value="5">Cơ số 2_3</option>
          <option value="6">Cơ số 2_4</option>
          <option value="7">Cơ số 2_5</option>
          <option value="8">Cơ số 2_6</option>
          <option value="9">Cơ số 2_7</option>
          <option value="10">Cơ số 2_8</option>
          <option value="11">Cơ số 2_9</option>
          <option value="12">Cơ số 2_10</option>
          <option value="13">Cơ số 2_11</option>
          <option value="14">Cơ số 2_12</option>
          <option value="15">Cơ số 2_13</option>
          <option value="16">Cơ số 2_14</option>
          <option value="17">Cơ số 2_15</option>
        </select>
      </div>

      <div className="DAT_Setting-Lamp-Row6">
        <input placeholder="Nhập thanh ghi read" />
        <button>Chọn</button>
      </div>

      <div className="DAT_Setting-Lamp-Row7">
        <input placeholder="0"></input>
        <button>Xác nhận</button>
      </div>
    </div>
  );
}
