import React from "react";
import "./ErrorSetting.scss";
import DataTable from 'react-data-table-component';
import { EnvContext } from "../Context/EnvContext";
import { useContext } from "react";

const addcol = [
  {
    name: "STT",
    code: "id",
    selector: row => row.id,
    sortable: true,
    width: "60px",
    center: true
  },
  {
    name: "Địa Chỉ Mã Lỗi",
    code: "addressCode",
    selector: row => row.addressCode,
    center: true
  },
  {
    name: "Địa Chỉ",
    code: "addressState",
    selector: row => row.addressState,
    center: true
  },
  {
    name: "Giá Trị",
    code: "value",
    selector: row => row.value,
    center: true
  },
]

const infoCol =[
  {
    name: "STT",
    code: "id",
    selector: row => row.id,
    sortable: true,
    width: "60px",
    center: true
  },
  {
    name: "Mã Lỗi",
    code: "Errcode",
    selector: row => row.Errcode,
    width: "100px",
    center: true
  },
  {
    name: "Tên Lỗi",
    code: "ErrName",
    selector: row => row.ErrName,
    center: true
  },
  {
    name: "Loại Lỗi",
    code: "ErrType",
    selector: row => row.ErrType,
    width: "150px",
    center: true
  },
  {
    name: "Nguyên Nhân",
    code: "info",
    selector: row => row.info
  },
  {
    name: "Biện Pháp",
    code: "solution",
    selector: row => row.solution
  }
]

export default function ErrorSetting(props) {
  const { errsetting, envDispatch } = useContext(EnvContext);
  return (
    
    <div className="DAT_ErrorSetting">
      <div className="DAT_ErrorSetting-Header">
        <div className="DAT_ErrorSetting-Header-Dashboard">
          <div className="DAT_ErrorSetting-Header-Dashboard-Heading">
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
              className="feather feather-activity"
              color="rgba(255, 255, 255, 0.5)"
              style={{ paddingRight: "10px" }}
            >
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
            Cài đặt lỗi
          </div>
          <div className="DAT_ErrorSetting-Header-Dashboard-SubHead">
            Example dashboard overview and content summary
          </div>
        </div>
      </div>
      <div className="DAT_ErrorSetting-Main">
        <div className="DAT_ErrorSetting-Main-Address">
          <div className="DAT_ErrorSetting-Main-Address-Table">
          <DataTable columns={addcol}
          data={errsetting.adddata}/>
          </div>
          <div className="DAT_ErrorSetting-Main-Address-Setting">


            
          </div>
        </div>
        <div className="DAT_ErrorSetting-Main-Info">
          <div className="DAT_ErrorSetting-Main-Info-Table">
          <DataTable columns={infoCol} 
          data={errsetting.infodata}/>
          </div>
          <div className="DAT_ErrorSetting-Main-Info-Setting">



          </div>
        </div>
      </div>
    </div>
  );
}
