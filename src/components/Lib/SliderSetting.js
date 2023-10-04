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

    min.current.value = "";
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

    max.current.value = "";
  };

  const width = useRef();
  const height = useRef();
  const scale = useRef();
  const handleCustom = (e) => {
    if (width.current.value !== "") {
      slider.width = width.current.value;
    }

    if (height.current.value !== "") {
      slider.height = height.current.value;
    }

    if (scale.current.value !== "") {
      slider.scale = scale.current.value;
    }

    envDispatch({
      type: "SET_SLIDER",
      payload: slider,
    });

    width.current.value = "";
    height.current.value = "";
    scale.current.value = "";
  };

  const ori = useRef();
  const handleOri = (e) => {
    console.log(ori.current.value);
    console.log(width.current.value);
    console.log(height.current.value);

    if (ori.current.value === "horizontal") {
      envDispatch({
        type: "SET_SLIDER",
        payload: {
          ...slider,
          ori: ori.current.value,
        },
      });
    } else {
      envDispatch({
        type: "SET_SLIDER",
        payload: {
          ...slider,
          ori: ori.current.value,
        },
      });
    }
  };

  const thumbborder = useRef();
  const thumbcolor = useRef();
  const trackborder = useRef();
  const trackcolor = useRef();
  const railcolor = useRef();
  const handleColor = (e) => {
    if (thumbborder.current.value !== "") {
      slider.thumb.border = thumbborder.current.value;
    }

    if (trackborder.current.value !== "") {
      slider.track.border = trackborder.current.value;
    }

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
          bgcolor: railcolor.current.value,
        },
      },
    });

    thumbborder.current.value = "";
    trackborder.current.value = "";
  };

  return (
    <div className="DAT_Setting-Slider">
      <div className="DAT_Setting-Slider-Row1">
        <input
          className="DAT_Setting-Slider-Row1-Item1"
          placeholder={"Min: " + slider.min}
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
          className="DAT_Setting-Slider-Row2-Item1"
          placeholder={"Max: " + slider.max}
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
          className="DAT_Setting-Slider-Row3-Item1"
          placeholder={"Width: " + slider.width}
          ref={width}
        ></input>
        <input placeholder={"Height: " + slider.height} ref={height}></input>
        <input placeholder={"Bước kéo: " + slider.scale} ref={scale}></input>
        <button onClick={(e) => handleCustom(e)}>Chọn</button>
      </div>

      <div className="DAT_Setting-Slider-Row4">
        <select ref={ori} onChange={(e) => handleOri(e)}>
          <option value={"horizontal"}>Chiều ngang</option>
          <option value={"vertical"}>Chiều đứng</option>
        </select>
      </div>

      <div className="DAT_Setting-Slider-Row5">
        <input
          className="DAT_Setting-Slider-Row4-Item1"
          placeholder={"Thumb Border: " + slider.thumb.border}
          ref={thumbborder}
        ></input>
        <span>Màu nút: </span>
        <input type="color" ref={thumbcolor}></input>
        <input
          placeholder={"Value Border: " + slider.track.border}
          ref={trackborder}
        ></input>
        <span>Màu giá trị: </span>
        <input type="color" ref={trackcolor}></input>
        <span>Màu nền: </span>
        <input type="color" ref={railcolor}></input>
        <button onClick={(e) => handleColor(e)}>Chọn</button>
      </div>

      <div className="DAT_Setting-Slider-Row6">
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

      <div className="DAT_Setting-Slider-Row7">
        <input placeholder="Nhập thanh ghi read" />
        <button>Chọn</button>
      </div>

      <div className="DAT_Setting-Slider-Row8">
        <input placeholder="0"></input>
        <button>Xác nhận</button>
      </div>
    </div>
  );
}
