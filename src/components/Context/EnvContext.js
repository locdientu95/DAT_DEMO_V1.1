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
        project: state.project,
        device: state.device,
        errsetting: state.errsetting,
        errorlogs: state.errorlogs,
        sidebarid: state.sidebarid,
        pjdata: state.pjdata,
        pjm: state.pjm,
        dvdata: state.dvdata,
        dvm: state.dvm,
        projectfilter:state.projectfilter,
        errornoti: state.errornoti,
        envDispatch,
      }}
    >
      {children}
    </EnvContext.Provider>
  );
};
