import { Slider } from "@mui/material";
import "./Setting.scss";
import React, { useEffect, useState } from "react";

export default function SliderBar(props) {
  const [marks, setMarks] = useState([]);

  const markConfig = (step) => {
    let marks = [];
    for (
      let i = parseInt(props.setting.min);
      i <= parseInt(props.setting.max);
      i += step
    ) {
      if (
        i === parseInt(props.setting.min) ||
        i === parseInt(props.setting.max)
      ) {
        marks.push({ value: i, label: i });
      } else {
        marks.push({ value: i });
      }
    }
    setMarks(marks);
  };

  useEffect(() => {
    markConfig(parseInt(props.setting.scale));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.setting.scale, props.setting.min, props.setting.max]);

  useEffect(() => {
    const thumb = document.querySelector(".MuiSlider-thumb");
    const track = document.querySelector(".MuiSlider-track");
    const rail = document.querySelector(".MuiSlider-rail");

    thumb.style.backgroundColor = props.setting.thumb.bgcolor;
    track.style.backgroundColor = props.setting.track.bgcolor;
    rail.style.backgroundColor = props.setting.rail.bgcolor;

    thumb.style.borderRadius = props.setting.thumb.border + "px";
    track.style.borderRadius = props.setting.track.border + "px";
    rail.style.borderRadius = props.setting.track.border + "px";
  }, [props.setting]);

  return (
    <div className="DAT_SliderBar">
      <Slider
        style={{
          height:
            props.setting.ori === "horizontal"
              ? props.setting.height + "px"
              : props.setting.width + "px",
          width:
            props.setting.ori === "horizontal"
              ? props.setting.width + "px"
              : props.setting.height + "px",
        }}
        min={parseInt(props.setting.min)}
        max={parseInt(props.setting.max)}
        step={parseInt(props.setting.scale)}
        marks={marks}
        defaultValue={30}
        valueLabelDisplay="on"
        track="normal"
        size="medium"
        // orientation set chieu ('horizontal' ngang | 'vertical' doc)
        orientation={props.setting.ori}
      />
    </div>
  );
}
