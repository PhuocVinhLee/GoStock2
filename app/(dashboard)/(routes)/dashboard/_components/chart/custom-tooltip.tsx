import { ApexOptions } from 'apexcharts';

export const CustomTooltip: ApexOptions = {
  // Other chart options...

  tooltip: {
    enabled: true,
    //shared: true,
    followCursor: false,
    intersect: false,
    fillSeriesColor: false,
    style: {
     
      fontFamily: 'Arial, sans-serif',
    },
    x: {
     // show: false, // Hide default x-axis tooltip formatting
    },
    y: {
      //show: false, // Hide default y-axis tooltip formatting
    },
    marker: {
    //  show: true,
    },
    // fixed: {
    //   enabled: false,
    //   position: 'topRight',
    //   offsetX: 0,
    //   offsetY: 0,
    // },
    custom: ({ series, seriesIndex, dataPointIndex, w }) => {
      const value = series[seriesIndex][dataPointIndex];
      const date = new Date(w.globals.seriesX[seriesIndex][dataPointIndex]);
      const day = date.getDate();
      const month = date.toLocaleString('en-GB', { month: 'short' });
      const hour = date.getHours().toString().padStart(2, '0');
      const minute = date.getMinutes().toString().padStart(2, '0');
      
      // Custom HTML for the tooltip
      return `
        <div class="  p-3  rounded-xl    flex items-start  flex-col  justify-start  m-0 bg-black/75 text-white" >
          <p class=" text-xs  text-slate-50">${day} ${month} at ${hour}:${minute}</p>
          <p class=" text-sm">$${value.toFixed(2)}</p>
        </div>
      `;
    },
  },
};
