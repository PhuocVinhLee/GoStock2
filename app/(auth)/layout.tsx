




const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
   < div className=" h-full   ">
     
      <main className=" h-full  dark:bg-black/85 bg-slate-100/50">{children}</main>
    </div>
  );
};

export default AuthLayout;
