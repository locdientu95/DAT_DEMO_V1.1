import React, { useState } from "react";
import Switch from "react-switch";
import "./Setting.scss";

export default function SwitchToggle() {
  const [check, setCheck] = useState("off");
  const handleChange = (e) => {
    // console.log(e.currentTarget.id);
    setCheck(e.currentTarget.id);
  };

  return (
    <div className="DAT_Switch">
      <form className="DAT_Switch-Toggle">
        <label
          className="DAT_Switch-Toggle-Labelchoice1"
          id="on"
          style={{
            backgroundColor: check === "on" ? "#04da97" : "white",
            transition: "0.2s ease-in",
          }}
          onClick={(e) => handleChange(e)}
        >
          ON
        </label>
        <label
          className="DAT_Switch-Toggle-Labelchoice2"
          id="off"
          style={{ backgroundColor: check === "off" ? "#04da97" : "white" }}
          onClick={(e) => handleChange(e)}
        >
          OFF
        </label>
      </form>
    </div>
  );
}
