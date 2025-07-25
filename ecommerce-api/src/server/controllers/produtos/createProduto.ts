import type { Request, Response } from "express"
import { produto_provides } from "../../database/provides/produtos"
export const createProdutos = async (req: Request, res: Response) => {
    const data = req.body
    if (!data) {
    res.status(400).json({
        errors: {
            default: "Todos os campos são obrigatórios!",
        }
    });
    return
}
    const result = await produto_provides.create(data)
    if(result instanceof Error) {
        res.status(400).json({
            errors: {
                default: result.message
            }
        })
        return
    }
    res.status(200).json({ok:true,message:"Produto criado com sucesso!"})
}