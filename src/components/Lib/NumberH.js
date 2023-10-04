import React, { useContext } from "react";
import "./Setting.scss";
import { EnvContext } from "../Context/EnvContext";

export default function NumberH() {
  const { numberh } = useContext(EnvContext);

  return (
    <div className="DAT_NumberH">
      {Object.entries(numberh.data).map(([key]) => (
        <div className="DAT_NumberH-Item" key={key}>
          <div
            className="DAT_NumberH-Item-Input"
            style={{ backgroundColor: "#d0f0ff" }}
          >
            <div className="DAT_NumberH-Item-Label">
              {numberh.data[key].label}
            </div>
            <input
              style={{ backgroundColor: "#d0f0ff" }}
              type="text"
              placeholder={"value: " + numberh.data[key].value}
            />
            <div className="DAT_NumberH-Item-Input-Unit">
              {numberh.data[key].unit}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
