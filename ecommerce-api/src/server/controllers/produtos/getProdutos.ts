import type { Request, Response } from "express"
import { produto_provides } from "../../database/provides/produtos"

export const getProdutos = async (req: Request, res: Response) => {
    const name = req.body
    const result = await produto_provides.getByNames(name)
    if(result instanceof Error) {
        res.status(401).json({
            errors: {
                default: result.message
            }
        })
        return
    }
    res.status(200).json(result)
}