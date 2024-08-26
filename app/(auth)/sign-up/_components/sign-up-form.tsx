"use client";
import { useState } from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";



import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,

} from "@/components/ui/form";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { fullNameEmailPasswordConfirmSchema } from "../../_components/validationSchemas";
import Logo from "../../_components/logo";
import CustomInput from "../../_components/custom-input";




const SignUpForm = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  const form = useForm<z.infer<typeof fullNameEmailPasswordConfirmSchema>>({
    resolver: zodResolver(fullNameEmailPasswordConfirmSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (
    values: z.infer<typeof fullNameEmailPasswordConfirmSchema>
  ) => {
    try {
      setIsLogin(true);

      await new Promise((resolve) => setTimeout(resolve, 3000));
      
     router.push("/dashboard");
      toast.success("You have sign up in successfully.");
    } catch (error) {
      toast.error("Some thing went wrong!");
    } finally {
      setIsLogin(false);
    }
  };

 

  return (
    <div className=" relative w-full p-10 py-14">
      <CardHeader className=" p-0  pb-5">
        <CardTitle className="text-2xl font-bold  flex items-center justify-center w-full ">
          <div>
            <Logo isLogin={isLogin}></Logo>
          </div>{" "}
        </CardTitle>
      </CardHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <CustomInput label="Full name" type="fullname" form={form} />
          <CustomInput label="Email" type="email" form={form} />
          <CustomInput label="Password" type="password" form={form} />
         
          <CustomInput
            label=" Confirm Password"
            type="confirmPassword"
            form={form}
          />
          <Button type="submit" className="w-full">
            Sign up
          </Button>
        </form>
      </Form>

      <div className=" mt-5 mb-0 text-center">
        <Button
          type="button"
          variant="link"
          onClick={() => {
            router.push("/login");
          }}
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          Back to login
        </Button>
      </div>
    </div>
  );
};

export default SignUpForm;
