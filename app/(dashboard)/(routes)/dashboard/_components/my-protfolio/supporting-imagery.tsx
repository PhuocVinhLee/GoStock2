"use client";
import { Card } from "@/components/ui/card";
import SupportingImageryItem from "./supporting-imagery-item";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { SupportingImageryData } from "./data";

export default function SupportingImagery() {
  const [startIndex, setStartIndex] = useState(0);

  const [visibleItems, setVisibleItems] = useState(1);

  const [isActive, setIsActive] = useState(2);

  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window?.innerWidth >= 1280) setVisibleItems(4);
      else if (window?.innerWidth >= 1024) setVisibleItems(3);
      else if (window?.innerWidth >= 768) setVisibleItems(2);
      else if (window?.innerWidth >= 640) setVisibleItems(2);
      else setVisibleItems(1);
    };

    handleResize();
    window?.addEventListener("resize", handleResize);
    return () => window?.removeEventListener("resize", handleResize);
  }, []);
  const handleNextClick = () => {
    if (isAnimating) return;
    setAnimationDirection("right");
    setIsAnimating(true);
    setTimeout(() => {
      setStartIndex(
        (prevIndex) => (prevIndex + 1) % SupportingImageryData.length
      );
      setIsAnimating(false);
    }, 100);
  };

  const handleBackClick = () => {
    // setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    if (isAnimating) return;
    setAnimationDirection("left");
    setIsAnimating(true);
    setTimeout(() => {
      setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      setIsAnimating(false);
    }, 100);
  };

  const showBackButton = startIndex > 0;
  const showNextButton =
    startIndex + visibleItems < SupportingImageryData.length;

  return (
    <Card className=" relative  shadow-sm border-none  bg-white/65 dark:bg-customDark/60  w-full   grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 rounded-3xl gap-x-3 lg:gap-x-1 md:gap-x-16 p-7 lg:p-3 xl:p-7">
      {SupportingImageryData?.slice(startIndex, startIndex + visibleItems)?.map(
        (data, index) => (
          <div
            onClick={() =>
              setIsActive((pre) => (pre === data.id ? -1 : data.id))
            }
            className={cn(
              "  bg-slate-50/5  dark: dark:bg-customDark/5   rounded-3xl  w-auto     ",
              isActive === data.id && " bg-white dark:bg-customDark  shadow-md",
              // "animate-flicker",
              isAnimating
                ? animationDirection === "right"
                  ? "animate-slideOutLeft"
                  : "animate-slideOutRight"
                : animationDirection === "right"
                ? "animate-slideInRight"
                : "animate-slideInLeft"
            )}
            key={index}
          >
            <SupportingImageryItem
              id={data?.id}
              src={data?.src}
              fullName={data?.fullName}
              shortname={data?.shortname}
              price={data?.price}
              referred={data?.referred}
            ></SupportingImageryItem>
          </div>
        )
      )}

      <Button
        onClick={handleBackClick}
        className={`   left-0 top-1/2 -translate-y-1/2 -translate-x-1/2  absolute p-2 bg-white  rounded-full shadow-md hover:bg-gray-200 transition-colors duration-200 ${
          showBackButton ? "opacity-100" : " hidden"
        }`}
        disabled={!showBackButton}
      >
        <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
      </Button>
      <Button
        onClick={handleNextClick}
        className={`  right-0  top-1/2 -translate-y-1/2 translate-x-1/2  absolute p-2  bg-white rounded-full shadow-md hover:bg-gray-200 transition-colors duration-200 ${
          showNextButton ? "opacity-100" : " hidden"
        }`}
        disabled={!showNextButton}
      >
        <ChevronRightIcon className="w-6 h-6 text-gray-600" />
      </Button>
    </Card>
  );
}
