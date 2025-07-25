import type {Request, Response } from "express"
import { pedidosProvides } from "../../database/provides/pedidos"

export const getAll = async (_req: Request, res: Response) => {
    const result = await pedidosProvides.getAll()
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