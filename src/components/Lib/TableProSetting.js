import React from 'react'
import { useContext } from 'react'
import { EnvContext } from '../Context/EnvContext'

export default function TableProSetting() {
  const {tablepro, envDispatch} = useContext(EnvContext)
  return (
    <div className='DAT_Setting-TablePro'>
      <div className='DAT_Setting-TablePro-Row1'>
        <input className='DAT_Setting-TablePro-Row1-Width' placeholder='Chiều dài table' />
        <input className='DAT_Setting-TablePro-Row1-Height' placeholder='Chiều cao table'/>
        <button className='DAT_Setting-TablePro-Row1-Submit'>Chọn</button>
      </div>
      <div className='DAT_Setting-TablePro-Row2'>
        <input className='DAT_Setting-TablePro-Row2-TableRow' placeholder='Số hàng table' />
        <input className='DAT_Setting-TablePro-Row2-TableColumn' placeholder='Số cột table' />
        <button className='DAT_Setting-TablePro-Row2-Submit'>Chọn</button>
      </div>
    </div>
  )
}
