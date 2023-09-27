import React, { useRef } from "react";
import "./Account.scss"

export default function Security() {

    const currentPass = useRef("");
    const handleCurrentPass = () => {
        // console.log("currentPass:", currentPass.current.value);
    };

    const newPass = useRef("");
    const handleNewPass = () => {
        // console.log("newPass:", newPass.current.value);
    };

    const confirmPass = useRef("");
    const handleConfirmPass = () => {
        // console.log("confirmPass:", confirmPass.current.value);
    };

    const handleSave = () => {
        var data = {
            currentPass: currentPass.current.value,
            newPass: newPass.current.value,
            confirmPass: confirmPass.current.value
        };

        if (data.currentPass === "") {
            console.log("thiếu thông tin");
        } else if (data.newPass === "") {
            console.log("thiếu thông tin");
        } else if (data.confirmPass === "") {
            console.log("thiếu thông tin");
        } else {
            console.log("data:", data);
        }
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
                            <div className="DAT_Security_Main_Content_Detail_Content_Form">
                                <div className="DAT_Security_Main_Content_Detail_Content_Form_Row">
                                    <div className="DAT_Security_Main_Content_Detail_Content_Form_Row_Item">                                  
                                        <div className="DAT_Security_Main_Content_Detail_Content_Form_Row_Item_Label"> Mật Khẩu Hiện Tại</div>
                                        <input type="text" placeholder="Mật Khẩu Hiện Tại" onChange={() => handleCurrentPass()} ref={currentPass}/>                           
                                    </div> 
                                </div>

                                <div className="DAT_Security_Main_Content_Detail_Content_Form_Row">
                                    <div className="DAT_Security_Main_Content_Detail_Content_Form_Row_Item"> 
                                        <div className="DAT_Security_Main_Content_Detail_Content_Form_Row_Item_Label"> Mật Khẩu Mới</div>
                                        <input type="text" placeholder="Mật Khẩu Mới" onChange={() => handleNewPass()} ref={newPass}/>
                                    </div>                          
                                </div>

                                <div className="DAT_Security_Main_Content_Detail_Content_Form_Row">
                                    <div className="DAT_Security_Main_Content_Detail_Content_Form_Row_Item">
                                        <div className="DAT_Security_Main_Content_Detail_Content_Form_Row_Item_Label"> Nhập Lại Mật Khẩu Mới</div>
                                        <input type="text" placeholder="Nhập Lại Mật Khẩu Mới" onChange={() => handleConfirmPass()} ref={confirmPass}/>                       
                                    </div>
                                </div>
                                <button className="DAT_Security_Main_Content_Detail_Content_Form_Button" onClick={() => handleSave()}>
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