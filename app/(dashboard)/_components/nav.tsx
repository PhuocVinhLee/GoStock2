import NavbarRoutes from "@/components/navbar-routes";
import MobileSidebar from "./mobile-sidebar";
import SearchInput from "@/components/search-input";
const NavBar = () => {
  // sm:bg-red-500  md:bg-orange-300 lg:bg-yellow-400 xl:bg-purple-700
  return (
    <div className="    xl:p-10 p-5  flex  items-center   h-full w-full bg-white  dark:bg-customDark shadow-sm">
      <div className="flex gap-x-3 items-center justify-between">
        <MobileSidebar></MobileSidebar>

        <SearchInput></SearchInput>
      </div>
      <NavbarRoutes />
    </div>
  );
};

export default NavBar;
