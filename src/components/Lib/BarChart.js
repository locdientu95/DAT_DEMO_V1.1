import React from "react";
import "./Setting.scss";

//import { Bar } from "react-chartjs-2";


export default function BarChart(props) {
  return (
    <div className="DAT_Bar">
      <div
        className="DAT_Bar-Tank"
        style={{
          width: String(props.setting.w),
          height: String(props.setting.h),
          backgroundColor: String(props.setting.bgcolor),
        }}
      >
        <div className="DAT_Bar-Tank-Max">{props.setting.max}</div>
        <div
          className="DAT_Bar-Tank-Value"
          style={{
            height:
              parseFloat(props.setting.realdata) >= 100
                ? "100%"
                : (((100 - 0) /
                      (parseFloat(props.setting.max) -
                        parseFloat(props.setting.min))) *
                    (parseFloat(props.setting.realdata) -
                      parseFloat(props.setting.min))
                  ).toFixed(2) + "%",
            backgroundColor: String(props.setting.realdatacolor),
          }}
        >
          <p>{props.setting.realdata}</p>
        </div>
        <div className="DAT_Bar-Tank-Min">{props.setting.min}</div>
      </div>
      <div className="DAT_Bar-Ruler"></div>
    </div>
  );
}
