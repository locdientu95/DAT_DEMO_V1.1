import React, { useState } from "react";
import "./index.scss";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Sidebar from "./components/Sidebar/Sidebar";
import Automation from "./components/Automation/Automation"
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
import  {BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
              <Route path="/Automation" element={<Automation></Automation>} />
              <Route path="/SolarEnergy" element={<SolarEnergy></SolarEnergy>} />
              <Route path="/Elevator" element={<Elevator></Elevator>} />
              <Route path="/UPS" element={<UPS></UPS>} />
              <Route path="/Location" element={<Location></Location>} />
              <Route path="/Notification" element={<Notification></Notification>} />
              <Route path="/SMS" element={<SMS></SMS>} />
              <Route path="/ErrorReport" element={<ErrorReport></ErrorReport>} />
              <Route path="/ExportReport" element={<ExportReport></ExportReport>} />
              <Route path="/Account" element={<Account></Account>} />
              <Route path="/DeviceSetting" element={<Device></Device>} />
              <Route path="/DATGroup" element={<DATGroup></DATGroup>} />
            </Routes>
        </div>
      </div>
    </Router>
  );
}
