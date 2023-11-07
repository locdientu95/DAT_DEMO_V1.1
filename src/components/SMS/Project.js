import React from 'react';
import "./SMS.scss";
import DataTable from "react-data-table-component"
function Project(props) {

    const column =[
        {
            name: "Dự án",
            selector: (row) => row.project
        },
        {
            name: "Gateway",
            selector: (row) => row.gateway
        },
        {
            name: "Số điện thoại",
            selector: (row) => row.phone
        },
        {
            name: "",
            selector: (row) => (
                <div style={{ cursor: "pointer", color: "red" }}> 
                    Xóa
                </div>
            )
        }
    ]

    const data =[
        {
            project: "Dự án 1",
            gateway: "IO3223231",
            phone: "0909090909"
        },
        {
            project: "Dự án 2",
            gateway: "IO3251614",
            phone: "09131314132"
        },
        {
            project: "Dự án 3",
            gateway: "IO3213241",
            phone: "0926534634"
        }
        
    ]
    return (
        <div>
            <DataTable data={data} columns={column}></DataTable>
        </div>
    );
}

export default Project;