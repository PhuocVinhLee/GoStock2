"use client";


import { RxDashboard } from "react-icons/rx";
import { TbSmartHome } from "react-icons/tb";
import { BiWallet } from "react-icons/bi";
import { HiOutlineNewspaper } from "react-icons/hi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

import { GrGroup } from "react-icons/gr";
import { RiSettings3Line } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";


import SidebarItem from "./sidebar-item";
import { usePathname } from "next/navigation";

import SidebarAccordionItem from "./sidebar-item-accordion";

const guestRoutes = [
  {
    icon: TbSmartHome,
    label: "Home",
    href: "/",
  },
  {
    icon: RxDashboard,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: BiWallet,
    label: "Wallet",
    href: "/wallet",
  },
  {
    icon: HiOutlineNewspaper,
    label: "News",
    href: "/news",
  },
];

const AccordionRoutes = [
  {
    parent: {
      icon: AiOutlineFundProjectionScreen,
      label: "Stock & fund",
      // href: "/stock&fund",
    },
    child: [
      { label: "Stock", href: "/stock" },
      { label: "Cryptocurrency", href: "/cryptocurrency" },
      { label: "Mutual Fund", href: "/mutual-fund" },
      { label: "Gold", href: "/gold" },
    ],
  },
];
const BottomRoutes = [
  {
    icon: GrGroup,
    label: "Ourcommuninty",
    href: "/ourcommuninty",
  },
  {
    icon: RiSettings3Line,
    label: "Setting",
    href: "/setting",
  },
  {
    icon: FiPhone,
    label: "Contact us",
    href: "/contactus",
  },
];

const SidebarRoutes = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col w-full">
      {guestRoutes?.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        ></SidebarItem>
      ))}
      {AccordionRoutes?.map((route, index) => (
        <SidebarAccordionItem
          key={index}
          parent={route.parent}
          child={route.child}
        ></SidebarAccordionItem>
      ))}

      <div className="  mt-3"></div>
      {BottomRoutes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        ></SidebarItem>
      ))}
    </div>
  );
};

export default SidebarRoutes;
