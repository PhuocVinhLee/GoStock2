"use client";
import { useState } from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ImSad } from "react-icons/im";

import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  ChevronUpIcon,
  LockIcon,
  MailIcon,
  TrendingUpIcon,
  BarChartIcon,
  DollarSignIcon,
  Loader2,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import ButtonLogin from "./button-login";
import ForgetPassword from "./forget-password";

const formSchema = z.object({
  email: z
    .string()
    .min(2, {
      message: "Email must be at least 2 characters.",
    })
    .email({
      message: "Invalid email address.",
    }),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters.",
    })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter.",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter.",
    })
    .regex(/[0-9]/, {
      message: "Password must contain at least one number.",
    })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Password must contain at least one special character.",
    }),
});

const templateData = {
  email: "me@example.com",
  password: "Example@123456789",
};

const ButtonDataLogin = [
  { src: "/asset/portfolio-list/google.png", label: "Google" },
  { src: "/asset/portfolio-list/facebook.png", label: "Facebook" },
];

const LoginForm = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const [handleErrorFromSever, setHandleErrorFromSever] = useState<null | {
    type: string;
    message: string;
  }>(null);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "me@example.com",
      password: "Example@123456789",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsLogin(true);

      await new Promise((resolve) => setTimeout(resolve, 3000));
      console.log("lasnc");
      if (values.email != templateData.email) {
        return setHandleErrorFromSever({
          type: "email",
          message: "Invalid email address1",
        });
      }
      if (values.password != templateData.password) {
        return setHandleErrorFromSever({
          type: "password",
          message: "Invalid password",
        });
      }
      if (
        values.email === templateData.email &&
        values.password === templateData.password
      ) {
        setHandleErrorFromSever(null);
      }

      router.push("/dashboard");
      toast.success("You have logged in successfully.");
    } catch (error) {
      toast.error("Some thing went wrong!");
    } finally {
      setIsLogin(false);
    }
  };
  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault()
    // console.log('Password reset requested for:', email)
  }

  const toggleForgotPassword = () => {
    setIsForgotPassword(!isForgotPassword)
  }

  return (
    <div className=" relative w-1/2 p-10 py-14">
      <CardHeader className=" p-0  pb-5">
        <CardTitle className="text-2xl font-bold  flex items-center justify-center w-full ">
          <div>
            <div className="flex  items-center justify-center gap-x-1  ">
              <div
                className={cn(
                  isLogin &&
                    "absolute   h-full w-full bg-slate-500/20 top-0 right-0 rounded-md flex items-center justify-center"
                )}
              >
                <Image
                  src={isLogin ? "/asset/logowhite3.png" : "/asset/logo2.png"}
                  alt="logo"
                  width={40}
                  height={40}
                  className={cn(
                    " rounded-full",
                    isLogin &&
                      "  transition-all duration-500 ease-in-out  h-10 w-10 rounded-full animate-spin"
                  )}
                />
              </div>
              {isLogin && (
                <div className="border w-10 h-10 rounded-full  bg-black"> </div>
              )}
              <h2 className=" text-2xl font-bold ">GoStock</h2>
            </div>
          </div>{" "}
        </CardTitle>
      </CardHeader>
    {!isForgotPassword ?   <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field, fieldState }) => {
              console.log(fieldState);
              return (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      onClick={() => setHandleErrorFromSever(null)}
                      className={cn(
                        fieldState.isDirty &&
                          (fieldState.error ||
                            (handleErrorFromSever?.type === "email" &&
                              " border-red-500"))
                      )}
                      placeholder="email"
                      {...field}
                      onBlur={() => form.trigger("email")} // Trigger validation on blur
                      onChange={(e) => {
                        field.onChange(e); // Update the value
                        form.trigger("email"); // Trigger validation on change
                      }}
                    />
                  </FormControl>

                  <FormMessage
                    className={cn(
                      " text-xs",
                      fieldState.isDirty &&
                        (fieldState.error ||
                          handleErrorFromSever?.type == "email") &&
                        " border-red-500"
                    )}
                  >
                    {fieldState.isDirty &&
                      (fieldState.error
                        ? fieldState.error?.message
                        : handleErrorFromSever?.type === "email"
                        ? handleErrorFromSever?.message
                        : "")}
                  </FormMessage>
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    onClick={() => setHandleErrorFromSever(null)}
                    placeholder="password"
                    className={cn(
                      " border",
                      fieldState.isDirty &&
                        (fieldState.error ||
                          (handleErrorFromSever?.type === "password" &&
                            " border-red-500"))
                    )}
                    {...field}
                    onBlur={() => form.trigger("password")} // Trigger validation on blur
                    onChange={(e) => {
                      field.onChange(e); // Update the value
                      form.trigger("password"); // Trigger validation on change
                    }}
                  />
                </FormControl>

                <FormMessage
                  className={cn(
                    " text-xs",
                    fieldState.isDirty &&
                      (fieldState.error ||
                        handleErrorFromSever?.type == "password") &&
                      " border-red-500"
                  )}
                >
                  {fieldState.isDirty &&
                    (fieldState.error
                      ? fieldState.error?.message
                      : handleErrorFromSever?.type === "password"
                      ? handleErrorFromSever?.message
                      : "")}
                </FormMessage>
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>
      </Form>: <ForgetPassword></ForgetPassword> }
      <div className=" text-center mt-6">
        <Button
          type="button"
          variant="link"
          onClick={toggleForgotPassword}
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          {isForgotPassword ? "Back to Login" : "Forgot Password?"}
        </Button>
      </div>

      <Separator className="my-6" />
      <CardFooter className="flex flex-col space-y-4 p-0">
        <div className="grid grid-cols-2 gap-4  w-full">
          {ButtonDataLogin?.map((data, index) => (
            <ButtonLogin
              key={index}
              src={data.src}
              label={data?.label}
            ></ButtonLogin>
          ))}
        </div>

        <div className="text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="#" className="text-black font-semibold hover:underline">
            Sign up
          </a>
        </div>
      </CardFooter>
    </div>
  );
};

export default LoginForm;
