import React, { useState } from "react";
import Chart from "react-apexcharts";

const HoursStatsGauge = ({ seriesData, type }) => {
  let hours = 0,
    color = "";
  if (type === "worked") {
    hours = Math.round((seriesData / 10) * 100);
    color = "#008FFB";
  }
  if (type === "booked" || type === "pending") {
    hours = Math.round((seriesData / 7.5) * 100);
    color = "#00f970";
  }
  if (type === "pending") color = "#fcc202";
  if (type === "overtime") {
    hours = Math.round((seriesData / 2) * 100);
    color = "#f90010";
  }

  const [series, setSeries] = useState(
    // Number values to be displayed in the graph
    [hours]
  );
  const [options, setOptions] = useState({
    chart: {
      type: "radialBar"
    },
    // labels: ["Progress"]
    colors: [color],
    plotOptions: {
      radialBar: {
        inverseOrder: false,
        startAngle: 0,
        endAngle: 360,
        offsetX: -30,
        offsetY: -15,
        hollow: {
          margin: 1,
          size: "50%",
          background: "transparent",
          image: undefined,
          imageWidth: 150,
          imageHeight: 150,
          imageOffsetX: 0,
          imageOffsetY: 0,
          imageClipped: true,
          position: "front",
          dropShadow: {
            enabled: false,
            top: 0,
            left: 0,
            blur: 3,
            opacity: 0.5
          }
        },
        track: {
          show: true,
          startAngle: undefined,
          endAngle: undefined,
          background: "#ededed",
          strokeWidth: "97%",
          opacity: 1,
          margin: 5,
          dropShadow: {
            enabled: false,
            top: 0,
            left: 0,
            blur: 3,
            opacity: 0.5
          }
        },
        dataLabels: {
          show: true, // Shows or hides all labels
          name: {
            show: false, // Shows or hides the name of the label
            fontSize: "16px",
            fontFamily: undefined,
            fontWeight: 600,
            color: undefined,
            offsetY: -10
          },
          value: {
            show: true,
            fontSize: "9px",
            fontFamily: undefined,
            fontWeight: 400,
            color: undefined,
            offsetY: 5,
            formatter: function (val) {
              return val + " %";
            }
          }
        }
      }
    }
  });

  return (
    <div style={{ position: "absolute" }}>
      <div id="chart">
        <Chart
          options={options}
          series={series}
          type="radialBar"
          width="120px"
          height="120px"
        />
      </div>
    </div>
  );
};

export default HoursStatsGauge;
