import React, { useRef } from "react";
import "./SMS.scss";
export default function SMS() {
  const phone = useRef()
  const GW = useRef()
  const ErrCode = useRef()
  const ErrType = useRef()
  const Info = useRef()
  const Solve = useRef()


  const send=()=>{
    console.log(phone.current.value)
    console.log(GW.current.value)
    console.log(ErrCode.current.value)
    console.log(ErrType.current.value)
    console.log(Info.current.value)
    console.log(Solve.current.value)
    
  }
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
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              SMS
            </div>
            <div className="DAT_Content-Header-Main-Dashboard-SubHead">
              Example dashboard overview and content summary
            </div>
          </div>
        </div>
      </div>

      <div className="DAT_Content-Main">
        <div className="DAT_Content-Main-Tit">
          SMS
        </div>
          <div className="DAT_Content-Main-Col1">
            <div className="DAT_Content-Main-Col1-Item">
              <div className="DAT_Content-Main-Col1-Item-Tit">Số điện thoại</div>
              <input ref={phone}  />
            </div>

            <div className="DAT_Content-Main-Col1-Item">
              <div className="DAT_Content-Main-Col1-Item-Tit">GateWay</div>
              <input ref={GW} />
            </div>
          </div>

          <div className="DAT_Content-Main-Col1">
            <div className="DAT_Content-Main-Col1-Item">
              <div className="DAT_Content-Main-Col1-Item-Tit">Mã Lỗi</div>
              <input ref={ErrCode} />
            </div>

            <div className="DAT_Content-Main-Col1-Item">
              <div className="DAT_Content-Main-Col1-Item-Tit">Loại Lỗi</div>
              <input ref={ErrType} />
            </div>
          </div>

          <div className="DAT_Content-Main-Col2">
            <div className="DAT_Content-Main-Col2-Item">
              <div className="DAT_Content-Main-Col2-Item-Tit">Nguyên Nhân</div>
              <input ref={Info} />
            </div>

            <div className="DAT_Content-Main-Col2-Item">
              <div className="DAT_Content-Main-Col2-Item-Tit">Biện Pháp</div>
              <input ref={Solve} />
            </div>
          </div>

          <div className="DAT_Content-Main-Button">
            <button onClick={send}>Gửi</button>
          </div>
      </div>

    </div>
  );
}
