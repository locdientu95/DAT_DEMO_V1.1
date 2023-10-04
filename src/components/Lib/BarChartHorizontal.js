import * as React from "react";
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import "./Setting.scss";


export default function BarChartHorizontal(props) {
  const chartSetting = {
    yAxis: [
      {
        label: 'Value',
        tickMaxStep: props.setting.tickmaxstep,
        tickMinStep: props.setting.tickminstep,
        tickNumber: props.setting.tickNumb,
      },
    ],
    width: parseInt(props.setting.w),
    height: parseInt(props.setting.h),
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: 'rotate(-90deg) translate(0px, -20px)',
        fontSize: props.setting.labelsize,
      },
    },
  };
  // const dataset = [
  //   {
  //     london: 59,
  //     paris: 57,
  //     newYork: 86,
  //     seoul: 21,
  //     month: "Jan",
  //   },
  //   {
  //     london: 50,
  //     paris: 52,
  //     newYork: 78,
  //     seoul: 28,
  //     month: "Fev",
  //   },
  //   {
  //     london: 47,
  //     paris: 53,
  //     newYork: 106,
  //     seoul: 41,
  //     month: "Mar",
  //   },
  //   {
  //     london: 54,
  //     paris: 56,
  //     newYork: 92,
  //     seoul: 73,
  //     month: "Apr",
  //   },
  //   {
  //     london: 57,
  //     paris: 69,
  //     newYork: 92,
  //     seoul: 99,
  //     month: "May",
  //   },
  //   {
  //     london: 60,
  //     paris: 63,
  //     newYork: 103,
  //     seoul: 144,
  //     month: "June",
  //   },
  //   {
  //     london: 59,
  //     paris: 60,
  //     newYork: 105,
  //     seoul: 319,
  //     month: "July",
  //   },
  //   {
  //     london: 65,
  //     paris: 60,
  //     newYork: 106,
  //     seoul: 249,
  //     month: "Aug",
  //   },
  //   {
  //     london: 51,
  //     paris: 51,
  //     newYork: 95,
  //     seoul: 131,
  //     month: "Sept",
  //   },
  //   {
  //     london: 60,
  //     paris: 65,
  //     newYork: 97,
  //     seoul: 55,
  //     month: "Oct",
  //   },
  //   {
  //     london: 67,
  //     paris: 64,
  //     newYork: 76,
  //     seoul: 48,
  //     month: "Nov",
  //   },
  //   {
  //     london: 61,
  //     paris: 70,
  //     newYork: 103,
  //     seoul: 25,
  //     month: "Dec",
  //   },
  // ];

  const valueFormatter = (value) => `${value}mm`;

  return (
    <div className="DAT_BarChart">
       <BarChart
      dataset={props.setting.dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'xAxis', label: 'Series' }]}
      series={[
        { dataKey: 'value1', label: 'Value1', valueFormatter, color: 'green' },
        { dataKey: 'value2', label: 'Value2', valueFormatter, color: 'red'},
        // { dataKey: 'newYork', label: 'New York', valueFormatter },
        // { dataKey: 'seoul', label: 'Seoul', valueFormatter },
      ]}
      {...chartSetting}
    />
    </div>
  );
}
