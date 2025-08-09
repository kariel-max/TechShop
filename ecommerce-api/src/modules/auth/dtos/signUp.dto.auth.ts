import { z } from "zod"
import { validation } from "../../../shared/middleware"

export const signUpValidation = validation((getSchema) => ({
    body: getSchema(z.object({
        name: z.string().min(3),
        email: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
        senha: z.string().min(6),
        confSenha: z.string().min(6)
}))
}))