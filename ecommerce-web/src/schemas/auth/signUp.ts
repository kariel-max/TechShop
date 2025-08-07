import { z } from 'zod'

export const signUpSchema = z.object({
  name: z.string().min(3, { message: "Deve conter no mínimo três caracters" }),
  email: z.string().email("Deve ser um email válido"),
  senha: z.string().min(6, { message: "Deve conter no mínimo seis caracters" }),
  confSenha: z
    .string()
    .min(6, { message: "Deve conter no mínimo seis caracters" }),
});
export type signUpFormData = z.infer<typeof signUpSchema>;