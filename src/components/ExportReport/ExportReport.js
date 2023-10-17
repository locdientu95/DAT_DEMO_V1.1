import React, { useEffect, useRef, useState } from "react";
import Spreadsheet from "react-spreadsheet";
import "./ExportReport.scss";
import { ReactSpreadsheetImport } from "react-spreadsheet-import";

const data = [
  {
    id: 1,
    name: "Huu Huynh",
    email: "huuhuynh@gmail.com",
    age: 10,
  },
  {
    id: 2,
    name: "Tai Tan",
    email: "tantai@gmail.com",
    age: 10,
  },
  {
    id: 3,
    name: "Phu Nu",
    email: "tantai@gmail.com",
    age: 10,
  },
  {
    id: 4,
    name: "Loc chuyen vien",
    email: "Loc-kun@gmail.com",
    age: 25,
  },
  {
    id: 5,
    name: "Tien Do",
    email: "DoTien@gmail.com",
    age: 25,
  },
  {
    id: 6,
    name: "Tien Bip",
    email: "tienbip@gmail.com",
    age: 30,
  },
  {
    id: 7,
    name: "Tri Nguyen",
    email: "NguyenTri@gmail.com",
    age: 27,
  },
  {
    id: 8,
    name: "Phuoc Loc",
    email: "LocPhuoc@gmail.com",
    age: 20,
  },
  {
    id: 9,
    name: "Sep Bang",
    email: "Daibang@gmail.com",
    age: 40,
  },
  {
    id: 10,
    name: "Thay Le",
    email: "LeLe@gmail.com",
    age: 35,
  },
  {
    id: 11,
    name: "Tai Phu",
    email: "Phutai@gmail.com",
    age: 10,
  },
  {
    id: 12,
    name: "Tien lui",
    email: "Luitien@gmail.com",
    age: 5,
  },
  {
    id: 13,
    name: "Loc an do",
    email: "Locdubai@gmail.com",
    age: 80,
  },
];
export default function ExportReport() {
  //const [newdata, setNewData] = useState([])
  const fields = [
    {
      label: "id",
      key: "id",
      alternateMatches: ["first name", "first"],
      fieldType: {
        type: "input",
      },
      example: "Stephanie",
      validations: [
        {
          rule: "required",
          errorMessage: "Name is required",
          level: "error",
        },
      ],
    },
    {
      label: "name",
      key: "name",
      alternateMatches: ["first name", "first"],
      fieldType: {
        type: "input",
      },
      example: "Stephanie",
      validations: [
        {
          rule: "required",
          errorMessage: "Name is required",
          level: "error",
        },
      ],
    },
    {
      label: "email",
      key: "email",
      alternateMatches: ["first name", "first"],
      fieldType: {
        type: "input",
      },
      example: "Stephanie",
      validations: [
        {
          rule: "required",
          errorMessage: "Name is required",
          level: "error",
        },
      ],
    },
    {
      label: "age",
      key: "age",
      alternateMatches: ["first name", "first"],
      fieldType: {
        type: "input",
      },
      example: "Stephanie",
      validations: [
        {
          rule: "required",
          errorMessage: "Name is required",
          level: "error",
        },
      ],
    },
  ];

  // const head = [{ value: "id" }, { value: "name" }, { value: "email" }, { value: "age" }]
  // const Loaddata = (row, col) => {

  //   const rowEmpty = []
  //   const rowLength = 0
  //   const colEmpty = []

  //   for (let i = 1; i < row; i++) {
  //     rowEmpty.push({ value: null })
  //   };

  //   const lasthead = rowEmpty.concat(head)

  //   for (let i = 0; i < lasthead.length; i++) {
  //     colEmpty.push({ value: null })
  //   };
  //   console.log("colempty", colEmpty)
  //   const lastcol = [colEmpty]

  //   for (let i = 1; i < col - 1; i++) {
  //     lastcol.push(colEmpty)
  //   };
  //   console.log("lastcol", lastcol)

  //   const lastdata = lastcol
  //   lastdata.push(lasthead)
  //   console.log("lastdata", lastdata)
  //   data.map((data, index) => {

  //     const d = [{ value: data.id }, { value: data.name }, { value: data.email }, { value: data.age }]
  //     const lastcontent = rowEmpty.concat(d);
  //     lastdata.push(lastcontent)

  //     return setNewData(lastdata)
  //   })

  // }
  // const handleAct = (e) => {
  //   console.log(e.row, e.column)
  // }

  const [open, setOpen] = useState(false);
  const [datafile, setDatafile] = useState([]);
  //const [head, setHead] = useState([])

  function onClose() {
    console.log("hello");
    setOpen(false);
  }
  function onSubmit(datas) {
    console.log("Hello", datas.validData);

    var head = [];
    fields.map((data, index) => {
      head = [...head, { value: data.label }];
    });
    setDatafile((pre) => [...pre, head]);
    datas.validData.map((data, index) => {
      const list = [
        { value: data.id },
        { value: data.name },
        { value: data.email },
        { value: data.age },
      ];
      setDatafile((pre) => [...pre, list]);
    });
  }

  useEffect(() => {
    console.log(datafile);
  }, [datafile]);

  const handleImport = () => {
    setOpen(true);
  };

  return (
    <div className="DAT_Content">
      <div className="DAT_Content-Header">
        <div className="DAT_Content-Header-Main">
          <div className="DAT_Content-Header-Main-Dashboard">
            <div className="DAT_Content-Header-Main-Dashboard-Heading">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-filter"
                style={{ paddingRight: "10px" }}
              >
                <polyline points="17 1 21 5 17 9"></polyline>
                <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
                <polyline points="7 23 3 19 7 15"></polyline>
                <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
              </svg>
              Xuất Báo Cáo
            </div>
            <div className="DAT_Content-Header-Main-Dashboard-SubHead">
              Example dashboard overview and content summary
            </div>
          </div>
        </div>
      </div>

      <div className="DAT_Content-Container">
        {/* <div>
                  <input type='text' placeholder='Location to start. Ex: A' ref={loca}/>
                  <input type='text' placeholder='Number of start Ex: 1' ref={num}/>
                  <button  placeholder='Confirm' style={{width:'50px', height:'40px'}} onClick={e => handleInput(e)}/>
              </div> */}

        <div className="DAT_Content-Container-Group-head">
          <button
            // style={{width:"100px",height:"40px", backgroundColor:"red"}}
            onClick={handleImport}
          >
            Thêm file
          </button>
        </div>

        <div className="DAT_Content-Container-Group-Table">
          <ReactSpreadsheetImport
            isOpen={open}
            onClose={onClose}
            onSubmit={onSubmit}
            fields={fields}
          />
          <Spreadsheet data={datafile} />
        </div>
      </div>
    </div>
  );
}
