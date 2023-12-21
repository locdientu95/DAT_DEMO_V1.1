import React, { useRef } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import axios from "axios";

export default function AddUser() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const repassword = useRef();
  const name = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (password.current.value.length < 8) {
    //   alert("Độ dài mật khẩu ít nhất phải là 8");
    // } else
    if (password.current.value === repassword.current.value) {
      axios
        .post(process.env.REACT_APP_API_URL + "/addUser", {
          username: username.current.value,
          email: email.current.value,
          password: repassword.current.value,
          name: name.current.value,
        })
        .then((res) => {
          alert(res.data.message);
        });
      username.current.value = "";
      email.current.value = "";
      password.current.value = "";
      repassword.current.value = "";
      name.current.value = "";
    } else {
      alert("Mật khẩu không khớp");
    }
  };

  return (
    <div className="DAT_AddUser">
      <div className="DAT_AddUser-Container">
        <div className="DAT_AddUser-Container-Title">
          <span>Đăng Ký</span>
        </div>

        <form
          className="DAT_AddUser-Container-Main"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="DAT_AddUser-Container-Main-Username1">
            <div className="DAT_AddUser-Container-Main-Username1-1">
              <div className="DAT_AddUser-Container-Main-Username1-1-Tit">
                Email
              </div>
              <input type="text" placeholder="Email" ref={email} required />
            </div>

            <div className="DAT_AddUser-Container-Main-Username1-1">
              <div className="DAT_AddUser-Container-Main-Username1-1-Tit">
                Tên Đăng Nhập
              </div>
              <input
                type="text"
                placeholder="Tên Đăng Nhập"
                ref={username}
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
              ref={repassword}
              required
            />
          </div>

          <div className="DAT_AddUser-Container-Main-Username">
            <div className="DAT_AddUser-Container-Main-Username-Tit">Tên</div>
            <input type="text" placeholder="Tên" ref={name} required />
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
