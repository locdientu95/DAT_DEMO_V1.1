import React, { useContext, useEffect, useRef, useState } from "react";
import { EnvContext } from "../Context/EnvContext";
import "./Setting.scss";

export default function BarChartSetting() {
  const { barchart, envDispatch } = useContext(EnvContext);
  const wi = useRef(barchart.w);
  const he = useRef(barchart.h);
  const fsize = useRef(barchart.labelsize);
  const numb = useRef(barchart.tickNumb);
  const min = useRef(barchart.tickminstep);
  const max = useRef(barchart.tickmaxstep);
  const val1 = useRef("");
  const yName = useRef(barchart.labelname);
  const valcolor = useRef(barchart.valuecolor);
  const series = useRef(barchart.series);
  // const detail = useRef(barchart.valuetitle);
  const namefsize = useRef(barchart.chartnamefsize);
  // const val2 = useRef("");
  const xAxisName = useRef("");

  // const mapData = () => {
  //   var newData = barchart.dataset;
  //   newData.map((data, index)=>{
  //     if(index==0){
  //       console.log(data.xAxis);
  //     }
  //   })
  // }

  const handleDeleteData = (e) => {
    var id = e.currentTarget.id;
    var arr = id.split("_");
    if (barchart.dataset.length > 1) {
      if (barchart.dataset && Array.isArray(barchart.dataset)) {
        barchart.dataset = barchart.dataset.filter(
          (data) => data.xAxis != arr[0]
        );
      }
      envDispatch({ type: "SET_BARCHART", payload: barchart });
    } else {
      alert(
        "ERROR127 :Can't delete data, bar chart need atleast 1 atribute to display !"
      );
    }

    //   var newData ={}
    //  barchart.dataset.filter((data,index)=>{
    //   if (parseInt(key)!=index){
    //     newData = data
    //   }
    // })
    // console.log(newData)

    // barchart.dataset = barchart.dataset.filter(data=>data.xAxis != "seriesD")
    // console.log(barchart.dataset)
    // envDispatch({ type: "SET_BARCHART", payload: barchart });

    // console.log(e);
  };

  const handleSaveChange1 = (e) => {
    if (wi.current.value !== "") {
      barchart.w = wi.current.value;
    }
    if (he.current.value !== "") {
      barchart.h = he.current.value;
    }
    if (fsize.current.value !== "") {
      barchart.labelsize = fsize.current.value;
    }
    envDispatch({ type: "SET_BARCHART", payload: barchart });
    console.log(barchart);
  };

  const handleSaveChange2 = (e) => {
    if (numb.current.value !== "") {
      barchart.tickNumb = numb.current.value;
    }
    if (max.current.value !== "") {
      barchart.tickmaxstep = max.current.value;
    }
    if (min.current.value !== "") {
      barchart.tickminstep = min.current.value;
    }

    // console.log(barchart.tickNumb);
    envDispatch({ type: "SET_BARCHART", payload: barchart });
  };

  const handleSaveChange3 = (e) => {
    // const newData = {
    //   value1: parseInt(val1.current.value),
    //   value2: parseInt(val2.current.value),
    //   xAxis: xAxisName.current.value,
    // };
    // console.log(barchart.dataset)
    // // barchart.dataset.push(newData);

    // // console.log(barchart.dataset);
    // envDispatch({ type: "SET_BARCHART", payload: barchart });

    var tempval1 = val1.current.value;
    // var tempval2 = val2.current.value;
    var tempxAxisName = xAxisName.current.value;

    var newData = barchart.dataset;
    const index = newData.findIndex(
      (newData) => newData.xAxis == tempxAxisName
    );
    if (index < 0) {
      const tempData = {
        value1: parseInt(val1.current.value),
        // value2: parseInt(val2.current.value),
        xAxis: xAxisName.current.value,
      };
      newData.push(tempData);
    } else {
      newData[index].value1 = parseInt(tempval1);
      // newData[index].value2 = parseInt(tempval2);
    }
    console.log(index);

    envDispatch({ type: "SET_BARCHART", payload: barchart });

    console.log(newData);
  };

  const handleSaveChange5 = (e) => {
    if (yName.current.value !== "") {
      barchart.labelname = yName.current.value;
      console.log(yName);
    }
    if (series.current.value !== "") {
      barchart.series = series.current.value;
    }
    // if (detail.current.value !== "") {
    //   barchart.valuetitle = detail.current.value;
    // }
    barchart.valuecolor = valcolor.current.value;
    if (namefsize.current.value !== "") {
      barchart.chartnamefsize = namefsize.current.value;
    }
    envDispatch({ type: "SET_BARCHART", payload: barchart });
    // console.log(barchart);
  };

  useEffect(() => {
    console.log(barchart.dataset);
  }, [barchart]);

  return (
    <div className="DAT_Setting-BarChart">
      <div className="DAT_Setting-BarChart-Row" id="1">
        <input placeholder={"Width: " + barchart.w} ref={wi}></input>
        <input placeholder={"Height: " + barchart.h} ref={he}></input>
        <input placeholder={"Label: " + barchart.labelsize} ref={fsize}></input>
        <button onClick={(e) => handleSaveChange1(e)}>Chọn</button>
      </div>

      <div className="DAT_Setting-BarChart-Row" id="2">
        <input
          placeholder={"Max step: " + barchart.tickmaxstep}
          ref={max}
        ></input>
        <input
          placeholder={"Min step: " + barchart.tickminstep}
          ref={min}
        ></input>
        <input placeholder={"Number: " + barchart.tickNumb} ref={numb}></input>
        <button onClick={(e) => handleSaveChange2(e)}>Chọn</button>
      </div>

      <div className="DAT_Setting-BarChart-Row" id="3">
        <label>Thêm data</label>
        <input placeholder="Giá trị 1" ref={val1}></input>
        {/* <input placeholder="Giá trị 2" ref={val2}></input> */}
        <input placeholder="Tên" ref={xAxisName}></input>
        <button onClick={(e) => handleSaveChange3(e)}>Chọn</button>
      </div>

      <div className="DAT_Setting-BarChart-Row" id="4">
        <table>
          <tbody>
            {Object.entries(barchart.dataset).map(([key]) => {
              return (
                <tr key={key}>
                  <td>{barchart.dataset[key].value1}</td>
                  {/* <td>{barchart.dataset[key].value2}</td> */}
                  <td>{barchart.dataset[key].xAxis}</td>
                  <td>
                    <button
                      id={barchart.dataset[key].xAxis + "_barchart"}
                      key={key}
                      onClick={(e) => handleDeleteData(e)}
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* <select>
          {barchart.dataset.map((singledata)=>{
            const name = (
              <option value={singledata.xAxis} >{singledata.xAxis}</option>
            );
            return name;
          })}
        </select> */}
      </div>

      <div className="DAT_Setting-BarChart-Row" id="5">
        <input
          placeholder={"Value unit: " + barchart.labelname}
          ref={yName}
        ></input>
        <input
          type="color"
          ref={valcolor}
          defaultValue={barchart.valuecolor}
        ></input>
        <input
          placeholder={"Chart Title : " + barchart.series}
          ref={series}
        ></input>
        {/* <input
          placeholder={"Series: " + barchart.valuetitle}
          ref={detail}
        ></input> */}
        <input
          placeholder={"Font size: " + barchart.chartnamefsize}
          ref={namefsize}
        ></input>
        <button onClick={(e) => handleSaveChange5(e)}>Chọn</button>
      </div>
    </div>
  );
}
