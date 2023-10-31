import React, { useState } from "react";
import "./Setting.scss";

export default function View32bit(props) {

  const [floatval,setFloatval] = useState(0);
  const [doubleval,setDoubleval] = useState(0);

  const convertToDoublewordAndFloat = (word1, word2) =>{
    var doubleword = (props.setting.val2 << 16) | props.setting.val1;
    var buffer = new ArrayBuffer(4);
    var intView = new Int32Array(buffer);
    var floatView = new Float32Array(buffer);

    intView[0] = doubleword;
    var float_value = floatView[0];

    return props.setting.display === "Int" ? doubleword : float_value;
}
  return (
    <div className="DAT_View32bit">
      <div
        className="DAT_View32bit-DataView"
        style={{
          display: "flex",
          border: "3px solid",
          padding: "7px",
          fontSize: props.setting.fontSize,
          color: props.setting.color,
          alignItems: props.setting.alignItems,
          justifyContent: props.setting.justifyContent,
          width: props.setting.width,
          height: props.setting.height,
          borderRadius: props.setting.borderRadius,
          backgroundColor: props.setting.backgroundColor,
          borderColor: props.setting.borderColor,
        }}
      >
         {convertToDoublewordAndFloat(props.setting.val1,props.setting.val2)}
      </div>
    </div>
  );
}
