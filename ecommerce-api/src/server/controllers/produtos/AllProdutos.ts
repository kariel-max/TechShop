import type {Request, Response } from "express"
import { produto_provides } from "../../database/provides/produtos"

export const AllProdutos = async (_req: Request, res: Response) => {
    const result = await produto_provides.allProdutos()
    if(result instanceof Error) {
        res.status(500).json({
            errors: {
                default: result.message
            }
        })
        return
    }
    res.status(200).json(result)
}