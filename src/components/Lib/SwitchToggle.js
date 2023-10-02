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
    <div className="DAT_Switch" >
      <form
        className="DAT_Switch-Toggle"
        id={check} onClick={(e) => handleChange(e)}
        style={{
          width: props.setting.w + "px",
          height: props.setting.h + "px",
          borderRadius: props.setting.borderradius + "px",  
          overflow: "hidden",
          backgroundColor : check === "on"
          ? "rgb(4, 218, 151, 0.2)"
          : "#ffffff",
          transition: "0.2s ease-in-out",
          border: "solid " + props.setting.border + "px " + props.setting.bordercolor,
          borderColor: props.setting.bordercolor,
        }}
      >
        <div
          className="DAT_Switch-Toggle-Icon"
          style={{
            width:  props.setting.h + "px",
            height: props.setting.h + "px",
            backgroundColor: props.setting.bgon,
            borderradius: props.setting.borderradiusicon + "px" , 
            transform:
              check === "off"
                ? "translateX(0px)"
                : "translateX(" +
                  String(
                    parseInt(props.setting.w) - parseInt(props.setting.h)
                  ) +
                  "px)",
            transition: "0.5s", 
          }}
        ></div>
        <label className="DAT_Switch-Toggle-Labelchoice1" style={{color: props.setting.txtcoloron}}>{check==="off"?"": props.setting.texton }</label>
        <label className="DAT_Switch-Toggle-Labelchoice2">{check==="on"? "": props.setting.textoff }</label>
      </form>
      {/* transform: translateY(-50%);
        transition: 0.9s; */}
    </div>
  );
}
