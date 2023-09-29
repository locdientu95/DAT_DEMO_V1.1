import React, { useContext, useRef } from "react";
import "./Setting.scss";
import { EnvContext } from "../Context/EnvContext";

export default function SliderSetting() {
  const { slider, envDispatch } = useContext(EnvContext);

  const min = useRef();
  const handleMin = (e) => {
    envDispatch({
      type: "SET_SLIDER",
      payload: {
        ...slider,
        min: min.current.value,
      },
    });
  };

  const max = useRef();
  const handleMax = (e) => {
    envDispatch({
      type: "SET_SLIDER",
      payload: {
        ...slider,
        max: max.current.value,
      },
    });
  };

  const width = useRef();
  const height = useRef();
  const scale = useRef();
  const ori = useRef();
  const handleCustom = (e) => {
    console.log(ori.current.value);
    envDispatch({
      type: "SET_SLIDER",
      payload: {
        ...slider,
        width: width.current.value,
        height: height.current.value,
        scale: scale.current.value,
        ori: ori.current.value,
      },
    });
  };

  const thumbborder = useRef();
  const thumbcolor = useRef();
  const trackborder = useRef();
  const trackcolor = useRef();
  const railborder = useRef();
  const railcolor = useRef();
  const handleColor = (e) => {
    envDispatch({
      type: "SET_SLIDER",
      payload: {
        ...slider,
        thumb: {
          border: thumbborder.current.value,
          bgcolor: thumbcolor.current.value,
        },
        track: {
          border: trackborder.current.value,
          bgcolor: trackcolor.current.value,
        },
        rail: {
          border: railborder.current.value,
          bgcolor: railcolor.current.value,
        },
      },
    });
  };

  return (
    <div className="DAT_Setting-Slider">
      <div className="DAT_Setting-Slider-Row1">
        <input
          placeholder="Min: 0"
          className="DAT_Setting-Slider-Row1-Item1"
          ref={min}
        ></input>
        <input
          placeholder="Nhập thanh ghi"
          className="DAT_Setting-Slider-Row1-Item2"
        ></input>
        <button onClick={(e) => handleMin(e)}>Chọn</button>
      </div>

      <div className="DAT_Setting-Slider-Row2">
        <input
          placeholder="Max: 100"
          className="DAT_Setting-Slider-Row2-Item1"
          ref={max}
        ></input>
        <input
          placeholder="Nhập thanh ghi"
          className="DAT_Setting-Slider-Row2-Item2"
        ></input>
        <button onClick={(e) => handleMax(e)}>Chọn</button>
      </div>

      <div className="DAT_Setting-Slider-Row3">
        <input
          placeholder="Width: "
          className="DAT_Setting-Slider-Row3-Item1"
          ref={width}
        ></input>
        <input placeholder="Height: " ref={height}></input>
        <input placeholder="Bước kéo: " ref={scale}></input>
        <select ref={ori}>
          <option value={"horizontal"}>Chiều ngang</option>
          <option value={"vertical"}>Chiều đứng</option>
        </select>
        <button onClick={(e) => handleCustom(e)}>Chọn</button>
      </div>

      <div className="DAT_Setting-Slider-Row4">
        <input
          className="DAT_Setting-Slider-Row4-Item1"
          placeholder="Thumb Border:"
          ref={thumbborder}
        ></input>
        <input type="color" ref={thumbcolor}></input>
        <input placeholder="Track Border:" ref={trackborder}></input>
        <input type="color" ref={trackcolor}></input>
        <input placeholder="Rail Border:" ref={railborder}></input>
        <input type="color" ref={railcolor}></input>
        <button onClick={(e) => handleColor(e)}>Chọn</button>
      </div>

      <div className="DAT_Setting-Slider-Row5">
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

      <div className="DAT_Setting-Slider-Row6">
        <input placeholder="Nhập thanh ghi read" />
        <button>Chọn</button>
      </div>

      <div className="DAT_Setting-Slider-Row7">
        <input placeholder="0"></input>
        <button>Xác nhận</button>
      </div>
    </div>
  );
}
