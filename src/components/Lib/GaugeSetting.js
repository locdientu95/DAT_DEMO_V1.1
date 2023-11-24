import React, { useRef } from "react";
import "./Setting.scss";
import { useContext } from "react";
import { EnvContext } from "../Context/EnvContext";
import { Box, Button, Input, InputFist, Span } from "./FunctionElement";
import axios from "axios";

export default function GaugeSetting() {
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

  const { gauge, envDispatch } = useContext(EnvContext);

  const speed = useRef();
  const fontsize = useRef();
  const color = useRef();
  const handleTit = (e) => {
    if (speed.current.value !== "") {
      gauge.label = speed.current.value;
    }

    if (fontsize.current.value !== "") {
      gauge.labelsize = fontsize.current.value;
    }

    axios
      .put(
        process.env.REACT_APP_API_URL+"/gauge/tit",
        {
          label: gauge.label,
          labelsize: gauge.labelsize,
          labelcolor: color.current.value,
        },
        { credential: true }
      )
      .then((res) => {
        envDispatch({
          type: "SET_GAUGE",
          payload: gauge,
        });

        envDispatch({
          type: "SET_GAUGE",
          payload: {
            ...gauge,
            labelcolor: color.current.value,
          },
        });
      });

    speed.current.value = "";
    fontsize.current.value = "";
  };

  const unit = useRef();
  const unitsize = useRef();
  const unitcolor = useRef();
  const handleUnit = (e) => {
    if (unit.current.value !== "") {
      gauge.unit = unit.current.value;
    }

    if (unitsize.current.value !== "") {
      gauge.valuesize = unitsize.current.value;
    }

    axios
      .put(
        process.env.REACT_APP_API_URL+"/gauge/unit",
        {
          unit: gauge.unit,
          valuesize: gauge.valuesize,
          valuecolor: unitcolor.current.value,
        },
        { credential: true }
      )
      .then((res) => {
        envDispatch({
          type: "SET_GAUGE",
          payload: gauge,
        });

        envDispatch({
          type: "SET_GAUGE",
          payload: {
            ...gauge,
            valuecolor: unitcolor.current.value,
          },
        });
      });

    unit.current.value = "";
    unitsize.current.value = "";
  };

  const min = useRef();
  const handleMin = (e) => {
    if (min.current.value !== "") {
      gauge.min = min.current.value;
    }

    axios
      .put(
        process.env.REACT_APP_API_URL+"/gauge/min",
        { min: gauge.min },
        { credential: true }
      )
      .then((res) => {
        envDispatch({
          type: "SET_GAUGE",
          payload: gauge,
        });
      });

    min.current.value = "";
  };

  const max = useRef();
  const handleMax = (e) => {
    if (max.current.value !== "") {
      gauge.max = max.current.value;
    }

    axios
      .put(
        process.env.REACT_APP_API_URL+"/gauge/max",
        { max: gauge.max },
        { credential: true }
      )
      .then((res) => {
        envDispatch({
          type: "SET_GAUGE",
          payload: gauge,
        });
      });

    max.current.value = "";
  };

  const width = useRef();
  const height = useRef();
  const segment = useRef();
  const handleCustom = (e) => {
    if (width.current.value !== "") {
      gauge.width = width.current.value;
    }

    if (height.current.value !== "") {
      gauge.height = height.current.value;
    }

    if (segment.current.value !== "") {
      gauge.segment = segment.current.value;
    }

    // axios.method(url, body, ...)
    axios
      .put(
        process.env.REACT_APP_API_URL+"/gauge/custom",
        {
          width: gauge.width,
          height: gauge.height,
          segment: gauge.segment,
        },
        { credential: true }
      )
      .then((res) => {
        console.log(res.data);
        envDispatch({
          type: "SET_GAUGE",
          payload: gauge,
        });
      });
    ///.....

    width.current.value = "";
    height.current.value = "";
    segment.current.value = "";
  };

  const needlecolor = useRef();
  const startcolor = useRef();
  const endcolor = useRef();
  const handleColor = (e) => {
    axios
      .put(
        process.env.REACT_APP_API_URL+"/gauge/color",
        {
          needlecolor: needlecolor.current.value,
          startcolor: startcolor.current.value,
          endcolor: endcolor.current.value,
        },
        { credential: true }
      )
      .then((res) => {
        envDispatch({
          type: "SET_GAUGE",
          payload: {
            ...gauge,
            needlecolor: needlecolor.current.value,
            startcolor: startcolor.current.value,
            endcolor: endcolor.current.value,
          },
        });
      });
  };

  const cal = useRef();
  const handleCal = (e) => {
    envDispatch({
      type: "SET_GAUGE",
      payload: {
        ...gauge,
        cal: cal.current.value,
      },
    });
  };

  return (
    <>
      <div className="DAT_Setting_Gauge">
        <div className="DAT_Setting_Gauge_Row">
          {InputFist("", "Width: " + gauge.width, width)}
          {Input("", "Height: " + gauge.height, height)}
          {Input("number", "Scale: " + gauge.segment, segment)}
          {Button(handleCustom, "Chọn")}
        </div>

        <div className="DAT_Setting_Gauge_Row">
          {InputFist("", "Tiêu đề: " + gauge.label, speed)}
          {Input("", "Fontsize: " + gauge.labelsize, fontsize)}
          {Span("Màu chữ: ")}
          {Input("color", "", color)}
          {Button(handleTit, "Chọn")}
        </div>

        <div className="DAT_Setting_Gauge_Row">
          {InputFist("", "Đơn vị: " + gauge.unit, unit)}
          {Input("", "Fontsize: " + gauge.valuesize, unitsize)}
          {Span("Màu đơn vị: ")}
          {Input("color", "", unitcolor)}
          {Button(handleUnit, "Chọn")}
        </div>

        <div className="DAT_Setting_Gauge_Row3">
          <input
            className="DAT_Setting_Gauge_Row3_Item1"
            placeholder={"Min: " + gauge.min}
            ref={min}
          />
          <input
            placeholder="Nhập thanh ghi"
            className="DAT_Setting_Gauge_Row3_Item2"
          />
          {Button(handleMin, "Chọn")}
        </div>

        <div className="DAT_Setting_Gauge_Row3">
          <input
            placeholder={"Max: " + gauge.max}
            className="DAT_Setting_Gauge_Row3_Item1"
            ref={max}
          />
          <input
            placeholder="Nhập thanh ghi"
            className="DAT_Setting_Gauge_Row3_Item2"
          />
          {Button(handleMax, "Chọn")}
        </div>

        <div className="DAT_Setting_Gauge_Row">
          <span className="DAT_Setting_Gauge_Row_Item1">Màu kim: </span>
          {Input("color", "", needlecolor)}
          {Span("Màu bắt đầu: ")}
          <input type="color" ref={startcolor} />
          {Span("Màu kết thúc: ")}
          {Input("color", "", endcolor)}
          {Button(handleColor, "Chọn")}
        </div>

        <div className="DAT_Setting_Gauge_Row">{Box(base)}</div>

        <div className="DAT_Setting_Gauge_Row">
          {InputFist("text", "Nhập thanh ghi read")}
          <button>Chọn</button>
        </div>

        <div className="DAT_Setting_Gauge_Last">
          <input placeholder={"value: " + gauge.cal} ref={cal}></input>
          {Button(handleCal, "Xác nhận")}
        </div>
      </div>
    </>
  );
}
