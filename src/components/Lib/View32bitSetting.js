import React, { useState } from "react";
import { useContext } from "react";
import { useRef } from "react";
import { EnvContext } from "../Context/EnvContext";

export default function View32bitSetting() {
  const { view32bit, envDispatch } = useContext(EnvContext);
  const size = useRef();
  const [textcolor, setTextcolor] = useState(view32bit.color);
  const [bgcolor, setBgcolor] = useState(view32bit.backgroundColor);
  const [bordercolor, setBordercolor] = useState(view32bit.borderColor);
  const w = useRef();
  const h = useRef();
  const rad = useRef();
  const word1 = useRef(0);
  const word2 = useRef(0);

  const saveWord1 = (e) => {
    if ( parseInt(word1.current.value) <= 65535 && parseInt(word1.current.value) >= 0) {
      view32bit.val1 = parseInt(word1.current.value);
    } else if (word1.current.value === "") {
        alert("Nhập số vô thằng")
    }
    else {
        alert("Giá trị phải lớn hơn 0 và nhỏ hơn 65535")
    }
    envDispatch({ type: "SET_VIEW32BIT", payload: view32bit });
  };

  const saveWord2 = (e) => {
    if ( parseInt(word2.current.value) <= 65535 && parseInt(word2.current.value) >= 0) {
        view32bit.val2 = parseInt(word2.current.value);
      } else if (word2.current.value === "") {
          alert("Nhập số vô thằng")
      }
      else {
          alert("Giá trị phải lớn hơn 0 và nhỏ hơn 65535")
      }
      envDispatch({ type: "SET_VIEW32BIT", payload: view32bit });
  };
  const handleChangeAlign = (e) => {
    view32bit.align = e.currentTarget.value;
    console.log(view32bit.align);
    envDispatch({ type: "SET_VIEW32BIT", payload: view32bit });
  };

  const handleChangeView = (e) => {
    view32bit.display = e.currentTarget.value;
    console.log(view32bit.display);
    envDispatch({ type: "SET_VIEW32BIT", payload: view32bit });
  };

  const saveChange1 = (e) => {
    if (size.current.value !== "") {
      view32bit.fontSize = size.current.value;
    } else {
      alert("Không được để trống");
    }
    envDispatch({ type: "SET_VIEW32BIT", payload: view32bit });
  };

  const saveChange2 = (e) => {
    view32bit.color = textcolor;
    console.log(view32bit.color);
    envDispatch({ type: "SET_VIEW32BIT", payload: view32bit });
  };

  const saveChange3 = (e) => {
    if (w.current.value !== "") {
      view32bit.width = w.current.value;
    } else {
      alert("Không được để trống");
    }
    envDispatch({ type: "SET_VIEW32BIT", payload: view32bit });
  };

  const saveChange4 = (e) => {
    if (h.current.value !== "") {
      view32bit.height = h.current.value;
    } else {
      alert("Không được để trống");
    }
    envDispatch({ type: "SET_VIEW32BIT", payload: view32bit });
  };

  const saveChange5 = (e) => {
    if (rad.current.value !== "") {
      view32bit.borderRadius = rad.current.value;
    } else {
      alert("Không được để trống");
    }
    envDispatch({ type: "SET_VIEW32BIT", payload: view32bit });
  };

  const saveChange6 = (e) => {
    view32bit.backgroundColor = bgcolor;
    envDispatch({ type: "SET_VIEW32BIT", payload: view32bit });
  };

  const saveChange7 = (e) => {
    view32bit.borderColor = bordercolor;
    envDispatch({ type: "SET_VIEW32BIT", payload: view32bit });
  };
  return (
    <div>
      <div style={{ display: "flex", marginBottom: "10px" }}>
        <input
          placeholder={"Text size: " + view32bit.fontSize}
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
        <input placeholder={"Width: " + view32bit.width} ref={w}></input>
        <button onClick={(e) => saveChange3(e)}>Chọn</button>
      </div>
      <div style={{ display: "flex", marginBottom: "10px" }}>
        <input placeholder={"Height: " + view32bit.height} ref={h}></input>
        <button onClick={(e) => saveChange4(e)}>Chọn</button>
      </div>
      <div style={{ display: "flex", marginBottom: "10px" }}>
        <input
          placeholder={"Radius: " + view32bit.borderRadius}
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
          <option value="Int">32-bit Signed Int</option>
          <option value="Float">32-bit Floating Point</option>
        </select>
      </div>
      {/* WORD1  */}
      <div style={{ display: "flex", marginBottom: "10px" }}>
        <input placeholder={"Read register"}></input>
        <button>Chọn</button>
      </div>
      <div style={{ display: "flex", marginBottom: "10px" }}>
        <input type="number" placeholder={"Word1: "} ref={word1} min={0} max={65535}></input>
        <button onClick={(e) => saveWord1(e)}>Chọn</button>
      </div>
      {/* WORD2  */}
      <div style={{ display: "flex", marginBottom: "10px" }}>
        <input placeholder={"Read register"}></input>
        <button>Chọn</button>
      </div>
      <div style={{ display: "flex", marginBottom: "10px" }}>
        <input placeholder={"Word2: "} ref={word2}></input>
        <button onClick={(e) => saveWord2(e)}>Chọn</button>
      </div>
    </div>
  );
}
