"use client";

import { Card } from "@/components/ui/card";
import { FaSpotify } from "react-icons/fa";
import { FaAirbnb } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import MyWatchListItem from "./my-watch-list-item";
import { Plus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { MyWatchListData } from "./data";

const MyWatchList = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(1);
  return (
    <Card className="z-10  border-none  flex flex-col gap-y-5 w-full p-4  sm:py-7  sm:px-7 lg:py-7 xl:py-12 xl:px-10 bg-white dark:bg-customDark rounded-2xl shadow-sm">
      <div className={cn( " flex items-center  justify-between" ,  selectedIndex !== null && ""
      )}>

        <h6 className=" text-lg font-bold">My watchlist</h6>
        <span>
          {" "}
          <Plus size={25}></Plus>{" "}
        </span>
      </div>
      <div className="flex flex-col">
        {MyWatchListData?.map((data, index) => (
          <div
            onClick={() =>
              setSelectedIndex((pre) => (pre != data?.id ? data?.id : null))
            }
            key={index}
            className={cn(
               index +1 < MyWatchListData?.length && "border-b-2"
            )}
          >
          
            <MyWatchListItem
              // className={cn(
              //   selectedIndex === index
              //     ? "z-40   relative  border shadow-lg   bg-white rounded-xl scale-y-105  scale-x-[1.22] px-5 "
              //     :  selectedIndex !== null && "blur-[1px]"
              // )}
              id={data?.id}
              src={data?.src}
              fullName={data?.fullName}
              shortname={data?.shortname}
              price={data?.price}
              referred={data?.referred}
            ></MyWatchListItem>
          </div>
        ))}
      </div>
    
    </Card>
  );
};

export default MyWatchList;
