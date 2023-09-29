import React from "react";
import "./Setting.scss";
import { IgrLinearGaugeModule } from "igniteui-react-gauges";
import { IgrLinearGauge } from "igniteui-react-gauges";
import { IgrLinearGraphRange } from "igniteui-react-gauges";
IgrLinearGaugeModule.register();

//import { Bar } from "react-chartjs-2";

export default function BarChart(props) {
  return (
    <div
      style={{ display: "flex", justifyContent: "center"   }}
    >
      <IgrLinearGauge
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

    //Style theo CSS (Không có vạch kẻ cụ thể)
    // <div className="DAT_Bar">
    //   <div
    //     className="DAT_Bar-Tank"
    //     style={{
    //       width: String(props.setting.w),
    //       height: String(props.setting.h),
    //       backgroundColor: String(props.setting.bgcolor),
    //     }}
    //   >
    //     <div className="DAT_Bar-Tank-Max">{props.setting.max}</div>
    //     <div
    //       className="DAT_Bar-Tank-Value"
    //       style={{
    //         height:
    //           parseFloat(props.setting.realdata) >= 100
    //             ? "100%"
    //             : (((100 - 0) /
    //                   (parseFloat(props.setting.max) -
    //                     parseFloat(props.setting.min))) *
    //                 (parseFloat(props.setting.realdata) -
    //                   parseFloat(props.setting.min))
    //               ).toFixed(2) + "%",
    //         backgroundColor: String(props.setting.realdatacolor),
    //       }}
    //     >
    //       <p>{props.setting.realdata}</p>
    //     </div>
    //     <div className="DAT_Bar-Tank-Min">{props.setting.min}</div>
    //   </div>
    //   <div className="DAT_Bar-Ruler"></div>
    // </div>
  );
}
