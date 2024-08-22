"use client";

import { Card } from "@/components/ui/card";
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

const data = [
  {
    name: "Page A",
    uv: 2700,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page D",
    uv: 1780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1590,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 1090,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 0,
    pv: 4300,
    amt: 2100,
  },
];

const Chart = () => {
  return (
    <div>
      <ResponsiveContainer width={70} height={50}>
        <AreaChart data={data}>
          <Area
            type="monotone"
            dataKey="uv"
            stroke="red"
            strokeWidth="2"
            fill="rgba(248, 113, 113, 0.2)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
export default Chart;
