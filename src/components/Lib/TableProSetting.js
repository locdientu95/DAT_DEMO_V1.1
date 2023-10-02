import React, { useEffect } from 'react'
import { useContext } from 'react'
import { EnvContext } from '../Context/EnvContext'
import { useRef } from 'react'

export default function TableProSetting() {
  const {tablepro, envDispatch} = useContext(EnvContext)

  const width = useRef();
  const height = useRef();
  const row = useRef();
  const from = useRef();
  const to = useRef();

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

  const handleDelete = (e) =>{
    const start = from.current.value
    const end = to.current.value
    const newData = tablepro.data
    if (parseInt(start) >= parseInt(end)){
      alert("Lỗi gòi")
    }else {
      for (start;start<=end;start++){
        newData = tablepro.data.filter()
      }
  }
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
        <input className='DAT_Setting-TablePro-Row2-TableColumn' placeholder='Số cột table' />
        <button className='DAT_Setting-TablePro-Row2-Submit'onClick={(e) => handleAddRow(e)}>Chọn</button>
      </div>

      <div className='DAT_Setting-TablePro-Row3'>
      <input className='DAT_Setting-TablePro-Row3-RmFrom' placeholder='Xóa Từ STT' ref={from}/>
      <input className='DAT_Setting-TablePro-Row3-RmTo' placeholder='Xóa đến STT' ref={to}/>
      <button className='DAT_Setting-TablePro-Row3-Submit'onClick={(e)=>handleDelete(e)}>Xóa</button>
      </div>
    </div>
  )
}
