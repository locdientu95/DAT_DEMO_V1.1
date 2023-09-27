import React from 'react'

export default function Notification() {
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
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
                Thông Báo
            </div>
            <div className="DAT_Content-Header-Dashboard-SubHead">
                Example dashboard overview and content summary
            </div>
        </div>
      </div>
    </div>
  )
}
