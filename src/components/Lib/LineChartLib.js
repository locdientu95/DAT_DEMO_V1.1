import React, { useRef } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import zoomPlugin from "chartjs-plugin-zoom";

Chart.register(zoomPlugin)
export default function LineChartLib(props) {
  const config = {
    type: 'line',
    
      plugins: {
        zoom: {
          limits: {
            y: {min: 0, max: 100},
            y2: {min: -5, max: 5}
          },
          zoom: {
            wheel: {
              enabled: true,
            },
            pinch: {
              enabled: true
            },
            mode: 'xy',
          }
        }
      }
    
  }
  const LineRef = useRef();
  const handleResetZoom = () => {
    if (LineRef && LineRef.current) {
      LineRef.current.resetZoom();
    }
  };
  const data = {
    labels: ["Huu", "Feb", "Mar", "Apr", "May", "Jun","a","Jan", "Feb", "Mar", "Apr", "May", "Jun","a","Jan", "Feb", "Mar", "Apr", "May", "Jun","Jan", "Feb", "Mar", "Apr", "May", "Jun","a","Jan", "Feb", "Mar", "Apr", "May", "Jun","a","Jan", "Feb", "Mar", "Apr", "May", "Jun","Jan", "Feb", "Mar", "Apr", "May", "Jun","a","Jan", "Feb", "Mar", "Apr", "May", "Jun","a","Jan", "Feb", "Mar", "Apr", "May", "Jun","Jan", "Feb", "Mar", "Apr", "May", "Jun","a","Jan", "Feb", "Mar", "Apr", "May", "Jun","a","Jan", "Feb", "Mar", "Apr", "May", "Loc"],
    datasets: [
      {
        label: "First dataset",
        data: [1, 53, 85, 41, 44, 65,33, 53, 85, 41, 44, 65,33, 53, 85, 41, 44, 65, 33, 53,33, 53, 85, 41, 44, 65,33, 53, 85, 41, 44, 65,33, 53, 85, 41, 44, 65, 33, 53,33, 53, 85, 41, 44, 65,33, 53, 85, 41, 44, 65,33, 53, 85, 41, 44, 65, 33, 53,33, 53, 85, 41, 44, 65,33, 53, 85, 41, 44, 65,33, 53, 85, 41, 44, 65, 33, 99],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "#4BC0C0",
      },
    ]
  }

  return (
    <div>
      <div>
        <Line data={data} options={config} ref={LineRef} />
      </div>
      <button onClick={handleResetZoom}>Reset</button>
    </div>
  );
}
