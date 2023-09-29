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

    // if (speed.current.value === "") {
    //     alert("Vui lòng nhập tên");
    // } else {
    envDispatch({
      type: "SET_GAUGE",
      payload: {
        ...gauge,
        label: speed.current.value,
        labelcolor: color.current.value,
        labelsize: fontsize.current.value,
      },
    });
    // }
  };

  const unit = useRef();
  const unitsize = useRef();
  const unitcolor = useRef();
  const handleUnit = (e) => {
    if (unit.current.value === "") {
      alert("Vui lòng nhập đơn vị");
    } else {
      envDispatch({
        type: "SET_GAUGE",
        payload: {
          ...gauge,
          unit: unit.current.value,
          valuesize: unitsize.current.value,
          valuecolor: unitcolor.current.value,
        },
      });
    }
  };

  const min = useRef();
  const handleMin = (e) => {
    if (min.current.value === "") {
      alert("Vui lòng nhập giá trị min");
    } else {
      envDispatch({
        type: "SET_GAUGE",
        payload: {
          ...gauge,
          min: min.current.value,
        },
      });
    }
  };

  const max = useRef();
  const handleMax = (e) => {
    if (max.current.value === "") {
      alert("Vui lòng nhập giá trị max");
    } else {
      envDispatch({
        type: "SET_GAUGE",
        payload: {
          ...gauge,
          max: max.current.value,
        },
      });
    }
  };

  const width = useRef();
  const height = useRef();
  const segment = useRef();
  const handleCustom = (e) => {
    if (width.current.value === "") {
      alert("Vui lòng nhập giá trị width");
    } else if (height.current.value === "") {
      alert("Vui lòng nhập giá trị height");
    } else if (segment.current.value === "") {
      alert("Vui lòng nhập giá trị scale");
    } else {
      envDispatch({
        type: "SET_GAUGE",
        payload: {
          ...gauge,
          width: width.current.value,
          height: height.current.value,
          segment: segment.current.value,
        },
      });
    }
  };

  const needlecolor = useRef();
  const startcolor = useRef();
  const endcolor = useRef();
  const handleColor = (e) => {
    // if (needlecolor.current.value === "#000000") {
    //     alert("Vui lòng chọn màu kim");
    // } else if (startcolor.current.value === "#000000") {
    //     alert("Vui lòng chọn màu đầu");
    // } else if (endcolor.current.value === "#000000") {
    //     alert("Vui lòng chọn màu cuối");
    // } else {
    envDispatch({
      type: "SET_GAUGE",
      payload: {
        ...gauge,
        needlecolor: needlecolor.current.value,
        startcolor: startcolor.current.value,
        endcolor: endcolor.current.value,
      },
    });
    // }
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
        <div className="DAT_Setting_Gauge_Row1">
          <input
            className="DAT_Setting_Gauge_Row1_Item1"
            placeholder="Tên: TỐC ĐỘ"
            ref={speed}
          />
          <input
            type="number"
            defaultValue={20}
            min={6}
            max={100}
            step={2}
            style={{ width: "200px" }}
            ref={fontsize}
          />
          <input type="color" style={{ width: "200px" }} ref={color} />
          <button onClick={(e) => handleTit(e)}>Chọn</button>
        </div>

        <div className="DAT_Setting_Gauge_Row2">
          <input
            placeholder="Đơn vị: Hz"
            className="DAT_Setting_Gauge_Row2_Item1"
            ref={unit}
          />
          <input
            type="number"
            defaultValue={20}
            min={6}
            max={100}
            step={2}
            style={{ width: "200px" }}
            ref={unitsize}
          />
          <input type="color" style={{ width: "200px" }} ref={unitcolor} />
          <button onClick={(e) => handleUnit(e)}>Chọn</button>
        </div>

        <div className="DAT_Setting_Gauge_Row3">
          <input
            placeholder="Min: 0"
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
            placeholder="Max: 50"
            className="DAT_Setting_Gauge_Row4_Item1"
            ref={max}
          ></input>
          <input
            placeholder="Nhập thanh ghi"
            className="DAT_Setting_Gauge_Row4_Item2"
          ></input>
          <button onClick={(e) => handleMax(e)}>Chọn</button>
        </div>

        <div className="DAT_Setting_Gauge_Row5">
          <input
            placeholder="Width: 500"
            className="DAT_Setting_Gauge_Row5_Item1"
            ref={width}
          />
          <input placeholder="Height: 300" ref={height} />
          <input type="number" placeholder="Scale: 10" ref={segment} />
          <button onClick={(e) => handleCustom(e)}>Chọn</button>
        </div>

        <div className="DAT_Setting_Gauge_Row6">
          <input
            type="color"
            className="DAT_Setting_Gauge_Row6_Item1"
            ref={needlecolor}
          />
          <input type="color" ref={startcolor} />
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
          <input placeholder="0" ref={cal}></input>
          <button onClick={(e) => handleCal(e)}>Xác nhận</button>
        </div>
      </div>
    </>
  );
}
