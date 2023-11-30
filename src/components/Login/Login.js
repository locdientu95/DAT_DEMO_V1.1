import React, { useRef } from "react";
import "./Login.scss";
import axios from "axios";

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
