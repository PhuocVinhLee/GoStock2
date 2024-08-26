"use client";
import { useState } from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { PasswordConfirmSchema } from "../../_components/validationSchemas";
import Logo from "../../_components/logo";
import CustomInput from "../../_components/custom-input";
import SocialLogins from "../../_components/social-logins";

const ForgetPasswordForm = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  const form = useForm<z.infer<typeof PasswordConfirmSchema>>({
    resolver: zodResolver(PasswordConfirmSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof PasswordConfirmSchema>) => {
    try {
      setIsLogin(true);

      await new Promise((resolve) => setTimeout(resolve, 3000));

      router.push("/dashboard");
      toast.success("You have successfully changed your password");
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
          <CustomInput
            key="password"
            label=" New password"
            type="password"
            form={form}
          />
          <CustomInput
            key="confirmPassword"
            label=" Confirm Password"
            type="confirmPassword"
            form={form}
          />

          <Button type="submit" className="w-full">
            Reset Password
          </Button>
        </form>
      </Form>

      <div className=" text-center mt-6">
        <Button
          type="button"
          variant="link"
          onClick={() => {
            router.push("/login");
          }}
          className=" text-sm text-blue-600 hover:text-blue-800"
        >
          Back to Login
        </Button>
      </div>

      <Separator className="my-6" />
      <CardFooter className="flex flex-col space-y-4 p-0">
        <SocialLogins></SocialLogins>

        <div
          className="text-center text-sm dark:text-white
         text-gray-600"
        >
        {" Don't have an account?"}
          <Link
            href="/sign-up"
            className="text-sm font-semibold text-blue-600 hover:text-blue-800"
          >
            Sign up
          </Link>
        </div>
      </CardFooter>
    </div>
  );
};

export default ForgetPasswordForm;
