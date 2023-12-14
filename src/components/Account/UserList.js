import React, { useContext, useEffect } from "react";
import "./Account.scss";
import { EnvContext } from "../Context/EnvContext";
import DataTable from "react-data-table-component";
import { useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import axios from "axios";

export default function UserList() {
  const { register, envDispatch } = useContext(EnvContext);
  const [data, setdata] = useState([]);
  const [userName, setuserName] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/", { credential: true })
      .then((res) => {
        envDispatch({ type: "SET_REGISTER", payload: res.data.data });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    // {
    //   name: "",
    //   selector: (row) => (
    //     <div
    //       // id={row.username}
    //       onClick={(e) => handleDelete(e)}
    //       style={{ cursor: "pointer", color: "red" }}
    //     >
    //       <IoTrashOutline />
    //     </div>
    //   ),
    //   width: "70px",
    //   center: true,
    // },
  ];

  const handleDelete = (e) => {
    // var newData = data;
    // newData = newData.filter((data) => data.username !== e.currentTarget.id);
    // console.log(e.currentTarget);
    // axios
    //   .delete(
    //     process.env.REACT_APP_API_URL + "/delete",
    //     { username: e.currentTarget.id },
    //     { credential: true }
    //   )
    //   .then((res) => {
    //     envDispatch({
    //       type: "SET_REGISTER",
    //       payload: newData,
    //     });
    //   });
  };

  const handleChange = (e) => {
    // console.log(e.selectedRows[0].username);
    setuserName(e.selectedRows[0].username);
    console.log(userName);
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
                    <DataTable
                      columns={user}
                      data={data}
                      selectableRows
                      selectableRowsSingle
                      // selectableRowSelected={(e) => handleChange()}
                      onSelectedRowsChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
              </div>

              <button onClick={(e) => handleDelete(e)}>xoa</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
