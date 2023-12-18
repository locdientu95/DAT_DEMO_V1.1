import React, { useEffect, useState } from "react";
import "./Setting.scss";

export default function View16bit(props) {
  const [result, setResult] = useState(0);

  useEffect(() => {
    console.log(props.setting.display);
    console.log(props.setting.val);
  });

  useEffect(() => {
    const wordValue = props.setting.val;

    if (wordValue === "" || isNaN(wordValue)) {
      setResult("Vui lòng nhập một số nguyên word hợp lệ.");
    } else {
      let intValue = parseInt(wordValue, 10);
      if (intValue > 32767) {
        intValue -= 65536;
      }
      props.setting.display === "Signed"
        ? setResult(wordValue)
        : setResult(intValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        {result}
      </div>
    </div>
  );
}
