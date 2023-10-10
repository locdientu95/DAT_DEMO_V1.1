import React, { useContext } from "react";
import "./Account.scss";
import { useRef } from "react";
import { EnvContext } from "../Context/EnvContext";
import { useEffect } from "react";

export default function AddNew() {
  const { register, envDispatch } = useContext(EnvContext);

  const username = useRef();
  const email = useRef();
  const password = useRef();
  const repassword = useRef();
  const name = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    envDispatch({
      type: "SET_REGISTER",
      payload: {
        ...register,
        [Object.keys(register).length]: {
          id: parseInt(register.length + 1),
          username: username.current.value,
          email: email.current.value,
          password: password.current.value,
          name: name.current.value,
          role: "user",
        },
      },
    });

    username.current.value = "";
    email.current.value = "";
    password.current.value = "";
    repassword.current.value = "";
    name.current.value = "";
  };

  useEffect(() => {
    console.log(register);
  }, [register]);

  return (
    <div className="DAT_AddNew">
      <div className="DAT_AddNew_Main">
        {/* Content */}
        <div className="DAT_AddNew_Main_Content">
          {/* Profile Detail */}
          <div className="DAT_AddNew_Main_Content_Detail">
            <div className="DAT_AddNew_Main_Content_Detail_Title">
              Thêm Tài Khoản
            </div>

            <div className="DAT_AddNew_Main_Content_Detail_Content">
              <form
                className="DAT_AddNew_Main_Content_Detail_Content_Form"
                onSubmit={(e) => handleSubmit(e)}
              >
                <div className="DAT_AddNew_Main_Content_Detail_Content_Form_Row">
                  <div className="DAT_AddNew_Main_Content_Detail_Content_Form_Row_Item">
                    <div className="DAT_AddNew_Main_Content_Detail_Content_Form_Row_Item_Label">
                      Tài Khoản
                    </div>
                    <input
                      type="text"
                      placeholder="Tài Khoản"
                      ref={username}
                      required
                    />
                  </div>

                  <div className="DAT_AddNew_Main_Content_Detail_Content_Form_Row_Item">
                    <div className="DAT_AddNew_Main_Content_Detail_Content_Form_Row_Item_Label">
                      Email
                    </div>
                    <input
                      type="email"
                      placeholder="Email"
                      ref={email}
                      required
                    />
                  </div>
                </div>

                <div className="DAT_AddNew_Main_Content_Detail_Content_Form_Row">
                  <div className="DAT_AddNew_Main_Content_Detail_Content_Form_Row_Item">
                    <div className="DAT_AddNew_Main_Content_Detail_Content_Form_Row_Item_Label">
                      Mật Khẩu
                    </div>
                    <input
                      type="password"
                      placeholder="Nhập Mật Khẩu"
                      ref={password}
                      required
                    />
                  </div>
                </div>

                <div className="DAT_AddNew_Main_Content_Detail_Content_Form_Row">
                  <div className="DAT_AddNew_Main_Content_Detail_Content_Form_Row_Item">
                    <div className="DAT_AddNew_Main_Content_Detail_Content_Form_Row_Item_Label">
                      Xác Nhận Mật Khẩu
                    </div>
                    <input
                      type="password"
                      placeholder="Nhập Lại Mật Khẩu"
                      ref={repassword}
                      required
                    />
                  </div>
                </div>

                <div className="DAT_AddNew_Main_Content_Detail_Content_Form_Row">
                  <div className="DAT_AddNew_Main_Content_Detail_Content_Form_Row_Item">
                    <div className="DAT_AddNew_Main_Content_Detail_Content_Form_Row_Item_Label">
                      Tên
                    </div>
                    <input
                      type="text"
                      placeholder="Nhập Tên"
                      ref={name}
                      required
                    />
                  </div>
                </div>

                <button className="DAT_AddNew_Main_Content_Detail_Content_Form_Button">
                  Thêm
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
