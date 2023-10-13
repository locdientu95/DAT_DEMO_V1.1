import React, { useContext } from "react";
import "./Configuration.scss";
import { useRef } from "react";
import { EnvContext } from "../Context/EnvContext";

export default function Devices() {
  const { dvdata, pjdata, envDispatch } = useContext(EnvContext);

  const name = useRef();
  const info = useRef();
  const projectid = useRef();
  const gateway = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    var data = dvdata;

    data.push({
      deviceid: dvdata.length + 1,
      name: name.current.value,
      description: info.current.value,
      statement: 0,
      gateway: gateway.current.value,
      projectid: projectid.current.value,
      custome: "",
    });

    envDispatch({
      type: "SET_DEVICE",
      payload: dvdata,
    });

    alert("Thêm thành công");

    console.log(dvdata);
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
                      Mã Dự Án
                    </div>
                    <select ref={projectid}>
                      <option value={"None"}>None</option>
                      {pjdata.map((data, index) => {
                        return (
                          <option key={index} value={data.projectid}>
                            {data.projectid}
                          </option>
                        );
                      })}
                    </select>
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
