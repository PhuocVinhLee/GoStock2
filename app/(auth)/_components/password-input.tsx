"use client";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { EyeOffIcon, EyeIcon } from "lucide-react";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface PasswordInputProps {
  form: any;
  
}

const PasswordInput = ({ form }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormField
      control={form.control}
      name="password"
      render={({ field, fieldState }) => (
        <FormItem>
          <FormLabel>Password</FormLabel>
          <FormControl>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                className={cn(
                  fieldState.isDirty && fieldState.error && "border-red-500"
                )}
                placeholder="Enter your password"
                {...field}
                onBlur={() => form.trigger("password")}
                onChange={(e) => {
                  field.onChange(e);
                  form.trigger("password");
                }}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                {showPassword ? (
                  <EyeOffIcon size={20} />
                ) : (
                  <EyeIcon size={20} />
                )}
              </button>
            </div>
          </FormControl>
          <FormMessage
            className={cn(
              "text-xs",
              fieldState.isDirty && fieldState.error && "border-red-500"
            )}
          >
            {fieldState.isDirty &&
              (fieldState.error ? fieldState.error?.message : "")}
          </FormMessage>
        </FormItem>
      )}
    />
  );
};

export default PasswordInput;
