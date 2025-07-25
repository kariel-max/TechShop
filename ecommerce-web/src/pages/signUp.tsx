import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createCarrinho } from "@/http/create-carrinho";
import { useSingUpRoute } from "@/http/signUp-route";
import type { signResponse } from "@/http/types/signUp-response";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";

const signUpSchema = z.object({
  name: z.string().min(3, { message: "Deve conter no mínimo três caracters" }),
  email: z.string().email("Deve ser um email válido"),
  senha: z.string().min(6, { message: "Deve conter no mínimo seis caracters" }),
  confSenha: z
    .string()
    .min(6, { message: "Deve conter no mínimo seis caracters" }),
});
type signUpFormData = z.infer<typeof signUpSchema>;

export const SignUp = () => {
  const { mutateAsync: carrinho } = createCarrinho();
  const { mutateAsync: signUpMutate } = useSingUpRoute();
  const signUp = useForm<signUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      senha: "",
      confSenha: "",
    },
  });

  async function handleSignUp(data: signUpFormData) {
    await signUpMutate(data, {
      onSuccess: (data: signResponse) => {
        carrinho(data);
      }
  })
    signUp.reset();
  }

  return (
    <Card className="flex min-h-full h-screen flex-col justify-center lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-none">
      <CardContent>
        <div className=" my-10 sm:mx-auto sm:w-full sm:max-w-sm  flex-2 min-w-2xl bg-gray-200 rounded-lg p-2">
          <div className="my-5 text-center text-4xl font-bold tracking-tight text-gray-900">
            Criar Conta
          </div>
          <Form {...signUp}>
            <form
              className="space-y-6"
              onSubmit={signUp.handleSubmit(handleSignUp)}
            >
              <FormField
                name="name"
                control={signUp.control}
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel className="block text-2xl font-medium text-gray-900">
                        Nome:
                      </FormLabel>
                      <FormControl className="mt-2">
                        <Input
                          {...field}
                          className="block w-full rounded-md bg-white px-3 py-6 text-lg text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                          required
                          type="text"
                          name="name"
                          placeholder="Digite o seu nome..."
                        />
                      </FormControl>
                    </FormItem>
                  );
                }}
              />
              <FormField
                name="email"
                control={signUp.control}
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel className="block text-2xl font-medium text-gray-900">
                        Email:
                      </FormLabel>
                      <FormControl className="mt-2">
                        <Input
                          {...field}
                          className="block w-full rounded-md bg-white px-3 py-6 text-lg text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                          autoComplete="email"
                          required
                          type="email"
                          name="email"
                          placeholder="Digite o seu email..."
                        />
                      </FormControl>
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={signUp.control}
                name="senha"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel className="block text-2xl font-medium text-gray-900">
                        Senha:
                      </FormLabel>

                      <FormControl className="mt-2">
                        <Input
                          {...field}
                          className="block w-full rounded-md bg-white px-3 py-6 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                          type="password"
                          name="senha"
                          placeholder="Digite sua senha..."
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={signUp.control}
                name="confSenha"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel className="block text-2xl font-medium text-gray-900">
                        Confirmar Senha:
                      </FormLabel>
                      <FormControl className="mt-2">
                        <Input
                          {...field}
                          className="block w-full rounded-md bg-white px-3 py-6 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                          type="password"
                          name="confSenha"
                          placeholder="Digite sua senha..."
                        />
                      </FormControl>
                      <div className="mt-2">
                        <Button
                          type="submit"
                          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-6 text-2xl font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Criar Contar
                        </Button>
                      </div>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <p className="text-lg">
                Já tem uma conta?{" "}
                <Link
                  to="/singIn"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Entrar
                </Link>
              </p>
            </form>
          </Form>
        </div>
      </CardContent>
    </Card>
  );
};
