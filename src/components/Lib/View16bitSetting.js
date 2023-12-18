import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useRef } from "react";
import { EnvContext } from "../Context/EnvContext";

export default function View16bitSetting() {
  const { view16bit, envDispatch } = useContext(EnvContext);
  const size = useRef();
  const [textcolor, setTextcolor] = useState(view16bit.color);
  const [bgcolor, setBgcolor] = useState(view16bit.backgroundColor);
  const [bordercolor, setBordercolor] = useState(view16bit.borderColor);
  const w = useRef();
  const h = useRef();
  const rad = useRef();
  const word = useRef(0);

  const saveWord1 = (e) => {
    if (
      parseInt(word.current.value) <= 65535 &&
      parseInt(word.current.value) >= 0
    ) {
      view16bit.val = parseInt(word.current.value);
    } else if (word.current.value === "") {
      alert("Nhập số vô thằng l");
    } else {
      alert("Giá trị phải lớn hơn 0 và nhỏ hơn 65535");
    }
    envDispatch({ type: "SET_VIEW16BIT", payload: view16bit });
  };

  const handleChangeAlign = (e) => {
    view16bit.align = e.currentTarget.value;
    console.log(view16bit.align);
    envDispatch({ type: "SET_VIEW16BIT", payload: view16bit });
  };

  const handleChangeView = (e) => {
    view16bit.display = e.currentTarget.value;
    console.log(view16bit.display);
    envDispatch({ type: "SET_VIEW16BIT", payload: view16bit });
  };

  const saveChange1 = (e) => {
    if (size.current.value !== "") {
      view16bit.fontSize = size.current.value;
    } else {
      alert("Không được để trống");
    }
    envDispatch({ type: "SET_VIEW16BIT", payload: view16bit });
  };

  const saveChange2 = (e) => {
    view16bit.color = textcolor;
    console.log(view16bit.color);
    envDispatch({ type: "SET_VIEW16BIT", payload: view16bit });
  };

  const saveChange3 = (e) => {
    if (w.current.value !== "") {
      view16bit.width = w.current.value;
    } else {
      alert("Không được để trống");
    }
    envDispatch({ type: "SET_VIEW16BIT", payload: view16bit });
  };

  const saveChange4 = (e) => {
    if (h.current.value !== "") {
      view16bit.height = h.current.value;
    } else {
      alert("Không được để trống");
    }
    envDispatch({ type: "SET_VIEW16BIT", payload: view16bit });
  };

  const saveChange5 = (e) => {
    if (rad.current.value !== "") {
      view16bit.borderRadius = rad.current.value;
    } else {
      alert("Không được để trống");
    }
    envDispatch({ type: "SET_VIEW16BIT", payload: view16bit });
  };

  const saveChange6 = (e) => {
    view16bit.backgroundColor = bgcolor;
    envDispatch({ type: "SET_VIEW16BIT", payload: view16bit });
  };

  const saveChange7 = (e) => {
    view16bit.borderColor = bordercolor;
    envDispatch({ type: "SET_VIEW16BIT", payload: view16bit });
  };

  return (
    <div>
      <div style={{ display: "flex", marginBottom: "10px" }}>
        <input
          placeholder={"Text size: " + view16bit.fontSize}
          ref={size}
        ></input>
        <button onClick={(e) => saveChange1(e)}>Chọn</button>
      </div>

      <div style={{ display: "flex", marginBottom: "10px" }}>
        TextColor
        <input
          type="color"
          value={textcolor}
          onChange={(e) => setTextcolor(e.currentTarget.value)}
        ></input>
        <button onClick={(e) => saveChange2(e)}>Chọn</button>
      </div>

      <div style={{ display: "flex", marginBottom: "10px" }}>
        <select onChange={(e) => handleChangeAlign(e)}>
          <option value="Left">Left</option>
          <option value="Center">Center</option>
          <option value="Right">Right</option>
        </select>
      </div>

      <div style={{ display: "flex", marginBottom: "10px" }}>
        <input placeholder={"Width: " + view16bit.width} ref={w}></input>
        <button onClick={(e) => saveChange3(e)}>Chọn</button>
      </div>

      <div style={{ display: "flex", marginBottom: "10px" }}>
        <input placeholder={"Height: " + view16bit.height} ref={h}></input>
        <button onClick={(e) => saveChange4(e)}>Chọn</button>
      </div>

      <div style={{ display: "flex", marginBottom: "10px" }}>
        <input
          placeholder={"Radius: " + view16bit.borderRadius}
          ref={rad}
        ></input>
        <button onClick={(e) => saveChange5(e)}>Chọn</button>
      </div>

      <div style={{ display: "flex", marginBottom: "10px" }}>
        Background Color
        <input
          type="color"
          value={bgcolor}
          onChange={(e) => setBgcolor(e.currentTarget.value)}
        ></input>
        <button onClick={(e) => saveChange6(e)}>Chọn</button>
      </div>

      <div style={{ display: "flex", marginBottom: "10px" }}>
        Border Color
        <input
          type="color"
          value={bordercolor}
          onChange={(e) => setBordercolor(e.currentTarget.value)}
        ></input>
        <button onClick={(e) => saveChange7(e)}>Chọn</button>
      </div>

      <div style={{ display: "flex", marginBottom: "10px" }}>
        <select onChange={(e) => handleChangeView(e)}>
          <option value="Signed">{"Word (Unsigned)"}</option>
          <option value="Unsigned">{"Int (Signed)"}</option>
        </select>
      </div>

      {/* WORD1  */}
      <div style={{ display: "flex", marginBottom: "10px" }}>
        <input placeholder={"Read register"}></input>
        <button>Chọn</button>
      </div>

      <div style={{ display: "flex", marginBottom: "10px" }}>
        <input
          type="number"
          placeholder={"Word: "}
          ref={word}
          min={0}
          max={65535}
        ></input>
        <button onClick={(e) => saveWord1(e)}>Chọn</button>
      </div>
      {/* WORD2  */}
    </div>
  );
}
