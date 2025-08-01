import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { Control } from "react-hook-form";

interface CampoFormularioProps {
  control: Control<any>;
  name: string;
  label: string;
  placeholder: string;
  type: string;
  required:boolean; 
}

export const CampoFormulario = ({
  control,
  name,
  label,
  placeholder,
  type = "text",
  required = true
}: CampoFormularioProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="block text-2xl font-medium text-gray-900">
            {label}
          </FormLabel>
          <FormControl className="mt-2">
            <Input
              {...field}
              name={name}
              placeholder={placeholder}
              type={type}
              required = {required}
              className="block w-full rounded-md bg-white px-3 py-6 text-lg text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
};
