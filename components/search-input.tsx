"use client";

import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";

// import { MdKeyboardCommandKey } from "react-icons/md";

const SearchInput = () => {
  const [value, setValue] = useState("");

  return (
    <div className=" relative w-full">
      <Search className="h-4 w-4 absolute top-3 left-3 text-slate-600"></Search>

      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className=" w-full md:w-[400px] pl-9 dark:bg-custom-dark-bg rounded-xl bg-slate-200/20 focus-visible:ring-slate-200"
        placeholder={`Pre "${"⌘"}" to search for variours stocks...`}
      ></Input>
    </div>
  );
};

export default SearchInput;
