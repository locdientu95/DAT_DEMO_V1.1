import React from "react";
import "./Configuration.scss";
import { useRef } from "react";

export default function Devices() {
  const name = useRef();
  const info = useRef();
  const connect = useRef();
  const gateway = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      name.current.value,
      info.current.value,
      connect.current.value,
      gateway.current.value
    );
  };

  return (
    <div className="DAT_Devices">
      <div className="DAT_Devices_Main">
        {/* Content */}
        <div className="DAT_Devices_Main_Content">
          {/* Profile Detail */}
          <div className="DAT_Devices_Main_Content_Detail">
            <div className="DAT_Devices_Main_Content_Detail_Title">
              Thêm Thiết Bị
            </div>

            <div className="DAT_Devices_Main_Content_Detail_Content">
              <form
                className="DAT_Devices_Main_Content_Detail_Content_Form"
                onSubmit={(e) => handleSubmit(e)}
              >
                <div className="DAT_Devices_Main_Content_Detail_Content_Form_Row">
                  <div className="DAT_Devices_Main_Content_Detail_Content_Form_Row_Item">
                    <div className="DAT_Devices_Main_Content_Detail_Content_Form_Row_Item_Label">
                      Tên Thiết Bị
                    </div>
                    <input type="text" ref={name} required />
                  </div>
                </div>

                <div className="DAT_Devices_Main_Content_Detail_Content_Form_Row">
                  <div className="DAT_Devices_Main_Content_Detail_Content_Form_Row_Item">
                    <div className="DAT_Devices_Main_Content_Detail_Content_Form_Row_Item_Label">
                      Mô Tả
                    </div>
                    <input type="text" ref={info} required />
                  </div>
                </div>

                <div className="DAT_Devices_Main_Content_Detail_Content_Form_Row">
                  <div className="DAT_Devices_Main_Content_Detail_Content_Form_Row_Item">
                    <div className="DAT_Devices_Main_Content_Detail_Content_Form_Row_Item_Label">
                      Kết Nối
                    </div>
                    <input type="text" ref={connect} required />
                  </div>
                </div>

                <div className="DAT_Devices_Main_Content_Detail_Content_Form_Row">
                  <div className="DAT_Devices_Main_Content_Detail_Content_Form_Row_Item">
                    <div className="DAT_Devices_Main_Content_Detail_Content_Form_Row_Item_Label">
                      Gateway
                    </div>
                    <input type="text" ref={gateway} required />
                  </div>
                </div>

                <button className="DAT_Devices_Main_Content_Detail_Content_Form_Button">
                  Lưu thay đổi
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
