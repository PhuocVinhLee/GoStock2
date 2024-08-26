import Image from "next/image";
import Chart from "./chart";
import { cn } from "@/lib/utils";

import { LuArrowUp } from "react-icons/lu";
import { LuArrowDown } from "react-icons/lu";

interface SupportingImageryItemProps {
  id: number;
  src: string;
  fullName: string;
  shortname: string;
  price: number;
  referred: number;
  className?: string; //
}

const SupportingImageryItem = ({
  id,
  src,
  fullName,
  shortname,
  price,
  referred,
  className,
}: SupportingImageryItemProps) => {
  return (
    <div className=" p-5   flex flex-col gap-y-5  w-full  ">
      <div className="flex items-center justify-between ">
        <div className=" w-full flex items-center  gap-x-2">
          <div className="relative">
            <Image
              src={src}
              alt={shortname}
              width={35}
              height={35}
              className="rounded-full  "
            />
          </div>
          <span className=" font-semibold">{fullName}</span>
        </div>

        <Chart up={referred>0}></Chart>
      </div>

      <div className="space-y-5  p-0">
        <div className="flex justify-between ">
          <span className=" text-gray-500 dark:text-white">Total Shares</span>
          <span className=" font-semibold">${`${price}`}</span>
        </div>
        <div className="flex justify-between ">
          <span className="  text-gray-500 dark:text-white">Total Return</span>
          <span className={cn(" flex items-center justify-between font-semibold",
            referred >=0 ? "text-green-500" :" text-red-500"
          )}>{`${referred}%`}  {referred < 0 ?  <  LuArrowDown  /> : <LuArrowUp  /> }</span>
        </div>
      </div>
    </div>
  );
};

export default SupportingImageryItem;
