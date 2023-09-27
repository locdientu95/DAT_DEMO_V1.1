import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { EnvContextProvider } from "./components/Context/EnvContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <EnvContextProvider>
      <App />
    </EnvContextProvider>
  </React.StrictMode>
);
