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

import ButtonLogin from "../../_components/social-login-buttons";
import { emailPasswordSchema } from "../../_components/validationSchemas";
import Logo from "../../_components/logo";

import ButtonLink from "../../_components/button-link";
import CustomInput from "../../_components/custom-input";
import SocialLogins from "../../_components/social-logins";
import { useRouter } from "next/navigation";

const templateData = {
  email: "me@example.com",
  password: "Example@123456789",
};

const LoginForm = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  const form = useForm<z.infer<typeof emailPasswordSchema>>({
    resolver: zodResolver(emailPasswordSchema),
    defaultValues: {
      email: "me@example.com",
      password: "Example@123456789",
    },
  });

  const onSubmit = async (values: z.infer<typeof emailPasswordSchema>) => {
    try {
      setIsLogin(true);

      await new Promise((resolve) => setTimeout(resolve, 3000));

      if (values.email != templateData.email) {
        return form.setError("email", {
          type: "manual",
          message: "Invalid email address.",
        });
      }
      if (values.password != templateData.password) {
        return form.setError("password", {
          type: "manual",
          message: "Invalid password.",
        });
      }
      if (
        values.email === templateData.email &&
        values.password === templateData.password
      ) {
        router.push("/dashboard");
      toast.success("You have logged in successfully.");
      }

      
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
          <CustomInput key="email" label="Email" type="email" form={form} />
          <CustomInput
            key="password"
            label="Password"
            type="password"
            form={form}
          />
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>
      </Form>

      <div className=" text-center mt-6">
        <ButtonLink
          href="/forget-password"
          label="Forget password"
        ></ButtonLink>
      </div>

      <Separator className="my-6" />
      <CardFooter className="flex flex-col space-y-4 p-0">
        <SocialLogins></SocialLogins>

        <div className="text-center text-sm text-gray-600 dark:text-white">
          Don't have an account?{" "}
          <Link
            href="/sign-up"
            className="    font-semibold text-sm text-blue-600 hover:text-blue-800"
          >
            Sign up
          </Link>
        </div>
      </CardFooter>
    </div>
  );
};

export default LoginForm;
