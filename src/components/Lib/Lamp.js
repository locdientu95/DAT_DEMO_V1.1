import React, { useEffect } from "react";
import "./Setting.scss";

export default function Lamp(props) {
  useEffect(() => {
    if (props.setting.data[0] === undefined) {
      console.log("err");
    } else {
      console.log(props.setting.data[props.setting.value]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {props.setting.data[props.setting.value] !== undefined ? (
        <div
          className="DAT_Lamp"
          style={{
            backgroundColor: props.setting.data[props.setting.value].bgcolor,
            color: props.setting.data[props.setting.value].color,
            width: props.setting.width + "px",
            height: props.setting.height + "px",
            fontSize: props.setting.fontsize + "px",
            border:
              props.setting.border + "px solid " + props.setting.bordercolor,
            borderRadius: props.setting.borderradius + "px",
            justifyContent: props.setting.posi,
          }}
        >
          {props.setting.data[props.setting.value].text}
        </div>
      ) : (
        <div
          className="DAT_Lamp"
          style={{
            backgroundColor: "white",
            color: "black",
            width: "100px",
            height: "30px",
            fontSize: "20px",
            border: "2px solid black",
            borderRadius: "10px",
          }}
        >
          ERR
        </div>
      )}
    </>
  );
}
