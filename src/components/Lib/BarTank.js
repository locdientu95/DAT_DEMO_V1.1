import React from "react";
import "./Setting.scss";
import { IgrLinearGaugeModule } from "igniteui-react-gauges";
import { IgrLinearGauge } from "igniteui-react-gauges";
import { IgrLinearGraphRange } from "igniteui-react-gauges";
// import { useContext } from "react";
// import { EnvContext } from "../Context/EnvContext";
// import axios from "axios";
// import { useEffect } from "react";
IgrLinearGaugeModule.register();

export default function BarTank(props) {
  // const { bardata, envDispatch } = useContext(EnvContext);

  // useEffect(() => {
  //   axios.get(process.env.REACT_APP_API_URL + "/bar").then((res) => {
  //     envDispatch({ type: "SET_BARDATA", payload: res.data.data[0] });
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <IgrLinearGauge
        style={{ borderRadius: "10px" }}
        height={String(props.setting.h)}
        width={String(props.setting.w)}
        minimumValue={String(props.setting.min)}
        value={String(props.setting.realdata)}
        maximumValue={String(props.setting.max)}
        interval={String(props.setting.scale)}
        rangeBrushes={
          String(props.setting.bgcolor) +
          ", " +
          String(props.setting.realdatacolor)
        }
        // "#màu, #màu"
        // rangeOutlines="#a4bd29, #F86232"
        orientation={String(props.setting.type)}
        // horizontal or vertical
      >
        <IgrLinearGraphRange
          name="range1"
          startValue={String(props.setting.realdata)}
          endValue={String(props.setting.max)}
          // innerStartExtent={0.075}
          // innerEndExtent={0.075}
          // outerStartExtent={0.25}
          // outerEndExtent={0.4}
        />
        <IgrLinearGraphRange
          name="range2"
          startValue={String(props.setting.min)}
          endValue={String(props.setting.realdata)}
          // innerStartExtent={0.075}
          // innerEndExtent={0.075}
          // outerStartExtent={0.4}
          // outerEndExtent={0.55}
        />
      </IgrLinearGauge>
    </div>
  );
}
