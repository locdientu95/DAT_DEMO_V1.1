import React from "react";
import "./Account.scss";

export default function AddNew() {
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
              <div className="DAT_AddNew_Main_Content_Detail_Content_Form">
                <div className="DAT_AddNew_Main_Content_Detail_Content_Form_Row">
                  <div className="DAT_AddNew_Main_Content_Detail_Content_Form_Row_Item">
                    <div className="DAT_AddNew_Main_Content_Detail_Content_Form_Row_Item_Label">
                      Username
                    </div>
                    <input type="text" placeholder="Mật Khẩu Hiện Tại" />
                  </div>
                </div>

                <div className="DAT_AddNew_Main_Content_Detail_Content_Form_Row">
                  <div className="DAT_AddNew_Main_Content_Detail_Content_Form_Row_Item">
                    <div className="DAT_AddNew_Main_Content_Detail_Content_Form_Row_Item_Label">
                      Email
                    </div>
                    <input type="text" placeholder="Mật Khẩu Mới" />
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
                    />
                  </div>
                </div>

                <button className="DAT_AddNew_Main_Content_Detail_Content_Form_Button">
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
