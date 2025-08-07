import { Controller } from "react-hook-form";

interface SelectFieldProps {
  name: string;
  control: any;
  label: string;
  options: { label: string; value: string }[];
}

export const SelectField = ({ name, control, label, options }: SelectFieldProps) => {
  return (
    <div className="space-y-2">
      <label className="text-gray-700 font-medium">{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <select
            {...field}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">Selecione uma categoria</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )}
      />
    </div>
  );
};
