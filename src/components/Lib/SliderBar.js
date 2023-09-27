import { Slider } from '@mui/material';
import './Setting.scss'
import React from 'react';

const marks=[
  {
    value: 0,
    label: 0
  },
  {
    value: 50,
    label: 50
  }
  ,
  {
    value: 100,
    label: 100
  }

]

function SliderBar() {
    return (
        <div  style={{height:"300px", width:"200px"}}>
          <Slider style={{height:"100px", width:"250px", color:'green'}}
              aria-label="Temperature"
              defaultValue={30}
              // hien value tren nut keo
              valueLabelDisplay="on"
              step={1}
              marks={marks}
              min={0}
              max={100}
              track='normal'
              size='medium'
              
              // orientation set chieu ('horizontal' ngang | 'vertical' doc)
              orientation='horizontal'
              
              
              
          /> 
          </div>


      
    );
}

export default SliderBar;