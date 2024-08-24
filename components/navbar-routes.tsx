"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { HiOutlineBell } from "react-icons/hi";

const NavbarRoutes = () => {
  return (
    <>
      <div className=" flex items-center justify-end gap-x-4 w-full ">
        <div>
          <MdOutlineEmail
            className=" text-slate-500"
            size={30}
          ></MdOutlineEmail>{" "}
        </div>
        <div className="  relative flex items-center justify-center">
          <HiOutlineBell className="text-slate-500" size={30} />
          <div className="  absolute top-0 right-0 w-3 h-3 bg-red-600 rounded-full flex items-center justify-center text-white">
            <span className=" text-[0.6rem]"> 5</span>
          </div>
        </div>
        <div className=" border-l-2 border h-7"></div>
        <div className=" flex items-center justify-between gap-x-3">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h4 className=" font-bold flex items-center justify-between gap-x-3 ">
            Arilangga Mahesa <FaAngleDown />{" "}
          </h4>
        </div>
      </div>
    </>
  );
};

export default NavbarRoutes;
