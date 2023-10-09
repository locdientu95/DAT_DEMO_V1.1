import { createContext, useReducer } from "react";
import EnvReducer, { INITSTATE } from "./EnvReducer";

export const EnvContext = createContext(INITSTATE);

export const EnvContextProvider = ({ children }) => {
  const [state, envDispatch] = useReducer(EnvReducer, INITSTATE);

  return (
    <EnvContext.Provider
      value={{
        status: state.status,
        button: state.button,
        bardata: state.bardata,
        gauge: state.gauge,
        slider: state.slider,
        type: state.type,
        switchtoggle: state.switchtoggle,
        tablepro: state.tablepro,
        number: state.number,
        lamp: state.lamp,
        barchart: state.barchart,
        numberh: state.numberh,
        register: state.register,
        login: state.login,
        envDispatch,
      }}
    >
      {children}
    </EnvContext.Provider>
  );
};
