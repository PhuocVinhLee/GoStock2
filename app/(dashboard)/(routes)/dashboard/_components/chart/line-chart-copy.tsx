
"use client"
import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
  Legend,
  Area,
  AreaChart,
} from "recharts";
// import CustomTooltip from "./custom-tooltip";

interface DataPoint {
  date: string;
  dayOfWeek: string;
  value: number;
}

const generateData = (): DataPoint[] => {
  const data: DataPoint[] = [];
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const startDate = new Date(2023, 7, 23); // August 23, 2023 (Wednesday)

  for (let i = 0; i < 7 * 24; i ++) {
    const date = new Date(startDate.getTime() + i * 60 * 60 * 1000);
    const dayOfWeek = daysOfWeek[date.getDay()];
    const value = Math.floor(Math.random() * (100 - 50) + 30); // Random value between 50 and 100
    if( (value)  ){
      data.push({
        date: date.toISOString(),
        dayOfWeek,
        value,
      });
    }
  }
  return data;
};

const data = generateData();
console.log(data)

const CustomTooltip: React.FC<TooltipProps<number, string>> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    const date = new Date(label);
    const day = date.getDate();
    const month = date.toLocaleString('en-GB', { month: 'short' }); // Short month name
    const time = date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }); // 24-hour format

    return (
      <div className="  rounded-lg  bg-black/70 text-white p-3 border border-gray-200 shadow-md">
        <p className="text-xs">{`${day} ${month} on ${time}`}</p>
        <p className=" tetx-sm font-bold">{`$${
          payload[0]?.value?.toFixed(2)
        }`}</p>
      </div>
    );
  }
  return null;
};


export default function LineChart2() {
  return (
    <div className="w-full   ">
      <div className="items-center justify-between flex  flex-col w-full"></div>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
        
          <AreaChart data={data}  margin={{
              top: 10,
              right: 0,
              left: 0,
              bottom: 0,
            }}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={true}
              stroke="#e0e0e0"
            />
            <XAxis
              dataKey="date"
              xAxisId="0"
              axisLine={false}
              tickLine={false}
              tickFormatter={(tick: string) => {
                const date = new Date(tick);
                const foundData = data.find((d) => d.date === tick);

                return date.getHours() === 0 && foundData
                  ? foundData.dayOfWeek
                  : "";
              }}
              interval={23} // Show tick every 24 hours
              height={40}
              tick={{ dy: 20, textAnchor: "middle", dx: 50 }} // Center the text and shift it left
              tickMargin={10} // Adjust margin between ticks and labels
            />
            <XAxis
              dataKey="date"
              xAxisId="1"
              axisLine={false}
              tickLine={false}
              tickFormatter={(tick: string) => {
                const date = new Date(tick);
                const day = date.getDate(); // Get the day of the month

                return `${day}`; // Combine the day and day of the week
              }}
              interval={23} // Show tick every 24 hours
              height={50}
              tick={{ dy: 20, textAnchor: "middle", dx: 50 }} // Center the text and shift it left
              tickMargin={10} // Adjust margin between ticks and labels
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              domain={[0, 100]}
              ticks={[0, 20, 40, 60, 80, 100]}
              tickFormatter={(value: number) => `${value}`}
              tickMargin={30} 
            />
            <Tooltip content={<CustomTooltip />} />

            {/* <Line
              // type="monotone"
              dataKey="value"
             stroke="#82ca9d"
              fill="#8884d8"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 8 }}
            /> */}
            <Area
           // type="monotone"
           activeDot={{ r: 7 }}
            dataKey="value"
           stroke="#08d23a"
             fill="#eefef2"
            strokeWidth={3}
            dot={false}
          />
          </AreaChart>
                     
              
        </ResponsiveContainer>
      </div>
    </div>
  );
}
