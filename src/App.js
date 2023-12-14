import React, { useEffect } from "react";
import "./index.scss";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Sidebar from "./components/Sidebar/Sidebar";
import Automation from "./components/Automation/Automation";
import SolarEnergy from "./components/SolarEnergy/Solar";
import Elevator from "./components/Elevator/Elevator";
import UPS from "./components/UPS/UPS";
import Location from "./components/Location/Location";
import Notification from "./components/Notification/Notification";
import SMS from "./components/SMS/SMS";
import ErrorReport from "./components/ErrorReport/ErrorReport";
import ExportReport from "./components/ExportReport/ExportReport";
import Account from "./components/Account/Account";
import Device from "./components/Setting/Device";
import DATGroup from "./components/DATGroup/DATGroup";
import Login from "./components/Login/Login";
import Configuration from "./components/Configuration/Configuration";
import ErrorSetting from "./components/ErrorSetting/ErrorSetting";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { EnvContext } from "./components/Context/EnvContext";
import axios from "axios";
import { signal } from "@preact/signals-react";

export const name = signal([]);

export default function App() {
  const { login, envDispatch } = useContext(EnvContext);

  useEffect(() => {
    var data = JSON.parse(localStorage.getItem("data"));
    if (data !== null) {
      axios
        .post(
          process.env.REACT_APP_API_URL + "/Login",
          {
            username: data.user,
            password: data.pwd,
          },
          { credential: true }
        )
        .then((res) => {
          if(res.data.status == false){
            alert("Sai mật khâu")
          }else{
            name[0] = res.data;
            envDispatch({
              type: "SET_LOGIN",
              payload: {
                username: res.data.username,
                mail: res.data.email,
                avatar: res.data.avatar,
                status: true,
              },
            });
            
          }
        });
    } else {
      envDispatch({
        type: "SET_LOGIN",
        payload: {
          username: "",
          mail: "",
          avatar: "",
          status: false,
        },
      });
    }
    console.log("hello")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <div className="DAT_Container">
        {login.status ? (
          <Header name={login.username} mail={login.mail} />
        ) : (
          <></>
        )}
        <div className="DAT_Container-Main">
          {login.status ? (
            <Sidebar name={login.username} mail={login.mail} />
          ) : (
            <></>
          )}

          <Routes>
            <Route
              exact
              path="/"
              element={
                login.status ? (
                  <Content name={login.username}></Content>
                ) : (
                  <Login></Login>
                )
              }
            />
            <Route
              path="/Login"
              element={
                login.status ? (
                  <Content name={login.username}></Content>
                ) : (
                  <Login></Login>
                )
              }
            />
            <Route
              path="/Automation"
              element={
                login.status ? (
                  <Automation name={login.username}></Automation>
                ) : (
                  <Login></Login>
                )
              }
            />
            <Route
              path="/SolarEnergy"
              element={
                login.status ? (
                  <SolarEnergy name={login.username}></SolarEnergy>
                ) : (
                  <Login></Login>
                )
              }
            />
            <Route
              path="/Elevator"
              element={
                login.status ? (
                  <Elevator name={login.username}></Elevator>
                ) : (
                  <Login></Login>
                )
              }
            />
            <Route
              path="/UPS"
              element={
                login.status ? (
                  <UPS name={login.username}></UPS>
                ) : (
                  <Login></Login>
                )
              }
            />
            <Route
              path="/Location"
              element={
                login.status ? (
                  <Location name={login.username}></Location>
                ) : (
                  <Login></Login>
                )
              }
            />
            <Route
              path="/Notification"
              element={
                login.status ? (
                  <Notification name={login.username}></Notification>
                ) : (
                  <Login></Login>
                )
              }
            />
            <Route
              path="/SMS"
              element={
                login.status ? (
                  <SMS name={login.username}></SMS>
                ) : (
                  <Login></Login>
                )
              }
            />
            <Route
              path="/ErrorReport"
              element={
                login.status ? (
                  <ErrorReport name={login.username}></ErrorReport>
                ) : (
                  <Login></Login>
                )
              }
            />
            <Route
              path="/ExportReport"
              element={
                login.status ? (
                  <ExportReport name={login.username}></ExportReport>
                ) : (
                  <Login></Login>
                )
              }
            />
            <Route
              path="/Account"
              element={
                login.status ? (
                  <Account name={login.username}></Account>
                ) : (
                  <Login></Login>
                )
              }
            />
            <Route
              path="/DeviceSetting"
              element={
                login.status ? (
                  <Device name={login.username}></Device>
                ) : (
                  <Login></Login>
                )
              }
            />
            <Route
              path="/Configuration"
              element={
                login.status ? (
                  <Configuration name={login.username}></Configuration>
                ) : (
                  <Login></Login>
                )
              }
            />
            <Route
              path="/ErrorSetting"
              element={
                login.status ? (
                  <ErrorSetting name={login.username}></ErrorSetting>
                ) : (
                  <Login></Login>
                )
              }
            />
            <Route
              path="/DATGroup"
              element={
                login.status ? (
                  <DATGroup name={login.username}></DATGroup>
                ) : (
                  <Login></Login>
                )
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
