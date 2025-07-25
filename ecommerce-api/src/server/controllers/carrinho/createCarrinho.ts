import type { Request, Response } from "express";
import { carrinho_providers } from "../../database/provides/carrinho";

interface QueryProps {
    userId: number
}

export const createCarrinho = async (req: Request<QueryProps>, res: Response)=> {
    const userId = req.params.userId
    if (!userId) {
        res.status(401).json({
            errors: {
                default: "O parametro userId precisa ser informado!"
            }
        })
    }
    const result = await carrinho_providers.create(userId)
    if (result instanceof Error) {
        res.status(401).json({
            errors: {
                default: result.message
            }
        })
        return
    }
    res.status(200).json(result)
}