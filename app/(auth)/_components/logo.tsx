import React from 'react'
import Image from "next/image";
import { cn } from '@/lib/utils';

interface LogoProps{
isLogin?: boolean;

}
const Logo = ({ isLogin}: LogoProps) => {
  return (
    <div className="flex  items-center justify-center gap-x-1  ">
    <div
      className={cn(
        isLogin &&
          "absolute  z-10  h-full w-full bg-slate-500/20 top-0 right-0 rounded-md flex items-center justify-center"
      )}
    >
      <Image
        src={isLogin ? "/asset/logowhite3.png" : "/asset/logo2.png"}
        alt="logo"
        width={40}
        height={40}
        className={cn(
          " rounded-full",
          isLogin &&
            "  transition-all duration-500 ease-in-out  h-10 w-10 rounded-full animate-spin"
        )}
      />
    </div>
    {isLogin && (
      <div className="border w-10 h-10 rounded-full  bg-black"> </div>
    )}
    <h2 className=" text-2xl font-bold ">GoStock</h2>
  </div>
  )
}

export default Logo