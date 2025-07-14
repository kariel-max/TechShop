import { Request, Response } from "express";
import ICarrinho from "../../database/models/carrinho";
import { carrinho_providers } from "../../database/provides/carrinho";

interface QueryProps {
    id: number
}

export const createCarrinho = async (req: Request<QueryProps>, res: Response)=> {
    const id = req.params.id
    if (!id) {
        res.status(401).json({
            errors: {
                default: "O parametro id precisa ser informado!"
            }
        })
    }
    const result = await carrinho_providers.create(id)
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