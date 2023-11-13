import React, { useRef } from "react";
import "./Account.scss";

export default function Info() {
  const userName = useRef("");
  const handleUserName = () => {};

  const mail = useRef("");
  const handleMail = () => {};

  const address = useRef("");
  const handleAddress = () => {};

  const phone = useRef("");
  const handlePhone = () => {};

  const birth = useRef("");
  const handleBirth = () => {};

  const handleSave = () => {
    var data = {
      username: userName.current.value,
      mail: mail.current.value,
      address: address.current.value,
      phone: phone.current.value,
      birth: birth.current.value,
    };

    if (data.username === "") {
      console.log("thiếu thông tin");
    } else if (data.mail === "") {
      console.log("thiếu thông tin");
    } else if (data.address === "") {
      console.log("thiếu thông tin");
    } else if (data.phone === "") {
      console.log("thiếu thông tin");
    } else if (data.birth === "") {
      console.log("thiếu thông tin");
    } else {
      console.log("data:", data);
    }
  };

  return (
    <div className="DAT_Info">
      <div className="DAT_Info_Main">
        {/* Content */}
        <div className="DAT_Info_Main_Content">
          {/* Content */}

          {/* Profile Picture */}
          <div className="DAT_Info_Main_Content_Picture">
            <div className="DAT_Info_Main_Content_Picture_Title">
              Ảnh Đại Diện
            </div>
            <div className="DAT_Info_Main_Content_Picture_Content">
              <img
                alt=""
                src="./DAT_Pictures/user1.png"
                style={{ height: "160px", borderRadius: "50%" }}
              />
              <div className="DAT_Info_Main_Content_Picture_Content_Text">
                JPG hoặc PNG, tối đa 5MB
              </div>
              <button className="DAT_Info_Main_Content_Picture_Content_Button">
                Chọn ảnh đại diện mới
              </button>
            </div>
          </div>

          {/* Profile Detail */}
          <div className="DAT_Info_Main_Content_Detail">
            <div className="DAT_Info_Main_Content_Detail_Title">
              Thông Tin Tài Khoản
            </div>
            <div className="DAT_Info_Main_Content_Detail_Content">
              <div className="DAT_Info_Main_Content_Detail_Content_Form">
                <div className="DAT_Info_Main_Content_Detail_Content_Form_Row">
                  <div className="DAT_Info_Main_Content_Detail_Content_Form_Row_Item">
                    <div className="DAT_Info_Main_Content_Detail_Content_Form_Row_Item_Label">
                      {" "}
                      Username
                    </div>
                    <input
                      type="text"
                      placeholder="Username"
                      onChange={() => handleUserName()}
                      ref={userName}
                    />
                  </div>

                  <div className="DAT_Info_Main_Content_Detail_Content_Form_Row_Item">
                    <div className="DAT_Info_Main_Content_Detail_Content_Form_Row_Item_Label">
                      {" "}
                      Email
                    </div>
                    <input
                      type="text"
                      placeholder="Email@gmail.com"
                      onChange={() => handleMail()}
                      ref={mail}
                    />
                  </div>
                </div>

                <div className="DAT_Info_Main_Content_Detail_Content_Form_Row">
                  <div className="DAT_Info_Main_Content_Detail_Content_Form_Row_Item">
                    <div className="DAT_Info_Main_Content_Detail_Content_Form_Row_Item_Label">
                      {" "}
                      Địa chỉ
                    </div>
                    <input
                      type="text"
                      placeholder="Địa chỉ"
                      onChange={() => handleAddress()}
                      ref={address}
                    ></input>
                  </div>
                </div>

                <div className="DAT_Info_Main_Content_Detail_Content_Form_Row">
                  <div className="DAT_Info_Main_Content_Detail_Content_Form_Row_Item">
                    <div className="DAT_Info_Main_Content_Detail_Content_Form_Row_Item_Label">
                      {" "}
                      Số điện thoại
                    </div>
                    <input
                      type="text"
                      placeholder="Số điện thoại"
                      onChange={() => handlePhone()}
                      ref={phone}
                    />
                  </div>

                  <div className="DAT_Info_Main_Content_Detail_Content_Form_Row_Item">
                    <div className="DAT_Info_Main_Content_Detail_Content_Form_Row_Item_Label">
                      {" "}
                      Ngày sinh
                    </div>
                    <input
                      type="text"
                      placeholder="Ngày sinh"
                      onChange={() => handleBirth()}
                      ref={birth}
                    />
                  </div>
                </div>

                <button
                  className="DAT_Info_Main_Content_Detail_Content_Form_Button"
                  onClick={() => handleSave()}
                >
                  Lưu thay đổi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
