import React from "react";
import "./Content.scss";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { EnvContext } from "../Context/EnvContext";
import { useRef } from "react";
import { Bar } from "react-chartjs-2";
import zoomPlugin from "chartjs-plugin-zoom";
import Chart from "chart.js/auto";
import DataTable from "react-data-table-component";
import { IoClose, IoEllipsisVertical } from "react-icons/io5";

Chart.register(zoomPlugin);
export default function Content() {
  const [date, setDate] = useState(new Date());
  const { dashboardbarchart, envDispatch } = useContext(EnvContext);
  const [pop, setPop] = useState(false);
  const [data1, setData1] = useState([]);
  const dataset = useRef();
  const lables = useRef();

  useEffect(() => {
    var newData = dashboardbarchart.datasets;
    newData.map((data, index) => {
      return (data["id"] = index + 1);
    });
    setData1(dashboardbarchart.datasets);
  }, [dashboardbarchart.datasets]);

  const config = {
    type: "bar",
    plugins: {
      zoom: {
        limits: {
          y: { min: 0, max: 100 },
          y2: { min: -5, max: 5 },
        },
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: "xy",
        },
      },
    },
  };

  const data = {
    labels: dashboardbarchart.labels,
    datasets: dashboardbarchart.datasets,
  };

  const datasets = [
    {
      name: "STT",
      selector: (row) => row.id,
      sortable: true,
      width: "60px",
      center: true,
    },
    {
      name: "Tên",
      selector: (row) => row.label,
      center: true,
    },
    {
      name: "",
      selector: (row) => (
        <div
          id={row.label}
          onClick={(e) => handleDeleteDataset(e)}
          style={{ cursor: "pointer", color: "red" }}
        >
          xóa
        </div>
      ),
      width: "70px",
      center: true,
    },
  ];


  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handlePop = (e) => {
    setPop(true);
  };

  const handleClose = (e) => {
    setPop(false);
  };

  const fromDate = useRef();
  const toDate = useRef();
  const handleSave = (e) => {
    e.preventDefault();

    var date = new Date(fromDate.current.value);
    var from =
      date.getDate() +
      "/" +
      parseInt(date.getMonth() + 1) +
      "/" +
      date.getFullYear();
    console.log(from);

    var date1 = new Date(toDate.current.value);
    var to =
      date1.getDate() +
      "/" +
      parseInt(date1.getMonth() + 1) +
      "/" +
      date1.getFullYear();
    console.log(to);

    var newLabels = dashboardbarchart.labels;
    const index1 = newLabels.findIndex((newLabels) => newLabels === from);
    console.log(index1);

    const index2 = newLabels.findIndex((newLabels) => newLabels === to);
    console.log(index2);

    var newData = dashboardbarchart.datasets;
    var lastData = [];
    for (let i = index1; i <= index2; i++) {
      lastData.push(newData[0].data[i]);
    }

    envDispatch({
      type: "SET_DASHBOARDCHART",
      payload: {
        labels: dashboardbarchart.labels.slice(index1, index2 + 1),
        datasets: [
          {
            label: dashboardbarchart.datasets[0].label,
            data: lastData,
          },
        ],
      },
    });

    console.log(lastData);

    setPop(false);
  };

  const handleAddDataset = (e) => {
    e.preventDefault();

    var newData = dashboardbarchart.datasets;

    newData = newData.filter(
      (newData) => newData.label === dataset.current.value
    );

    console.log(newData.length);

    if (dataset.current.value === "") {
      alert("Tên không hợp lệ");
    } else {
      if (newData.length) {
        alert("Tên đã tồn tại");
      } else {
        var pushData = dashboardbarchart.datasets;
        pushData = [
          ...pushData,
          {
            label: dataset.current.value,
            data: [
              10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
              10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
            ],
          },
        ];

        console.log(pushData);

        envDispatch({
          type: "SET_DASHBOARDCHART",
          payload: {
            ...dashboardbarchart,
            datasets: pushData,
          },
        });

        alert("Thêm thành công");
      }
    }

    dataset.current.value = "";

    setPop(false);
  };

  const handleDeleteDataset = (e) => {
    e.preventDefault();

    var newData = dashboardbarchart.datasets;
    newData = newData.filter((newData) => newData.label !== e.target.id);
    console.log(newData);
    envDispatch({
      type: "SET_DASHBOARDCHART",
      payload: {
        ...dashboardbarchart,
        datasets: newData,
      },
    });

    alert("Xóa thành công");

    dataset.current.value = "";

    setPop(false);
  };

  const handleAddLabels = (e) => {
    e.preventDefault();

    var newData = dashboardbarchart.labels;

    newData = newData.filter((newData) => newData === lables.current.value);

    console.log(newData.length);

    if (lables.current.value === "") {
      alert("Tên không hợp lệ");
    } else {
      if (newData.length) {
        alert("Tên đã tồn tại");
      } else {
        var pushData = dashboardbarchart.labels;
        pushData = [...pushData, lables.current.value];

        console.log(pushData);

        envDispatch({
          type: "SET_DASHBOARDCHART",
          payload: {
            ...dashboardbarchart,
            labels: pushData,
          },
        });

        alert("Thêm thành công");
      }
    }

    lables.current.value = "";

    setPop(false);
  };

  const handleDeleteLabels = (e) => {
    e.preventDefault();

    var newData = dashboardbarchart.labels;
    newData = newData.filter((NewData) => NewData !== lables.current.value);
    console.log(newData);
    envDispatch({
      type: "SET_DASHBOARDCHART",
      payload: {
        ...dashboardbarchart,
        labels: newData,
      },
    });

    lables.current.value = "";

    setPop(false);
  };

  const BarRef = useRef();
  const handleResetZoom = () => {
    if (BarRef && BarRef.current) {
      BarRef.current.resetZoom();
    }
  };

  const xlabel = useRef();
  const handleXlabel = (e) => {
    e.preventDefault();

    envDispatch({
      type: "SET_DASHBOARDCHART",
      payload: {
        ...dashboardbarchart,
        xlabel: xlabel.current.value,
      },
    });

    xlabel.current.value = "";

    setPop(false);
  };

  const ylabel = useRef();
  const handleYlabel = (e) => {
    e.preventDefault();

    envDispatch({
      type: "SET_DASHBOARDCHART",
      payload: {
        ...dashboardbarchart,
        ylabel: ylabel.current.value,
      },
    });

    ylabel.current.value = "";

    setPop(false);
  };

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
                className="feather feather-activity"
                color="rgba(255, 255, 255, 0.5)"
                style={{ paddingRight: "10px" }}
              >
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
              Dashboard
            </div>
            <div className="DAT_Content-Header-Main-Dashboard-SubHead">
              Example dashboard overview and content summary
            </div>
          </div>

          <div className="DAT_Content-Header-Main_Right">
            <div className="DAT_Content-Header-Main_Right_Icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-calendar"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <div className="DAT_Content-Header-Main_Right_Text">
              {date.toDateString()}
            </div>
          </div>
        </div>
      </div>

      <div className="DAT_Content-Container">
        <div className="DAT_Content-Container-Group">
          <div className="DAT_Content-Container-Group-ListTag">
            <div className="DAT_Content-Container-Group-ListTag-Tag">
              <div className="DAT_Content-Container-Group-ListTag-Tag-Info">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-package feather-xl text-primary mb-3"
                  color="#0061f2"
                >
                  <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
                <div className="DAT_Content-Container-Group-ListTag-Tag-Info-Head">
                  Powerful Components
                </div>
                <div className="DAT_Content-Container-Group-ListTag-Tag-Info-Sub">
                  To create informative visual elements on your pages
                </div>
              </div>
              <img alt="" src="/DAT_Pictures/browser-stats.svg"></img>
            </div>
          </div>
          <div className="DAT_Content-Container-Group-ListTag">
            <div className="DAT_Content-Container-Group-ListTag-Tag">
              <div className="DAT_Content-Container-Group-ListTag-Tag-Info">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-book feather-xl text-secondary mb-3"
                  color="#6900c7"
                >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
                <div className="DAT_Content-Container-Group-ListTag-Tag-Info-Head">
                  Documentation
                </div>
                <div className="DAT_Content-Container-Group-ListTag-Tag-Info-Sub">
                  To keep you on track when working with our toolkit
                </div>
              </div>
              <img alt="" src="/DAT_Pictures/processing.svg"></img>
            </div>
          </div>
          <div className="DAT_Content-Container-Group-ListTag">
            <div className="DAT_Content-Container-Group-ListTag-Tag">
              <div className="DAT_Content-Container-Group-ListTag-Tag-Info">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  color="#00ac69"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-layout feather-xl text-green mb-3"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
                <div className="DAT_Content-Container-Group-ListTag-Tag-Info-Head">
                  Pages & Layouts{" "}
                </div>
                <div className="DAT_Content-Container-Group-ListTag-Tag-Info-Sub">
                  To help get you started when building your new UI{" "}
                </div>
              </div>
              <img alt="" src="/DAT_Pictures/windows.svg"></img>
            </div>
          </div>
        </div>

        <div className="DAT_Content-Container-Card">
          <div className="DAT_Content-Container-Card-Body">
            <div className="DAT_Content-Container-Card-Body-Center">
              <div className="DAT_Content-Container-Card-Body-Center-Img">
                <img alt="" src="/DAT_Pictures/data-report.svg"></img>
              </div>
              <div className="DAT_Content-Container-Card-Body-Center-Text">
                <h5>New reports are here! Generate custom reports now!</h5>
                <p>
                  Our new report generation system is now online. You can start
                  creating custom reporting for any documents available on your
                  account.
                </p>
                <a href="#!">Get Started</a>
              </div>
            </div>
          </div>
        </div>

        {/* Barchart Card */}
        <div className="DAT_Content-Container-Card">
          <div className="DAT_Content-Container-Card-Header">
            <div className="DAT_Content-Container-Card-Header-Text">
              Bar Chart
            </div>
            <div
              className="DAT_Content-Container-Card-Header-Icon"
              onClick={(e) => handlePop(e)}
            >
              <IoEllipsisVertical />
            </div>
          </div>

          {/* Reset Button */}
          <button
            className="DAT_Content-Container-Card-Reset"
            onClick={handleResetZoom}
          >
            Reset
          </button>

          {/* Bar Chart */}
          <div className="DAT_Content-Container-Card-Chart">
            <div className="DAT_Content-Container-Card-Chart-Ylabel">
              {dashboardbarchart.xlabel}
            </div>
            <Bar
              className="DAT_Content-Container-Card-Chart-Barchart"
              data={data}
              options={config}
              ref={BarRef}
            />
          </div>
          <div className="DAT_Content-Container-Card-Xlabel">
            {dashboardbarchart.ylabel}
          </div>

          {/* Edit Form */}
          <div
            className="DAT_Content-Container-Card-Edit"
            style={{ display: pop ? "block" : "none" }}
          >
            <form className="DAT_Content-Container-Card-Edit-Group">
              <div className="DAT_Content-Container-Card-Edit-Group-Tit">
                <div>Chỉnh Sửa</div>
                <div
                  className="DAT_Content-Container-Card-Edit-Group-Tit-Close"
                  onClick={(e) => handleClose(e)}
                >
                  <IoClose />
                </div>
              </div>

              {/* Chỉnh sửa Datasets */}
              <div className="DAT_Content-Container-Card-Edit-Group-Row1">
                <div style={{ marginBottom: "8px" }}>Chỉnh sửa DataSet</div>
                <div style={{ display: "flex", gap: "8px" }}>
                  <input type="text" ref={dataset} />
                  <button onClick={(e) => handleAddDataset(e)}>Thêm</button>
                </div>
                <DataTable columns={datasets} data={data1} />
              </div>

              {/* Chỉnh sửa Labels */}
              <div className="DAT_Content-Container-Card-Edit-Group-Row2">
                <div style={{ marginBottom: "8px" }}>Chỉnh sửa Labels</div>
                <div style={{ display: "flex", gap: "8px" }}>
                  <input type="text" ref={lables} />
                  <button onClick={(e) => handleAddLabels(e)}>Thêm</button>
                  <button onClick={(e) => handleDeleteLabels(e)}>Xóa</button>
                </div>
              </div>

              {/* From Date to Date */}
              <div className="DAT_Content-Container-Card-Edit-Group-Buttons">
                <span>Từ ngày</span>
                <input type="date" ref={fromDate} />
                <span>Đến ngày</span>
                <input type="date" ref={toDate} />
                <button onClick={(e) => handleSave(e)}>Lưu</button>
              </div>

              {/* x label */}
              <div className="DAT_Content-Container-Card-Edit-Group-Row2">
                <div style={{ marginBottom: "8px" }}>Chỉnh sửa X Label</div>
                <div style={{ display: "flex", gap: "8px" }}>
                  <input type="text" ref={xlabel} />
                  <button onClick={(e) => handleXlabel(e)}>Lưu</button>
                </div>
              </div>

              {/* y label */}
              <div className="DAT_Content-Container-Card-Edit-Group-Row2">
                <div style={{ marginBottom: "8px" }}>Chỉnh sửa Y Label</div>
                <div style={{ display: "flex", gap: "8px" }}>
                  <input type="text" ref={ylabel} />
                  <button onClick={(e) => handleYlabel(e)}>Lưu</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
