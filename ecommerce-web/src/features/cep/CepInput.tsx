import { Form, FormControl, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircleIcon, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState, useEffect } from "react";
import { useInputCep } from "./useCep";

const CepSchema = z.object({
  cep: z.string().min(8, "Digite um CEP válido"),
});

type CepFormData = z.infer<typeof CepSchema>;

export function CepInput() {
  const form = useForm<CepFormData>({
    resolver: zodResolver(CepSchema),
    defaultValues: { cep: "" },
  });

  const [cidade, setCidade] = useState(localStorage.getItem("location") || "");
  const cep = form.watch("cep");
  const { data: data } = useInputCep(cep);
  useEffect(() => {
    if (data?.localidade) {
      localStorage.setItem("location", data?.localidade);
      setCidade(data?.localidade);
    } else {
      setCidade("");
    }
  }, [data]);

  return (
    <Form {...form}>
      <form className="relative" onSubmit={(e) => e.preventDefault()}>
        <FormField
          name="cep"
          control={form.control}
          render={({ field }) => (
            <FormControl>
              <div className="flex items-center">
                <div className="text-gray-400">
                  <MapPin />
                </div>
                {cidade ? (
                  <div className="whitespace-nowrap">{cidade}:</div>
                ) : (
                  <div className="text-red-400">
                    <AlertCircleIcon />
                  </div>
                )}
                <Input
                  {...field}
                  type="text"
                  placeholder="CEP..."
                  className="!border-0 !border-b !border-gray-300 focus:!border-b-2 focus:!border-purple-500 focus:!ring-0 focus:!outline-none rounded-none text-gray-900 sm:text-sm/6"
                />
              </div>
            </FormControl>
          )}
        />
      </form>
    </Form>
  );
}
