import React from "react";
import "./Setting.scss";

export default function Lamp(props) {
  return (
    <div
      className="DAT_Lamp"
      style={{
        color: props.setting.data[props.setting.value].color,
        fontSize: props.setting.fontsize + "px",
        backgroundColor: props.setting.data[props.setting.value].bgcolor,
      }}
    >
      {props.setting.data[props.setting.value].text}
    </div>
  );
}
