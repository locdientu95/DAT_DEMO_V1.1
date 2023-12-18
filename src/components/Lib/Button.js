import React, { useState } from "react";
import "./Setting.scss";
import { effect } from "@preact/signals-react";
import axios from "axios";
import { useEffect } from "react";
import { useContext } from "react";
import { EnvContext } from "../Context/EnvContext";

export default function Button(props) {
  const [state, setState] = useState(false);
  const [press, setPress] = useState(false);
  const {button, envDispatch} = useContext(EnvContext)

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL + "/button").then((res) => {
      envDispatch({
        type: "SET_BTN",
        payload: res.data.data[0],
      })
    })
  })
  const handleMouseUp = () => {
    setPress(false);
  };
  const handleMouseDown = () => {
    setPress(true);
  };
  const handleInvert = (e) => {
    if (state) {
      setState(false);
    } else {
      setState(true);
    }

    // console.log(props.setting);
  };

  return (
    <div className="DAT_Button">
      {/*InvertButton */}
      {props.setting.btntype === "Invert" ? (
        <div
          className="DAT_Button-InvertButton"
          style={{
            borderRadius: props.setting.radius,
            backgroundColor: state
              ? String(props.setting.bgon)
              : String(props.setting.bgoff),
            fontSize: state
              ? String(props.setting.sizeon)
              : String(props.setting.sizeoff),
            width: String(props.setting.w),
            height: String(props.setting.h),
            Color: state
              ? String(props.setting.txtcoloron)
              : String(props.setting.txtcoloroff),
          }}
          onClick={(e) => {
            handleInvert(e);
          }}
        >
          {state ? props.setting.texton : props.setting.textoff}
        </div>
      ) : (
        <div
          className="DAT_Button-InchingButton"
          onMouseUp={handleMouseUp}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseUp}
          style={{
            borderRadius: props.setting.radius,
            backgroundColor:
              press === true
                ? String(props.setting.bgon)
                : String(props.setting.bgoff),
            fontSize:
              press === true
                ? String(props.setting.sizeon)
                : String(props.setting.sizeoff),
            color:
              press === true
                ? String(props.setting.txtcoloron)
                : String(props.setting.txtcoloroff),
            width: String(props.setting.w),
            height: String(props.setting.h),
          }}
        >
          {press ? props.setting.texton : props.setting.textoff}
        </div>
      )}

      {/* InchingButton */}
    </div>
  );
}
