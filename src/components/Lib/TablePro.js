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
            setHeadRow( pre=>[...pre,{name:<>
            <div >
              {data.name}
             
            </div>
            <div style={{color:"gray", fontSize:"10px",position:"absolute",bottom:"0",right:"3px",}}>
                {splitcode(data.code)}
              </div>
            </>
            ,selector:row=>row[data.code]}])
          }
      })

    
    },[props.setting])


    const splitcode =(text)=>{
      var t = text
      t = t.split("_")
      return t[1] 
    }

  return (                                                                                                   
    <div className='DAT_TablePro' 
    style={{width:props.setting.width+"px"}}
    
    >
      <DataTable data={props.setting.data}
        columns={headrow}
        >

      </DataTable>


    </div>
  )
  }
