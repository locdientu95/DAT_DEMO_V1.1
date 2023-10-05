import React from "react";
import "./Setting.scss";
import { useRef } from "react";
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

export default function NumberSetting() {
  const { number, envDispatch } = useContext(EnvContext);

  const align = ["center", "left", "right"];
  const R_W = ["Read", "Write"];
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

  const handlePosi = (e) => {
    console.log(e.currentTarget.value);
    envDispatch({
      type: "SET_NUMBER",
      payload: {
        ...number,
        posi: e.currentTarget.value,
      },
    });
  };

  const handleType = (e) => {
    console.log(e.currentTarget.value);
    envDispatch({
      type: "SET_NUMBER",
      payload: {
        ...number,
        type: e.currentTarget.value,
      },
    });
  };

  return (
    <div className="DAT_Setting-Number">
      <div className="DAT_Setting-Number-Row">
        {InputFist("number", "Width: " + number.width, width)}
        {Input("number", "Height: " + number.height, height)}
        {Input("text", "Unit: " + number.unit, unit)}
        {Button(handleCustom, "Chọn")}
      </div>

      <div className="DAT_Setting-Number-Row">
        {InputFist("number", "Boder: " + number.border, border)}
        {Input("number", "Radius: " + number.borderradius, borderradius)}
        {Span("Màu border: ")}
        {Input("color", "", bordercolor)}
        {Button(handleBorder, "Chọn")}
      </div>

      <div className="DAT_Setting-Number-Row">
        {InputFist("number", "Font Size: " + number.fontsize, fontsize)}
        {Span("Màu nền: ")}
        {Input("color", "", bgcolor)}
        {Span("Màu chữ: ")}
        {Input("color", "", textcolor)}
        {Button(handleText, "Chọn")}
      </div>

      <div className="DAT_Setting-Number-Row">
        {BoxOnchange(align, handlePosi)}
      </div>

      <div className="DAT_Setting-Number-Row">
        {BoxOnchange(R_W, handleType)}
      </div>

      <div className="DAT_Setting-Number-Row">{Box(base)}</div>

      <div className="DAT_Setting-Number-Row">
        {InputFist("text", "Nhập thanh ghi read")}
        <button>Chọn</button>
      </div>

      <div className="DAT_Setting-Number-Last">
        <input placeholder="0"></input>
        <button>Xác nhận</button>
      </div>
    </div>
  );
}
