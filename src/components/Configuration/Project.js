import React from "react";
import "./Configuration.scss";
import { useRef } from "react";
import { useContext } from "react";
import { EnvContext } from "../Context/EnvContext";

export default function Project(props) {
  const { pjdata, pjm, envDispatch } = useContext(EnvContext);

  const projectid = useRef();
  const name = useRef();
  const company = useRef();
  const info = useRef();
  const long = useRef();
  const lat = useRef();
  const buid = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    var data = pjdata;
    data = data.filter((data) => data.projectid === projectid.current.value);

    if (data.length) {
      alert("Mã dự án đã tồn tại");
    } else {
      var dataPush = pjdata;
      dataPush.push({
        projectid: projectid.current.value,
        name: name.current.value,
        company: company.current.value,
        info: info.current.value,
        statement: 0,
        custom: "",
        long: long.current.value,
        lat: lat.current.value,
      });

      envDispatch({
        type: "SET_PJDATA",
        payload: dataPush,
      });

      var pjmPush = pjm;
      pjmPush.push({
        projectid: projectid.current.value,
        username: props.username,
        code: buid.current.value,
      });

      envDispatch({
        type: "SET_PJM",
        payload: pjmPush,
      });

      alert("Thêm thành công");
    }
  };

  return (
    <div className="DAT_Project">
      <div className="DAT_Project_Main">
        {/* Content */}
        <div className="DAT_Project_Main_Content">
          {/* Profile Detail */}
          <div className="DAT_Project_Main_Content_Detail">
            <div className="DAT_Project_Main_Content_Detail_Title">
              Thêm Dự Án
            </div>

            <div className="DAT_Project_Main_Content_Detail_Content">
              <form
                className="DAT_Project_Main_Content_Detail_Content_Form"
                onSubmit={(e) => handleSubmit(e)}
              >
                <div className="DAT_Project_Main_Content_Detail_Content_Form_Row">
                  <div className="DAT_Project_Main_Content_Detail_Content_Form_Row_Item">
                    <div className="DAT_Project_Main_Content_Detail_Content_Form_Row_Item_Label">
                      Mã Dự Án
                    </div>
                    <input type="text" ref={projectid} required />
                  </div>

                  <div className="DAT_Project_Main_Content_Detail_Content_Form_Row_Item">
                    <div className="DAT_Project_Main_Content_Detail_Content_Form_Row_Item_Label">
                      Tên Dự Án
                    </div>
                    <input type="text" ref={name} required />
                  </div>
                </div>

                <div className="DAT_Project_Main_Content_Detail_Content_Form_Row">
                  <div className="DAT_Project_Main_Content_Detail_Content_Form_Row_Item">
                    <div className="DAT_Project_Main_Content_Detail_Content_Form_Row_Item_Label">
                      Công Ty
                    </div>
                    <input type="text" ref={company} required />
                  </div>
                </div>

                <div className="DAT_Project_Main_Content_Detail_Content_Form_Row">
                  <div className="DAT_Project_Main_Content_Detail_Content_Form_Row_Item">
                    <div className="DAT_Project_Main_Content_Detail_Content_Form_Row_Item_Label">
                      Thông Tin
                    </div>
                    <input type="Text" ref={info} required />
                  </div>
                </div>

                <div className="DAT_Project_Main_Content_Detail_Content_Form_Row">
                  <div className="DAT_Project_Main_Content_Detail_Content_Form_Row_Item">
                    <div className="DAT_Project_Main_Content_Detail_Content_Form_Row_Item_Label">
                      Kinh Độ
                    </div>
                    <input type="Text" ref={long} required />
                  </div>

                  <div className="DAT_Project_Main_Content_Detail_Content_Form_Row_Item">
                    <div className="DAT_Project_Main_Content_Detail_Content_Form_Row_Item_Label">
                      Vĩ Độ
                    </div>
                    <input type="Text" ref={lat} required />
                  </div>
                </div>

                <div className="DAT_Project_Main_Content_Detail_Content_Form_Row">
                  <div className="DAT_Project_Main_Content_Detail_Content_Form_Row_Item">
                    <div className="DAT_Project_Main_Content_Detail_Content_Form_Row_Item_Label">
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

                <button className="DAT_Project_Main_Content_Detail_Content_Form_Button">
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
