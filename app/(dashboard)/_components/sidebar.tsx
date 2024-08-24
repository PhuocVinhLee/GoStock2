import Logo from "./logo";
import SidebarRoutes from "./sidebar-routes";
import TotalInvestment from "./total-investment";

const Sidebar = () => {
  return (
    <div className=" h-full  flex flex-col overflow-y-auto  border-r-[1px] shadow-sm  bg-white dark:bg-customDark">
      <div className="">
        <Logo />
      </div>

      <div className="flex flex-col w-full  px-7 gap-y-5">
        <TotalInvestment></TotalInvestment>
        <SidebarRoutes></SidebarRoutes>
      </div>
    </div>
  );
};

export default Sidebar;
