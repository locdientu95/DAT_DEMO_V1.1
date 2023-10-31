import React, { useState, useEffect } from "react";
import "./Setting.scss";
import DataTable from "react-data-table-component";

export default function NumberV(props) {
  const [ headrow, setHeadRow ] = useState([]);

  useEffect(() => {
    props.setting.header.map((data, index) => {
        if (index == 0) {
            setHeadRow([]);
            setHeadRow((pre) => [
            ...pre,
            { name: data.name, selector: (row) => row[data.code], width: "100px" },
            ]);
        } else {
            setHeadRow((pre) => [
            ...pre,
            {
                name: (
                <>
                    <div>{data.name}</div>
                    <div
                    style={{
                        color: "gray",
                        fontSize: "10px",
                        position: "absolute",
                        bottom: "0",
                        right: "3px",
                    }}
                    >
                    {splitcode(data.code)}
                    </div>
                </>
                ),
                selector: (row) => row[data.code],
            },
            ]);
        }
    });
  }, [props.setting]);

  const splitcode = (text) => {
    var t = text;
    t = t.split("_");
    return t[1];
  };

  return (
    <div className="DAT_NumberH">
      <div className="DAT_NumberH-Table">
        <DataTable data={props.setting.data} columns={headrow} />
      </div>
    </div>
  );
}
