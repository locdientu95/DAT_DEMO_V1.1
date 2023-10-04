import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { EnvContext } from '../Context/EnvContext'
import { useRef } from 'react'
import { Col } from 'react-bootstrap'

export default function TableProSetting() {
  const {tablepro, envDispatch} = useContext(EnvContext)

  const width = useRef();
  const height = useRef();
  const row = useRef();
  const fromCol = useRef();
  const toCol = useRef();
  const col = useRef();
  const fromRow = useRef();
  const toRow = useRef();

  const handleTable=(e) =>{
    if(width.current.value == ""){
    }else{
      envDispatch({
        type: "SET_TABLEPRO",
        payload:{
          ...tablepro,
          width: width.current.value,
          //height: height.current.value
        }
      })
    }
  }
  const handleAddRow = (e) =>{
    const arr = []
    const updateRow = parseInt(tablepro.row)+ parseInt(row.current.value)
    for (let i =1; i<=row.current.value; i++){
      var newRow ={}
      tablepro.head.map((data,index)=>{ 
        if (index == 0){
          newRow[data.code]=parseInt(tablepro.row)+i ;
        }else {
          newRow[data.code]=0
        }
      })  
      arr.push(newRow)
    }
    const newDataTable = tablepro.data.concat(arr)
      envDispatch({
        type: "SET_TABLEPRO",
        payload:{
          ...tablepro,
          row: updateRow,
          data: newDataTable
        }
      })
      console.log(updateRow,col.current.value)
  }

  const handleDeleteRow = (e) =>{
    const start = fromRow.current.value
    const end = toRow.current.value
    if (start>end){
      alert("Không hợp lệ")
    }
    var newData = tablepro.data
     newData = newData.filter(newData=>{
       return newData.id < parseInt(start) || newData.id > parseInt(end)
    })

    // Tính năng cập nhật lại ID sau khi xóa (Đang tắt)
    // newData.map((data,index) =>{
    //   data.id = index+1
    // })
    console.log(newData)
    envDispatch({
      type: "SET_TABLEPRO",
      payload:{
        ...tablepro,
        data: newData,
        //row: newData.length //Chỉ dùng khi bật tính năng cập nhật
      }
    })
    

}

const handleAddCol = (e) =>{
  const leng = tablepro.col
  const sum = parseInt(col.current.value) + parseInt(leng)
  const newHead = tablepro.head
  for (var i = leng+1; i<= sum; i++){
    newHead.push({name: "Giá Trị " + i ,code: "val"+i})
  }
  const newData =[]
  tablepro.data.map((data,index)=>{
    var x = data
    for (var i = leng; i<= sum; i++){      
      x["val"+i] = 0
    }
    newData.push(x)
  })
  envDispatch({
    type: "SET_TABLEPRO",
    payload:{
      ...tablepro,
      data: newData,
      head: newHead,
      col: sum
    }
  })
}

const handleDeleteCol = (e) =>{
  const start = fromCol.current.value
  const end = toCol.current.value
  const label = "val"
  var num = parseInt(tablepro.col) - parseInt(parseInt(end)-parseInt(start))
  var newHead = tablepro.head
  for (var i = start;i<=end;i++){
      newHead = newHead.filter( newHead =>  newHead.code != label+i)
     
  }
  const newData = tablepro.data
  newData.map((data,index)=>{
    for (var i = start;i<=end;i++){
      delete data["val"+i]
    }
  })
    // Cập nhật lại các tên trên header
    // newHead.map((data,index) =>{
    //   if (index>0){
    //     data.name = "Giá Trị "+index 
    //     data.code ="val"+index
    //   }
    // })
 envDispatch({
  type: "SET_TABLEPRO",
  payload:{
    ...tablepro,
    head: newHead,
    data: newData,
    
  }
})
}

// useEffect(()=>{
//   console.log("HEAD",tablepro.head)
//   console.log("DATA",tablepro.data)
//   console.log("COL",tablepro.col)
//   console.log("ROW",tablepro.row)
// },[tablepro])

  return (
    <div className='DAT_Setting-TablePro'>
      <div className='DAT_Setting-TablePro-Row1'>
        <input className='DAT_Setting-TablePro-Row1-Width' placeholder='Chiều dài table'  ref={width}/>
        {/* <input className='DAT_Setting-TablePro-Row1-Height' placeholder='Chiều cao table' ref={height}/> */}
        <button className='DAT_Setting-TablePro-Row1-Submit' onClick={(e)=>handleTable(e)}>Chọn</button>
      </div>
      <div className='DAT_Setting-TablePro-Row2'>
        <input className='DAT_Setting-TablePro-Row2-TableRow' placeholder='Số hàng table' ref={row}/>
        <button className='DAT_Setting-TablePro-Row2-Submit'onClick={(e) => handleAddRow(e)}>Chọn</button>
      </div>
      <div className='DAT_Setting-TablePro-Row3'>
        <input className='DAT_Setting-TablePro-Row3-TableColumn' placeholder='Số cột table' ref={col}/>
        <button className='DAT_Setting-TablePro-Row3-Submit'onClick={(e) => handleAddCol(e)}>Chọn</button>
      </div>

      <div className='DAT_Setting-TablePro-Row4'>
      <input className='DAT_Setting-TablePro-Row4-RmFrom' placeholder='Xóa Hàng Từ STT' ref={fromRow}/>
      <input className='DAT_Setting-TablePro-Row4-RmTo' placeholder='Xóa hàng đến STT' ref={toRow}/>
      <button className='DAT_Setting-TablePro-Row4-Submit'onClick={(e)=>handleDeleteRow(e)}>Xóa</button>
      </div>

      <div className='DAT_Setting-TablePro-Row5'>
      <input className='DAT_Setting-TablePro-Row5-RmFrom' placeholder='Xóa Cột Từ STT' ref={fromCol}/>
      <input className='DAT_Setting-TablePro-Row5-RmTo' placeholder='Xóa Cột đến STT' ref={toCol}/>
      <button className='DAT_Setting-TablePro-Row5-Submit'onClick={(e)=>handleDeleteCol(e)}>Xóa</button>
      </div>

    </div>
  )
}
