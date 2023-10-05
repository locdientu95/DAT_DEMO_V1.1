import React from "react";
import "./Setting.scss";
import { useRef } from "react";
import { useContext } from "react";
import { EnvContext } from "../Context/EnvContext";
import { Button, Input, InputFist, Span } from "./FunctionElement";

export default function NumberSetting() {
  const { number, envDispatch } = useContext(EnvContext);

  const width = useRef();
  const height = useRef();
  const unit = useRef();
  const handleCustom = (e) => {
    if (width.current.value !== "") {
      number.width = width.current.value;
    }

    if (height.current.value !== "") {
      number.height = height.current.value;
    }

    if (unit.current.value !== "") {
      number.unit = unit.current.value;
    }

    envDispatch({
      type: "SET_NUMBER",
      payload: number,
    });

    width.current.value = "";
    height.current.value = "";
    unit.current.value = "";
  };

  const border = useRef();
  const borderradius = useRef();
  const bordercolor = useRef();
  const handleBorder = (e) => {
    if (border.current.value !== "") {
      number.border = border.current.value;
    }

    if (borderradius.current.value !== "") {
      number.borderradius = borderradius.current.value;
    }

    envDispatch({
      type: "SET_NUMBER",
      payload: number,
    });

    envDispatch({
      type: "SET_NUMBER",
      payload: {
        ...number,
        bordercolor: bordercolor.current.value,
      },
    });

    border.current.value = "";
    borderradius.current.value = "";
  };

  const fontsize = useRef();
  const bgcolor = useRef();
  const textcolor = useRef();
  const handleText = (e) => {
    if (fontsize.current.value !== "") {
      number.fontsize = fontsize.current.value;
    }
    envDispatch({
      type: "SET_NUMBER",
      payload: number,
    });

    envDispatch({
      type: "SET_NUMBER",
      payload: {
        ...number,
        bgcolor: bgcolor.current.value,
        textcolor: textcolor.current.value,
      },
    });

    fontsize.current.value = "";
  };

  const posi = useRef();
  const handlePosi = (e) => {
    envDispatch({
      type: "SET_NUMBER",
      payload: {
        ...number,
        posi: posi.current.value,
      },
    });
  };

  const type = useRef();
  const handleType = (e) => {
    console.log(type.current.value);

    if (type.current.value === "false") {
      envDispatch({
        type: "SET_NUMBER",
        payload: {
          ...number,
          type: type.current.value,
        },
      });
    } else {
      envDispatch({
        type: "SET_NUMBER",
        payload: {
          ...number,
          type: type.current.value,
        },
      });
    }
  };

  return (
    <div className="DAT_Setting-Number">
      <div className="DAT_Setting-Number-Row1">
        {InputFist("number", "Width: " + number.width, width)}
        {Input("number", "Height: " + number.height, height)}
        {Input("text", "Unit: " + number.unit, unit)}
        {Button(handleCustom, "Chọn")}
      </div>

      <div className="DAT_Setting-Number-Row1">
        {InputFist("number", "Boder: " + number.border, border)}
        {Input("number", "Radius: " + number.borderradius, borderradius)}
        {Span("Màu border: ")}
        {Input("color", "", bordercolor)}
        {Button(handleBorder, "Chọn")}
      </div>

      <div className="DAT_Setting-Number-Row3">
        <input
          className="DAT_Setting-Number-Row3-Item1"
          placeholder={"Font Size: " + number.fontsize}
          type="number"
          ref={fontsize}
        />
        <span>Màu nền: </span>
        <input type="color" ref={bgcolor} />
        <span>Màu chữ: </span>
        <input type="color" ref={textcolor} />
        <button onClick={(e) => handleText(e)}>Chọn</button>
      </div>

      <div className="DAT_Setting-Number-Row4">
        <select ref={posi} onChange={(e) => handlePosi(e)}>
          <option value={"center"}>Center</option>
          <option value={"left"}>Left</option>
          <option value={"right"}>Right</option>
        </select>
      </div>

      <div className="DAT_Setting-Number-Row5">
        <select ref={type} onChange={(e) => handleType(e)}>
          <option value="false">Read</option>
          <option value="true">Write</option>
        </select>
      </div>

      <div className="DAT_Setting-Number-Row6">
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

      <div className="DAT_Setting-Number-Row7">
        <input placeholder="Nhập thanh ghi read" />
        <button>Chọn</button>
      </div>

      <div className="DAT_Setting-Number-Row8">
        <input placeholder="0"></input>
        <button>Xác nhận</button>
      </div>
    </div>
  );
}
