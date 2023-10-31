import React from 'react';
import "./SMS.scss"
function Config(props) {
    return (
        <div className='DAT_Container'>
            <div className='DAT_Container-Input1'>
                Gửi đến
                <input/>
            </div>
            <div className='DAT_Container-Input2'>
                Người gửi
                <input/>
            </div>
            <div className='DAT_Container-Input3'>
                Thông tin gửi
                <input/>
            </div>
        </div>
    );
}

export default Config;