import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type {Control, FieldValues, Path } from "react-hook-form";
import type { ReactNode } from "react";

interface InputFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  type?: string;
  placeholder?: string;
  icon?: ReactNode;
}

export function InputField<T extends FieldValues>({
  name,
  control,
  label,
  type = "text",
  placeholder,
  icon,
}: InputFieldProps<T>) {
  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="block text-2xl font-medium text-gray-900">
            {label}
          </FormLabel>
          <FormControl className="mt-2">
            <div className="relative">
              {icon && (
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  {icon}
                </div>
              )}
              <Input
                {...field}
                type={type}
                placeholder={placeholder}
                className={`${
                  icon ? "pl-10" : ""
                } block w-full rounded-md bg-white px-3 py-6 text-base pl-8 text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6`}
              />
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
