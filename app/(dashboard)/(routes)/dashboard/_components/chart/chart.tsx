"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

import HeaderChart from "./header-chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RiBarChartBoxLine } from "react-icons/ri";

import HomeChart from "./home-chart";
// Define time ranges
const timeRanges = [
  { label: "1 Day", key: "1day" },
  { label: "1 Week", key: "1week" },
  { label: "1 Month", key: "1month" },
  { label: "6 Month", key: "6month" },
  { label: "1 Year", key: "1year" },
  { label: "5 Year", key: "5year" },
  { label: "All", key: "all" },
];
const Chart = () => {
  const [selectedRange, setSelectedRange] = useState("1month");

  // Handle range change
  const handleRangeChange = (key: string) => {
    setSelectedRange(key);
  };

  return (
    <Card className="  border-none rounded-2xl h-full shadow-sm p-2 sm:p-3 xl:p-7  ">
      <CardHeader className="sm:p-5 p-2  mb-2">
        <CardTitle>
          <HeaderChart />
        </CardTitle>
      </CardHeader>
      <CardContent className="  space-y-7  sm:p-2  p-0  ">
        <div className="mb-4  flex flex-wrap items-center justify-stretch sm:gap-5 gap-2 sm:px-5 px-2">
          {timeRanges.map((range) => (
            <Button
              key={range.key}
              variant={selectedRange === range.key ? "default" : "outline"}
              onClick={() => handleRangeChange(range.key)}
              className="text-xs rounded-full"
            >
              <div className="flex items-center justify-between gap-x-1">
                {range.key === "all" && <RiBarChartBoxLine />}
                {range.label}
              </div>
            </Button>
          ))}
        </div>

        <HomeChart selectedRange={selectedRange}></HomeChart>
      </CardContent>
    </Card>
  );
};

export default Chart;
