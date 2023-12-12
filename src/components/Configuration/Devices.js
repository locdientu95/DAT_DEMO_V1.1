import React, { useContext } from "react";
import "./Configuration.scss";
import { useRef } from "react";
import { EnvContext } from "../Context/EnvContext";

export default function Devices(props) {
  const { dvdata, dvm, envDispatch } = useContext(EnvContext);
  const gateway = useRef();
  const buid = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    var data = dvdata;
    data = data.filter((data) => data.gateway === gateway.current.value);

    if (data.length) {
      var data2 = dvm;
      data2 = data2.filter((data2) => data2.deviceid === gateway.current.value);
      if (data2.length) {
        alert("Thiết bị đã được sử dụng");
      } else {
        var dvmPush = dvm;
        dvmPush.push({
          deviceid: gateway.current.value,
          username: props.username,
          code: buid.current.value,
        });
        envDispatch({
          type: "SET_DVM",
          payload: dvmPush,
        });
        alert("Thêm thành công");
      }
    } else {
      alert("Thiết bị không tồn tại trong hệ thống");
    }
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
                      Gateway
                    </div>
                    <input type="text" ref={gateway} required />
                  </div>
                </div>

                <div className="DAT_Devices_Main_Content_Detail_Content_Form_Row">
                  <div className="DAT_Devices_Main_Content_Detail_Content_Form_Row_Item">
                    <div className="DAT_Devices_Main_Content_Detail_Content_Form_Row_Item_Label">
                      Mã BU
                    </div>
                    <select ref={buid}>
                      <option value={"AUTO"}>AUTO</option>
                      <option value={"SOLAR"}>SOLAR</option>
                      <option value={"ELEV"}>ELEV</option>
                      <option value={"UPS"}>UPS</option>
                    </select>
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
