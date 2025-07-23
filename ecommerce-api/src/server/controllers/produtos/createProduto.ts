import type { Request, Response } from "express"
import { produto_provides } from "../../database/provides/produtos"
export const createProdutos = async (req: Request, res: Response) => {

    console.log(req.body);
    const { name, preco, precoOriginal, descricao, categoria, estoque, image, loja, tipo } = req.body
    if (
    !name || !descricao || !categoria || 
    preco === undefined || precoOriginal === undefined || 
    estoque === undefined || 
    !image || !loja || !tipo
) {
    res.status(400).json({
        errors: {
            default: "Todos os campos são obrigatórios!",
        }
    });
    return
}
    const result = await produto_provides.create({name, preco, precoOriginal, descricao, categoria, estoque, image, loja, tipo})
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