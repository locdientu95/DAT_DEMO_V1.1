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
        val_1: 0,
      },
      
    ],
    head: [
      {
        name:"STT",
        code: "id",
      },
      {
        name: "Giá Trị 1",
        code: "val_1",
      },
    ],
    row : 2,
    col: 2,
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
        value1: 59,
        value2: 57,
        xAxis: "seriesA",
      },
      {
        value1: 50,
        value2: 52,
        xAxis: "seriesB",
      },
      {
        value1: 32,
        value2: 19,
        xAxis: "seriesC",
      },
      {
        value1: 32,
        value2: 19,
        xAxis: "seriesD",
      },
    ],
    w: "500",
    h: "300",
    labelsize: "10",
    tickNumb: 5,
    tickmaxstep: 5,
    tickminstep: 2,
    labelname: "Value",
    valuecolor: "#008000",
    series: "Series",
    valuetitle: "value1",
    chartnamefsize: "10px"
  },

  numberh: {
    data: {
      0: { label: "Gia tri 0", value: "0", unit: "unit" },
      1: { label: "Gia tri 1", value: "0", unit: "unit" },
    },
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
    case "SET_NUMBERH":
      return {
        ...state,
        numberh: action.payload,
      };
    default:
      throw new Error("Unexpected action");
  }
};

export default EnvReducer;
