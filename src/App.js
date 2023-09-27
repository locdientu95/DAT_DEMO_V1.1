import React, { useState } from "react";
import "./index.scss";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Sidebar from "./components/Sidebar/Sidebar";
import Account from "./components/Account/Account";
//import DeviceSetting from "./components/DeviceSetting/DeviceSetting";
import  {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Device from "./components/Setting/Device";

var data = [
  {
    id: 1,
    name: "Huu Huynh",
    mail: "huuhuynh@gmail.com"
  },
  {
    id: 2,
    name: "Tai Ngo",
    mail: "taingo@gmail.com"
  },
  {
    id: 3,
    name: "Phu Nguyen",
    mail: "phunguyen@gmail.com"
  }
];

export default function App() {

  const [info, setInfo] = useState("unknown");
  const [mail, setMail] = useState("unknown@gmail.com");

  useState(() => {
    var newInfo = data
    newInfo = newInfo.filter(newInfo => newInfo.id === 3)
    // newInfo = newInfo.filter(newInfo => newInfo.id !== 3)

    setInfo(newInfo[0].name)
    setMail(newInfo[0].mail)
  }, [])

  return (
    <Router>
      <div className="DAT_Container">
        <Header name={info} mail={mail} />
        <div className="DAT_Container-Main">
          <Sidebar name={info} mail={mail} />
          
            <Routes>
              <Route exact path="/" element={<Content></Content>} />
              <Route path="/Account" element={<Account></Account>} />
              <Route path="/DeviceSetting" element={<Device></Device>} />
            </Routes>
        </div>
      </div>
    </Router>
  );
}
