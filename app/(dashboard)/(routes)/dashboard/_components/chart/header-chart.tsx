"use client";

const ChartData = {
  id: 0,
  src: "/asset/portfolio-list/apple1.jpg",
  fullName: "Apple inc",
  shortname: "APPL",
  price: 310.4,
  referred: -10,
};

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";

const HeaderChart = () => {
  return (
    <div
      className={cn(
        "flex   items-center justify-between  shadow-sm  border-b  pb-5 relative    "
      )}
    >
      <div className="flex gap-x-4 w-auto items-center justify-between  ">
        <Image
          src={ChartData?.src}
          alt={ChartData?.shortname}
          width={45}
          height={45}
          className="rounded-full "
        />

        <span className=" space-y-1">
          <h4 className=" text-lg font-bold">{ChartData?.fullName}</h4>
          <p className=" text-base text-gray-500">{ChartData?.shortname}</p>
        </span>
      </div>

      <div className=" space-y-1">
        <div className=" flex items-center justify-between gap-x-2 ">
          <Badge
            className={cn(
              ChartData?.referred < 0 ? " bg-red-500" : "bg-green-500"
            )}
          >
            <p className=" text-xs">-1,10%</p>
          </Badge>
          <p className=" text-xl font-bold">${ChartData?.price}</p>
        </div>

        <p className="text-gray-500 text-sm">Last updated at 14:30</p>
      </div>
    </div>
  );
};

export default HeaderChart;
