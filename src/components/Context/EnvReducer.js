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
        name: "STT",
        code: "id",
      },
      {
        name: "Giá Trị 1",
        code: "val_1",
      },
    ],
    row: 2,
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
    chartnamefsize: "10px",
  },

  numberh: {
    data: {
      0: { label: "Gia tri 0", value: "0", unit: "unit" },
      1: { label: "Gia tri 1", value: "0", unit: "unit" },
    },
  },

  login: { username: "unknown", mail: "unknown@gmail.com", status: false },

  register: [
    {
      id: 1,
      username: "admin",
      password: "123456",
      email: "admin@gmail.com",
      role: "admin",
    },
    {
      id: 2,
      username: "huuhuynh",
      password: "huu123",
      email: "huuhuynh@gmail.com",
      role: "user",
    },
    {
      id: 3,
      username: "phunguyen",
      password: "phu123",
      email: "phunguyen@gmail.com",
      role: "user",
    },
    {
      id: 4,
      username: "taingo",
      password: "tai123",
      email: "taingo@gmail.com",
      role: "user",
    },
  ],

  project: [
    {
      projectid: "P01",
      name: "GREEN GROWTH SHOW 2023",
      company: "Công ty Cổ phần Tập đoàn DAT",
      info: "Phố đi bộ Nguyễn Huệ, quận 1, Hình Chí Mô",
      statement: 0, //0: Bật 1:Tắt 2:Bảo trì
      custom: "",
    },
    {
      projectid: "P02",
      name: "YASUO EVENT",
      company: "Công ty TNHH Một Mình Tôi",
      info: "Ngoài rìa thành phố Thủ Đức",
      statement: 1,
      custom: "",
    },
    {
      projectid: "P03",
      name: "PIZZA HUT THUOC LA",
      company: "Công ty Mai Tài Phến - MTP Entertainment",
      info: "Phía bên kia dãy Bạch Mã",
      statement: 1, //0: Bật 1:Tắt 2:Bảo trì
      custom: "",
    },
    {
      projectid: "P04",
      name: "CHO ĐI ĐỂ VÀO ĐẦU MÀY 1 CÁI BÂY CHỪ",
      company: "Công ty đòi nợ Đất Bắc",
      info: "Hiện diện trong Nam, xuất thân gốc Bắc",
      statement: 2, //0: Bật 1:Tắt 2:Bảo trì
      custom: "",
    },
  ],

  device: [
    {
      deviceid: 116,
      name: "Solar Power",
      description: "",
      statement: 2,
      gateway: "I0622B066940",
      custome: "",
    },
    {
      deviceid: 117,
      name: "Eletric Valve",
      description: "",
      statement: 1,
      gateway: "IOT323195643",
      custome: "",
    },
    {
      deviceid: 118,
      name: "Pump",
      description: "",
      statement: 1,
      gateway: "LY283409228",
      custome: "",
    },
    {
      deviceid: 119,
      name: "Microwave",
      description: "",
      statement: 0,
      gateway: "I0222195940",
      custome: "",
    },
  ],

  type: "Button",

  errs: {
    adddata: [
      {
        id: 1,
        addressCode: '100-1',
        addressState: "'1-1'",
        value: '1',
      }
    ],

    infodata:[
      {
        id: 1,
        Errcode: 10,
        ErrName: "Quá tải động cơ",
        ErrType: "Error",
        info: "-Bị kẹt tải" + 
         "Thông số chưa phù hợp" + 
         "Điện áp nguồn không đủ",
        solution: "- Kiểm tra cơ khí"+
        "Kiểm tra điện áp nguồn "+
        "Tinh chỉnh thông số"
      }
    ]
  }
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
    case "SET_LOGIN":
      return {
        ...state,
        login: action.payload,
      };
      case "SET_ERR":
        return {
          ...state,
          errs: action.payload
        };
    default:
      throw new Error("Unexpected action");
  }
};

export default EnvReducer;
