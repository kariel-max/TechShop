import { z } from "zod"
import { validation } from "../../../shared/middleware"

export const signInValidation = validation((getSchema) => ({
    body: getSchema(z.object({
        email: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
        senha: z.string().min(6),
}))
}))