import React, { useContext, useEffect } from "react";
import "./Account.scss";
import { EnvContext } from "../Context/EnvContext";
import DataTable from "react-data-table-component";
import { useState } from "react";
import axios from "axios";
import { IoTrashOutline } from "react-icons/io5";

export default function UserList() {
  const { register, envDispatch } = useContext(EnvContext);
  const [data, setdata] = useState([]);
  // const [userName, setuserName] = useState([]);

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

  const paginationComponentOptions = {
    rowsPerPageText: "Số hàng",
    rangeSeparatorText: "đến",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Tất cả",
  };

  const handleDelete = (e) => {
    var newData = data;
    newData = newData.filter((data) => data.username !== e.currentTarget.id);

    axios
      .post(
        process.env.REACT_APP_API_URL + "/delete",
        { username: e.currentTarget.id },
        { credential: true }
      )
      .then((res) => {
        envDispatch({
          type: "SET_REGISTER",
          payload: newData,
        });
      });
  };

  return (
    <div className="DAT_UserList">
      <div className="DAT_UserList_Detail">
        <div className="DAT_UserList_Detail_Title">Danh Sách Người Dùng</div>

        <div className="DAT_UserList_Detail_Content">
          <DataTable
            columns={user}
            data={data}
            pagination
            paginationComponentOptions={paginationComponentOptions}
          />
        </div>
      </div>
    </div>
  );
}
