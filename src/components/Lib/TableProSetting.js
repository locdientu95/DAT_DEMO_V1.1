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
  const from = useRef();
  const to = useRef();
  const col = useRef();

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
      console.log(arr)
      
    }
    const newDataTable = tablepro.data.concat(arr)
      console.log(newDataTable)
      envDispatch({
        type: "SET_TABLEPRO",
        payload:{
          ...tablepro,
          row: updateRow,
          data: newDataTable
        }
      })
  }

  const handleDeleteRow = (e) =>{
    const start = from.current.value
    const end = to.current.value
    const newData = tablepro.data.filter(data=>{
       return parseInt(data.id) < parseInt(start) || parseInt(data.id) > parseInt(end)
    })

    // Tính năng cập nhật lại ID sau khi xóa (Đang tắt)
    // newData.map((data,index) =>{
    //   data.id = index+1
    // })

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
  const leng = tablepro.head.length
  const sum = parseInt(col.current.value) + parseInt(tablepro.head.length)
  const newHead = tablepro.head
  for (var i = tablepro.head.length+1; i<= sum; i++){
    newHead.push({name: "Giá Trị " + (tablepro.head.length) ,code: "val"+(tablepro.head.length)})
  }
  console.log(tablepro.head)
  const newData =[]
  tablepro.data.map((data,index)=>{
    var x = data
    for (var i = leng; i< sum; i++){      
      x["val"+i] = 0
    }
    newData.push(x)
  })
  envDispatch({
    type: "SET_TABLEPRO",
    payload:{
      ...tablepro,
      data: newData,
      head: newHead
    }
  })

}

const handleDeleteCol = (e) =>{
  const start = from.current.value
  const end = to.current.value
  const newHead = tablepro.head.filter((data,index)=>{
    if (index < parseInt(start) || index > parseInt(end)){
      return data
    } 
 })
//  envDispatch({
//   type: "SET_TABLEPRO",
//   payload:{
//     ...tablepro,
//     head: newHead,
//   }
// })
}
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
      <input className='DAT_Setting-TablePro-Row4-RmFrom' placeholder='Xóa Hàng Từ STT' ref={from}/>
      <input className='DAT_Setting-TablePro-Row4-RmTo' placeholder='Xóa hàng đến STT' ref={to}/>
      <button className='DAT_Setting-TablePro-Row4-Submit'onClick={(e)=>handleDeleteRow(e)}>Xóa</button>
      </div>

      <div className='DAT_Setting-TablePro-Row5'>
      <input className='DAT_Setting-TablePro-Row5-RmFrom' placeholder='Xóa Cột Từ STT' ref={from}/>
      <input className='DAT_Setting-TablePro-Row5-RmTo' placeholder='Xóa Cột đến STT' ref={to}/>
      <button className='DAT_Setting-TablePro-Row5-Submit'onClick={(e)=>handleDeleteCol(e)}>Xóa</button>
      </div>

    </div>
  )
}
