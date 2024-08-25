import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { IconType } from 'react-icons';


interface SidebarItemProps {
  icon: IconType;
  label: string;
  href: string;
}

const SidebarItem = ({ icon: Icon, label, href }: SidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const onclick = () => {
    router.push(href);
  };
  return (
    <button
      onClick={onclick}
      type="button"
      className={cn(
        "flex items-center w-full justify-between  rounded-md  dark:text-white gap-x-2 text-sm font-[500] px-3 transition-all hover:text-slate-600 hover:bg-slate-300/20",
        isActive &&
          "  bg-slate-200/20 hover:bg-slate-200/20 "
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={22}
          className={cn(
            "text-slate-500 dark:text-white",
            isActive && "text-slate-700 "
          )}
        />
        {label}
      </div>
     
      {href ==='/setting' && <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center text-white">
 <span className=" text-xs"> 6</span>
</div>}
      
    </button>
  );
};

export default SidebarItem;
