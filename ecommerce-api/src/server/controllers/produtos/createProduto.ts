import type { Request, Response } from "express"
import { produto_provides } from "../../database/provides/produtos"
export const createProdutos = async (req: Request, res: Response) => {
    const { name, preco, precoOriginal, disconunt, rating, descricao, categoria, estoque, image, escificacoes, loja, tipo } = req.body
    if ([name, preco, precoOriginal, disconunt, rating, descricao, categoria, estoque, image, escificacoes, loja, tipo ].some(field => !field)) {
        res.status(401).json({
            errors: {
                default: "todos os campos são obrigatórios!"
            }
        })
        return
    }
    const result = await produto_provides.create(name, preco, precoOriginal, disconunt, rating, descricao, categoria, estoque, image, escificacoes, loja, tipo)
    if(result instanceof Error) {
        res.status(401).json({
            errors: {
                default: result.message
            }
        })
        return
    }
    res.status(200).json({ok:true,message:"Produto criado com sucesso!"})
}