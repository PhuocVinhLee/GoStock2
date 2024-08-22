import Image from "next/image";
import Chart from "./chart";

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
    <div className=" p-7   flex flex-col   gap-y-5  w-full  ">
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

        <Chart></Chart>
      </div>

      <div className="space-y-5  p-0">
        <div className="flex justify-between ">
          <span className=" text-gray-500">Total Shares{id}</span>
          <span className=" font-semibold">$310,40</span>
        </div>
        <div className="flex justify-between">
          <span className="  text-gray-500">Total Return</span>
          <span className=" font-semibold text-red-500">-1,10% ↓</span>
        </div>
      </div>
    </div>
  );
};

export default SupportingImageryItem;
