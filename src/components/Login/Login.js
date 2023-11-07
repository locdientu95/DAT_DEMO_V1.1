import React, { useContext, useRef } from "react";
import "./Login.scss";
import { EnvContext } from "../Context/EnvContext";
// import Register from "../Context/Register.json";

export default function Login() {
  const { register, envDispatch } = useContext(EnvContext);

  const userName = useRef();
  const password = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('data', JSON.stringify({user: userName.current.value, pwd: password.current.value}));
    var newInfo = register;
    newInfo = newInfo.filter(
      (newInfo) =>
        newInfo.username === userName.current.value &&
        newInfo.password === password.current.value
    );

    if (newInfo.length) {
      envDispatch({
        type: "SET_LOGIN",
        payload: {
          username: newInfo[0].username,
          mail: newInfo[0].email,
          status: true,
        },
      });
    } else {
      alert("Wrong Username or Password");
    }
  };

  return (
    <div className="DAT_Login">
      <div className="DAT_Login-Container">
        <div className="DAT_Login-Container-Title">
          <span>Login</span>
        </div>

        <form
          className="DAT_Login-Container-Main"
          onSubmit={(e) => handleLogin(e)}
        >
          <div className="DAT_Login-Container-Main-Username">
            <div className="DAT_Login-Container-Main-Username-Tit">
              Username
            </div>
            <input
              type="text"
              placeholder="Username"
              defaultValue="taingo"
              ref={userName}
              required
            />
          </div>

          <div className="DAT_Login-Container-Main-Password">
            <div className="DAT_Login-Container-Main-Password-Tit">
              Password
            </div>
            <input
              type="password"
              placeholder="Password"
              
              ref={password}
              required
            />
          </div>

          <div className="DAT_Login-Container-Main-Checkbox">
            <input type="checkbox" />
            <div>Remember Password</div>
          </div>

          <div className="DAT_Login-Container-Main-Button">
            <div className="DAT_Login-Container-Main-Button-Text">
              Forgot password?
            </div>
            <button className="DAT_Login-Container-Main-Button-Login">
              Login
            </button>
          </div>
        </form>

        <div className="DAT_Login-Container-Footer">
          <span>Need an account? Sign up!</span>
        </div>
      </div>
    </div>
  );
}
