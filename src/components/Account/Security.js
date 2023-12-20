import React, { useRef } from "react";
import "./Account.scss";
import axios from "axios";

export default function Security() {
  const username = useRef();
  const currentPass = useRef();
  const newPass = useRef();
  const confirmPass = useRef();

  const handleSave = (e) => {
    e.preventDefault();

    if (newPass.current.value !== confirmPass.current.value) {
      alert("Mật khẩu mới không trùng khớp");
    } else {
      axios
        .put(
          process.env.REACT_APP_API_URL + "/changePassword",
          {
            username: username.current.value,
            password: confirmPass.current.value,
            checkpassword: currentPass.current.value,
          },
          { credentials: true }
        )
        .then((res) => {
          if (res.data.status === false) {
            alert(res.data.mes);
          } else {
            alert("Đổi mật khẩu thành công");
            window.location.reload();
          }
        });
    }

    username.current.value = "";
    currentPass.current.value = "";
    newPass.current.value = "";
    confirmPass.current.value = "";
  };

  return (
    <div className="DAT_Security">
      <div className="DAT_Security_Main">
        {/* Content */}
        <div className="DAT_Security_Main_Content">
          {/* Profile Detail */}
          <div className="DAT_Security_Main_Content_Detail">
            <div className="DAT_Security_Main_Content_Detail_Title">
              Đổi Mật Khẩu
            </div>
            <div className="DAT_Security_Main_Content_Detail_Content">
              <form
                className="DAT_Security_Main_Content_Detail_Content_Form"
                onSubmit={(e) => handleSave(e)}
              >
                <div className="DAT_Security_Main_Content_Detail_Content_Form_Row">
                  <div className="DAT_Security_Main_Content_Detail_Content_Form_Row_Item">
                    <div className="DAT_Security_Main_Content_Detail_Content_Form_Row_Item_Label">
                      Username
                    </div>
                    <input
                      type="text"
                      placeholder="Nhập Username"
                      ref={username}
                      required
                    />
                  </div>
                </div>

                <div className="DAT_Security_Main_Content_Detail_Content_Form_Row">
                  <div className="DAT_Security_Main_Content_Detail_Content_Form_Row_Item">
                    <div className="DAT_Security_Main_Content_Detail_Content_Form_Row_Item_Label">
                      Mật Khẩu Cũ
                    </div>
                    <input
                      type="password"
                      placeholder="Mật Khẩu Cũ"
                      ref={currentPass}
                      required
                    />
                  </div>
                </div>

                <div className="DAT_Security_Main_Content_Detail_Content_Form_Row">
                  <div className="DAT_Security_Main_Content_Detail_Content_Form_Row_Item">
                    <div className="DAT_Security_Main_Content_Detail_Content_Form_Row_Item_Label">
                      Mật Khẩu Mới
                    </div>
                    <input
                      type="password"
                      placeholder="Mật Khẩu Mới"
                      ref={newPass}
                      required
                    />
                  </div>
                </div>

                <div className="DAT_Security_Main_Content_Detail_Content_Form_Row">
                  <div className="DAT_Security_Main_Content_Detail_Content_Form_Row_Item">
                    <div className="DAT_Security_Main_Content_Detail_Content_Form_Row_Item_Label">
                      Xác Nhận Mật Khẩu Mới
                    </div>
                    <input
                      type="password"
                      placeholder="Nhập Lại Mật Khẩu Mới"
                      ref={confirmPass}
                      required
                    />
                  </div>
                </div>

                <button className="DAT_Security_Main_Content_Detail_Content_Form_Button">
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
