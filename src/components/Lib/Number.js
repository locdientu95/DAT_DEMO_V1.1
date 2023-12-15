import React, { useRef } from "react";
import "./Setting.scss";

export default function Number(props) {
  const input = useRef("");

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      console.log(input.current.value);
    }
  };

  return (
    <div
      className="DAT_Number"
      style={{
        width: props.setting.width + "px",
        height: props.setting.height + "px",
        border:
          "solid " +
          props.setting.border +
          "px" +
          " " +
          props.setting.bordercolor +
          "",
        borderRadius: props.setting.borderradius + "px",
        backgroundColor: props.setting.bgcolor,
      }}
    >
      <input
        className="DAT_Number-Input"
        type="text"
        placeholder="..."
        readOnly={props.setting.type === "Read" ? true : false}
        style={{
          backgroundColor: props.setting.bgcolor,
          fontSize: props.setting.fontsize + "px",
          color: props.setting.textcolor,
          textAlign: props.setting.posi,
        }}
        ref={input}
        defaultValue={input.current.value}
        onKeyDown={handleEnter}
      />
      <div
        className="DAT_Number-Unit"
        style={{
          fontSize: props.setting.fontsize + "px",
          color: props.setting.textcolor,
        }}
      >
        {props.setting.unit}
      </div>
    </div>
  );
}
