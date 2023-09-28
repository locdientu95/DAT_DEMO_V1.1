import React, { useEffect, useRef, useState } from 'react';
import Spreadsheet from 'react-spreadsheet';
import "./ExportReport.scss"
import { ReactSpreadsheetImport } from "react-spreadsheet-import";

const data = [
  {
    id: 1,
    name: "Huu Huynh",
    email: "huuhuynh@gmail.com",
    age: 10
  },
  {
    id: 2,
    name: "Tai Tan",
    email: "tantai@gmail.com",
    age: 10
  },
  {
    id: 3,
    name: "Phu Nu",
    email: "tantai@gmail.com",
    age: 10
  },
  {
    id: 4,
    name: "Loc chuyen vien",
    email: "Loc-kun@gmail.com",
    age: 25
  },
  {
    id: 5,
    name: "Tien Do",
    email: "DoTien@gmail.com",
    age: 25
  },
  {
    id: 6,
    name: "Tien Bip",
    email: "tienbip@gmail.com",
    age: 30
  },
  {
    id: 7,
    name: "Tri Nguyen",
    email: "NguyenTri@gmail.com",
    age: 27
  },
  {
    id: 8,
    name: "Phuoc Loc",
    email: "LocPhuoc@gmail.com",
    age: 20
  },
  {
    id: 9,
    name: "Sep Bang",
    email: "Daibang@gmail.com",
    age: 40
  },
  {
    id: 10,
    name: "Thay Le",
    email: "LeLe@gmail.com",
    age: 35
  },
  {
    id: 11,
    name: "Tai Phu",
    email: "Phutai@gmail.com",
    age: 10
  },
  {
    id: 12,
    name: "Tien lui",
    email: "Luitien@gmail.com",
    age: 5
  },
  {
    id: 13,
    name: "Loc an do",
    email: "Locdubai@gmail.com",
    age: 80
  }
];
export default function ExportReport() {

  const [newdata, setNewData] = useState([])

  const head = [{ value: "id" }, { value: "name" }, { value: "email" }, { value: "age" }]



  const Loaddata = (row, col) => {


    const rowEmpty = []
    const rowLength = 0
    const colEmpty = []



    for (let i = 1; i < row; i++) {
      rowEmpty.push({ value: null })
    };

    const lasthead = rowEmpty.concat(head)



    for (let i = 0; i < lasthead.length; i++) {
      colEmpty.push({ value: null })
    };
    console.log("colempty", colEmpty)
    const lastcol = [colEmpty]

    for (let i = 1; i < col - 1; i++) {
      lastcol.push(colEmpty)
    };
    console.log("lastcol", lastcol)

    const lastdata = lastcol
    lastdata.push(lasthead)
    console.log("lastdata", lastdata)
    data.map((data, index) => {

      const d = [{ value: data.id }, { value: data.name }, { value: data.email }, { value: data.age }]
      const lastcontent = rowEmpty.concat(d);
      lastdata.push(lastcontent)

      return setNewData(lastdata)
    })

  }


  useEffect(() => {
    Loaddata(0, 0)
  }, [])

  // const handleAct = (e) => {
  //   console.log(e.row, e.column)


  // }



  const [open, setOpen] = useState(true)
  const [datafile, setDatafile] = useState([])
 
  function onClose(){
      console.log("hello")
      setOpen(false)
  }
  function onSubmit(datas){
    console.log(datas)
    //setDatafile(datas.validData)
  }

  const fields = [
    {
      // Visible in table header and when matching columns.
      label: "Name",
      // This is the key used for this field when we call onSubmit.
      key: "name",
      // Allows for better automatic column matching. Optional.
      alternateMatches: ["first name", "first"],
      // Used when editing and validating information.
      fieldType: {
        // There are 3 types - "input" / "checkbox" / "select".
        type: "input"
      },
      // Used in the first step to provide an example of what data is expected in this field. Optional.
      example: "Stephanie",
      // Can have multiple validations that are visible in Validation Step table.
      validations: [
        {
          // Can be "required" / "unique" / "regex"
          rule: "required",
          errorMessage: "Name is required",
          // There can be "info" / "warning" / "error" levels. Optional. Default "error".
          level: "error"
        }
      ]
    },
    {
      // Visible in table header and when matching columns.
      label: "ID",
      // This is the key used for this field when we call onSubmit.
      key: "id",
      // Allows for better automatic column matching. Optional.
      // Used when editing and validating information.
      fieldType: {
        // There are 3 types - "input" / "checkbox" / "select".
        type: "input"
      },
      // Used in the first step to provide an example of what data is expected in this field. Optional.
      example: "We are working on",
      // Can have multiple validations that are visible in Validation Step table.
      validations: [
        {
          // Can be "required" / "unique" / "regex"
          rule: "required",
          errorMessage: "id is required",
          // There can be "info" / "warning" / "error" levels. Optional. Default "error".
          level: "error"
        }
      ]
    },
    {
      // Visible in table header and when matching columns.
      label: "email",
      // This is the key used for this field when we call onSubmit.
      key: "Email",
      // Allows for better automatic column matching. Optional.
      alternateMatches: ["first name", "first"],
      // Used when editing and validating information.
      fieldType: {
        // There are 3 types - "input" / "checkbox" / "select".
        type: "input"
      },
      // Used in the first step to provide an example of what data is expected in this field. Optional.
      example: "In Progress",
      // Can have multiple validations that are visible in Validation Step table.
      validations: [
        {
          // Can be "required" / "unique" / "regex"
          rule: "required",
          errorMessage: "Name is required",
          // There can be "info" / "warning" / "error" levels. Optional. Default "error".
          level: "error"
        }
      ]
    },
    {
      // Visible in table header and when matching columns.
      label: "Age",
      // This is the key used for this field when we call onSubmit.
      key: "status",
      // Allows for better automatic column matching. Optional.
      alternateMatches: ["first name", "first"],
      // Used when editing and validating information.
      fieldType: {
        // There are 3 types - "input" / "checkbox" / "select".
        type: "input"
      },
      // Used in the first step to provide an example of what data is expected in this field. Optional.
      example: "Identified",
      // Can have multiple validations that are visible in Validation Step table.
      validations: [
        {
          // Can be "required" / "unique" / "regex"
          rule: "required",
          errorMessage: "Name is required",
          // There can be "info" / "warning" / "error" levels. Optional. Default "error".
          level: "error"
        }
      ]
    },
  ] 
   
  return (
    <div className="DAT_Content">
      <div className="DAT_Content-Header">
        <div className="DAT_Content-Header-Dashboard">
          <div className="DAT_Content-Header-Dashboard-Heading">
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
          <div className="DAT_Content-Header-Dashboard-SubHead">
            Example dashboard overview and content summary
          </div>
        </div>
      </div>


      <div className='DAT_Content-Container'>
        {/* <div>
                  <input type='text' placeholder='Location to start. Ex: A' ref={loca}/>
                  <input type='text' placeholder='Number of start Ex: 1' ref={num}/>
                  <button  placeholder='Confirm' style={{width:'50px', height:'40px'}} onClick={e => handleInput(e)}/>
              </div> */}
        <div className='DAT_Content-Container-Group'>
          <div className='DAT_Content-Container-Group-Table'>
            <div className='DAT_Content-Container-Group-Table-head'>
            <ReactSpreadsheetImport isOpen={open}  onClose={onClose} onSubmit={onSubmit} fields={fields}  />
            </div>
          </div>
          <Spreadsheet
            data={newdata}
          >

          </Spreadsheet>
        </div>
      </div>
    </div>
  )
}
