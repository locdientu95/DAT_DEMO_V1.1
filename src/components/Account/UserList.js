import React, { useContext, useEffect, useRef } from "react";
import "./Account.scss";
import { EnvContext } from "../Context/EnvContext";

export default function UserList() {
  const { register, envDispatch } = useContext(EnvContext);

  const handleDelete = (e) => {
    delete register[e.target.parentNode.parentNode.firstChild.innerHTML];
    console.log(register);

    envDispatch({
      type: "SET_REGISTER",
      payload: register,
    });
  };

  return (
    <div className="DAT_UserList">
      <div className="DAT_UserList_Main">
        {/* Content */}
        <div className="DAT_UserList_Main_Content">
          {/* Profile Detail */}
          <div className="DAT_UserList_Main_Content_Detail">
            <div className="DAT_UserList_Main_Content_Detail_Title">
              Danh Sách Người Dùng
            </div>

            <div className="DAT_UserList_Main_Content_Detail_Content">
              <div className="DAT_UserList_Main_Content_Detail_Content_Form">
                <div className="DAT_UserList_Main_Content_Detail_Content_Form_Row">
                  <div className="DAT_UserList_Main_Content_Detail_Content_Form_Row_Item">
                    <table>
                      <tbody>
                        <tr>
                          <th>STT</th>
                          <th>Username</th>
                          <th>Email</th>
                          <th>Tên</th>
                        </tr>
                        {Object.entries(register).map(([key]) => (
                          <tr key={key}>
                            <td>{register[key].id}</td>
                            <td>{register[key].username}</td>
                            <td>{register[key].email}</td>
                            <td>{register[key].name}</td>
                            <td>
                              <button onClick={(e) => handleDelete(e)}>
                                Xóa
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
