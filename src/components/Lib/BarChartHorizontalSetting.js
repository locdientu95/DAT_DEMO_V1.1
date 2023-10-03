import React, { useContext, useRef, useState } from "react";
import { EnvContext } from "../Context/EnvContext";
import "./Setting.scss";

export default function BarChartSetting() {
  const { barchart, envDispatch } = useContext(EnvContext);
  const wi = useRef(barchart.w);
  const he = useRef(barchart.h);
  const fsize = useRef(barchart.labelsize);
  const valstep = useRef(barchart.valuestep);

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
    if(valstep.current.value!==""){
      barchart.valuestep=valstep.current.value;
    }
    envDispatch({ type: "SET_BARCHART", payload: barchart });
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
        <input placeholder={"ValueStep: " + barchart.valuestep} ref={valstep}></input>
        <button onClick={(e) => handleSaveChange2(e)}>Chọn</button>
      </div>
    </div>
  );
}
