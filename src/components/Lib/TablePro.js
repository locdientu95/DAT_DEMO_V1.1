import React, { useContext, useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'

export default function TablePro(props) {
  const [headrow, setHeadRow] = useState([])
  useEffect(()=>{
        props.setting.head.map((data,index)=>{
          if(index == 0){
            setHeadRow([])
            setHeadRow( pre=>[...pre,{name: data.name,selector:row=>row[data.code],width:"40px"}])
            
          }else{
            setHeadRow( pre=>[...pre,{name: data.name,selector:row=>row[data.code]}])
            
          }
      })
      
    
    },[props.setting])
  return (                                                                                                  
    
    
    <div>
      <DataTable data={props.setting.data}  columns={headrow}>

      </DataTable>


    </div>
  )
}
