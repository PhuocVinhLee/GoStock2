"use client";

import { Card } from "@/components/ui/card";
import { FaSpotify } from "react-icons/fa";
import { FaAirbnb } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import MyWatchListItem from "./my-watch-list-item";
import { Plus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
const MyWatchListData = [
  {
    id: 0,

    src: "/asset/my-watch-list/spotify4.png",
    fullName: "Spotify",
    shortname: "SPOT",
    price: 310.4,
    referred: -10,
  },
  {
    id: 1,
    src: "/asset/my-watch-list/airbnb.png",
    fullName: "Airbnb",
    shortname: "ABNB",
    price: 132.72,
    referred: -10.29,
  },
  {
    id: 2,
    src: "/asset/my-watch-list/shopify.webp",
    fullName: "Shopify",
    shortname: "SHOP",
    price: 132.72,
    referred: -10.29,
  },

  {
    id: 3,
    src: "/asset/my-watch-list/sony2.png",
    fullName: "playstation ",
    shortname: "SPOT",
    price: 71.86,
    referred: 0.98,
  },
  {
    id: 4,
    src: "/asset/my-watch-list/dbx.png",
    fullName: "Dropbox Inc",
    shortname: "DBX",
    price: 132.72,
    referred: -10.29,
  },
  {
    id: 5,
    src: "/asset/my-watch-list/paypal.png",
    fullName: "Paypal",
    shortname: "PYPL",
    price: 87.66,
    referred: -3.86,
  },
];
const MyWatchList = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(1);
  return (
    <Card className="z-10   flex flex-col gap-y-5 w-full  py-12  px-7 lg:py-7 xl:py-12 bg-white rounded-3xl shadow-lg">
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
