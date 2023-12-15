import React, { useRef } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
// import axios from "axios";

export default function AddUser() {
  const userName = useRef();
  const password = useRef();

  return (
    <div className="DAT_AddUser">
      <div className="DAT_AddUser-Container">
        <div className="DAT_AddUser-Container-Title">
          <span>Đăng Ký</span>
        </div>

        <form
          className="DAT_AddUser-Container-Main"
          //   onSubmit={(e) => handleLogin(e)}
        >
          <div className="DAT_AddUser-Container-Main-Username1">
            <div className="DAT_AddUser-Container-Main-Username1-1">
              <div className="DAT_AddUser-Container-Main-Username1-1-Tit">
                Email
              </div>
              <input
                type="text"
                placeholder="Email"
                //   ref={userName}
                required
              />
            </div>

            <div className="DAT_AddUser-Container-Main-Username1-1">
              <div className="DAT_AddUser-Container-Main-Username1-1-Tit">
                Tên Đăng Nhập
              </div>
              <input
                type="text"
                placeholder="Tên Đăng Nhập"
                //   ref={userName}
                required
              />
            </div>
          </div>

          <div className="DAT_AddUser-Container-Main-Password">
            <div className="DAT_AddUser-Container-Main-Password-Tit">
              Mật Khẩu
            </div>
            <input
              type="password"
              placeholder="Mật Khẩu"
              ref={password}
              required
            />
          </div>

          <div className="DAT_AddUser-Container-Main-Password">
            <div className="DAT_AddUser-Container-Main-Password-Tit">
              Xác Nhận Mật Khẩu
            </div>
            <input
              type="password"
              placeholder="Xác Nhận Mật Khẩu"
              //   ref={password}
              required
            />
          </div>

          <div className="DAT_AddUser-Container-Main-Username">
            <div className="DAT_AddUser-Container-Main-Username-Tit">Tên</div>
            <input type="text" placeholder="Tên" ref={userName} required />
          </div>

          <div className="DAT_AddUser-Container-Main-Button">
            <button className="DAT_AddUser-Container-Main-Button-Login">
              Đăng Ký
            </button>
          </div>
        </form>

        <Link to={"/Login"} style={{ textDecoration: "none", color: "black" }}>
          <div className="DAT_AddUser-Container-Footer">
            <span>Đã có tài khoản? Đăng nhập ngay!</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
