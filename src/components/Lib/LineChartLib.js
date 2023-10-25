import React, { useEffect, useRef, useState } from "react";
import Chart, { scales } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import zoomPlugin from "chartjs-plugin-zoom";

Chart.register(zoomPlugin)
export default function LineChartLib(props) {
  
  const [datetime, setDateTime] = useState()
  const [newLabel, setNewLabel] = useState([])
  const [lastData, setLastData] = useState([])
  const config = {
    type: 'line',

    
      plugins: {
        
        zoom: {
          limits: {
            y: {min: 0, max: 100},
            y2: {min: -5, max: 5},
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
      },
      
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
  const newData ={ 
    labels:newLabel,
    datasets:[
      {
        label: "Test dataset",
        data:lastData,
        fill:true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "#4BC0C0",
      }
    ],
  }

  useEffect(() => { 
    const interval = setInterval(() => {
     
      const date = new Date()
      const today = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()
      setDateTime(today)
      setNewLabel(pre=>[...pre,today])
      setLastData(pre=>[...pre,10])
    }, 1000);
    return () => clearInterval(interval);
  }, []);


  useEffect(()=>{
    console.log(newLabel,lastData)
  },[newLabel,lastData])
 
  return (
    <div>
      <div>
        <Line data={newData} options={config} ref={LineRef} />
      </div>
      <button onClick={handleResetZoom}>Reset</button>
    </div>
  );
}
