
import Nav from "./_components/nav";
import Sidebar from "./_components/sidebar";

const DashboardPage = ({ children }: { children: React.ReactNode }) => {
 
  return (
    <div className=" h-full   ">
      <div className="h-[100px] lg:pl-72 fixed inset-y-0 w-full z-50">
        <Nav></Nav>
      </div>

      <div className=" hidden lg:flex h-full w-72   flex-col fixed inset-y-0 z-50">
        <Sidebar></Sidebar>
      </div>

      <main className=" h-full lg:pl-72 pt-[100px] dark:bg-black/85 bg-slate-100/80">
        {children}
      </main>
    </div>
  );
};

export default DashboardPage;
