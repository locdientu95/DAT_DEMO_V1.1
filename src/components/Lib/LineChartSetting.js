import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useRef } from "react";
import { EnvContext } from "../Context/EnvContext";

export default function LineChartSetting() {
  const { linechart, envDispatch } = useContext(EnvContext);
  const [datapush, setDatapush] = useState();
  const [display, setDisplay] = useState(false);
  const [inputid, setInputid] = useState();
  const [inputindex, setInputindex] = useState();
  const label = useRef();
  const w = useRef();
  const h = useRef();
  const chartname = useRef();
  const temp = [];
  const xAxis = useRef(linechart.xAxis_r);
  const yAxis = useRef(linechart.yAxis_r);
  const datachange = useRef("");
  const [index, setIndex] = useState();
  const newlabel = useRef("")


  const [cur, setCur] = useState(() => {
    let y = {};
    linechart.datasets.map((data, index) => {
      y[index] = data.data[data.data.length - 1];
    });
    return y;
  });

  useEffect(() => {
    envDispatch({ type: "SET_LINECHART", payload: linechart });
  }, [linechart.datasets]);

  useEffect(() => {
    console.log(linechart.datasets);
  }, [linechart.datasets]);

  useEffect(() => {
    // setCur[]
  }, [cur]);

  const handleClose = (e) => {
    setDisplay(false);
  };

  const handleSaveLabel = (e) => {
    setDisplay(false);
    console.log(datachange.current.value);
    const input = datachange.current.value;
    linechart.datasets[index].label = input;
    envDispatch({ type: "SET_LINECHART", payload: {
      ...linechart,
      datasets: linechart.datasets

 } });
  };

  const handleChangeLable = (e) => {
    setDisplay(true);
    console.log(e.currentTarget.id); //Jan_linechart
    var id = e.currentTarget.id;
    var arr = id.split("_");
    console.log(arr); // (2) ['Jan', 'linechart']
    var newData = linechart.datasets;
    // const index = newData.findIndex((newData)=> newData.label)
  };

  const handleSaveChange1 = (e) => {
    if (w.current.value !== "") {
      linechart.w_r = w.current.value;
    }
    if (h.current.value !== "") {
      linechart.h_r = h.current.value;
    }
    if (chartname.current.value !== "") {
      linechart.chartname_r = chartname.current.value;
    }
    envDispatch({ type: "SET_LINECHART", payload: {
         ...linechart,
         datasets: linechart.datasets

    } });
  };

  const handlePushData = (e) => {
    let d = document.getElementById("0_linechart");
    var y = {};
    Object.entries(cur).map((data) => {
      // console.log(data[0]);
      let d = document.getElementById(data[0] + "_linechart");
      // console.log(d);
      // y[data[0]] = d.value;

      if (d.value !== "" && d.value !== null) {
        y[data[0]] = parseFloat(d.value);
      } else if (d.value === "") {
        y[data[0]] = 0;
      }
      console.log(data[0]);
      linechart.datasets[data[0]].data.push(y[data[0]]);
      envDispatch({ type: "SET_LINECHART", payload: linechart });
      console.log(linechart.datasets);
      setCur(y);
    });
  };

  const handleAddLable = (e) => {
    const input = label.current.value;
    if (input !== "") {
      linechart.labels.push(input);
    } else {
      alert("Label đéo hợp lệ");
    }
    envDispatch({ type: "SET_LINECHART", payload: linechart });
    console.log(linechart.labels);
  };

  const handleDelete = (e) => {
    const temp = e.currentTarget.id.split("_");
    // var newData = linechart.datasets;
    if (linechart.datasets.length > 1) {
      linechart.datasets = linechart.datasets.filter(
        (data) => data.label != temp[0]
      );
    } else {
      alert("Đéo cho xóa mày");
    }
    // console.log(newData)
    envDispatch({ type: "SET_LINECHART", payload: linechart });
  };

  const handleChangeAxisName = (e) => {
    if (xAxis.current.value !== "") {
      linechart.xAxis_r = xAxis.current.value;
    }
    if (yAxis.current.value !== "") {
      linechart.yAxis_r = yAxis.current.value;
    }
    envDispatch({ type: "SET_LINECHART", payload: linechart });
  };

  const handleTakeIndex = (e) => {
    setDisplay(true);
    setIndex(e.currentTarget.id);
  };

  const AddNewData = (e) => {
    const newData = {
      label: newlabel.current.value,
      data:[13],
    }
    linechart.datasets.push(newData)
    console.log(linechart.datasets)
  }

  useEffect(()=>{
    console.log(temp)
  },[])
  return (
    <div className="DAT_Setting-LineChart">
      {display ? (
        <div className="DAT_Setting-LineChart-UpdateBox">
          <form
            className="DAT_Setting-LineChart-UpdateBox-Group"
            onSubmit={(e) => handleSaveLabel(e)}
          >
            <div className="DAT_Setting-LineChart-UpdateBox-Group-Tit">
              <div>Chỉnh Sửa</div>
              <div
                className="DAT_Setting-LineChart-UpdateBox-Group-Tit-Close"
                onClick={(e) => handleClose(e)}
              >
                x
              </div>
            </div>
            <input type="text" required ref={datachange}></input>
            <button onClick={(e) => handleSaveLabel(e)}>Lưu</button>
          </form>
        </div>
      ) : (
        <></>
      )}

      <div className="DAT_Setting-LineChart-Row" id="1">
        <input placeholder={"Width: " + linechart.w_r} ref={w}></input>
        <input placeholder={"Height " + linechart.h_r} ref={h}></input>
        <input
          placeholder={"Chart's Name" + linechart.chartname_r}
          ref={chartname}
        ></input>
        <button onClick={(e) => handleSaveChange1(e)}>Chọn</button>
      </div>
      <div className="DAT_Setting-LineChart-Row" id="2">
        {/* <table>
          <tbody>
            {Object.entries(linechart.labels).map(([key]) => {
              return (
                <th key={key}>
                  <tr
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                    id={linechart.labels[key] + "_linechart"}
                    onClick={(e) => handleChangeLable(e)}
                  >
                    {linechart.labels[key]}
                  </tr>
                </th>
              );
            })}
            <input
              placeholder={"..."}
              style={{
                all: "inherit",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              ref={label}
            ></input>
          </tbody>
        </table> */}
        <button onClick={(e) => handleAddLable(e)}>Add</button>
      </div>
      <label>Datasets: </label>
      <div className="DAT_Setting-LineChart-Row" id="3">
        {/* <table>
          <tbody>
            {Object.entries(linechart.datasets).map(([key]) => {
              temp.push(
                linechart.datasets[key].data[
                  linechart.datasets[key].data.length - 1
                ]
              );
              return (
                <tr key={key}>
                  <th
                    id={key}
                    onClick={(e) => handleTakeIndex(e)}
                    style={{ cursor: "pointer" }}
                  >
                    {linechart.datasets[key].label}
                  </th>
                  {Object.entries(linechart.datasets[key].data).map(
                    ([datakey]) => {
                      return <td>{linechart.datasets[key].data[datakey]}</td>;
                    }
                  )}

                  <td>
                    <input
                      style={{ all: "inherit" }}
                      defaultValue={cur[key]}
                      id={key + "_linechart"}
                      // onClick={(e) => handleSaveData(e)}
                      //onChange={(e) => handleSaveData(e)}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="color"
                      defaultValue={linechart.datasets[key].borderColor}
                    ></input>
                    <button
                      id={linechart.datasets[key].label + "_linechart"}
                      onClick={(e) => handleDelete(e)}
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table> */}
      </div>

      <div className="DAT_Setting-LineChart-Row" id="4">
        <button onClick={(e) => handlePushData(e)}>Thêm dữ liệu </button>
      </div>

      <div className="DAT_Setting-LineChart-Row" id="5">
        <input placeholder={"xAxis: " + linechart.xAxis_r} ref={xAxis}></input>
        <input placeholder={"yAxis: " + linechart.yAxis_r} ref={yAxis}></input>
        <button onClick={(e) => handleChangeAxisName(e)}>Chọn</button>
      </div>
      <label>Thêm dữ liệu</label>
      <div className="DAT_Setting-LineChart-Row" id="6">
        <input placeholder={"Add label: "} ref={newlabel}></input>
        <input placeholder={"Data"}></input>
        <button onClick={(e)=>AddNewData(e)}>Add</button>
      </div>
    </div>
  );
}
