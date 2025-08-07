import { z } from 'zod'

export const productSchema = z.object({
  name: z.string().min(3, { message: "Preencha no mínimo três caracters" }),
  preco: z.coerce.number().min(0, "Informe um número válido"),
  descricao: z.string(),
  categoria: z.string(),
  estoque:  z.coerce.number().min(0, "Informe um número válido"),
  image: z.string(),
  loja: z.string().min(3, { message: "Preencha no mínimo três caracters" }),
  tipo: z.string(),
});
export type productData = z.infer<typeof productSchema>;