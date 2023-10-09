import React from "react";
import "./Configuration.scss";
import { useRef } from "react";
import { useContext } from "react";
import { EnvContext } from "../Context/EnvContext";

export default function Project() {
  const { project, envDispatch } = useContext(EnvContext);

  const projectid = useRef();
  const name = useRef();
  const company = useRef();
  const info = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    var data = project;

    data.push({
      projectid: projectid.current.value,
      name: name.current.value,
      company: company.current.value,
      info: info.current.value,
      statement: 0,
      custom: "",
    });

    envDispatch({
      type: "SET_PROJECT",
      payload: project,
    });

    projectid.current.value = "";
    name.current.value = "";
    company.current.value = "";
    info.current.value = "";

    console.log(project);
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
                    <input
                      type="text"
                      // placeholder={"" + Projects[0].projectid}
                      ref={projectid}
                      required
                    />
                  </div>
                </div>

                <div className="DAT_Project_Main_Content_Detail_Content_Form_Row">
                  <div className="DAT_Project_Main_Content_Detail_Content_Form_Row_Item">
                    <div className="DAT_Project_Main_Content_Detail_Content_Form_Row_Item_Label">
                      Tên Dự Án
                    </div>
                    <input
                      type="text"
                      // placeholder={"" + Projects[0].name}
                      ref={name}
                      required
                    />
                  </div>
                </div>

                <div className="DAT_Project_Main_Content_Detail_Content_Form_Row">
                  <div className="DAT_Project_Main_Content_Detail_Content_Form_Row_Item">
                    <div className="DAT_Project_Main_Content_Detail_Content_Form_Row_Item_Label">
                      Công Ty
                    </div>
                    <input
                      type="text"
                      // placeholder={"" + Projects[0].company}
                      ref={company}
                      required
                    />
                  </div>
                </div>

                <div className="DAT_Project_Main_Content_Detail_Content_Form_Row">
                  <div className="DAT_Project_Main_Content_Detail_Content_Form_Row_Item">
                    <div className="DAT_Project_Main_Content_Detail_Content_Form_Row_Item_Label">
                      Thông Tin
                    </div>
                    <input
                      type="Text"
                      // placeholder={"" + Projects[0].info}
                      ref={info}
                      required
                    />
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
