import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Sidebar from "./sidebar";
const MobileSidebar = () => {
  return (
    <div className="">
      <Sheet>
        <SheetTrigger className="lg:hidden  hover:opacity-75 transition">
          <Menu></Menu>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 bg-white">
          <Sidebar></Sidebar>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSidebar;
