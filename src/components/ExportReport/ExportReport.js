import React from 'react'

export default function ExportReport() {
  return (
    <div className="DAT_Content">
      <div className="DAT_Content-Header">
        <div className="DAT_Content-Header-Dashboard">
            <div className="DAT_Content-Header-Dashboard-Heading">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="28" 
                    height="28" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="feather feather-filter"
                    style={{ paddingRight: "10px" }}
                >
                    <polyline points="17 1 21 5 17 9"></polyline>
                    <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
                    <polyline points="7 23 3 19 7 15"></polyline>
                    <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
                </svg>
                Xuất Báo Cáo
            </div>
            <div className="DAT_Content-Header-Dashboard-SubHead">
                Example dashboard overview and content summary
            </div>
        </div>
      </div>
    </div>
  )
}
