import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={`/`} className=" ">
      <div className="flex  items-center justify-normal gap-x-2 ">
      <Image
          src= "/asset/logo.png"
          alt="logo"
          width={34}
          height={34}
          className="rounded-full "
        />
        <h2 className=" text-xl font-bold ">GoStock</h2>
      </div>

     
    </Link>
  );
};

export default Logo;
