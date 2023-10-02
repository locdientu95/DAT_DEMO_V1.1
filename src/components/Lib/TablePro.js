import React, { useContext, useEffect, useState } from 'react'
import { useRef } from 'react'
import DataTable from 'react-data-table-component'

export default function TablePro(props) {
  const [headrow, setHeadRow] = useState([])
  const [addRow, setAddRow] = useState([])
  useEffect(()=>{
        props.setting.head.map((data,index)=>{
          if(index == 0){
            setHeadRow([])
            setHeadRow( pre=>[...pre,{name: data.name,selector:row=>row[data.code],width:"60px"}])    
          }else{
            setHeadRow( pre=>[...pre,{name: data.name,selector:row=>row[data.code]}])
          }
      })

    
    },[props.setting])




  return (                                                                                                   
    <div className='DAT_Setting-TablePro' 
    style={{width:props.setting.width+"px"}}
    
    >
      <DataTable data={props.setting.data}
        columns={headrow}
        
        >

      </DataTable>


    </div>
  )
  }
