"use client";
import React from "react";
import { useTheme } from "next-themes";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import CustomTooltip from "./custom-tooltip";

interface DataPoint {
  date: string;
  dayOfWeek: string;
  value: number;
}

const generateData = (): DataPoint[] => {
  const data: DataPoint[] = [];
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const startDate = new Date(2023, 7, 23); // August 23, 2023 (Wednesday)

  for (let i = 0; i < 7 * 24; i++) {
    const date = new Date(startDate.getTime() + i * 60 * 60 * 1000);
    const dayOfWeek = daysOfWeek[date.getDay()];
    const value = Math.floor(Math.random() * (100 - 50) + 30); // Random value between 50 and 100
    if (value) {
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

export default function LineChartCpn() {
  const { theme } = useTheme();

  const strokeColor = theme === "dark" ? "#42bd84" : "#42bd84"; // Adjust stroke color
  const fillColor = theme === "dark" ? "#102a23" : "#eefef2"; // Adjust fill color
  const gridColor = theme === "dark" ? "#4a4a4a" : "#e0e0e0"; // Adjust grid color
  const tickColor = theme === "dark" ? "#a0a0a0" : "#606060"; // Adjust tick color

  return (
    <div className="w-full">
      <div className="items-center justify-between flex flex-col w-full"></div>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid vertical={true} stroke={gridColor} />
            <XAxis
              dataKey="date"
              xAxisId="0"
              axisLine={false}
              tickLine={false}
              // tickFormatter={(tick: string) => {
              //   const date = new Date(tick);
              //   const foundData = data.find((d) => d.date === tick);

              //   return date.getHours() === 0 && foundData
              //     ? foundData.dayOfWeek
              //     : "";
              // }}
              interval={23}
              height={40}
              
              tick={({ x, y, payload }) => {
                const date = new Date(payload.value);

                const foundData = data.find((d) => d.date === payload.value);

                return (
                  <text
                    x={x}
                    y={y}
                    textAnchor="middle"
                    dy={20}
                    dominantBaseline="middle"
                    fill={tickColor}
                    style={{ transform: `translateX(6%)` }}
                  >
                    {date.getHours() === 0 && foundData
                      ? foundData.dayOfWeek
                      : ""}
                  </text>
                );
              }}
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
              tick={({ x, y, payload }) => {
                const date = new Date(payload.value);
                const day = date.getDate();
            
                return (
                  <text
                    x={x}
                    y={y}
                    textAnchor="middle"
                    dy={20}
                    fill={tickColor}
                    style={{ transform: `translateX(6%)` }} // Adjust based on screen size
                  >
                    {day}
                  </text>
                );
              }}
              tickMargin={10} // Adjust margin between ticks and labels
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              domain={[0, 100]}
              ticks={[0, 20, 40, 60, 80, 100]}
              tickFormatter={(value: number) => `${value}`}
              tick={{ fill: tickColor }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              activeDot={{ r: 7 }}
              dataKey="value"
              stroke={strokeColor}
              fill={fillColor}
              strokeWidth={3}
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
