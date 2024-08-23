import React from "react";
import {
  Card,
 
} from "@/components/ui/card";
import SupportingImagery from "./_components/features/supporting-imagery";
import MyWatchList from "./_components/watch-list/my-watch-list";
import Chart from "./_components/chart/chart";
const DashbroadPage = () => {
  return (
    <div className=" flex flex-col gap-y-10 md:p-10">
      <h1 className=" font-bold text-xl "> My Protfolio</h1>


      <SupportingImagery></SupportingImagery>
      <div className=" grid grid-cols-3 gap-10 ">
       <div className=" col-span-2  w-full h-full "><Chart></Chart></div>
        <MyWatchList></MyWatchList>
      </div>
      
    </div>
  );
};

export default DashbroadPage;
