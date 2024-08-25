"use client";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

interface CustomInputProps {
  form: any;
  type: "email" | "password" | "confirmPassword" | "fullname";
  label: string;
}

const CustomInput = ({ form, type, label }: CustomInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormField
      control={form.control}
      name={type}
      render={({ field, fieldState }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <div className="  relative">
              <Input    
                type={
               (type === "confirmPassword" || type==="password") ? ( showPassword 
               ? "text"
               : "password") : "text"
                }
                className={cn(
                  fieldState.isDirty && fieldState.error && "border-red-500"
                )}
                placeholder={label}
                {...field}
                onBlur={() => form.trigger(type)}
                onChange={(e) => {
                  field.onChange(e);
                  form.trigger(type);
                }}
              />
              {(type === "confirmPassword" || type === "password") && (
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
              )}
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

export default CustomInput;
