import React, { useContext, useEffect, useRef, useState } from "react";
import { EnvContext } from "../Context/EnvContext";
import "./Setting.scss";
import {
  Box,
  BoxOnchange,
  Button,
  Input,
  InputFist,
  Span,
} from "./FunctionElement";
import axios from "axios";

export default function ButtonSetting() {
  // BUTTON VARIABLES
  const { button, envDispatch } = useContext(EnvContext);
  const [bgison, setBgison] = useState(button.bgon);
  const textison = useRef("ON");
  const fsizeon = useRef(20);
  const [textColorOn, setTextColorOn] = useState("#000000");
  const [bgisoff, setBgisoff] = useState(button.bgoff);
  const textisoff = useRef("OFF");
  const fsizeoff = useRef(20);
  const [textColorOff, setTextColorOff] = useState("#000000");
  const wid = useRef(button.w);
  const hei = useRef(button.h);
  const btnradius = useRef(button.radius);

  const change = ["Inching", "Invert"];

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

  useEffect(() => {
    console.log(textisoff.current.value);
  },[])

  //BUTTON FUNCTION
  const handleSaveChangeOn = (e) => {
    if (textison.current.value !== "") {
      button.texton = textison.current.value;
    }

    if (fsizeon.current.value !== "") {
      button.sizeon = fsizeon.current.value + "px";
    }

    axios
      .put(
        process.env.REACT_APP_API_URL + "/button/line2",
        {
          backgroundon: bgison,
          texton: textison.current.value,
          fontsizeon: fsizeon.current.value,
          textcoloron: textColorOn,
        },
        { credential: true }
      )
      .then((res) => {
        envDispatch({
          type: "SET_BTN",
          payload: button,
        });
      });

    envDispatch({
      type: "SET_BTN",
      payload: button,
    });

    envDispatch({
      type: "SET_BTN",
      payload: {
        ...button,
        bgon: bgison,
        txtcoloron: textColorOn,
      },
    });

    textison.current.value = "";
    fsizeon.current.value = "";
  };

  const handleSaveChangeOff = (e) => {
    // if (textisoff.current.value !== "") {
    //   button.textoff = textisoff.current.value;
    //   envDispatch({
    //     type: "SET_BTN",
    //     payload: button,
    //   });
    // }

    // if (fsizeoff.current.value !== "") {
    //   button.sizeoff = fsizeoff.current.value + "px";
    //   envDispatch({
    //     type: "SET_BTN",
    //     payload: button,
    //   });
    // }

    // envDispatch({
    //   type: "SET_BTN",
    //   payload: {
    //     ...button,
    //     bgoff: bgisoff,
    //     txtcoloroff: textColorOff,
    //   },
    // });

    textisoff.current.value = "";
    fsizeoff.current.value = "";

    axios
      .put(
        process.env.REACT_APP_API_URL + "/button/line3",
        {
          backgroundoff: bgisoff,
          textoff: textisoff.current.value,
          fontsizeoff: fsizeoff.current.value,
          textcoloroff: textColorOff,
        },
        { credential: true }
      )
      .then((res) => {
        envDispatch({
          type: "SET_BTN",
          payload: button,
        });
      });
  };

  const handleSaveChangeSize = (e) => {
    console.log(btnradius.current.value);
    if (wid.current.value !== "") {
      button.w = wid.current.value + "px";
    }

    if (hei.current.value !== "") {
      button.h = hei.current.value + "px";
    }

    if (btnradius.current.value !== "") {
      button.radius = btnradius.current.value + "px";
    }

    axios
      .put(
        process.env.REACT_APP_API_URL + "/button/line1",
        {
          width: wid.current.value,
          height: hei.current.value,
          borderradius: btnradius.current.value,
        },
        { credential: true }
      )
      .then((res) => {
        envDispatch({
          type: "SET_BTN",
          payload: button,
        });
      });

    envDispatch({
      type: "SET_BTN",
      payload: button,
    });

    wid.current.value = "";
    hei.current.value = "";
    btnradius.current.value = "";
  };

  const handleChangebutton = (e) => {
    var value = e.currentTarget.value;
    button.btntype = value;
    axios
      .put(
        process.env.REACT_APP_API_URL + "/button/line4",
        { type: value },
        { credential: true }
      )
      .then((res) => {
        envDispatch({
          type: "SET_BTN",
          payload: button,
        });
      });
    envDispatch({ type: "SET_BTN", payload: button });
  };

  return (
    <div className="DAT_Setting-Button">
      <div className="DAT_Setting-Button-Row">
        {InputFist("", "Width: " + button.w, wid)}
        {Input("", "Height: " + button.h, hei)}
        {Input("", "Border Radius: " + button.radius, btnradius)}
        {Button(handleSaveChangeSize, "Chọn")}
      </div>

      <div className="DAT_Setting-Button-Row">
        <input
          className="DAT_Setting-Button-Row-Item1"
          placeholder="ON:7"
        ></input>
        {Span("Màu nền: ")}
        <input
          className="DAT_Setting-Button-Row1-Buttoncolor"
          type="color"
          id="bgcolorOn"
          name="favcolor"
          value={bgison}
          onChange={(e) => setBgison(e.currentTarget.value)}
          // value={bgison}
        />
        {Input("text", "Text: " + button.texton, textison)}
        {Input("number", "Font Size: " + button.sizeon, fsizeon)}
        {Span("Màu chữ: ")}
        <input
          className="DAT_Setting-Button-Row1-TextColor"
          type="color"
          id="textcolorOn"
          name="favcolor"
          value={textColorOn}
          onChange={(e) => setTextColorOn(e.currentTarget.value)}
          // value={bgison}
        />
        {Button(handleSaveChangeOn, "Chọn")}
      </div>

      <div className="DAT_Setting-Button-Row">
        <input
          className="DAT_Setting-Button-Row-Item1"
          placeholder="OFF:8"
        ></input>
        {Span("Màu nền: ")}
        <input
          className="DAT_Setting-Button-Row2-Buttoncolor"
          type="color"
          id="bgcolorOff"
          name="favcolor"
          // ref={bgisoff}
          value={bgisoff}
          onChange={(e) => setBgisoff(e.currentTarget.value)}
        ></input>
        {Input("text", "Text: " + button.textoff, textisoff)}
        {Input("number", "Font Size: " + button.sizeoff, fsizeoff)}
        {Span("Màu chữ: ")}
        <input
          className="DAT_Setting-Button-Row1-TextColor"
          type="color"
          id="textcolorOn"
          name="favcolor"
          value={textColorOff}
          onChange={(e) => setTextColorOff(e.currentTarget.value)}
        />
        {Button(handleSaveChangeOff, "Chọn")}
      </div>

      <div className="DAT_Setting-Button-Row">
        {BoxOnchange(change, handleChangebutton)}
      </div>

      <div className="DAT_Setting-Button-Row">{Box(base)}</div>

      <div className="DAT_Setting-Button-Row">
        {InputFist("text", "Nhập thanh ghi read")}
        <button>Chọn</button>
      </div>

      <div className="DAT_Setting-Button-Last">
        <input placeholder="0"></input>
        <button>Xác nhận</button>
      </div>
    </div>
  );
}
