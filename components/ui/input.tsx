"use client"

import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  validationType?: "email" | "password";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, validationType, ...props }, ref) => {
    const [isValid, setIsValid] = React.useState<boolean | null>(null);

    const validateInput = (value: string, type: string) => {
      if (type === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
      } else if (type === "password") {
        return value.length >= 6;
      } else {
        return value.length > 0;
      }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      const { value, type } = e.target;
      setIsValid(validateInput(value, type));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, type } = e.target;
      setIsValid(validateInput(value, type));
    };

    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          isValid === null
            ? "border-gray-300 focus-visible:ring-red-500"
            : isValid
              ? "border-green-500 focus-visible:ring-green-500"
              : "border-red-500 focus-visible:ring-red-500",
          className
        )}
        ref={ref}
        {...props}
        onBlur={handleBlur}
        onChange={handleChange}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
