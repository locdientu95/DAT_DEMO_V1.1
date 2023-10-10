import React from "react";
import "./Configuration.scss";
import { useRef } from "react";
import { useContext } from "react";
import { EnvContext } from "../Context/EnvContext";
import { useEffect } from "react";

export default function Project() {
  const { project, envDispatch } = useContext(EnvContext);

  const projectid = useRef();
  const name = useRef();
  const company = useRef();
  const info = useRef();
  const long = useRef();
  const lat = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    var data = project;

    data = data.filter((data) => data.projectid === projectid.current.value);

    if (data.length) {
      alert("Mã dự án đã tồn tại");
    } else {
      var dataPush = project;
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
        type: "SET_PROJECT",
        payload: dataPush,
      });

      console.log(project);
    }

    // projectid.current.value = "";
    // name.current.value = "";
    // company.current.value = "";
    // info.current.value = "";
    // long.current.value = "";
    // lat.current.value = "";

    // console.log(project);
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
                </div>

                <div className="DAT_Project_Main_Content_Detail_Content_Form_Row">
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
                </div>

                <div className="DAT_Project_Main_Content_Detail_Content_Form_Row">
                  <div className="DAT_Project_Main_Content_Detail_Content_Form_Row_Item">
                    <div className="DAT_Project_Main_Content_Detail_Content_Form_Row_Item_Label">
                      Vĩ Độ
                    </div>
                    <input type="Text" ref={lat} required />
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
