import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
//import { useRouter } from "next/router";

interface SidebarItemProps {
  icon: LucideIcon;
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
        "flex items-center mx-5 rounded-md  dark:text-white gap-x-2 text-sm font-[500] px-3 transition-all hover:text-slate-600 hover:bg-slate-300/20",
        isActive &&
          "  bg-slate-200 hover:bg-slate-200/20 "
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
      
    </button>
  );
};

export default SidebarItem;
