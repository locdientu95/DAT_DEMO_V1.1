import React, { useEffect, useRef, useState } from "react";
import "./Account.scss";
import axios from "axios";
import { signal } from "@preact/signals-react";

export const img = signal("");
export const preimg = signal("");
export default function Info() {
  const userName = useRef("");
  const handleUserName = () => {};

  const mail = useRef("");
  const handleMail = () => {};

  var address = useRef("");
  const handleAddress = () => {};

  const phone = useRef("");
  const handlePhone = () => {};

  const birth = useRef("");
  const handleBirth = () => {};

  const [image, setImage] = useState();
  const [size, setSize] = useState();
  const [allImage, setAllImage] = useState();
  var data = JSON.parse(localStorage.getItem("data"));
  const [usr, setUsr] = useState(data.user);
  const convertToBase64 = (e) => {
    var reader = new FileReader();
    if (e.target.files[0].size < 800000 && e.target.files[0].size > 0) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        setAllImage(reader.result);
        setImage(reader.result);
        setSize(e.target.files[0].size);
      };
    } else {
      alert("File nặng quá");
      setSize(e.target.files[0].size);
      reader.onerror = (error) => {};
    }
  };

  const handleUpload = () => {
    if (size < 800000 && size > 0) {
      axios.post(
        process.env.REACT_APP_API_URL + "/UpdateImage",
        { username: usr, base64: image },
        { credential: true },
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      img.value = image;
      preimg.value = "";
      alert("Uploaded");
    } else {
      alert("File nặng, không up được");
    }
  };

  useEffect(() => {
    axios
      .post(
        process.env.REACT_APP_API_URL + "/getimg",
        {
          username: usr,
        },
        {
          credential: true,
        }
      )
      .then((res) => {
        setAllImage(res.data.data.avatar);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                src={allImage}
                alt=""
                style={{ height: "160px", width: "160px", borderRadius: "50%" }}
              />
              <div className="DAT_Info_Main_Content_Picture_Content_Text">
                JPG hoặc PNG, tối đa 1MB
              </div>
              <button
                className="DAT_Info_Main_Content_Picture_Content_Button"
                onClick={() => document.querySelector(".inputfile").click()}
              >
                Chọn ảnh đại diện mới
              </button>
              <input
                accept="image/+"
                type="file"
                className="inputfile"
                onChange={convertToBase64}
                hidden
              />
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
                  onClick={() => handleUpload()}
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
