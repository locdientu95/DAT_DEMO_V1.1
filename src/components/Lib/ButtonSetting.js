import React, { useContext, useRef, useState } from "react";
import { EnvContext } from "../Context/EnvContext";
import "./Setting.scss";


export default function ButtonSetting() {
    // BUTTON VARIABLES
  const { button, envDispatch } = useContext(EnvContext);
  const [bgison, setBgison] = useState(button.bgon);
  const [bgisoff, setBgisoff] = useState(button.bgoff);
  const [wid, setWid] = useState(button.w);
  const [hei, setHei] = useState(button.h);
  const textison = useRef("ON");
  const textisoff = useRef("OFF");
  const fsizeon = useRef(20);
  const fsizeoff = useRef(20);
  const [textColorOn, setTextColorOn] = useState("#000000");
  const [textColorOff, setTextColorOff] = useState("#000000");

   //BUTTON FUNCTION
   const handleSaveChangeOn = (e) => {
    envDispatch({
      type: "SET_BTN",
      payload: {
        ...button,
        bgon: bgison,
        texton: textison.current.value,
        sizeon: fsizeon.current.value + "px",
        txtcoloron: textColorOn,
      },
    });
  };

  const handleSaveChangeOff = (e) => {
    envDispatch({
      type: "SET_BTN",
      payload: {
        ...button,
        bgoff: bgisoff,
        textoff: textisoff.current.value,
        txtcoloroff: textColorOff,
        sizeoff: fsizeoff.current.value + "px",
      },
    });
  };

  const handleSaveChangeSize = (e) => {
    envDispatch({
      type: "SET_BTN",
      payload: {
        ...button,
        w: wid + "px",
        h: hei + "px",
      },
    });
  };

  const handleChangebutton = (e) => {
    var value = e.currentTarget.value;
    button.btntype = value;
    envDispatch({ type: "SET_BTN", payload: button });
  };
  return (
    <div className="DAT_Setting-Button">
      <div className="DAT_Setting-Button-Row1">
        <input
          className="DAT_Setting-Button-Row1-Statement"
          placeholder="ON:7"
        ></input>
        <input
          className="DAT_Setting-Button-Row1-Buttoncolor"
          type="color"
          id="bgcolorOn"
          name="favcolor"
          value={bgison}
          onChange={(e) => setBgison(e.currentTarget.value)}
          // value={bgison}
        ></input>
        <input
          className="DAT_Setting-Button-Row1-Text"
          placeholder="Text: Bật"
          ref={textison}
        ></input>
        <input
          className="DAT_Setting-Button-Row1-Fontsize"
          type="number"
          defaultValue={20}
          min={6}
          max={100}
          step={2}
          ref={fsizeon}
        ></input>
        <input
          className="DAT_Setting-Button-Row1-TextColor"
          type="color"
          id="textcolorOn"
          name="favcolor"
          value={textColorOn}
          onChange={(e) => setTextColorOn(e.currentTarget.value)}
          // value={bgison}
        ></input>
        <button onClick={(e) => handleSaveChangeOn(e)}>Chọn</button>
      </div>
      <div className="DAT_Setting-Button-Row2">
        <input
          className="DAT_Setting-Button-Row-Statement"
          placeholder="OFF:8"
        ></input>
        <input
          className="DAT_Setting-Button-Row2-Buttoncolor"
          type="color"
          id="bgcolorOff"
          name="favcolor"
          // ref={bgisoff}
          value={bgisoff}
          onChange={(e) => setBgisoff(e.currentTarget.value)}
        ></input>
        <input
          className="DAT_Setting-Button-Row-Text"
          placeholder="Text: Tắt"
          ref={textisoff}
        ></input>
        <input
          className="DAT_Setting-Button-Row-Fontsize"
          type="number"
          defaultValue={20}
          step={2}
          min={6}
          max={100}
          ref={fsizeoff}
        ></input>
        <input
          className="DAT_Setting-Button-Row1-TextColor"
          type="color"
          id="textcolorOn"
          name="favcolor"
          value={textColorOff}
          onChange={(e) => setTextColorOff(e.currentTarget.value)}
        ></input>
        <button onClick={(e) => handleSaveChangeOff(e)}>Chọn</button>
      </div>
      <div className="DAT_Setting-Button-Row3">
        <input
          className="DAT_Setting-Button-Row-Statement"
          placeholder="Width: 161"
          value={wid}
          onChange={(e) => setWid(e.currentTarget.value)}
        ></input>
        <input
          className="DAT_Setting-Button-Row-Buttoncolor"
          placeholder="Height: 83"
          value={hei}
          onChange={(e) => setHei(e.currentTarget.value)}
        ></input>
        <button onClick={(e) => handleSaveChangeSize(e)}>Chọn</button>
      </div>
      <div className="DAT_Setting-Button-Row4">
        <select onChange={(e) => handleChangebutton(e)}>
          <option defaultValue="Inching">Inching</option>
          <option value="Invert">Invert</option>
        </select>
      </div>
      <div className="DAT_Setting-Button-Row4">
        <select>
          <option defaultValue="Inching">Cơ số 10</option>
          <option value="Invert">Cơ số 16</option>
          <option value="Invert">Cơ số 2_0</option>
          <option value="Invert">Cơ số 2_1</option>
          <option value="Invert">Cơ số 2_2</option>
          <option value="Invert">Cơ số 2_3</option>
          <option value="Invert">Cơ số 2_4</option>
          <option value="Invert">Cơ số 2_5</option>
          <option value="Invert">Cơ số 2_6</option>
          <option value="Invert">Cơ số 2_7</option>
          <option value="Invert">Cơ số 2_8</option>
          <option value="Invert">Cơ số 2_9</option>
          <option value="Invert">Cơ số 2_10</option>
          <option value="Invert">Cơ số 2_11</option>
          <option value="Invert">Cơ số 2_12</option>
          <option value="Invert">Cơ số 2_13</option>
          <option value="Invert">Cơ số 2_14</option>
          <option value="Invert">Cơ số 2_15</option>
        </select>
      </div>
      <div className="DAT_Setting-Button-Row5">
        <input placeholder="Nhập thanh ghi"></input>
        <button>Chọn</button>
      </div>
      <div className="DAT_Setting-Button-Row6">
        <input placeholder="0"></input>
        <button>Chọn</button>
      </div>
    </div>
  );
}
