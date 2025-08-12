import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { useSingUpRoute } from "@/hooks/auth/signUp-route";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { signUpSchema, type signUpFormData } from "@/schemas/auth/signUp";
import { createCarrinho } from "@/hooks/carts/create-carrinho";
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
      const cartId = await Carrinho({ user_id: response.userId });
      localStorage.setItem("userId", response.toString());
      localStorage.setItem("cartId", cartId.toString());
      signUp.reset();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 p-4">
      <Card className="w-full max-w-md shadow-2xl rounded-2xl backdrop-blur-md bg-white/90">
        <CardContent className="p-8">
          {/* Título */}
          <h1 className="text-center text-3xl font-extrabold text-gray-900 mb-6">
            Criar Conta
          </h1>

          {/* Formulário */}
          <Form {...signUp}>
            <form
              className="space-y-5"
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

              {/* Botão */}
              <Button
                type="submit"
                className="w-full py-3 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-[1.02] active:scale-95"
              >
                Criar Conta
              </Button>

              {/* Link para login */}
              <p className="text-center text-gray-700 text-sm">
                Já tem uma conta?{" "}
                <Link
                  to="/login"
                  className="font-semibold text-indigo-600 hover:text-indigo-500 transition-colors"
                >
                  Entrar
                </Link>
              </p>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};
