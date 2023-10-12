import React, { useState } from "react";
import "./ErrorSetting.scss";
import DataTable from "react-data-table-component";
import { EnvContext } from "../Context/EnvContext";
import { useContext } from "react";
import { useRef } from "react";

export default function ErrorSetting(props) {
  const datainrow = useRef("")
  const datainaddressrow = useRef("")
  const [pop, setPop] = useState(false)
  const [infopop, setInfoPop] = useState(false)
  const [idrow, setIdrow] = useState('')
  const [addrow, setAddrow] = useState('')
  const { errsetting, envDispatch } = useContext(EnvContext);
  const addcol = [
    {
      name: "STT",
      code: "id",
      selector: (row) => row.id,
      sortable: true,
      width: "60px",
      center: true
    },
    {
      name: "Địa Chỉ Mã Lỗi",
      code: "addressCode",
      selector: (row) => (
        <>
          <div id={"addressCode_" + row.id} onClick={e => handleChange(e)} style={{ cursor: "pointer" }}>{row.addressCode} </div>
        </>
      ),
      center: true
    },
    {
      name: "Địa Chỉ",
      code: "addressState",
      selector: (row) => (
        <>
          <div id={"addressState_" + row.id} onClick={e => handleChange(e)} style={{ cursor: "pointer" }}>{row.addressState} </div>
        </>
      ),
      center: true
    },
    {
      name: "Giá Trị",
      code: "value",
      selector: (row) => (
        <>
          <div id={"value_" + row.id} onClick={e => handleChange(e)} style={{ cursor: "pointer" }}>{row.value} </div>
        </>
      ),
      center: true
    },
    {
      name: "",
      selector: (row) => (
        <>
          <div id={row.id} onClick={e => handleDeleAddressRow(e)} style={{ cursor: "pointer", color: "red" }}>Xóa</div>
        </>
      ),
      center: true
    }
  ];

  const handleChange2 = (e) => {
    setIdrow(e.currentTarget.id)
    setPop(true)
  };
  const handleChange = (e) => {
    setAddrow(e.currentTarget.id)
    setInfoPop(true)
  };

  const handleSaveRow = (e) => {
    e.preventDefault()
    const data = datainrow.current.value
    const t = idrow.split("_")
    var newData = errsetting.infodata;
    const index = newData.findIndex((newData) => newData.id == t[1]);
    if (t[0]== "ErrCode"){
      for(let i =0;i<errsetting.infodata.length;i++){
        if (errsetting.infodata[i].ErrCode != data){
          newData[index][t[0]] = data;
          break;
          }else {
            alert("Trùng mã lỗi");
            break;
          }
        } 
      }else{
        newData[index][t[0]] = data;
      }
    console.log(data)
    setPop(false)
    envDispatch({
      type: "SET_ERR",
      payload: {
        ...errsetting,
        infodata: newData,
      },
    });
  }

  const infoCol = [
    {
      name: "STT",
      code: "id",
      selector: row => row.id,
      sortable: true,
      width: "60px",
      center: true
    },
    {
      name: "Mã Lỗi",
      code: "ErrCode",
      selector: (row) => (
        <>
          <div id={"ErrCode_" + row.id} onClick={e => handleChange2(e)} style={{ cursor: "pointer" }}>{row.ErrCode} </div>
        </>
      ),
      width: "100px",
      center: true
    },
    {
      name: "Tên Lỗi",
      code: "ErrName",
      selector: (row) => (
        <>
          <div id={"ErrName_" + row.id} onClick={e => handleChange2(e)} style={{ cursor: "pointer" }}>{row.ErrName} </div>
        </>
      ),
      center: true
    },
    {
      name: "Loại Lỗi",
      code: "ErrType",
      selector: (row) => (
        <>
          <div id={"ErrType_" + row.id} onClick={e => handleChange2(e)} style={{ cursor: "pointer" }}>{row.ErrType} </div>
        </>
      ),
      width: "150px",
      center: true
    },
    {
      name: "Nguyên Nhân",
      code: "info",
      selector: (row) => (
        <>
          <div id={"info_" + row.id} onClick={e => handleChange2(e)} style={{ cursor: "pointer" }}>{row.info} </div>
        </>
      ),
    },
    {
      name: "Biện Pháp",
      code: "solution",
      selector: (row) => (
        <>
          <div id={"solution_" + row.id} onClick={e => handleChange2(e)} style={{ cursor: "pointer" }}>{row.solution} </div>
        </>
      ),
    },
    {
      name: "",
      selector: (row) => (
        <>
          <div id={row.id} onClick={e => handleDeleInfoRow(e)} style={{ cursor: "pointer", color: "red" }}>Xóa</div>
        </>
      ),
      center: true
    }
  ]
  const handleAdd = (e) => {
    var leng = errsetting.addDataRow
    var newData = errsetting.adddata
    newData = [...newData, { id: leng, addressCode: "...", addressState: "...", value: "..." }]
    leng++
    console.log(leng)
    newData.map((data,index)=>{
      data.id = index+1
    })
    envDispatch({
      type: "SET_ERR",
      payload: {
        ...errsetting,
        adddata: newData,
        addDataRow: leng,
        
      },
    });
  }

  const handleAddInfo = (e) => {
    var leng = errsetting.infoDataRow
    var newData = errsetting.infodata
    newData = [...newData, { id: leng, ErrCode: "...", ErrName: "...", ErrType: "...", info: "...", solution: "..." }]
    leng++
    newData.map((data,index)=>{
      data.id = index+1
    })
    console.log(leng)
    envDispatch({
      type: "SET_ERR",
      payload: {
        ...errsetting,
        infodata: newData,
        infoDataRow: leng
      },
    });
  }

  // const handleSave = (e) => {
  //   const STT = id.current.value;
  //   var newData = errsetting.adddata;
  //   const index = newData.findIndex((newData) => newData.id == STT);
  //   newData[index].addressCode = addressCode.current.value;
  //   newData[index].addressState = addressState.current.value;
  //   newData[index].value = value.current.value;
  //   envDispatch({
  //     type: "SET_ERR",
  //     payload: {
  //       ...errsetting,
  //       adddata: newData,
  //     },
  //   });
  // };

  // const handleSaveInfo = (e) => {
  //   var newData = errsetting.infodata
  //   const index = errsetting.infodata.findIndex((newData) => newData.id == Errid.current.value);
  //   for (let i = 0; i < newData.length; i++) {
  //     if (newData[i].ErrCode != Errcode.current.value) {
  //       newData[index].ErrCode = Errcode.current.value;
  //       newData[index].ErrName = Errname.current.value;
  //       newData[index].ErrType = Errtype.current.value;
  //       newData[index].info = Info.current.value;
  //       newData[index].solution = Solution.current.value;
  //       break;
  //     }
  //     alert("Trùng mã lỗi, vui lòng thử lại")
  //     break;
  //   }
  //   envDispatch({
  //     type: "SET_ERR",
  //     payload: {
  //       ...errsetting,
  //       infodata: newData,
  //     },
  //   });
  // }

  const handleSaveAddressRow = (e) => {
    e.preventDefault()
    const data = datainaddressrow.current.value
    const t = addrow.split("_")
    var newData = errsetting.adddata;
    const index = newData.findIndex((newData) => newData.id == t[1]);
    newData[index][t[0]] = data;
    setInfoPop(false)
    envDispatch({
      type: "SET_ERR",
      payload: {
        ...errsetting,
        adddata: newData,
      },
    });
  }

  const handleDeleAddressRow = (e) => {
    var newData = errsetting.adddata;
    newData = newData.filter((newData) => {
      return newData.id != parseInt(e.currentTarget.id)
    })
    newData.map((data,index)=>{
      data.id = index+1
    })
    envDispatch({
      type: "SET_ERR",
      payload: {
        ...errsetting,
        adddata: newData,
      },
    });
  }

  const handleDeleInfoRow = (e) => {
    var newData = errsetting.infodata;
    newData = newData.filter((newData) => {
      return newData.id != parseInt(e.currentTarget.id)
    })
    newData.map((data,index)=>{
      data.id = index+1
    })
    envDispatch({
      type: "SET_ERR",
      payload: {
        ...errsetting,
        infodata: newData,
      },
    });
  }
  return (
    <div className="DAT_ErrorSetting">
      <div className="DAT_ErrorSetting-Header">
        <div className="DAT_ErrorSetting-Header-Dashboard">
          <div className="DAT_ErrorSetting-Header-Dashboard-Heading">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-activity"
              color="rgba(255, 255, 255, 0.5)"
              style={{ paddingRight: "10px" }}
            >
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
            Cài đặt lỗi
          </div>
          <div className="DAT_ErrorSetting-Header-Dashboard-SubHead">
            Example dashboard overview and content summary
          </div>
        </div>
      </div>
      <div className="DAT_ErrorSetting-Main" style={{ marginBottom: "100px" }}>
        <div className="DAT_ErrorSetting-Main-Address">
          <div className="DAT_ErrorSetting-Main-Address-Table">
            <DataTable columns={addcol}
              data={errsetting.adddata}
            />
            <button onClick={(e) => handleAdd(e)}>Thêm</button>
          </div>
          <div className="DAT_ErrorSetting-Main-Address-Config">
            <form className="DAT_ErrorSetting-Main-Address-Config-Group" style={{ display: (infopop) ? "block" : "none" }}
              onSubmit={(e) => handleSaveAddressRow(e)}>
              <input type="text" required ref={datainaddressrow}></input>
              <button>Lưu</button>
            </form>
          </div>
          </div>
        <div className="DAT_ErrorSetting-Main-Info">
          <div className="DAT_ErrorSetting-Main-Info-Table">
            <DataTable columns={infoCol}
              data={errsetting.infodata}
            />
            <button onClick={(e) => handleAddInfo(e)}>Thêm</button>
          </div>
          <div className="DAT_ErrorSetting-Main-Info-Config">
            <form className="DAT_ErrorSetting-Main-Info-Config-Group" style={{ display: (pop) ? "block" : "none" }}
              onSubmit={(e) => handleSaveRow(e)}>
              <input type="text" required ref={datainrow}></input>
              <button>Lưu</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}




