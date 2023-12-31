export const INITSTATE = {
  status: false,

  view16bit: {
    fontSize: "20px",
    color: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    width: "100px",
    height: "40px",
    borderRadius: "10px",
    backgroundColor: "#ff0000",
    borderColor: "#000000",
    display: "Signed",
    val: 0,
  },

  listform: [
    {
      formid: "ID1",
      name: "name1",
      config: ["a", "b", "c"],
    },

    {
      formid: "ID2",
      name: "name2",
      config: ["d", "e", "f"],
    },
    {
      formid: "ID3",
      name: "name3",
      config: ["g", "h", "j", "k", "l"],
    },
  ],

  gauge: {},

  slider: {},

  button: {
    // btntype: "Inching",
    // coloron: "#000000",
    // coloroff: "#000000",
    // bgon: "#008000",
    // bgoff: "#ff0000",
    // texton: "Bật",
    // textoff: "Tắt",
    // cal: "0",
    // w: "161px",
    // h: "83px",
    // sizeon: "16px",
    // sizeoff: "16px",
    // txtcoloron: "#000000",
    // txtcoloroff: "#000000",
    // type: "button",
    // radius: "10px",
  },

  bardata: {
    // id: 1,
    // min: "0",
    // max: "100",
    // color: "blue",
    // scale: 5,
    // realdata: 30,
    // type: "vertical",
    // w: "100px",
    // h: "400px",
    // bgcolor: "#808080",
    // realdatacolor: "#0000ff",
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

  lamp: {},

  tablepro: {},

  number: {},

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

  numberh: {},

  login: {
    username: "unknown",
    mail: "unknown@gmail.com",
    avatar: "",
    role: "",
    name: "",
    status: false,
  },

  register: [],

  errorlogs: [],

  type: "Button",

  errsetting: {},

  sidebarid: "AUTO",

  pjdata: [
    {
      projectid: "P01",
      name: "GREEN GROWTH SHOW 2023",
      company: "Công ty Cổ phần Tập đoàn DAT",
      info: "Phố đi bộ Nguyễn Huệ, quận 1, Hình Chí Mô",
      statement: 0,
      custom: "",
      long: "",
      lat: "",
      bu: "AUTO",
      user: "taingo",
    },
    {
      projectid: "P02",
      name: "YASUO EVENT",
      company: "Công ty TNHH Một Mình Tôi",
      info: "Ngoài rìa thành phố Thủ Đức",
      statement: 1,
      custom: "",
      long: "",
      lat: "",
    },
    {
      projectid: "P03",
      name: "PIZZA HUT THUOC LA",
      company: "Công ty Mai Tài Phến - MTP Entertainment",
      info: "Phía bên kia dãy Bạch Mã",
      statement: 1,
      custom: "",
      long: "",
      lat: "",
    },
    {
      projectid: "P04",
      name: "CHO ĐI ĐỂ VÀO ĐẦU MÀY 1 CÁI BÂY CHỪ",
      company: "Công ty đòi nợ Đất Bắc",
      info: "Hiện diện trong Nam, xuất thân gốc Bắc",
      statement: 2,
      custom: "",
      long: "",
      lat: "",
    },
    {
      projectid: "P05",
      name: "Cucurella",
      company: "ChelseaFC",
      info: "Nguời cùng khổ",
      statement: 1,
      custom: "",
      long: "",
      lat: "",
    },
    {
      projectid: "P06",
      name: "Mãi mãi mất em",
      company: "Manchester United",
      info: "Không DeGea, không top4",
      statement: 2,
      custom: "",
      long: "",
      lat: "",
    },
    {
      projectid: "P07",
      name: "Van Djik",
      company: "Liverpoop",
      info: "You have to walk alone",
      statement: 0,
      custom: "",
      long: "",
      lat: "",
    },
  ],

  pjm: [
    {
      projectid: "P01",
      username: "taingo",
      code: "AUTO",
    },
    {
      projectid: "P02",
      username: "taingo",
      code: "AUTO",
    },
    {
      projectid: "P03",
      username: "taingo",
      code: "UPS",
    },
    {
      projectid: "P04",
      username: "phunguyen",
      code: "SOLAR",
    },
    {
      projectid: "P05",
      username: "huuhuynh",
      code: "AUTO",
    },
    {
      projectid: "P06",
      username: "taingo",
      code: "ELEV",
    },
    {
      projectid: "P07",
      username: "taingo",
      code: "SOLAR",
    },
  ],

  dvdata: [
    {
      name: "Solar Power",
      description: "",
      custom: "",
      statement: 2,
      gateway: "I0622B066940",
    },
    {
      name: "Eletric Valve",
      description: "",
      custom: "",
      statement: 1,
      gateway: "IOT323195643",
    },
    {
      name: "Pump",
      description: "",
      custom: "",
      statement: 1,
      gateway: "LY283409228",
    },
    {
      name: "Microwave",
      description: "",
      custom: "",
      statement: 0,
      gateway: "I0222195940",
    },
    {
      name: "CP",
      description: "",
      custom: "",
      statement: 0,
      gateway: "I0123456789",
    },
    {
      name: "A",
      description: "",
      custom: "",
      statement: 0,
      gateway: "I0111111111",
    },
    {
      name: "B",
      description: "",
      custom: "",
      statement: 0,
      gateway: "I0222222222",
    },
    {
      name: "C",
      description: "",
      custom: "",
      statement: 0,
      gateway: "I0333333333",
    },
    {
      name: "D",
      description: "",
      custom: "",
      statement: 0,
      gateway: "I044444444",
    },
    {
      name: "E",
      description: "",
      custom: "",
      statement: 0,
      gateway: "I0555555555",
    },
    {
      name: "F",
      description: "",
      custom: "",
      statement: 0,
      gateway: "I0666666666",
    },
    {
      name: "G",
      description: "",
      custom: "",
      statement: 0,
      gateway: "I0777777777",
    },
    {
      name: "H",
      description: "",
      custom: "",
      statement: 0,
      gateway: "I0888888888",
    },
    {
      name: "I",
      description: "",
      custom: "",
      statement: 0,
      gateway: "I0999999999",
    },
  ],

  dvm: [
    {
      deviceid: "I0622B066940",
      username: "huuhuynh",
      code: "AUTO",
    },
    {
      deviceid: "IOT323195643",
      username: "taingo",
      code: "ELEV",
    },
    {
      deviceid: "LY283409228",
      username: "taingo",
      code: "UPS",
    },
    {
      deviceid: "I0222195940",
      username: "phunguyen",
      code: "SOLAR",
    },
  ],

  projectfilter: {
    detail: "",
    displayarray: [],
    display: false,
  },

  errornoti: {
    ErrCode: [],
  },

  linechart: {
    w_r: "500px",
    h_r: "500px",
    chartname_r: "Line Chart",
    xAxis_r: "xAxis",
    yAxis_r: "yAxis",

    labels: [],
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "#4BC0C0",
      },
    ],
  },

  dashboardbarchart: {
    xlabel: "x label",
    ylabel: "y label",
    labels: [
      "15/9/2023",
      "16/9/2023",
      "17/9/2023",
      "18/9/2023",
      "19/9/2023",
      "20/9/2023",
      "21/9/2023",
      "22/9/2023",
      "23/9/2023",
      "24/9/2023",
      "25/9/2023",
      "26/9/2023",
      "27/9/2023",
      "28/9/2023",
      "29/9/2023",
      "30/9/2023",
      "1/10/2023",
      "2/10/2023",
      "3/10/2023",
      "4/10/2023",
      "5/10/2023",
      "6/10/2023",
      "7/10/2023",
      "8/10/2023",
      "9/10/2023",
      "10/10/2023",
      "11/10/2023",
      "12/10/2023",
      "13/10/2023",
      "14/10/2023",
      "15/10/2023",
      "16/10/2023",
      "17/10/2023",
      "18/10/2023",
      "19/10/2023",
      "20/10/2023",
      "21/10/2023",
      "22/10/2023",
      "23/10/2023",
      "24/10/2023",
      "25/10/2023",
      "26/10/2023",
      "27/10/2023",
      "28/10/2023",
      "29/10/2023",
      "30/10/2023",
      "31/10/2023",
    ],
    datasets: [
      {
        label: "First dataset",
        data: [
          33, 53, 85, 41, 44, 65, 33, 53, 85, 41, 44, 65, 33, 53, 85, 41, 44,
          65, 33, 53, 85, 41, 44, 65, 33, 53, 85, 41, 44, 65, 65, 33, 53, 85,
          41, 44, 65, 53, 85, 41, 44, 65, 33, 53, 85, 10, 69,
        ],
      },
      // {
      //   label: "Second dataset",
      //   data: [
      //     41, 44, 65, 33, 53, 85, 41, 44, 65, 33, 53, 85, 41, 44, 65, 33, 53,
      //     85, 41, 44, 65, 33, 53, 85, 41, 44, 65, 33, 53, 85,
      //   ],
      // },
    ],
  },

  projectchanges: [
    {
      Date: "28/09/2023",
      Time: "08:54:00",
      projectid: "P01",
      name: "GREEN GROWTH SHOW 2023",
      company: "Công ty Cổ phần Tập đoàn DAT",
      account: "Taingo",
    },
    {
      Date: "28/09/2023",
      Time: "09:54:21",
      projectid: "P02",
      name: "YASUO EVENT",
      company: "Công ty TNHH Một Mình Tôi",
      account: "Taingo",
    },
    {
      Date: "30/09/2023",
      Time: "13:24:21",
      projectid: "P01",
      name: "GREEN GROWTH SHOW 2023",
      company: "Công ty Cổ phần Tập đoàn DAT",
      account: "Taingo",
    },
    {
      Date: "30/09/2023",
      Time: "15:54:36",
      projectid: "P03",
      name: "PIZZA HUT THUOC LA",
      company: "Công ty Mai Tài Phến - MTP Entertainment",
      account: "Taingo",
    },
  ],

  view32bit: {
    fontSize: "20px",
    color: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    width: "100px",
    height: "40px",
    borderRadius: "10px",
    backgroundColor: "#ff0000",
    borderColor: "#000000",
    display: "Int",
    val1: 0,
    val2: 0,
  },

  iconnoti: [
    {
      name: "ERR1",
      bgcolor: "red",
    },
    {
      name: "ERR2",
      bgcolor: "red",
    },
    {
      name: "WARN1",
      bgcolor: "yellow",
    },
    {
      name: "WARN2",
      bgcolor: "yellow",
    },
    {
      name: "INFO1",
      bgcolor: "blue",
    },
    {
      name: "INFO2",
      bgcolor: "blue",
    },
    {
      name: "SUCCESS1",
      bgcolor: "green",
    },
    {
      name: "SUCCESS2",
      bgcolor: "green",
    },
  ],

  numberv: {},
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
        bardata: action.payload,
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
    case "SET_PROJECT":
      return {
        ...state,
        project: action.payload,
      };
    case "SET_DEVICE":
      return {
        ...state,
        device: action.payload,
      };
    case "SET_ERR":
      return {
        ...state,
        errsetting: action.payload,
      };
    case "SET_REGISTER":
      return {
        ...state,
        register: action.payload,
      };
    case "SET_SIDEBARID":
      return {
        ...state,
        sidebarid: action.payload,
      };
    case "SET_PJDATA":
      return {
        ...state,
        pjdata: action.payload,
      };
    case "SET_PJM":
      return {
        ...state,
        pjm: action.payload,
      };
    case "SET_DVDATA":
      return {
        ...state,
        dvdata: action.payload,
      };
    case "SET_DVM":
      return {
        ...state,
        dvm: action.payload,
      };
    case "SET_ERRORLOGS":
      return {
        ...state,
        errorlogs: action.payload,
      };
    case "SET_PROJECTFILTER":
      return {
        ...state,
        projectfilter: action.payload,
      };
    case "SET_ERRORNOTI":
      return {
        ...state,
        errornoti: action.payload,
      };
    case "SET_LINECHART":
      return {
        ...state,
        linechart: action.payload,
      };
    case "SET_DASHBOARDCHART":
      return {
        ...state,
        dashboardbarchart: action.payload,
      };
    case "SET_PROJECTCHANGES":
      return {
        ...state,
        projectchanges: action.payload,
      };
    case "SET_VIEW32BIT":
      return {
        ...state,
        view32bit: action.payload,
      };
    case "SET_ICONNOTI":
      return {
        ...state,
        iconnoti: action.payload,
      };
    case "SET_NUMBERV":
      return {
        ...state,
        numberv: action.payload,
      };
    case "SET_LISTFORM":
      return {
        ...state,
        lisform: action.payload,
      };
    case "SET_VIEW16BIT":
      return {
        ...state,
        view16bit: action.payload,
      };
    default:
      throw new Error("Unexpected action");
  }
};

export default EnvReducer;
