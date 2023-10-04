import React, { useContext, useRef, useState } from "react";
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
  const val1 = useRef();
  const val2 = useRef();
  const xAxisName = useRef();

  const newData = {
    value1 : 30,
    // parseInt(val1.current.value),
    value2 : 20,
    // parseInt(val2.current.value),
    xAxis:  "D"
    // String(xAxisName.current.value),
  }

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
  };

  const handleSaveChange2 = (e) => {
    if (numb.current.value !== "") {
      barchart.tickNumb = numb.current.value;
    }
    if (max.current.value !==""){
      barchart.tickmaxstep=max.current.value
    }
    if(min.current.value !==""){
      barchart.tickminstep=min.current.value;
    }
    envDispatch({ type: "SET_BARCHART", payload: barchart });
  };

  const handleSaveChange3 = (e) => {
    barchart.dataset.push(newData);
    envDispatch({type:"SET_BARCHART", payload: barchart})
    console.log(barchart.dataset)
  }
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
        <input
          placeholder={"Number: " + barchart.tickNumb}
          ref={numb}
        ></input>
        <button onClick={(e) => handleSaveChange2(e)}>Chọn</button>
      </div>
      <div className="DAT_Setting-BarChart-Row" id="3">
        <label>Thêm data</label>
        <input placeholder="Giá trị 1" ref={val1}></input>
        <input placeholder="Giá trị 2" ref={val2}></input>
        <input placeholder="Tên" ref={xAxisName}></input>
        <button onClick={(e) => handleSaveChange3(e)}>Chọn</button>
      </div>
    </div>
  );
}
