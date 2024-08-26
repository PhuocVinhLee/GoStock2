const data: { x: number; y: number }[] = transformedData;

import { ApexOptions } from "apexcharts";
import { transformedData } from "./generateData";
import { CustomTooltip } from "./custom-tooltip";
  export const options: ApexOptions = {
    series: [
      {
        name: "Stock Price",
        data: data,
      },
    ],
    ...CustomTooltip,
    theme: {
      palette: "palette1",
      monochrome: {
        enabled: false,
        // color: "#255aee",
        // shadeTo: "light",
        shadeIntensity: 0.65,
      },
    },
    stroke: {
      show: true,
      curve: "straight",
      lineCap: "butt",
      
      width: 3,
      dashArray: 0,
    },

    grid: {
      show: true,
      borderColor: "#dee2e6",
      strokeDashArray: 0,
      position: "back",
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
      row: {
        colors: undefined,
        opacity: 0.1,
      },
      column: {
        colors: undefined,
        opacity: 0.1,
      },
      padding: {
        top: 0,
        right: 10,
        bottom: 0,
        left: 10,
      },
    },
    chart: {
      id: "area-datetime",
      type: "area",
      height: 350,
      zoom: {
        autoScaleYaxis: true,
      },
      events: {
        zoomed: function (chartContext, { xaxis, yaxis }) {
          // ...
        },
      },
    },
    annotations: {
      yaxis: [
        {
          y: 30,
          borderColor: "#999",
          label: {
            text: "Support",
            style: {
              color: "#fff",
              background: "#00E396",
            },
          },
        },
      ],
      xaxis: [
        {
          x: new Date("14 Nov 2012").getTime(),
          borderColor: "#999",
          label: {
            text: "Rally",
            style: {
              color: "#fff",
              background: "#775DD0",
            },
          },
        },
      ],
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    yaxis: {
      labels: {
        formatter: (value) => {
          return `${Math.floor(value)}`;
        },
        style: {
          fontSize: "12px",
          fontFamily: "Arial, sans-serif",
        },
      },
      // min: 0,
      // max: 100, // Adjust as needed
    },
    
    xaxis: {
      type: "datetime",
      //min: new Date("01 Mar 2012").getTime(),
      //tickAmount: 6,
      min: new Date("2024-08-22").getTime(), // Adjusted min value
      max: new Date("2024-08-30").getTime(), // Adjusted max value
      labels: {
        show: true,
        // rotate: 0,
        formatter: (value: string) => {
          const date = new Date(value);
          const dayName = date.toLocaleDateString("en-US", {
            weekday: "short",
          });
          const dayNumber = date.getDate();
          return `${dayName} - ${dayNumber}`;
        },
      },
     // tickPlacement: "between",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.3,
        opacityTo: 0.3,
        stops: [0, 100],
      },
    },
  };