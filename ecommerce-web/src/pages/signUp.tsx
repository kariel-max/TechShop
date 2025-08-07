import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {Form} from "@/components/ui/form";
import { useSingUpRoute } from "@/http/auth/signUp-route";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { signUpSchema, type signUpFormData } from "@/schemas/auth/signUp";
import { createCarrinho } from "@/hooks/carts/create-carrinho";
import type { carrinhoResponse } from "@/types/carts/carrinho-response";
import { LockKeyhole, Mail, User } from "lucide-react";
import { InputField } from "@/components/form/inputField";

export const SignUp = () => {
  const { mutateAsync: Carrinho } = createCarrinho();
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
    try {
      const response = await signUpMutate(data);
      const userId = response;
      console.log("userId:", userId, typeof userId);
      const result: carrinhoResponse = await Carrinho({ user_id: userId });
      const cartId = result;
      localStorage.setItem("userId", userId.toString());
      localStorage.setItem("cartId", cartId.toString());
      signUp.reset();
    } catch (err) {
      console.error(err);
    }
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
             <InputField
             name="name"
             control={signUp.control}
              label="Nome"
              placeholder="Digite o seu nome..."
              type="text"
              icon={<User className="w-5 h-5" />}
             />
             <InputField
              name="email"
              control={signUp.control}
              label="Email"
              placeholder="Digite o seu email..."
              type="email"
              icon={<Mail className="w-5 h-5" />}
              />
              <InputField
                name="senha"
                control={signUp.control}
                label="Senha"
                placeholder="Digite a sua senha..."
                type="password"
                icon={<LockKeyhole className="w-5 h-5" />}
              />
              <InputField
                name="confSenha"
                control={signUp.control}
                label="Confirmar Senha"
                placeholder="Confirme a sua senha..."
                type="password"
                icon={<LockKeyhole className="w-5 h-5" />}
              />
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full transition-all duration-300 hover:shadow-lg hover:scale-101"
              >Criar</Button>

              <p className="text-lg">
                Já tem uma conta?
                <Link
                  to="/login"
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
