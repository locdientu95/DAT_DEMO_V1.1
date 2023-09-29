import React, { useEffect, useState } from "react";
import "./Setting.scss";
import ReactSpeedometer from "react-d3-speedometer";

export default function Gauge(props) {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    console.log(arr);

    if (arr.length > 0) {
      arr.shift();
      setArr(arr);
    } else {
      setArr([...arr, props.setting]);
    }
  }, [props, arr]);

  return (
    <div className="DAT_Gauge_Content">
      {arr.map((data, index) => {
        return (
          <div className="DAT_Gauge_Content_Main" key={index}>
            <div
              className="DAT_Gauge_Content_Main_Data"
              style={{ width: data.width, height: data.height }}
            >
              <ReactSpeedometer
                value={parseInt(data.cal)}
                currentValueText={String(parseInt(data.cal) + " " + data.unit)}
                valueTextFontSize={String(parseInt(data.valuesize + "px"))}
                textColor={data.valuecolor}
                minValue={parseInt(data.min)}
                maxValue={parseInt(data.max)}
                width={parseInt(data.width)}
                height={parseInt(data.height)}
                startColor={data.startcolor}
                endColor={data.endcolor}
                segments={parseInt(data.segment)}
                needleColor={data.needlecolor}
                needleTransition="easeQuadInOut"
                needleTransitionDuration={1000}
              />
            </div>
            <label
              style={{
                fontSize: props.setting.labelsize + "px",
                color: props.setting.labelcolor,
              }}
            >
              {props.setting.label}
            </label>
          </div>
        );
      })}
    </div>
  );
}
