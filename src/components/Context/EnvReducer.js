export const INITSTATE = {
  status: false,
  gauge: {
    label: "text",
    labelcolor: "black",
    labelsize: "20px",

    unit: "hz",
    valuecolor: "black",
    valuesize: "20px",

    min: 0,
    max: 100,

    width: "500px",
    height: "300px",
    segment: 10,

    needlecolor: "#ff0000",
    startcolor: "#60d277",
    endcolor: "#dc0909",

    cal: "30",
  },
  slider: {},

  button: {
    btntype: "Inching",
    coloron: "#000000",
    coloroff: "#000000",
    bgon: "#008000",
    bgoff: "#ff0000",
    texton: "Bật",
    textoff: "Tắt",
    cal: "0",
    w: "161px",
    h: "83px",
    sizeon: "10px",
    sizeoff: "16px",
    txtcoloron: "#000000",
    txtcoloroff: "#000000",
    type: "button",
  },

  bardata: {
    id: 1,
    min: "0",
    max: "100",
    color: "blue",
    scale: 25,
    realdata: 30,
    type: "bar",
    w: "100px",
    h: "400px",
    bgcolor: "#808080",
    realdatacolor: "#0000ff",
  },

  type: "Button",
};

const EnvReducer = (state, action) => {
  switch (action.type) {
    case "SET_STATUS":
      return {
        ...state,
        status: action.payload,
      };
    case "SET_GAUGE":
      return {
        ...state,
        gauge: action.payload,
      };
    case "SET_SLIDER":
      return {
        ...state,
        slider: action.payload,
      };
      case "SET_BTN":
      return {
        ...state,
        button: action.payload,
      };
    case "SET_BARDATA":
      return {
        ...state,
        bar: action.payload,
      };
    case "SET_TYPE":
      return {
        ...state,
        type: action.payload,
      };
    default:
      throw new Error("Unexpected action");
  }
};

export default EnvReducer;
