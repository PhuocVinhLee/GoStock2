"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Loader2, LogOut } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { HiOutlineBell } from "react-icons/hi";
import { ModeToggle } from "./mode-toggle-theme";
import useUser from "@/app/hooks/useUser";
import useLogout from "@/app/hooks/useLogout";

const NavbarRoutes = () => {
  const { user, loading } = useUser();
  const router = useRouter();
  const { logout } = useLogout();


  return (
    <>
      {
        <div className=" flex items-center justify-end gap-x-4 w-full ">
          {user && (
            <div>
              <MdOutlineEmail
                className=" text-slate-500  dark:text-white"
                size={30}
              ></MdOutlineEmail>{" "}
            </div>
          )}
          {user && (
            <div className="  relative flex items-center justify-center">
              <HiOutlineBell
                className="text-slate-500 dark:text-white"
                size={30}
              />
              <div className="  absolute top-0 right-0 w-3 h-3 bg-red-600 rounded-full flex items-center justify-center text-white">
                <span className=" text-[0.6rem]"> 5</span>
              </div>
            </div>
          )}

          <div className=" ">
            <ModeToggle></ModeToggle>
          </div>
          <div className=" border-l-2 border h-7"></div>

          {loading ? (
            <Loader2 className="h-8 w-8 animate-spin text-black dark:text-white"></Loader2>
          ) : (
            user && (
              <div className=" flex items-center justify-between gap-x-3">
                <Avatar className="w-8 h-8">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h4 className=" font-bold flex items-center justify-between gap-x-3 ">
                  <div className=" hidden lg:block"> {user?.email}</div>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <FaAngleDown />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className=" mr-8">
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>Billing</DropdownMenuItem>
                      <DropdownMenuItem>Team</DropdownMenuItem>
                      <DropdownMenuItem onClick={()=>{
                        logout()
                      }}>
                        Logout
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </h4>
              </div>
            )
          )}

          {!user && (
            <div className="flex items-center justify-between gap-x-3">
              <Button
                onClick={() => {
                  router.push("/login");
                }}
                className=" rounded-3xl"
              >
                Login
              </Button>
              <Button
                onClick={() => {
                  router.push("/sign-up");
                }}
                className=" rounded-3xl"
              >
                Sign up
              </Button>
            </div>
          )}
        </div>
      }
    </>
  );
};

export default NavbarRoutes;
