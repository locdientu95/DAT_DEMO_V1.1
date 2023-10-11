import React, { useRef } from "react";
import "./Account.scss";

export default function Security() {
  const email = useRef();
  const currentPass = useRef();
  const newPass = useRef();
  const confirmPass = useRef();

  const handleSave = (e) => {
    e.preventDefault();

    var data = {
      currentPass: currentPass.current.value,
      newPass: newPass.current.value,
      confirmPass: confirmPass.current.value,
    };

    console.log("data:", data);
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
                      {" "}
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

                <div className="DAT_Security_Main_Content_Detail_Content_Form_Row">
                  <div className="DAT_Security_Main_Content_Detail_Content_Form_Row_Item">
                    <div className="DAT_Security_Main_Content_Detail_Content_Form_Row_Item_Label">
                      {" "}
                      Mật Khẩu Hiện Tại
                    </div>
                    <input
                      type="password"
                      placeholder="Mật Khẩu Hiện Tại"
                      ref={currentPass}
                      required
                    />
                  </div>
                </div>

                <div className="DAT_Security_Main_Content_Detail_Content_Form_Row">
                  <div className="DAT_Security_Main_Content_Detail_Content_Form_Row_Item">
                    <div className="DAT_Security_Main_Content_Detail_Content_Form_Row_Item_Label">
                      {" "}
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
                      {" "}
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
