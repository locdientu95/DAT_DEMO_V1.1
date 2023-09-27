import React, { useState } from "react";
import "./Setting.scss";

export default function Button(props) {
  const [state, setState] = useState(false);
  const [press, setPress] = useState(false);

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

    console.log(props.setting);
  };

  return (
    <div className="DAT_Button">
      {/*InvertButton */}
      {props.setting.btntype === "Invert" ? (
        <div
          className="DAT_Button-InvertButton"
          style={{
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
