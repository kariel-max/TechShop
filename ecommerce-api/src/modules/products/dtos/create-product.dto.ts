import { z } from "zod"
import { validation } from "../../../shared/middleware"

export const createProductValidation = validation((getSchema) => ({
    body: getSchema(z.object({
        name: z.string(),
        preco: z.int(),
        descricao: z.string(),
        categoria: z.string(),
        estoque: z.int(),
        image: z.string(),
        loja: z.string(),
        tipo: z.string(),
}))
}))