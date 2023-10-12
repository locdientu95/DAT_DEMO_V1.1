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
      username: "admin",
      password: "123456",
      email: "admin@gmail.com",
      name: "Admin",
      role: "admin",
    },
    {
      username: "huuhuynh",
      password: "huu123",
      email: "huuhuynh@gmail.com",
      name: "Huynh Huu",
      role: "user",
    },
    {
      username: "phunguyen",
      password: "phu123",
      email: "phunguyen@gmail.com",
      name: "Nguyen Thanh Phu",
      role: "user",
    },
    {
      username: "taingo",
      password: "tai123",
      email: "taingo@gmail.com",
      name: "Ngo Dinh Tan Tai",
      role: "user",
    },
  ],

  // project: [
  //   {
  //     projectid: "P01",
  //     name: "GREEN GROWTH SHOW 2023",
  //     company: "Công ty Cổ phần Tập đoàn DAT",
  //     info: "Phố đi bộ Nguyễn Huệ, quận 1, Hình Chí Mô",
  //     statement: 0, //0: Bật 1:Tắt 2:Bảo trì
  //     custom: "",
  //     long: "",
  //     lat: "",
  //   },
  //   {
  //     projectid: "P02",
  //     name: "YASUO EVENT",
  //     company: "Công ty TNHH Một Mình Tôi",
  //     info: "Ngoài rìa thành phố Thủ Đức",
  //     statement: 1,
  //     custom: "",
  //     long: "",
  //     lat: "",
  //   },
  //   {
  //     projectid: "P03",
  //     name: "PIZZA HUT THUOC LA",
  //     company: "Công ty Mai Tài Phến - MTP Entertainment",
  //     info: "Phía bên kia dãy Bạch Mã",
  //     statement: 1, //0: Bật 1:Tắt 2:Bảo trì
  //     custom: "",
  //     long: "",
  //     lat: "",
  //   },
  //   {
  //     projectid: "P04",
  //     name: "CHO ĐI ĐỂ VÀO ĐẦU MÀY 1 CÁI BÂY CHỪ",
  //     company: "Công ty đòi nợ Đất Bắc",
  //     info: "Hiện diện trong Nam, xuất thân gốc Bắc",
  //     statement: 2, //0: Bật 1:Tắt 2:Bảo trì
  //     custom: "",
  //     long: "",
  //     lat: "",
  //   },
  // ],

  // device: [
  //   {
  //     deviceid: 1,
  //     name: "Solar Power",
  //     description: "",
  //     statement: 2,
  //     gateway: "I0622B066940",
  //     projectid: "P01",
  //     custom: "",
  //   },
  //   {
  //     deviceid: 2,
  //     name: "Eletric Valve",
  //     description: "",
  //     statement: 1,
  //     gateway: "IOT323195643",
  //     projectid: "P02",
  //     custom: "",
  //   },
  //   {
  //     deviceid: 3,
  //     name: "Pump",
  //     description: "",
  //     statement: 1,
  //     gateway: "LY283409228",
  //     projectid: "P03",
  //     custom: "",
  //   },
  //   {
  //     deviceid: 4,
  //     name: "Microwave",
  //     description: "",
  //     statement: 0,
  //     gateway: "I0222195940",
  //     projectid: "P04",
  //     custom: "",
  //   },
  // ],

  errorlogs: [
    {
      id: 1,
      DeviceID: "IO6112233",
      ErrCode: "E123",
      DeviceType: "IO",
      ErrStt: "In",
      ErrType: "Error",
      ProjectName: "Dự Án 1",
      Datetime: "28/9/2023 08:54:00",
    },
    {
      id: 2,
      DeviceID: "IO6892323",
      ErrCode: "E923",
      DeviceType: "IO",
      ErrStt: "In",
      ErrType: "Error",
      ProjectName: "Dự Án 1",
      Datetime: "22/9/2021 18:54:00",
    },
    {
      id: 3,
      DeviceID: "IO6231235",
      ErrCode: "E999",
      DeviceType: "IO",
      ErrStt: "In",
      ErrType: "Error",
      ProjectName: "Dự Án 1",
      Datetime: "28/8/2023 10:54:00",
    },
    {
      id: 4,
      DeviceID: "IO62321312",
      ErrCode: "E019",
      DeviceType: "IO",
      ErrStt: "In",
      ErrType: "Error",
      ProjectName: "Dự Án 1",
      Datetime: "21/3/2020 07:45:00",
    },
    {
      id: 5,
      DeviceID: "IO643647474",
      ErrCode: "DE787",
      DeviceType: "IO",
      ErrStt: "In",
      ErrType: "Error",
      ProjectName: "Dự Án 1",
      Datetime: "10/3/2023 17:54:00",
    },
    {
      id: 6,
      DeviceID: "IO63129387",
      ErrCode: "E767",
      DeviceType: "IO",
      ErrStt: "In",
      ErrType: "Error",
      ProjectName: "Dự Án 1",
      Datetime: "2/9/2023 00:00:00",
    },
    {
      id: 7,
      DeviceID: "IO61234091",
      ErrCode: "E555",
      DeviceType: "IO",
      ErrStt: "In",
      ErrType: "Error",
      ProjectName: "Dự Án 1",
      Datetime: "30/1/2020 9:00:00",
    },
    {
      id: 8,
      DeviceID: "IO60219833",
      ErrCode: "E199",
      DeviceType: "IO",
      ErrStt: "In",
      ErrType: "Error",
      ProjectName: "Dự Án 1",
      Datetime: "17/3/2019 20:54:00",
    },
    {
      id: 9,
      DeviceID: "IO612093812",
      ErrCode: "E141",
      DeviceType: "IO",
      ErrStt: "In",
      ErrType: "Error",
      ProjectName: "Dự Án 1",
      Datetime: "1/4/2023 12:54:00",
    },
    {
      id: 10,
      DeviceID: "IO621093812",
      ErrCode: "E404",
      DeviceType: "IO",
      ErrStt: "In",
      ErrType: "Error",
      ProjectName: "Dự Án 1",
      Datetime: "20/5/2023 13:30:00",
    },
    {
      id: 11,
      DeviceID: "IO62345433",
      ErrCode: "E918",
      DeviceType: "IO",
      ErrStt: "In",
      ErrType: "Error",
      ProjectName: "Dự Án 1",
      Datetime: "7/5/2023 15:15:00",
    },
    {
      id: 12,
      DeviceID: "IO620398120",
      ErrCode: "E113",
      DeviceType: "IO",
      ErrStt: "In",
      ErrType: "Error",
      ProjectName: "Dự Án 1",
      Datetime: "10/10/2021 10:13:00",
    },
    {
      id: 13,
      DeviceID: "IO6123943912",
      ErrCode: "E010",
      DeviceType: "IO",
      ErrStt: "In",
      ErrType: "Error",
      ProjectName: "Dự Án 1",
      Datetime: "9/8/2023 19:20:00",
    },
  ],

  type: "Button",

  errsetting: {
    adddata: [
      {
        id: 1,
        addressCode: "100-1",
        addressState: "1-1",
        value: "1",
      },
    ],

    infodata: [
      {
        id: 1,
        ErrCode: 10,
        ErrName: "Quá tải động cơ",
        ErrType: "Error",
        info: "Bị kẹt tải; Thông số chưa phù hợp; Điện áp nguồn không đủ",
        solution: "Kiểm tra cơ khí; Kiểm tra điện nguồn; Tinh chỉnh thông số",
      },
    ],

    addDataRow: 2,
    infoDataRow: 2,
  },

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
      projectid: "P01",
      custom: "",
      deviceid: 1,
      name: "Solar Power",
      description: "",
      statement: 2,
      gateway: "I0622B066940",
    },
    {
      name: "Eletric Valve",
      description: "",
      statement: 1,
      gateway: "IOT323195643",
      projectid: "P01",
      custom: "",
      deviceid: 1,
    },
    {
      name: "Pump",
      description: "",
      statement: 1,
      gateway: "LY283409228",
      projectid: "P01",
      custom: "",
      deviceid: 1,
    },
    {
      name: "Microwave",
      description: "",
      statement: 0,
      gateway: "I0222195940",
      projectid: "P01",
      custom: "",
      deviceid: 1,
    },
  ],

  dvm: [
    {
      deviceid: "I0622B066940",
      username: "taingo",
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
  },
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
        dvdata: action.payload,
      };
    case "SET_DVM":
      return {
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
      }
    default:
      throw new Error("Unexpected action");
  }
};

export default EnvReducer;
