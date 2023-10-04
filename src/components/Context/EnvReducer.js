export const INITSTATE = {
  status: false,
  gauge: {
    label: "text",
    labelsize: "20px",
    labelcolor: "black",

    unit: "hz",
    valuesize: "20px",
    valuecolor: "black",

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

  slider: {
    min: 0,
    max: 100,
    width: "500",
    height: "20",
    scale: 5,
    ori: "horizontal",
    thumb: { bgcolor: "#1976d2", border: "0" },
    track: { bgcolor: "#1976d2", border: "0" },
    rail: { bgcolor: "#1976d2" },
  },

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
    sizeon: "16px",
    sizeoff: "16px",
    txtcoloron: "#000000",
    txtcoloroff: "#000000",
    type: "button",
    radius: "10px",
  },

  bardata: {
    id: 1,
    min: "0",
    max: "100",
    color: "blue",
    scale: 5,
    realdata: 30,
    type: "bar",
    w: "100px",
    h: "400px",
    bgcolor: "#808080",
    realdatacolor: "#0000ff",
    type: "vertical",
  },

  switchtoggle: {
    texton: "Bật",
    textoff: "Tắt",
    bgon: "#ffffff",
    bgoff: "#ffffff",
    txtcoloron: "#000000",
    txtcoloroff: "#000000",
    textsize: 20,
    w: "450",
    h: "150",
    border: "6",
    borderradius: "20",
    bordercolor: "#04da97",
    borderradiusicon: "0",
  },

  lamp: {
    value: 0,
    data: {
      0: { text: "hello", color: "#ff0000", bgcolor: "#00FF04" },
      1: { text: "world", color: "#0000ff", bgcolor: "#ff0000" },
    },
    width: "100",
    height: "30",
    fontsize: "30",
    border: "2",
    borderradius: "10",
    bordercolor: "#000000",
    posi: "center",
  },

  tablepro: {
    width: "400px",
    height: "250px",
    data: [
      {
        id: 1,
        val1: 0,
        val2: 0,
      },
      {
        id: 2,
        val1: 0,
        val2: 0,
      },
      {
        id: 3,
        val1: 0,
        val2: 0,
      },
    ],
    head: [
      {
        name: "STT",
        code: "id",
      },
      {
        name: "Giá Trị 1",
        code: "val1",
      },
      {
        name: "Giá Trị 2",
        code: "val2",
      },
    ],
    row: 3,
    col: 3,
  },

  number: {
    width: "100",
    height: "30",
    unit: "Hz",
    border: "2",
    bordercolor: "#000000",
    borderradius: "10",
    bgcolor: "#ffffff",
    textcolor: "#000000",
    fontsize: "20",
    type: "false",
    posi: "center",
  },

  barchart: {
    dataset: [
      {
        london: 59,
        paris: 57,
        newYork: 86,
        seoul: 21,
        month: "Jan",
      },
      {
        london: 50,
        paris: 52,
        newYork: 78,
        seoul: 28,
        month: "Fev",
      },
      {
        london: 47,
        paris: 53,
        newYork: 106,
        seoul: 41,
        month: "Mar",
      },
      {
        london: 54,
        paris: 56,
        newYork: 92,
        seoul: 73,
        month: "Apr",
      },
      {
        london: 57,
        paris: 69,
        newYork: 92,
        seoul: 99,
        month: "May",
      },
      {
        london: 60,
        paris: 63,
        newYork: 103,
        seoul: 144,
        month: "June",
      },
      {
        london: 59,
        paris: 60,
        newYork: 105,
        seoul: 319,
        month: "July",
      },
      {
        london: 65,
        paris: 60,
        newYork: 106,
        seoul: 249,
        month: "Aug",
      },
      {
        london: 51,
        paris: 51,
        newYork: 95,
        seoul: 131,
        month: "Sept",
      },
      {
        london: 60,
        paris: 65,
        newYork: 97,
        seoul: 55,
        month: "Oct",
      },
      {
        london: 119,
        paris: 64,
        newYork: 76,
        seoul: 48,
        month: "Nov",
      },
      {
        london: 61,
        paris: 70,
        newYork: 103,
        seoul: 25,
        month: "Dec",
      },
    ],
    w: "500",
    h: "300",
    labelsize: "10px",
    valuestep: 20,
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
    case "SET_SLIDER":
      return {
        ...state,
        slider: action.payload,
      };
    case "SET_TYPE":
      return {
        ...state,
        type: action.payload,
      };
    case "SET_TOGGLE":
      return {
        ...state,
        switchtoggle: action.payload,
      };
    case "SET_TABLEPRO":
      return {
        ...state,
        tablepro: action.payload,
      };
    case "SET_NUMBER":
      return {
        ...state,
        number: action.payload,
      };
    case "SET_LAMP":
      return {
        ...state,
        lamp: action.payload,
      };
    case "SET_BARCHART":
      return {
        ...state,
        barchart: action.payload,
      };
    default:
      throw new Error("Unexpected action");
  }
};

export default EnvReducer;
