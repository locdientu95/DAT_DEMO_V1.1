import React, { useState } from "react";
import { useContext } from "react";
import { useRef } from "react";
import { EnvContext } from "../Context/EnvContext";

export default function LineChartSetting() {
  const { linechart, envDispatch } = useContext(EnvContext);
  const [display, setDisplay] = useState(false);
  const w = useRef();
  const h = useRef();
  const chartname = useRef();

  const handleClose = (e) => {
    setDisplay(false);
  };

  const handleSaveLabel = (e) => {
    setDisplay(false);
  };

  const handleChangeLable = (e) => {
    setDisplay(true);
    console.log(e.currentTarget.id) //Jan_linechart
    var id = e.currentTarget.id;
    var arr = id.split("_");
    console.log(arr) // (2) ['Jan', 'linechart']
    var newData = linechart.datasets;
    // const index = newData.findIndex((newData)=> newData.label)
  };

  const handleSaveChange1 = (e) => {
    if(w.current.value !== ""){
      linechart.w_r = w.current.value;
    };
    if(h.current.value !== ""){
      linechart.h_r = h.current.value;
    };
    if(chartname.current.value !== ""){
      linechart.chartname_r = chartname.current.value;
    }
    envDispatch({ type: "SET_LINECHART", payload: linechart });
  };

  const handleSaveChange2 = (e) => {};

  const handleSaveChange3 = (e) => {};

  const handleSaveChange5 = (e) => {};
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
          </tbody>
        </table>

        {/* UPDATE DATA */}
        {/* {display ? (
            <div
              className="Automation_Content-Container-Group-UpdateBox"
            >
              <form
                className="Automation_Content-Container-Group-UpdateBox-Group"
                // onSubmit={(e) => handleSaveRow(e)}
              >
                <div className="Automation_Content-Container-Group-UpdateBox-Group-Tit">
                  <div>Chỉnh Sửa</div>
                  <div
                    className="Automation_Content-Container-Group-UpdateBox-Group-Tit-Close"
                    onClick={(e) => handleClose(e)}
                  >
                    x
                  </div>
                </div>
                <input type="text" required ref={dataIncome}></input>
                <button onClick={(e) => handleChangeData(e)}>Lưu</button>
              </form>
            </div>
          ) : (
            <></>
          )} */}
      </div>
      <label>Datasets: </label>
      <div className="DAT_Setting-LineChart-Row" id="3">
        <table>
          <tbody>
            {Object.entries(linechart.datasets).map(([key]) => {
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
        <button>Thêm dữ liệu </button>
      </div>

    </div>
  );
}
