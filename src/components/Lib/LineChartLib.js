import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

export default function LineChartLib(props) {
  return (
    <div>
      <div>
        <Line data={props.setting} />
      </div>
    </div>
  );
}
