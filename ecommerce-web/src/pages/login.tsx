import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {Form} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginRoute } from "@/http/auth/login-route";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { loginSchema, type LoginFormData } from "@/schemas/auth/login";
import { createCarrinho } from "@/hooks/carts/create-carrinho";
import { LockKeyhole, Mail } from "lucide-react";
import { InputField } from "@/components/form/inputField";

export const Login = () => {
  const { mutateAsync: loginMutate } = loginRoute();
  const { mutateAsync: carrinho } = createCarrinho();
  const login = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      senha: "",
    },
  });

  async function handleLogin({ email, senha }: LoginFormData) {
    try {
      const response = await loginMutate({ email, senha });
      const cartId = await carrinho({ user_id: response.id });
      localStorage.setItem("cart_id", String(cartId.id));
      login.reset();
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <Card className="max-w-md mx-auto mt-10 bg-white shadow-xl rounded-2xl">
      <CardHeader className="sm:mx-auto sm:w-full sm:max-w-sm">
        <CardTitle className="mt-10 text-center text-4xl font-bold tracking-tight text-gray-900">
          Entrar
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className=" mt-10 sm:mx-auto sm:w-full sm:max-w-sm flex-2">
          <Form {...login}>
            <form
              className="space-y-6"
              onSubmit={login.handleSubmit(handleLogin)}
            >
              <InputField
                control={login.control}
                name="email"
                label="Email"
                placeholder="Digite seu email..."
                type="email"
                icon={<Mail className="w-5 h-5" />}
              />
              <InputField
                control={login.control}
                name="senha"
                label="Senha"
                placeholder="Digite sua senha..."
                type="password"
                icon={<LockKeyhole className="w-5 h-5" />}
              />
              <div className="mt-2">
                <Button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-6 text-2xl font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Entrar
                </Button>
                <Link to="/forgot-password" className="mt-4 block text-center text-sm text-indigo-600 hover:text-indigo-500">
                <p className="text-sm text-indigo-600 hover:text-indigo-500">
                  Esqueci minha senha
                </p>
              </Link>
              </div>
              
              <p className="text-sm">
                Não tem uma conta?
                <Link
                  to="/signUp"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Criar conta
                </Link>
              </p>
            </form>
          </Form>
        </div>
      </CardContent>
    </Card>
  );
};
