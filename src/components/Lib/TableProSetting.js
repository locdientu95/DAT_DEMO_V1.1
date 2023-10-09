import React, { Fragment, useEffect, useState } from 'react'
import { useContext } from 'react'
import { EnvContext } from '../Context/EnvContext'
import { useRef } from 'react'
export default function TableProSetting() {
  const { tablepro, envDispatch } = useContext(EnvContext)
  const width = useRef();
  const height = useRef();
  const row = useRef();
  const fromCol = useRef();
  const toCol = useRef();
  const col = useRef();
  const fromRow = useRef();
  const toRow = useRef();
  const sel = useRef();
  const tit = useRef();
  const selID = useRef();
  const selVal = useRef();
  const newval = useRef();
  const valuesplit=(text)=>{
    var t = text
      t = t.split("_")
      return t[1]
  }

  const handleTable = (e) => {
    if (width.current.value == "") {
    } else {
      envDispatch({
        type: "SET_TABLEPRO",
        payload: {
          ...tablepro,
          width: width.current.value,
          //height: height.current.value
        }
      })
    }
  }
  const handleAddRow = (e) => {
    const arr = []
    const updateRow = parseInt(tablepro.row) + parseInt(row.current.value)
    for (let i = 0; i < row.current.value; i++) {
      var newRow = {}
      tablepro.head.map((data, index) => {
        if (index == 0) {
          newRow[data.code] = parseInt(tablepro.row) + i;
        } else {
          newRow[data.code] = 0
        }
      })
      arr.push(newRow)
    }
    const newDataTable = tablepro.data.concat(arr)
    envDispatch({
      type: "SET_TABLEPRO",
      payload: {
        ...tablepro,
        row: updateRow,
        data: newDataTable
      }
    })
  }

  const handleDeleteRow = (e) => {
    const start = fromRow.current.value
    const end = toRow.current.value
    if (tablepro.row <= 2) {
      alert("Số hàng tối thiểu là 2")
    } else {
      if(start == "" || end == ""){
        alert("Nhập sai, vui lòng nhập lại")
      }else if(start > end){
        alert("Nhập sai, vui lòng nhập lại")
      }else if (start <=0 || end <=0){
        alert("Nhập sai, vui lòng nhập lại")
      }else{
        var newData = tablepro.data
        newData = newData.filter(newData => {
          return newData.id < parseInt(start) || newData.id > parseInt(end)
        })
        // Tính năng cập nhật lại ID sau khi xóa (Đang tắt)
        // newData.map((data,index) =>{
        //   data.id = index+1
        // })
        envDispatch({
          type: "SET_TABLEPRO",
          payload: {
            ...tablepro,
            data: newData,
            //row: newData.length //Chỉ dùng khi bật tính năng cập nhật
          }
        })
      }
    }  
  }

  const handleAddCol = (e) => {
    const leng = tablepro.col
    const sum = parseInt(col.current.value) + parseInt(leng)
    const newHead = tablepro.head
    for (var i = leng + 1; i <= sum; i++) {
      newHead.push({ name: "Giá Trị " + (i - 1), code: "val_" + (i - 1) })
    }
    const newData = []
    tablepro.data.map((data, index) => {
      var x = data
      for (var i = leng; i <= sum; i++) {
        x["val_" + i] = 0
      }
      newData.push(x)
    })
    envDispatch({
      type: "SET_TABLEPRO",
      payload: {
        ...tablepro,
        data: newData,
        head: newHead,
        col: sum
      }
    })
  }

  const handleDeleteCol = (e) => {

    const start = fromCol.current.value
    const end = toCol.current.value
    if (tablepro.col <= 2) {
      alert("Số cột tối thiểu là 2")
    } else {
      if (start <= 0 || end <= 0) {
        alert("Nhập sai, vui lòng nhập lại")
      } else if (start > end) {
        alert("Nhập sai, vui lòng nhập lại")
      }else if (start == "" || end == "") {
        alert("Nhập sai, vui lòng nhập lại")
      } else {
        const label = "val_"
        var num = parseInt(tablepro.col) - parseInt(parseInt(end) - parseInt(start))
        var newHead = tablepro.head
        for (var i = start; i <= end; i++) {
          newHead = newHead.filter(newHead => newHead.code != label + i)

        }
        const newData = tablepro.data
        newData.map((data, index) => {
          for (var i = start; i <= end; i++) {
            delete data["val_" + i]
          }
        })
        // Cập nhật lại các tên trên header
        // newHead.map((data,index) =>{
        //   if (index>0){
        //     data.name = "Giá Trị "+index 
        //     data.code ="val_"+index
        //   }
        // })
        envDispatch({
          type: "SET_TABLEPRO",
          payload: {
            ...tablepro,
            head: newHead,
            data: newData,

          }
        })
      }
    }

  }

  const handleChangeTitle = (e) => {
    var valueNumber = sel.current.value
    const newName = tit.current.value
    var newHead = tablepro.head;
    newHead.map((data, index) => {
      if (index == parseInt(valueNumber)) {
        data.name = newName
      }
    })
    envDispatch({
      type: "SET_TABLEPRO",
      payload: {
        ...tablepro,
        head: newHead,
      }
    })
  }

  const handleChangeValue =(e)=>{
    const row = selID.current.value
    const col = selVal.current.value
    const val = newval.current.value
    var newData = tablepro.data
    const index = newData.findIndex(newData => newData.id == row)
    newData[index]["val_"+col] = val
    envDispatch({
      type: "SET_TABLEPRO",
      payload: {
        ...tablepro,
        data: newData,
      }
    })
    
  }

  // useEffect(() => {
  //   console.log("HEAD", tablepro.head)
  //   console.log("DATA", tablepro.data)
  //   console.log("COL", tablepro.col)
  //   console.log("ROW", tablepro.row)
  // }, [tablepro])



  return (
    <div className='DAT_Setting-TablePro'>
      <div className='DAT_Setting-TablePro-Row1'> 
        <input className='DAT_Setting-TablePro-Row1-Width' placeholder='Nhập chiều dài table' ref={width} />
        {/* <input className='DAT_Setting-TablePro-Row1-Height' placeholder='Chiều cao table' ref={height}/> */}
        <button className='DAT_Setting-TablePro-Row1-Submit' onClick={(e) => handleTable(e)}>Chọn</button>
      </div>
      <div className='DAT_Setting-TablePro-Row2'>
        <input className='DAT_Setting-TablePro-Row2-TableRow' placeholder='Nhập số hàng muốn thêm' ref={row} />
        <button className='DAT_Setting-TablePro-Row2-Submit' onClick={(e) => handleAddRow(e)}>Thêm</button>
      </div>
      <div className='DAT_Setting-TablePro-Row3'>
        <input className='DAT_Setting-TablePro-Row3-TableColumn' placeholder='Nhập số cột muốn thêm' ref={col} />
        <button className='DAT_Setting-TablePro-Row3-Submit' onClick={(e) => handleAddCol(e)}>Thêm</button>
      </div>

      <div className='DAT_Setting-TablePro-Row4'>
        <div className='DAT_Setting-TablePro-Row4-RmFrom'>
          Xóa hàng từ: 
          <input placeholder='Xóa Hàng Từ STT' ref={fromRow} />
        </div>
        <div className='DAT_Setting-TablePro-Row4-RmTo'>
          Đến: 
          <input  placeholder='Xóa hàng đến STT' ref={toRow} />
        </div>
        <div className='DAT_Setting-TablePro-Row4-Submit'>
        <button  onClick={(e) => handleDeleteRow(e)}>Xóa</button>
        </div>
      </div>

      <div className='DAT_Setting-TablePro-Row5'>
        <div className='DAT_Setting-TablePro-Row5-RmFrom'>
          Xóa cột từ: 
        <input placeholder='Xóa Cột Từ STT' ref={fromCol} />
        </div>
        <div className='DAT_Setting-TablePro-Row5-RmTo'>
          Đến: 
        <input  placeholder='Xóa Cột đến STT' ref={toCol} />
        </div>
        <div className='DAT_Setting-TablePro-Row5-Submit'>
        <button  onClick={(e) => handleDeleteCol(e)}>Xóa</button>
        </div>
      </div>

      <div className='DAT_Setting-TablePro-Row6'>
        <div className='DAT_Setting-TablePro-Row6-select'>
          Chọn cột cần thay đổi tên: 
          <select  ref={sel}>
            {tablepro.head.map((data, index) => {
              return (<option key={index} >{index}</option>
              )})}
          </select>
        </div>
        <div className='DAT_Setting-TablePro-Row6-input'>
          Nhập tên Header mới: 
          <input placeholder='Nhập tên header' ref={tit} />
        </div>
        <div className='DAT_Setting-TablePro-Row6-submit'>
          <button onClick={(e) => handleChangeTitle(e)}>Thay đổi</button>
        </div>
      </div>

        <div className='DAT_Setting-TablePro-Row7'>
            <div className='DAT_Setting-TablePro-Row7-selectId'>
              Chọn hàng cần thay đổi:
            <select ref={selID}>
            {tablepro.data.map((data, index) => {
              return( <option key={index} value={data.id} >Hàng thứ {data.id}</option>
              )})}
          </select>
            </div>
            <div className='DAT_Setting-TablePro-Row7-selectVal'>
              Chọn cột cần thay đổi:
          <select ref={selVal}>
            {tablepro.head.map((data,index)=>{
              return (
              (index !== 0)
                ?<option key={index} value={index}>Cột thứ {index}</option>
                :<Fragment key={index}></Fragment> 
              
                )})}
          </select>
            </div>
            <div className='DAT_Setting-TablePro-Row7-Input'>
              Giá trị: 
              <input placeholder='Nhập giá trị' ref={newval}/>
            </div> 
            <div className='DAT_Setting-TablePro-Row7-Submit'>
              <button onClick={(e)=>handleChangeValue(e)}>Thay đổi</button>
            </div>
        </div>     

    </div>
  )
}
