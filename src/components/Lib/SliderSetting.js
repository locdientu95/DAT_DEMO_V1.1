import React, { useContext, useRef } from "react";
import "./Setting.scss";
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

export default function SliderSetting() {
  const { slider, envDispatch } = useContext(EnvContext);

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

  const H_V = ["horizontal", "vertical"];

  const min = useRef();
  const handleMin = (e) => {
    if (min.current.value !== "") {
      slider.min = min.current.value;
    }

    axios
      .put(
        "http://172.16.0.204:3000/slider/min",
        { min: slider.min },
        { credential: true }
      )
      .then((res) => {
        envDispatch({
          type: "SET_SLIDER",
          payload: slider,
        });
      });

    min.current.value = "";
  };

  const max = useRef();
  const handleMax = (e) => {
    if (max.current.value !== "") {
      slider.max = max.current.value;
    }

    axios
      .put(
        "http://172.16.0.204:3000/slider/max",
        { max: slider.max },
        { credential: true }
      )
      .then((res) => {
        envDispatch({
          type: "SET_SLIDER",
          payload: slider,
        });
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

    axios
      .put(
        "http://172.16.0.204:3000/slider/custom",
        {
          width: slider.width,
          height: slider.height,
          scale: slider.scale,
        },
        { credential: true }
      )
      .then((res) => {
        console.log(res.data);
        envDispatch({
          type: "SET_SLIDER",
          payload: slider,
        });
      });

    width.current.value = "";
    height.current.value = "";
    scale.current.value = "";
  };

  const handleOri = (e) => {
    // console.log("1", e.currentTarget.value);
    // if (e.currentTarget.value === "horizontal") {
    //   axios
    //     .put(
    //       "http://172.16.0.204:3000/slider/ori",
    //       { ori: e.currentTarget.value },
    //       { credential: true }
    //     )
    //     .then((res) => {
    //       envDispatch({
    //         type: "SET_SLIDER",
    //         payload: {
    //           ...slider,
    //           ori: e.currentTarget.value,
    //         },
    //       });
    //     });
    //   // envDispatch({
    //   //   type: "SET_SLIDER",
    //   //   payload: {
    //   //     ...slider,
    //   //     ori: e.currentTarget.value,
    //   //   },
    //   // });
    //   console.log("2", e.currentTarget.value);
    // } else {
    //   // envDispatch({
    //   //   type: "SET_SLIDER",
    //   //   payload: {
    //   //     ...slider,
    //   //     ori: e.currentTarget.value,
    //   //   },
    //   // });
    //   axios
    //     .put(
    //       "http://172.16.0.204:3000/slider/ori",
    //       { ori: e.currentTarget.value },
    //       { credential: true }
    //     )
    //     .then((res) => {
    //       envDispatch({
    //         type: "SET_SLIDER",
    //         payload: {
    //           ...slider,
    //           ori: e.currentTarget.value,
    //         },
    //       });
    //     });
    // }
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
      <div className="DAT_Setting-Slider-Row">
        {InputFist("", "Width: " + slider.width, width)}
        {Input("", "Height: " + slider.height, height)}
        {Input("", "Scale: " + slider.scale, scale)}
        {Button(handleCustom, "Chọn")}
      </div>

      <div className="DAT_Setting-Slider-Row1">
        <input
          className="DAT_Setting-Slider-Row1-Item1"
          placeholder={"Min: " + slider.min}
          ref={min}
        />
        <input
          placeholder="Nhập thanh ghi"
          className="DAT_Setting-Slider-Row1-Item2"
        />
        {Button(handleMin, "Chọn")}
      </div>

      <div className="DAT_Setting-Slider-Row1">
        <input
          className="DAT_Setting-Slider-Row1-Item1"
          placeholder={"Max: " + slider.max}
          ref={max}
        />
        <input
          placeholder="Nhập thanh ghi"
          className="DAT_Setting-Slider-Row1-Item2"
        />
        {Button(handleMax, "Chọn")}
      </div>

      <div className="DAT_Setting-Slider-Row">
        {BoxOnchange(H_V, handleOri)}
      </div>

      <div className="DAT_Setting-Slider-Row">
        {InputFist("", "Thumb Border: " + slider.thumb.border, thumbborder)}
        {Span("Màu nút: ")}
        {Input("color", "", thumbcolor)}
        {Input("", "Value Border: " + slider.track.border, trackborder)}
        {Span("Màu giá trị: ")}
        {Input("color", "", trackcolor)}
        {Span("Màu nền: ")}
        {Input("color", "", railcolor)}
        {Button(handleColor, "Chọn")}
      </div>

      <div className="DAT_Setting-Slider-Row">{Box(base)}</div>

      <div className="DAT_Setting-Slider-Row">
        {InputFist("text", "Nhập thanh ghi read")}
        <button>Chọn</button>
      </div>

      <div className="DAT_Setting-Slider-Last">
        <input placeholder="0" />
        <button>Xác nhận</button>
      </div>
    </div>
  );
}
