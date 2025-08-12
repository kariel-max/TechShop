import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {z} from "zod";

const schema = z.object({ email: z.string().email() });

export const ForgotPassword = ()=> {
    const { register, handleSubmit, formState } = useForm({ resolver: zodResolver(schema) });

  async function onSubmit(data: { email: string }) {
    const res = await postJSON('/api/auth/forgot-password', data);
    toast.info(res.message || 'Se existir, enviamos um e-mail.');
  }
    return(
     <div className="max-w-md mx-auto p-6">
      <h1 className="text-xl font-bold mb-4">Esqueci minha senha</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('email')} placeholder="Seu e-mail" className="w-full p-2 border rounded mb-2" />
        <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded">Enviar</button>
      </form>
    </div>
    )
}