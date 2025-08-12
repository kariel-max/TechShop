import { useNavigate, useSearchParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {z} from "zod";
import { resetPasswordHook } from "@/hooks/auth/resetPassWord.hook";

const schema = z.object({ novaSenha: z.string().min(6), confirma: z.string() }).refine((data) => data.novaSenha === data.confirma, { message: 'Senhas não conferem', path: ['confirma'] });

export default function ResetPassword() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get('token') || '';

  const { register, handleSubmit } = useForm({ resolver: zodResolver(schema) });

  async function onSubmit(values: any) {
    const {mutateAsync: resetPassword} = resetPasswordHook()
    const res = await resetPassword({token, novaSenha: values.novaSenha})
    // if (res.message === 'Senha redefinida com sucesso!') {
    //   toast.success(res.message);
    //   navigate('/login');
    // } else {
    //   toast.error(res.message || 'Erro ao redefinir senha');
    // }
  }

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-xl font-bold mb-4">Redefinir senha</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('novaSenha')} placeholder="Nova senha" type="password" className="w-full p-2 border rounded mb-2" />
        <input {...register('confirma')} placeholder="Confirme a nova senha" type="password" className="w-full p-2 border rounded mb-2" />
        <button type="submit" className="w-full p-2 bg-green-600 text-white rounded">Redefinir</button>
      </form>
    </div>
  );
}