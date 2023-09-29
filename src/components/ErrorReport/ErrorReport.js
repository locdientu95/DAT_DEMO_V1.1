import React, { useEffect, useState } from 'react';
import "./ErrorReport.scss"
import DataTable from 'react-data-table-component';
import { CSVLink } from 'react-csv';

const data = [
  {
    id: 1,
    DeviceID: "IO6112233",
    ErrCode: "E123",
    Date: "28/9/2023 08:54:00"
  },
  {
    id: 2,
    DeviceID: "IO6892323",
    ErrCode: "E923",
    Date: "22/9/2021 18:54:00"
  },
  {
    id: 3,
    DeviceID: "IO6231235",
    ErrCode: "E999",
    Date: "28/8/2023 10:54:00"
  },
  {
    id: 4,
    DeviceID: "IO62321312",
    ErrCode: "E019",
    Date: "21/3/2020 07:45:00"
  },
  {
    id: 5,
    DeviceID: "IO643647474",
    ErrCode: "DE787",
    Date: "10/3/2023 17:54:00"
  },
  {
    id: 6,
    DeviceID: "IO63129387",
    ErrCode: "E767",
    Date: "2/9/2023 00:00:00"
  },
  {
    id: 7,
    DeviceID: "IO61234091",
    ErrCode: "E555",
    Date: "30/1/2020 9:00:00"
  },
  {
    id: 8,
    DeviceID: "IO60219833",
    ErrCode: "E199",
    Date: "17/3/2019 20:54:00"
  },
  {
    id: 9,
    DeviceID: "IO612093812",
    ErrCode: "E141",
    Date: "1/4/2023 12:54:00"
  },
  {
    id: 10,
    DeviceID: "IO621093812",
    ErrCode: "E404",
    Date: "20/5/2023 13:30:00"
  },
  {
    id: 11,
    DeviceID: "IO62345433",
    ErrCode: "E918",
    Date: "7/5/2023 15:15:00"
  },
  {
    id: 12,
    DeviceID: "IO620398120",
    ErrCode: "E113",
    Date: "10/10/2021 10:13:00"
  },
  {
    id: 13,
    DeviceID: "IO6123943912",
    ErrCode: "E010",
    Date: "9/8/2023 19:20:00"
  }
];

export default function ErrorReport() {
  const paginationComponentOptions = {
    rowsPerPageText: 'Số hàng',
    rangeSeparatorText: 'đến',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'tất cả',
  };
  const column = [
    {
      name: "ID",
      selector: row => row.id,
      sortable: true,
      width: "60px",
    },
    {
      name: "Gateway",
      selector: row => row.DeviceID,
      sortable: true,
      width: "150px",

    },
    {
      name: "Mô Tả",
      
    },
    {
      name: "Mã Lỗi",
      selector: row => row.ErrCode,
      sortable: true,
      width: "100px"
    },
    {
      name: "Thời Gian",
      selector: row => row.Date,
      sortable: true,
      width: "200px"
    },
    
  ]
  const [record, setRecord] = useState(data);


  const handleInput = (e) => {
    const newData = data.filter(row => {
      //return row.name.toLowerCase().includes(e.target.value)
      return row.DeviceID.includes(e.target.value) ||
        row.id == e.target.value ||
        (row.ErrCode.includes(e.target.value)) ||
        row.Date.includes(e.target.value)
        
    })
    setRecord(newData);
  }


  useEffect(() => {
    var newdb = data
    setRecord(newdb);
    //console.log("hello",record);
  }, [])
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
            Báo Cáo Lỗi
          </div>
          <div className="DAT_Content-Header-Dashboard-SubHead">
            Example dashboard overview and content summary
          </div>
        </div>


      </div>
      <div className="DAT_Content-Container">
        <div className='DAT_Content-Container-Group'>
          <div className='DAT_Content-Container-Group-Table'>
            <div className='DAT_Content-Container-Group-Table-head'>

              <CSVLink data={record}>
                <button> Export</button>
              </CSVLink>


              <input type='text' placeholder='Search' onChange={e => handleInput(e)} />

            </div>
            <div className='DAT_Content-Container-Group-Table-Content'>
                <div className='DAT_Content-Container-Group-Table-Content-tit'>
                  Danh sách lỗi
                </div>
                
                <div className='DAT_Content-Container-Group-Table-Content-tb'>
                  <DataTable
                    columns={column}
                    data={record}
                    pagination
                    paginationComponentOptions={paginationComponentOptions} />
              </div>
            </div>
          </div>
        </div>

      </div>


    </div>
  )
}
