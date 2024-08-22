import Nav from "./_components/nav";
import Sidebar from "./_components/sidebar";





const DashboardPage = ({ children }: { children: React.ReactNode }) => {
  return (
   < div className=" h-full  ">
      <div className="h-[100px] md:pl-72 fixed inset-y-0 w-full z-50">
        <Nav></Nav>
      </div>

      <div className=" hidden md:flex h-full w-72   flex-col fixed inset-y-0 z-50">
        <Sidebar></Sidebar>
      </div>

      <main className=" h-full md:pl-72 pt-[100px] bg-slate-100/20">{children}</main>
    </div>
  );
};

export default DashboardPage;
