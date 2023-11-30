import React, { useContext } from "react";
import "./Account.scss";
import { useRef } from "react";
import { EnvContext } from "../Context/EnvContext";
import { useEffect } from "react";
import axios from "axios";

export default function AddNew() {
  const { register, envDispatch } = useContext(EnvContext);

  const username = useRef();
  const email = useRef();
  const password = useRef();
  const repassword = useRef();
  const name = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    var newData = register;
    newData = newData.filter(
      (newData) =>
        newData.username === username.current.value ||
        newData.email === email.current.value
    );

    if (password.current.value === repassword.current.value) {
      if (newData.length) {
        alert("Tài khoản hoặc email đã tồn tại");
      } else {
        // var pushData = register;
        // pushData = [
        //   ...pushData,
        //   {
        //     username: username.current.value,
        //     email: email.current.value,
        //     password: repassword.current.value,
        //     name: name.current.value,
        //     role: "user",
        //   },
        // ];

        // envDispatch({
        //   type: "SET_REGISTER",
        //   payload: pushData,
        // });

        axios
          .post(process.env.REACT_APP_API_URL + "/addUser", {
            username: username.current.value,
            email: email.current.value,
            password: repassword.current.value,
            name: name.current.value,
          })
          .then((res) => {});

        alert("Thêm thành công");

        username.current.value = "";
        email.current.value = "";
        password.current.value = "";
        repassword.current.value = "";
        name.current.value = "";
      }
    } else {
      alert("Mật khẩu không khớp");
    }
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
