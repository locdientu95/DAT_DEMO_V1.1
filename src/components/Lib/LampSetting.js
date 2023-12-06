import React, { useRef } from "react";
import "./Setting.scss";
import { useContext } from "react";
import { EnvContext } from "../Context/EnvContext";
import {
  Box,
  BoxOnchange,
  Button,
  Input,
  InputFist,
  Span,
} from "./FunctionElement";
import axios from "axios";

export default function LampSetting() {
  const { lamp, envDispatch } = useContext(EnvContext);

  const align = ["Center", "Left", "Right"];

  const base = [
    "Cơ số 10",
    "Cơ số 16",
    "Cơ số 2_0",
    "Cơ số 2_1",
    "Cơ số 2_2",
    "Cơ số 2_3",
    "Cơ số 2_4",
    "Cơ số 2_5",
    "Cơ số 2_6",
    "Cơ số 2_7",
    "Cơ số 2_8",
    "Cơ số 2_9",
    "Cơ số 2_10",
    "Cơ số 2_11",
    "Cơ số 2_12",
    "Cơ số 2_13",
    "Cơ số 2_14",
    "Cơ số 2_15",
  ];

  // Map data
  // useEffect(() => {
  //   Object.entries(lamp.data).map(([key]) => console.log(lamp.data[key]));
  // }, []);

  const value = useRef();
  const bgcolor = useRef();
  const text = useRef();
  const textcolor = useRef();
  const handleAdd = (e) => {
    axios
      .put(
        process.env.REACT_APP_API_URL + "/lamp/update",
        {
          value: value.current.value,
          text: text.current.value,
          color: textcolor.current.value,
          bgcolor: bgcolor.current.value,
        },
        { credential: true }
      )
      .then((res) => {
        console.log(res.data.data);
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
      });

    value.current.value = "";
    text.current.value = "";
  };

  const handleDelete = (e) => {
    var index = e.target.parentNode.parentNode.rowIndex;
    delete lamp.data[index];
    // console.log(lamp.data);
    // console.log(index);
    // console.log(e.target.parentNode.parentNode.firstChild.innerHTML);

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
    if (width.current.value !== "") {
      lamp.width = width.current.value;
    }

    if (height.current.value !== "") {
      lamp.height = height.current.value;
    }

    if (fontsize.current.value !== "") {
      lamp.fontsize = fontsize.current.value;
    }

    axios
      .put(
        process.env.REACT_APP_API_URL + "/lamp/custom",
        {
          width: lamp.width,
          height: lamp.height,
          fontsize: lamp.fontsize,
        },
        { credential: true }
      )
      .then((res) => {
        envDispatch({
          type: "SET_LAMP",
          payload: lamp,
        });
      });

    width.current.value = "";
    height.current.value = "";
    fontsize.current.value = "";
  };

  const border = useRef();
  const borderradius = useRef();
  const bordercolor = useRef();
  const handleBorder = (e) => {
    if (border.current.value !== "") {
      lamp.border = border.current.value;
    }

    if (borderradius.current.value !== "") {
      lamp.borderradius = borderradius.current.value;
    }

    axios
      .put(
        process.env.REACT_APP_API_URL + "/lamp/border",
        {
          border: lamp.border,
          borderradius: lamp.borderradius,
          bordercolor: bordercolor.current.value,
        },
        { credential: true }
      )
      .then((res) => {
        envDispatch({
          type: "SET_LAMP",
          payload: lamp,
        });

        envDispatch({
          type: "SET_LAMP",
          payload: {
            ...lamp,
            bordercolor: bordercolor.current.value,
          },
        });
      });

    border.current.value = "";
    borderradius.current.value = "";
  };

  const handlePosi = (e) => {
    var posi = e.currentTarget.value;
    axios
      .put(
        process.env.REACT_APP_API_URL + "/lamp/posi",
        { posi: posi },
        { credential: true }
      )
      .then((res) => {
        envDispatch({
          type: "SET_LAMP",
          payload: {
            ...lamp,
            posi: posi,
          },
        });
      });
  };

  const edit = useRef();
  const handleEdit = (e) => {
    envDispatch({
      type: "SET_LAMP",
      payload: {
        ...lamp,
        value: edit.current.value,
      },
    });

    edit.current.value = "";
  };

  return (
    <div className="DAT_Setting-Lamp">
      <div className="DAT_Setting-Lamp-Row">
        {InputFist("", "Width: " + lamp.width, width)}
        {Input("", "Height: " + lamp.height, height)}
        {Input("", "Font Size: " + lamp.fontsize, fontsize)}
        {Button(handleCustom, "Chọn")}
      </div>

      <div className="DAT_Setting-Lamp-Row">
        {InputFist("", "Value: " + lamp.value, value)}
        {Span("Màu nền: ")}
        {Input("color", "", bgcolor)}
        {Input("", "text", text)}
        {Span("Màu chữ: ")}
        {Input("color", "", textcolor)}
        {Button(handleAdd, "Thêm")}
      </div>

      <div className="DAT_Setting-Lamp-Row">
        <table>
          <tbody>
            {Object.entries(lamp.data).map(([key]) => (
              <tr key={key}>
                <td>{key}</td>
                <td style={{ backgroundColor: lamp.data[key].bgcolor }}></td>
                <td>{lamp.data[key].text}</td>
                <td style={{ backgroundColor: lamp.data[key].color }}></td>
                <td>
                  <div
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={handleDelete}
                  >
                    Xoá
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="DAT_Setting-Lamp-Row">
        {InputFist("", "Border: " + lamp.border, border)}
        {Input("", "Radius: " + lamp.borderradius, borderradius)}
        {Span("Màu border: ")}
        {Input("color", "", bordercolor)}
        {Button(handleBorder, "Chọn")}
      </div>

      <div className="DAT_Setting-Lamp-Row">
        {BoxOnchange(align, handlePosi)}
      </div>

      <div className="DAT_Setting-Lamp-Row">{Box(base)}</div>

      <div className="DAT_Setting-Lamp-Row">
        {InputFist("text", "Nhập thanh ghi read")}
        <button>Chọn</button>
      </div>

      <div className="DAT_Setting-Lamp-Last">
        <input placeholder="0" ref={edit}></input>
        <button onClick={(e) => handleEdit(e)}>Xác nhận</button>
      </div>
    </div>
  );
}
