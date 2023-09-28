import React, { useEffect, useRef, useState } from 'react';
import {
  SpreadsheetComponent,
  SheetsDirective, SheetDirective,
  RangesDirective, RangeDirective,
} from '@syncfusion/ej2-react-spreadsheet';
import "./ExportReport.scss"
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
  const num = useRef(1);
  const loca = useRef("A");

  const [start, setStart] = useState('A1')
  const [prestart, setPrestart] = useState("")
  const [newdata, setNewdata] = useState([])



  useEffect(() => {
    console.log("preStart", prestart)
  }, [])
  const handleInput = () => {
    setStart(loca.current.value + num.current.value);
    setNewdata([])
    setNewdata(data)
  }


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
          <SpreadsheetComponent allowOpen={true}
            openUrl='https://services.syncfusion.com/react/production/api/spreadsheet/open'
            allowSave={true}
            saveUrl='https://services.syncfusion.com/react/production/api/spreadsheet/save'
            //  dataSource={data}
            height="100vh"
            width="100%"
            allowDelete={true}
          >
            <SheetsDirective>
              <SheetDirective>
                <RangesDirective>

                  <RangeDirective dataSource={data} startCell={start} ></RangeDirective>
                </RangesDirective>

              </SheetDirective>
            </SheetsDirective>
          </SpreadsheetComponent>
        </div>
      </div>
    </div>
  )
}
