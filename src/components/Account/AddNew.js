import React from "react";
import "./Account.scss";
import { useRef } from "react";

export default function AddNew() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const repassword = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      username.current.value,
      email.current.value,
      password.current.value,
      repassword.current.value
    );
  };

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
                      Username
                    </div>
                    <input
                      type="text"
                      placeholder="Username"
                      ref={username}
                      required
                    />
                  </div>
                </div>

                <div className="DAT_AddNew_Main_Content_Detail_Content_Form_Row">
                  <div className="DAT_AddNew_Main_Content_Detail_Content_Form_Row_Item">
                    <div className="DAT_AddNew_Main_Content_Detail_Content_Form_Row_Item_Label">
                      Email
                    </div>
                    <input
                      type="email"
                      placeholder="Mật Khẩu Mới"
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
                      placeholder="Nhập Lại Mật Khẩu Mới"
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
                      placeholder="Nhập Lại Mật Khẩu Mới"
                      ref={repassword}
                      required
                    />
                  </div>
                </div>

                <button className="DAT_AddNew_Main_Content_Detail_Content_Form_Button">
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
