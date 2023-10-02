import React, { useState } from "react";
import Switch from "react-switch";
import "./Setting.scss";

export default function SwitchToggle(props) {
  const [check, setCheck] = useState("on");
  const handleChange = (e) => {
    if(check === "off"){
      setCheck("on");
    } else {
      setCheck("off")
    }
    console.log(e.currentTarget.id)
    console.log(check)
  };

  return (
    <div className="DAT_Switch"  id={check} onClick={(e)=>handleChange(e)}>
      <form className="DAT_Switch-Toggle" style={{ width: props.setting.w +"px", height: props.setting.h +"px" , overflow:"hidden"}}>
        <div
          className="DAT_Switch-Toggle-Icon"
          style={{
            width: props.setting.h +"px",
            height: props.setting.h +"px",
            backgroundColor: props.setting.bgoff,
            borderRadius: props.setting.borderradius,
            transform: check === "on" ? "translateX(0px)" :"translateX("+String(parseInt(props.setting.w) - parseInt(props.setting.h))+"px)",
            transition: "0.5s"
          }}
          
          
        >
        </div>
        {}
        <label className="DAT_Switch-Toggle-Labelchoice1">ON</label>
        <label className="DAT_Switch-Toggle-Labelchoice2">OFF</label>
      </form>
      {/* transform: translateY(-50%);
        transition: 0.9s; */}
    </div>
  );
}
