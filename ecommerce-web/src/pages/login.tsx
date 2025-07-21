import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { loginRoute } from "@/http/login-route";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const loginSchema = z.object({
    email: z.string().email("E-mail deve ser válido"),
    senha: z.string().min(3, {message: "inclua no mínimo 3 caracters"}),
})

type LoginFormData = z.infer<typeof loginSchema>

export const Login = () => {
    const {mutateAsync: loginMutate} = loginRoute()
    const login = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            senha: '',
        }
    })

  async function handleLogin({email, senha}: LoginFormData) {
    await loginMutate({email, senha})
    login.reset()
  }
  return (
    <Card className="flex min-h-full h-screen flex-col justify-center px-6 py-12 lg:px-8">

            <CardHeader className="sm:mx-auto sm:w-full sm:max-w-sm">
            <CardTitle className="mt-10 text-center text-4xl font-bold tracking-tight text-gray-900">Entrar</CardTitle>
            </CardHeader>
            <CardContent>
                <div className=" mt-10 sm:mx-auto sm:w-full sm:max-w-sm flex-2 min-w-2xl">
                <Form {...login}>
                    <form className="space-y-6" onSubmit={login.handleSubmit(handleLogin)}>
                        <FormField name="email" render={
                            (({field}) => {
                                return(
                                    <FormItem>
                                        <FormLabel className="block text-2xl font-medium text-gray-900">Email:</FormLabel>
                                        <FormControl className="mt-2">
                                            <Input {...field} 
                                            className="block w-full rounded-md bg-white px-3 py-6 text-lg text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            autoComplete="email"
                                            required
                                            type="email"
                                            name="email"
                                            placeholder="Digite o seu email..." />
                                        </FormControl>
                                    </FormItem>
                                )
                            })
                        }/>
                        <FormField
                        control={login.control}
                        name="senha"
                        render={
                            (({field}) => {
                                return(
                                    <FormItem>
                                        <div className=" flex items-center justify-between">
                                        <FormLabel className="block text-2xl font-medium text-gray-900">Senha:</FormLabel>
                                        <div className="text-sm">
                                            <Link to="#" className="font-semibold text-indigo-600 hover:text-indigo-500"> Esqueceu a senha?</Link>
                                        </div>
                                        </div>
                                        <FormControl className="mt-2">
                                            <Input {...field} 
                                            className="block w-full rounded-md bg-white px-3 py-6 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            placeholder="Digite sua senha..." />
                                        </FormControl>
                                        <div className="mt-2">
                                            <Button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-6 text-2xl font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Entrar</Button>
                                        </div>
                                        <FormMessage/>
                                    </FormItem>
                                )
                            })
                        }/>
                            <p className="text-sm">
                                Não tem uma conta? <Link to="/singUp" className="font-semibold text-indigo-600 hover:text-indigo-500">Criar conta</Link>
                            </p>
                    </form>
                </Form>
                </div>
            </CardContent>
    </Card>
  );
}
