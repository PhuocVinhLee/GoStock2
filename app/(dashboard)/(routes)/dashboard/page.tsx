import React from "react";

import SupportingImagery from "./_components/my-protfolio/supporting-imagery";
import MyWatchList from "./_components/watch-list/my-watch-list";
import Chart from "./_components/chart/chart";
const DashbroadPage = () => {
  return (
    <div className=" flex flex-col sm:gap-y-7  sm:p-7  gap-3 p-3">
      <h1 className=" font-bold text-xl "> My Protfolio</h1>

      <SupportingImagery></SupportingImagery>
      <div className=" grid xl:grid-cols-3 gap-7  lg:grid-cols-4 ">
        <div className=" xl:col-span-2  lg:col-span-2 w-full h-full  ">
          <Chart></Chart>
        </div>
        <div className="xl:col-span-1  lg:col-span-2 w-full h-full ">
          <MyWatchList></MyWatchList>
        </div>
      </div>
    </div>
  );
};

export default DashbroadPage;
