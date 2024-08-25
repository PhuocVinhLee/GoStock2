"use client";

const ChartData = {
  id: 0,
  src: "/asset/portfolio-list/apple1.jpg",
  fullName: "Apple inc",
  shortname: "APPL",
  price: 310.4,
  referred: -10,
};
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RiBarChartBoxLine } from "react-icons/ri";


import HeaderChart from "./header-chart";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import LineChartCpn from "./line-chart";



const timeRanges = [
  { label: "1 Day", key: "1day" },
  { label: "1 Week", key: "1week" },
  { label: "1 Month", key: "1month" },
  { label: "6 Month", key: "month" },
  { label: "1 Year", key: "1year" },
  { label: "5 Year", key: "1year" },
  { label: "All", key: "all" },
];


const Chart = () => {
  const [selectedRange, setSelectedRange] = useState("1week");
  return (
    <Card className=" rounded-2xl h-full  shadow-me p-7 lg:p-3 xl:p-7 ">
      <CardHeader className="  p-5  ">
        <CardTitle className="">
          <HeaderChart></HeaderChart>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <div className="mb-4 flex flex-wrap items-center justify-stretch gap-5 px-5">
            {timeRanges?.map((range, index) => (
              <Button
                key={range.key}
                variant={selectedRange === range.key ? "default" : "outline"}
                onClick={() => setSelectedRange(range.key)}
                className="text-xs  rounded-full"
              >
                <div className="flex items-center  justify-between gap-x-1">
                  {range.key === "all" && <RiBarChartBoxLine />}
                  {range.label}
                </div>
              </Button>
            ))}
          </div>
        </div>

       
        <LineChartCpn></LineChartCpn>
      </CardContent>
    </Card>
  );
};

export default Chart;
