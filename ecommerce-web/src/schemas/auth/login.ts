import { z } from 'zod'
export const loginSchema = z.object({
    email: z.string().email("E-mail deve ser válido"),
    senha: z.string().min(3, {message: "inclua no mínimo 3 caracters"}),
})
export type LoginFormData = z.infer<typeof loginSchema>