"use client";

import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { DataDown, DataUp } from "./data";


interface ChartProp{
  up: boolean;
}

const Chart = ({up}: ChartProp) => {
  const data = up ? DataUp: DataDown
  return (
    <div>
      <ResponsiveContainer width={70} height={50}>
        <AreaChart data={data}>
          <Area
            type="monotone"
            dataKey="uv"
            stroke={`${up ? "green": "red"}  `}
            strokeWidth="2"
            
            fill={`${up ? "#e4ffe4": "rgba(248, 113, 113, 0.2)"}  `}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
export default Chart;
