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

  const [cur, setCur] = useState(() => {
    let y = {};
    linechart.datasets.map((data, index) => {
      y[index] = data.data[data.data.length - 1];
    });
    return y;
  });

  useEffect(() => {
    // console.log(linechart.datasets[1].data)
  }, [linechart.datasets]);

  useEffect(() => {
    console.log(cur);
  }, [cur]);

  const handleClose = (e) => {
    setDisplay(false);
  };

  const handleSaveLabel = (e) => {
    setDisplay(false);
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
    envDispatch({ type: "SET_LINECHART", payload: linechart });
  };

  const handlePushData = (e) => {
    let d = document.getElementById("0_linechart");
    var y = {};
    Object.entries(cur).map((data) => {
      // console.log(data[0]);
      let d = document.getElementById(data[0] + "_linechart");
      // console.log(d);
      // y[data[0]] = d.value;

      // console.log(linechart.datasets[data[0]].data)
      if (d.value !== "") {
        y[data[0]] = parseFloat(d.value);
      } else {
        y[data[0]] = 0;
      }
      linechart.datasets[data[0]].data.push(y[data[0]]);
      envDispatch({type: "SET_LINECHART",payload: linechart})
      console.log(linechart.datasets);
      setCur(y);
    });
    // envDispatch({type: "SET_LINECHART",payload: linechart.datasets})
    // console.log(linechart.datasets)

    //console.log(x)
    // setCur(x);

    //console.log(inputindex, datapush, inputid);

    // if (datapush.current.value === "") {
    //   alert("Không được để trống data");
    // } else if (isNaN(parseFloat(datapush.current.value))) {
    //   alert("Giá trị không hợp lệ.");
    // }
  };

  const handleAddLable = (e) => {
    const input = label.current.value
    if(input !== ""){
      linechart.labels.push(input)
    } else {
      alert('Label đéo hợp lệ')
    } 
    envDispatch({type: "SET_LINECHART",payload: linechart})
    console.log(linechart.labels)
  };

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
            <input
              type="text"
              // required ref={dataIncome}
            ></input>
            <button
            //  onClick={(e) => handleChangeData(e)}
            >
              Lưu
            </button>
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
        <table>
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
        </table>
        <button onClick={(e)=>handleAddLable(e)}>Add</button>
      </div>
      <label>Datasets: </label>
      <div className="DAT_Setting-LineChart-Row" id="3">
        <table>
          <tbody>
            {Object.entries(linechart.datasets).map(([key]) => {
              temp.push(
                linechart.datasets[key].data[
                  linechart.datasets[key].data.length - 1
                ]
              );
              return (
                <tr key={key}>
                  <th>{linechart.datasets[key].label}</th>
                  {Object.entries(linechart.datasets[key].data).map(
                    ([datakey]) => {
                      return <td>{linechart.datasets[key].data[datakey]}</td>;
                    }
                  )}

                  <td>
                    <input
                      id={key + "_linechart"}
                      style={{ all: "inherit" }}
                      defaultValue={cur[key]}
                      // onClick={(e) => handleSaveData(e)}
                      //onChange={(e) => handleSaveData(e)}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="color"
                      defaultValue={linechart.datasets[key].borderColor}
                    ></input>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="DAT_Setting-LineChart-Row" id="4">
        <button onClick={(e) => handlePushData(e)}>Thêm dữ liệu </button>
      </div>
    </div>
  );
}
