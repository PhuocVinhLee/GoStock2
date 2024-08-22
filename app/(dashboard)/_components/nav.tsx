import NavbarRoutes from "@/components/navbar-routes";
import MobileSidebar from "./mobile-sidebar";
import SearchInput from "@/components/search-input";
const NavBar = () => {
  return (
    <div className=" p-10 flex  items-center border-b h-full w-full bg-white  dark:bg-customDark shadow-sm">
      {/* <MobileSidebar></MobileSidebar> */}

      <SearchInput></SearchInput>
      <NavbarRoutes />
    </div>
  );
};

export default NavBar;
