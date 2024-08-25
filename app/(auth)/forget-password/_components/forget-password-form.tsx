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
  EyeOffIcon,
  EyeIcon,
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
import ButtonLogin from "../../_components/button-login";


const formSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." })
      .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter." })
      .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter." })
      .regex(/[0-9]/, { message: "Password must contain at least one number." })
      .regex(/[^a-zA-Z0-9]/, { message: "Password must contain at least one special character." }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords don't match",
  });


const templateData = {
  password: "Example@123456789",
  
};

const ButtonDataLogin = [
  { src: "/asset/portfolio-list/google.png", label: "Google" },
  { src: "/asset/portfolio-list/facebook.png", label: "Facebook" },
];

const ForgetPasswordForm = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const [handleErrorFromSever, setHandleErrorFromSever] = useState<null | {
    type: string;
    message: string;
  }>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsLogin(true);

      await new Promise((resolve) => setTimeout(resolve, 3000));
     
      // if (values.password !== templateData.password) {
      //   form.setError("password", { type: "manual", message: "Invalid password" });
      //   return;
      // }
      router.push("/dashboard");
      toast.success("You have successfully changed your password");
    } catch (error) {
      toast.error("Some thing went wrong!");
    } finally {
      setIsLogin(false);
    }
  };
 

  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className=" relative w-1/2 p-10 py-14">
      <CardHeader className=" p-0  pb-5">
        <CardTitle className="text-2xl font-bold  flex items-center justify-center w-full ">
          <div>
            <div className="flex  items-center justify-center gap-x-1  ">
              <div
                className={cn(
                  isLogin &&
                    "absolute  z-10  h-full w-full bg-slate-500/20 top-0 right-0 rounded-md flex items-center justify-center"
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
   
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="password"
              render={({ field, fieldState }) => {
                console.log(fieldState);
                return (
                  <FormItem>
                    <FormLabel>New Password</FormLabel>
                    <FormControl>
                    <div className="relative">
                      <Input
                      type={showPassword ? "text" : "password"}
                        onClick={() => setHandleErrorFromSever(null)}
                        className={cn(
                          fieldState.isDirty &&
                            (fieldState.error ||
                              (handleErrorFromSever?.type === "email" &&
                                " border-red-500"))
                        )}
                        placeholder="Enter ypur new password"
                        {...field}
                        onBlur={() => form.trigger("password")} // Trigger validation on blur
                        onChange={(e) => {
                          field.onChange(e); // Update the value
                          form.trigger("password"); // Trigger validation on change
                        }}
                      />
                      <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute inset-y-0 right-0 flex items-center pr-3"
                    >
                      {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
                    </button>
                    </div>
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
              name="confirmPassword"
              render={({ field, fieldState }) => {
                console.log(fieldState);
                return (
                  <FormItem>
                    <FormLabel>Confirm New Password</FormLabel>
                    <FormControl>
                    <div className="relative">
                      <Input
                      type={showConfirmPassword ? "text" : "password"}
                        onClick={() => setHandleErrorFromSever(null)}
                        className={cn(
                          fieldState.isDirty &&
                            (fieldState.error ||
                              (handleErrorFromSever?.type === "email" &&
                                " border-red-500"))
                        )}
                        placeholder="Confirm your new password"
                        {...field}
                        onBlur={() => form.trigger("confirmPassword")} // Trigger validation on blur
                        onChange={(e) => {
                          field.onChange(e); // Update the value
                          form.trigger("confirmPassword"); // Trigger validation on change
                        }}
                      />
                      <button
                      type="button"
                      onClick={toggleConfirmPasswordVisibility}
                      className="absolute inset-y-0 right-0 flex items-center pr-3"
                    >
                      {showConfirmPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
                    </button>
                    </div>
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
           
            <Button type="submit" className="w-full">
              Reset Password
            </Button>
          </form>
        </Form>
   
      <div className=" text-center mt-6">
        <Button
          type="button"
          variant="link"
        onClick={()=>{router.push("/login")}}
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          Back to Login
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

export default ForgetPasswordForm;
