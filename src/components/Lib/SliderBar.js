import { Slider } from '@mui/material';
import './Setting.scss'
import React, { useEffect, useState } from 'react';

export default function SliderBar(props) {
  const [marks, setMarks] = useState([])

  const markConfig = (step) =>{
    let marks = [];
    for (let i = parseInt(props.setting.min); i <= parseInt(props.setting.max); i+=step) {
      if(i === parseInt(props.setting.min) || i === parseInt(props.setting.max)){
        marks.push({value: i, label: i});
      } else {
          marks.push({value: i});
      }       
    }
      setMarks(marks);
      console.log(marks);
  }

  useEffect(() => {
    markConfig(10)
  },[])

   

  useEffect(() => {
    const thumb = document.querySelector('.MuiSlider-thumb');
    const track = document.querySelector('.MuiSlider-track');
    const rail = document.querySelector('.MuiSlider-rail');


    thumb.style.backgroundColor = props.setting.thumb;
    track.style.backgroundColor = props.setting.track;
    rail.style.backgroundColor = props.setting.rail;
  },[])

  return (
    <div className="DAT_SliderBar" >
      <Slider 
        style={{height: props.setting.height + "px", width: props.setting.width + "px"}}
        defaultValue={30}
        valueLabelDisplay="on"
        step={10}
        marks = {marks}
        min={parseInt(props.setting.min)}
        max={parseInt(props.setting.max)}
        track='normal'
        size='medium'
        // orientation set chieu ('horizontal' ngang | 'vertical' doc)
        orientation='horizontal'       
      /> 
    </div>     
  );
}