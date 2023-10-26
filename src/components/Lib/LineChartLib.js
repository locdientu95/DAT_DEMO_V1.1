import React, { useRef, useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import zoomPlugin from "chartjs-plugin-zoom";
import { useContext } from "react";
import { EnvContext } from "../Context/EnvContext";

Chart.register(zoomPlugin);
export default function LineChartLib(props) {
  const { linechart, envDispatch } = useContext(EnvContext);
  const [time, setTime] = useState([]);
  const [realdata, setRealdata] = useState([]);
  const data = {
    labels: time,
    datasets: [
      {
        label: "First dataset",
        data: realdata,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "#4BC0C0",
      },
    ],
  };
  useEffect(() => {
    linechart.labels = time;
  linechart.datasets[0].data = realdata
  
    envDispatch({ type: "SET_LINECHART", payload:linechart,
   });
  }, [time, realdata]);

  useEffect(() => {
    const interval = setInterval(() => {
      const today = new Date();
      const date =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      setTime((prev) => [...prev, date]);
      setRealdata((prev) => [...prev, 10]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const config = {
    type: "line",
    maintainAspectRatio: false,
    // scales: {
    //   x: {
    //     title: {
    //       display: true,
    //       text: props.setting.xAxis_r,
    //     },
    //   },
    //   y: {
    //     title: {
    //       display: true,
    //       text: props.setting.yAxis_r,
    //     },
    //   },
    // },

    plugins: {
      zoom: {
        // limits: {
        //   y: { min: 0, max: 200 },
        //   y2: { min: -5, max: 5 },
        // },
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
  const LineRef = useRef();
  const handleResetZoom = () => {
    if (LineRef && LineRef.current) {
      LineRef.current.resetZoom();
    }
  };

  useEffect(() => { 
    const interval = setInterval(() => {
     
      const date = new Date()
      const today = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()
      
    }, 1000);
    return () => clearInterval(interval);
  }, []);

 
  return (
    <div>
      <div>
        <Line
          data={props.setting}
          options={config}
          ref={LineRef}
          style={{ width: "500px", height: "500px" }}
        />
      </div>
      <button onClick={handleResetZoom}>Reset</button>
    </div>
  );
}
