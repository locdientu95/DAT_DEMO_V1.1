import React, { useRef } from "react";
import "./Setting.scss";
import { useContext } from "react";
import { EnvContext } from "../Context/EnvContext";

export default function GaugeSetting() {
  const { gauge, envDispatch } = useContext(EnvContext);

  const speed = useRef();
  const fontsize = useRef();
  const color = useRef();
  const handleTit = (e) => {
    //gauge.label = speed.current.value;
    //envDispatch({type: 'SET_GAUGE',payload: gauge})

    if (speed.current.value !== "") {
      gauge.label = speed.current.value;
    }

    if (fontsize.current.value !== "") {
      gauge.labelsize = fontsize.current.value;
    }

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

    unit.current.value = "";
    unitsize.current.value = "";
  };

  const min = useRef();
  const handleMin = (e) => {
    envDispatch({
      type: "SET_GAUGE",
      payload: {
        ...gauge,
        min: min.current.value,
      },
    });

    min.current.value = "";
  };

  const max = useRef();
  const handleMax = (e) => {
    envDispatch({
      type: "SET_GAUGE",
      payload: {
        ...gauge,
        max: max.current.value,
      },
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

    envDispatch({
      type: "SET_GAUGE",
      payload: gauge,
    });

    width.current.value = "";
    height.current.value = "";
    segment.current.value = "";
  };

  const needlecolor = useRef();
  const startcolor = useRef();
  const endcolor = useRef();
  const handleColor = (e) => {
    envDispatch({
      type: "SET_GAUGE",
      payload: {
        ...gauge,
        needlecolor: needlecolor.current.value,
        startcolor: startcolor.current.value,
        endcolor: endcolor.current.value,
      },
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
        <div className="DAT_Setting_Gauge_Row5">
          <input
            className="DAT_Setting_Gauge_Row5_Item1"
            placeholder={"Width: " + gauge.width}
            ref={width}
          />
          <input placeholder={"Height: " + gauge.height} ref={height} />
          <input
            type="number"
            placeholder={"Scale: " + gauge.segment}
            ref={segment}
          />
          <button onClick={(e) => handleCustom(e)}>Chọn</button>
        </div>

        <div className="DAT_Setting_Gauge_Row1">
          <input
            className="DAT_Setting_Gauge_Row1_Item1"
            placeholder={"Tên: " + gauge.label}
            ref={speed}
          />
          <input
            placeholder={"Fontsize: " + gauge.labelsize}
            type="number"
            style={{ width: "200px" }}
            ref={fontsize}
          />
          <span>Màu chữ: </span>
          <input type="color" style={{ width: "200px" }} ref={color} />
          <button onClick={(e) => handleTit(e)}>Chọn</button>
        </div>

        <div className="DAT_Setting_Gauge_Row2">
          <input
            className="DAT_Setting_Gauge_Row2_Item1"
            placeholder={"Đơn vị: " + gauge.unit}
            ref={unit}
          />
          <input
            placeholder={"Fontsize: " + gauge.valuesize}
            type="number"
            style={{ width: "200px" }}
            ref={unitsize}
          />
          <span>Màu đơn vị: </span>
          <input type="color" style={{ width: "200px" }} ref={unitcolor} />
          <button onClick={(e) => handleUnit(e)}>Chọn</button>
        </div>

        <div className="DAT_Setting_Gauge_Row3">
          <input
            placeholder={"Min: " + gauge.min}
            className="DAT_Setting_Gauge_Row3_Item1"
            ref={min}
          ></input>
          <input
            placeholder="Nhập thanh ghi"
            className="DAT_Setting_Gauge_Row3_Item2"
          ></input>
          <button onClick={(e) => handleMin(e)}>Chọn</button>
        </div>

        <div className="DAT_Setting_Gauge_Row4">
          <input
            placeholder={"Max: " + gauge.max}
            className="DAT_Setting_Gauge_Row4_Item1"
            ref={max}
          ></input>
          <input
            placeholder="Nhập thanh ghi"
            className="DAT_Setting_Gauge_Row4_Item2"
          ></input>
          <button onClick={(e) => handleMax(e)}>Chọn</button>
        </div>

        <div className="DAT_Setting_Gauge_Row6">
          <span className="DAT_Setting_Gauge_Row6_Item1">Màu kim: </span>
          <input type="color" ref={needlecolor} />
          <span>Màu bắt đầu: </span>
          <input type="color" ref={startcolor} />
          <span>Màu kết thúc: </span>
          <input type="color" ref={endcolor} />
          <button onClick={(e) => handleColor(e)}>Chọn</button>
        </div>

        <div className="DAT_Setting_Gauge_Row7">
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

        <div className="DAT_Setting_Gauge_Row8">
          <input placeholder="Nhập thanh ghi read" />
          <button>Chọn</button>
        </div>

        <div className="DAT_Setting_Gauge_Row9">
          <input placeholder={"value: " + gauge.cal} ref={cal}></input>
          <button onClick={(e) => handleCal(e)}>Xác nhận</button>
        </div>
      </div>
    </>
  );
}
