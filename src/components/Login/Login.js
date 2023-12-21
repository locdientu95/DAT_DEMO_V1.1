import React, { useRef } from "react";
import "./Login.scss";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Login() {
  const userName = useRef();
  const password = useRef();

  const handleLogin = (e) => {
    localStorage.setItem(
      "data",
      JSON.stringify({
        user: userName.current.value,
        pwd: password.current.value,
      })
    );
    axios
      .post(
        process.env.REACT_APP_API_URL + "/Login",
        {
          username: userName.current.value,
          password: password.current.value,
        },
        { credential: true }
      )
      .then((res) => {});
  };

  return (
    <div className="DAT_Login">
      <div className="DAT_Login-Container">
        <div className="DAT_Login-Container-Title">
          <span>Đăng Nhập</span>
        </div>

        <form
          className="DAT_Login-Container-Main"
          onSubmit={(e) => handleLogin(e)}
        >
          <div className="DAT_Login-Container-Main-Username">
            <div className="DAT_Login-Container-Main-Username-Tit">
              Tên Đăng Nhập
            </div>
            <input
              type="text"
              placeholder="Tên Đăng Nhập"
              ref={userName}
              required
            />
          </div>

          <div className="DAT_Login-Container-Main-Password">
            <div className="DAT_Login-Container-Main-Password-Tit">
              Mật Khẩu
            </div>
            <input
              type="password"
              placeholder="Mật Khẩu"
              ref={password}
              required
            />
          </div>

          <div className="DAT_Login-Container-Main-Checkbox">
            <input type="checkbox" />
            <div>Ghi Nhớ Mật Khẩu</div>
          </div>

          <div className="DAT_Login-Container-Main-Button">
            <div className="DAT_Login-Container-Main-Button-Text">
              Quên Mật Khẩu?
            </div>
            <button className="DAT_Login-Container-Main-Button-Login">
              Đăng Nhập
            </button>
          </div>
        </form>

        <Link to="/AddUser" style={{ textDecoration: "none", color: "black" }}>
          <div className="DAT_Login-Container-Footer">
            <span>Chưa có tài khoản? Đăng ký!</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
