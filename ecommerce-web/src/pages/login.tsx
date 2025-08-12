import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginRoute } from "@/hooks/auth/login-route";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { loginSchema, type LoginFormData } from "@/schemas/auth/login";
import { createCarrinho } from "@/hooks/carts/create-carrinho";
import { LockKeyhole, Mail } from "lucide-react";
import { InputField } from "@/components/form/inputField";

export const Login = () => {
  const navigate = useNavigate();
  const { mutateAsync: loginMutate } = loginRoute();
  const { mutateAsync: carrinho } = createCarrinho();

  const login = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      senha: "",
    },
  });

  async function handleLogin(data: LoginFormData) {
    try {
      const response = await loginMutate(data);
      if (response) {
        const cartId = await carrinho({ user_id: response.id });
        localStorage.setItem("cart_id", String(cartId.id));
        localStorage.setItem("user_id", String(response.id));
        navigate("/main");
        login.reset();
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-4">
      <Card className="max-w-md w-full bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-extrabold text-gray-900">
            Bem-vindo(a) de volta
          </CardTitle>
          <p className="mt-2 text-sm text-gray-500">
            Entre com seus dados para acessar sua conta
          </p>
        </CardHeader>
        <CardContent className="mt-6">
          <Form {...login}>
            <form className="space-y-5" onSubmit={login.handleSubmit(handleLogin)}>
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

              <div className="flex items-center justify-between text-sm">
                <Link
                  to="/forgot-password"
                  className="text-indigo-600 hover:text-indigo-500 font-medium transition-colors"
                >
                  Esqueci minha senha
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-95"
              >
                Entrar
              </Button>

              <p className="text-center text-sm text-gray-600">
                Não tem uma conta?{" "}
                <Link
                  to="/signUp"
                  className="font-semibold text-indigo-600 hover:text-indigo-500 transition-colors"
                >
                  Criar conta
                </Link>
              </p>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};
