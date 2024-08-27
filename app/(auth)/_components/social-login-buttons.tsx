"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
interface ButtonLoginProp {
  src: string;
  label: string;
}

const ButtonLogin = ({ src, label }: ButtonLoginProp) => {
  const router = useRouter();
  const handelLogin =  () => {
   
  };
  return (
    <Button
      onClick={() => {
        handelLogin()
      }}
      variant="outline"
      className="w-full border-gray-200 gap-x-2"
    >
      <Image
        src={src}
        alt="logo"
        width={20}
        height={20}
        className={cn(" rounded-full")}
      />
      {label}
    </Button>
  );
};

export default ButtonLogin;
