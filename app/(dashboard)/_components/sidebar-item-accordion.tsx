import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { IconType } from "react-icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface SidebarAccordionItemProps {
  parent: { icon: IconType; label: string };
  child: { label: string; href: string }[];
}

const SidebarAccordionItem = ({
  parent,
  child,
}: SidebarAccordionItemProps) => {
  const pathname = usePathname();
  const router = useRouter();
  //   const isActive =
  //     (pathname === "/" && href === "/") ||
  //     pathname === href ||
  //     pathname?.startsWith(`${href}/`);

  //   const onclick = () => {
  //     router.push(href);
  //   };
  return (
    <Accordion defaultValue="item-1" type="single" collapsible className="w-full  ">
      <AccordionItem value="item-1">
        <AccordionTrigger className="    rounded-md  dark:text-white  px-3 text-sm  transition-all hover:text-slate-600 hover:bg-slate-300/20">
          {" "}
          <div className="flex items-center gap-x-2 ">
            <parent.icon
              size={22}
              className={cn(
                "text-slate-500 dark:text-white",
                1 && "text-slate-700 "
              )}
            />
            {parent.label}
          </div>
        </AccordionTrigger>
        <div className="flex flex-col px-3 mb-3">
          {child?.map((child, index) => (
            <AccordionContent
              key={index}
              className="ms-5 p-2 rounded-md  dark:text-white  text-sm  transition-all hover:text-slate-600 hover:bg-slate-300/20"
            >
              {child.label}
            </AccordionContent>
          ))}
        </div>
      </AccordionItem>
    </Accordion>
    // <button
    //   onClick={onclick}
    //   type="button"
    //   className={cn(
    //     "flex items-center  rounded-md  dark:text-white gap-x-2 text-sm font-[500] px-3 transition-all hover:text-slate-600 hover:bg-slate-300/20",
    //     isActive &&
    //       "  bg-slate-200/20 hover:bg-slate-200/20 "
    //   )}
    // >
    //   <div className="flex items-center gap-x-2 py-4">
    //     <Icon
    //       size={22}
    //       className={cn(
    //         "text-slate-500 dark:text-white",
    //         isActive && "text-slate-700 "
    //       )}
    //     />
    //     {label}
    //   </div>

    // </button>
  );
};

export default SidebarAccordionItem;
