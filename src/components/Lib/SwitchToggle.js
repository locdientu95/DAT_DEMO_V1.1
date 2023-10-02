import React, { useState } from "react";
import Switch from "react-switch";
import "./Setting.scss";

export default function SwitchToggle(props) {
  const [check, setCheck] = useState("off");
  const handleChange = (e) => {
    if (check === "off") {
      setCheck("on");
    } else {
      setCheck("off");
    }
    console.log(e.currentTarget.id);
    console.log(check);
  };

  return (
    <div className="DAT_Switch">
      <form
        className="DAT_Switch-Toggle"
        id={check}
        onClick={(e) => handleChange(e)}
        style={{
          width: props.setting.w + "px",
          height: props.setting.h + "px",
          borderRadius: props.setting.borderradius + "px",
          overflow: "hidden",
          backgroundColor: check === "on" ? props.setting.bgon :  props.setting.bgoff ,
          transition: "0.2s ease-in-out",
          border:
            "solid " + props.setting.border + "px " + props.setting.bordercolor,
          borderColor: props.setting.bordercolor,
        }}
      >
        <div
          className="DAT_Switch-Toggle-Icon"
          style={{
            width: parseFloat(props.setting.w) / 2 + "px",
            height: props.setting.h + "px",
            backgroundColor: props.setting.bordercolor,
            borderradius: props.setting.borderradiusicon + "px",
            transform:
              check === "off" ? "translateX(0px)" : "translateX( 100% )",
            transition: "0.5s",
          }}
        ></div>
        <label
          className="DAT_Switch-Toggle-Labelchoice1"
          style={{ color: props.setting.txtcoloron , fontSize: props.setting.textsize + "px"}}
        >
          {check === "off" ? "" : props.setting.texton}
        </label>
        <label
          className="DAT_Switch-Toggle-Labelchoice2"
          style={{ color: props.setting.txtcoloroff , fontSize: props.setting.textsize + "px"}}
        >
          {check === "on" ? "" : props.setting.textoff}
        </label>
      </form>
      {/* transform: translateY(-50%);
        transition: 0.9s; */}
    </div>
  );
}
