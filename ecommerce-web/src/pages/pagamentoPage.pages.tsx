import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "react-router-dom"

const pagamentoSchema = z.object({
  nome: z.string().min(3, "Nome inválido"),
  numeroCartao: z.string().min(16, "Número inválido"),
  validade: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Formato MM/AA"),
  cvv: z.string().min(3, "CVV inválido").max(4),
})

type PagamentoFormData = z.infer<typeof pagamentoSchema>

export default function PagamentoPage() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PagamentoFormData>({
    resolver: zodResolver(pagamentoSchema),
  })

  const onSubmit = async (data: PagamentoFormData) => {
    console.log("Dados enviados:", data)
    // Simulação do pagamento
    await new Promise((res) => setTimeout(res, 1000))
    navigate("/sucesso") // Redireciona para página de sucesso
  }

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white shadow-xl rounded-2xl">
      <h1 className="text-2xl font-bold mb-6 text-center">Pagamento</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block font-medium">Nome no cartão</label>
          <input
            type="text"
            {...register("nome")}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.nome && (
            <p className="text-sm text-red-500">{errors.nome.message}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">Número do cartão</label>
          <input
            type="text"
            maxLength={16}
            {...register("numeroCartao")}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.numeroCartao && (
            <p className="text-sm text-red-500">{errors.numeroCartao.message}</p>
          )}
        </div>

        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block font-medium">Validade (MM/AA)</label>
            <input
              type="text"
              placeholder="08/25"
              {...register("validade")}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            {errors.validade && (
              <p className="text-sm text-red-500">{errors.validade.message}</p>
            )}
          </div>

          <div className="w-1/2">
            <label className="block font-medium">CVV</label>
            <input
              type="text"
              maxLength={4}
              {...register("cvv")}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            {errors.cvv && (
              <p className="text-sm text-red-500">{errors.cvv.message}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-900 transition"
        >
          {isSubmitting ? "Processando..." : "Pagar"}
        </button>
      </form>
    </div>
  )
}
