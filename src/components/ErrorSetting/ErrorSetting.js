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
  },
  {
    name: "Địa Chỉ Mã Lỗi",
    code: "addressCode",
    selector: row => row.addressCode
  },
  {
    name: "Địa Chỉ",
    code: "addressState",
    selector: row => row.addressState
  },
  {
    name: "Giá Trị",
    code: "value",
    selector: row => row.value
  },
]

const infoCol =[
  {
    name: "STT",
    code: "id"
  },
  {
    name: "Mã Lỗi",
    code: "Errcode"
  },
  {
    name: "Tên Lỗi",
    code: "ErrName"
  },
  {
    name: "Loại Lỗi",
    code: "ErrType"
  },
  {
    name: "Nguyên Nhân",
    code: "info"
  },
  {
    name: "Biện Pháp",
    code: "solution"
  }
]

export default function ErrorSetting(props) {
  const { errs, envDispatch } = useContext(EnvContext);
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
        <div className="DAT_ErrorSetting-Main-AddressSetting">
          <DataTable columns={addcol}
          data={errs.adddata}/>
        </div>
        <div className="DAT_ErrorSetting-Main-InfoSetting">
          <DataTable columns={infoCol} 
          data={""}/>
        </div>
      </div>
    </div>
  );
}
