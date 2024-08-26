import { Button } from "@/components/ui/button";
import Link from "next/link";

const HomePage = () => {
  return (
   < div className=" h-full w-full m-5  flex  gap-x-5 ">
     <Link href="/login" >
     <Button> Login page </Button>
     </Link>
     <Link href="/sign-up" >
     <Button> Sign up page </Button>
     </Link>
     <Link href="/forget-password" >
     <Button> Forget password page </Button>
     </Link>
    </div>
  );
};

export default HomePage;
