import React from "react";
import "./Setting.scss";

export default function Lamp(props) {
  return (
    <div
      className="DAT_Lamp"
      style={{
        backgroundColor: props.setting.data[props.setting.value].bgcolor,
        color: props.setting.data[props.setting.value].color,
        width: props.setting.width + "px",
        height: props.setting.height + "px",
        fontSize: props.setting.fontsize + "px",
        border: props.setting.border + "px solid " + props.setting.bordercolor,
        borderRadius: props.setting.borderradius + "px",
      }}
    >
      {props.setting.data[props.setting.value].text}
    </div>
  );
}
