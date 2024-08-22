"use client";

import {
  BarChart,
  Compass,
  FileQuestion,
  FileQuestionIcon,
  Layout,
  List,
  Users,
} from "lucide-react";
import SidebarItem from "./sidebar-item";
import { usePathname } from "next/navigation";

const guestRoutes = [
  {
    icon: Layout,
    label: "Home",
    href: "/",
  },
  {
    icon: Layout,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: Layout,
    label: "Wallet",
    href: "/wallet",
  },
  {
    icon: Layout,
    label: "News",
    href: "/news",
  },
  {
    icon: Layout,
    label: "Stock & fund",
    href: "/stock&fund",
  },
  {
    icon: Compass,
    label: "Ourcommuninty",
    href: "/ourcommuninty",
  },
  {
    icon: Compass,
    label: "Settiing",
    href: "/settiing",
  },
  {
    icon: Compass,
    label: "Contact us",
    href: "/contactus",
  },
];

const SidebarRoutes = () => {
  const pathname = usePathname();

  const routes = guestRoutes;
  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
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
