"use client";

import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";

// import { MdKeyboardCommandKey } from "react-icons/md";

const SearchInput = () => {
  const [value, setValue] = useState("");

  return (
    <div className=" relative w-full">
      <Search className="h-4 w-4 absolute top-3 left-4 text-slate-600  dark:text-white"></Search>

      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className=" w-5 sm:w-[250px]  md:w-[340px]  xl:w-[400px] lg:w-[280px] pl-9  dark:text-white dark:focus-visible:ring-white rounded-xl bg-slate-200/20 focus-visible:ring-slate-200 "
        placeholder={`Pre "${"⌘"}" to search for variours stocks...`}
      ></Input>
    </div>
  );
};

export default SearchInput;
