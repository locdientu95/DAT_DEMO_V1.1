import React from "react";
import { withGoogleMap, withScriptjs, GoogleMap } from "react-google-maps";

export default function Location() {
  return (
    <div className="DAT_Content">
      <div className="DAT_Content-Header">
        <div className="DAT_Content-Header-Main">
          <div className="DAT_Content-Header-Main-Dashboard">
            <div className="DAT_Content-Header-Main-Dashboard-Heading">
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
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
              </svg>
              Vị Trí
            </div>
            <div className="DAT_Content-Header-Main-Dashboard-SubHead">
              Example dashboard overview and content summary
            </div>
          </div>
        </div>
      </div>

      <div className="DAT_Notification-Container">
        <div className="DAT_Notification-Container-ProjectHistory">
          <div className="DAT_Notification-Container-ProjectHistory-Head">
            Location
          </div>
          <div className="DAT_Notification-Container-ProjectHistory-Body">
            {/* <GoogleMap
              defaultZoom={8}
              defaultCenter={{ lat: -34.397, lng: 150.644 }}
            ></GoogleMap> */}
          </div>
        </div>
      </div>
    </div>
  );
}
