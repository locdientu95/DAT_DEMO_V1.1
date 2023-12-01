import React from "react";
import "./ExportReport.scss";
import { Bar } from "react-chartjs-2";

export default function History() {
  const config = {
    type: "bar",
    plugins: {
      zoom: {
        limits: {
          y: { min: 0, max: 100 },
          y2: { min: -5, max: 5 },
        },
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: "xy",
        },
      },
    },
  };

  const data = {
    labels: [
      "1/10/2023",
      "2/10/2023",
      "3/10/2023",
      "4/10/2023",
      "5/10/2023",
      "6/10/2023",
      "7/10/2023",
      "8/10/2023",
      "9/10/2023",
      "10/10/2023",
      "11/10/2023",
      "12/10/2023",
      "13/10/2023",
      "14/10/2023",
      "15/10/2023",
      "16/10/2023",
      "17/10/2023",
      "18/10/2023",
      "19/10/2023",
      "20/10/2023",
      "21/10/2023",
      "22/10/2023",
      "23/10/2023",
      "24/10/2023",
      "25/10/2023",
      "26/10/2023",
      "27/10/2023",
      "28/10/2023",
      "29/10/2023",
      "30/10/2023",
      "31/10/2023",
    ],
    datasets: [
      {
        label: "First dataset",
        data: [
          33, 53, 85, 41, 44, 65, 33, 53, 85, 41, 44, 65, 33, 53, 85, 41, 44,
          65, 33, 53, 85, 41, 44, 65, 33, 53, 85, 41, 44, 65, 65, 33, 53, 85,
          41, 44, 65, 53, 85, 41, 44, 65, 33, 53, 85, 10, 69,
        ],
      },
    ],
  };

  return (
    <div className="DAT_History">
      <Bar className="DAT_History-Barchart" data={data} options={config} />
    </div>
  );
}
