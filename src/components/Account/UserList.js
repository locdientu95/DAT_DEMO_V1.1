import React, { useContext, useEffect } from "react";
import "./Account.scss";
import { EnvContext } from "../Context/EnvContext";
import DataTable from "react-data-table-component";
import { useState } from "react";
import { IoTrashOutline } from "react-icons/io5";

export default function UserList() {
  const { register, envDispatch } = useContext(EnvContext);
  const [data, setdata] = useState([]);

  useEffect(() => {
    var newData = register;
    newData.map((data, index) => {
      return (data["id"] = index + 1);
    });
    setdata(register);
  }, [register]);

  const user = [
    {
      name: "STT",
      selector: (row) => row.id,
      sortable: true,
      width: "60px",
      center: true,
    },
    {
      name: "Tên tài khoản",
      selector: (row) => row.username,
      center: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      center: true,
    },
    {
      name: "Tên",
      selector: (row) => row.name,
      center: true,
    },
    {
      name: "",
      selector: (row) => (
        <div
          id={row.username}
          onClick={(e) => handleDelete(e)}
          style={{ cursor: "pointer", color: "red" }}
        >
          <IoTrashOutline />
        </div>
      ),
      width: "70px",
      center: true,
    },
  ];

  const handleDelete = (e) => {
    var newData = data;
    newData = newData.filter((data) => data.username !== e.target.id);
    envDispatch({
      type: "SET_REGISTER",
      payload: newData,
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
                    <DataTable columns={user} data={data} />
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
