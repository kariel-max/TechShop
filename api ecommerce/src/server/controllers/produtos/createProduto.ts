import { Request, Response } from "express"
import { produto_provides } from "../../database/provides/produtos"
export const createProdutos = async (req: Request, res: Response) => {
    const { name, tipo, loja, preco, estoque, descricao, urlImagens, categoria, escificacoes } = req.body
    if(!name || !tipo || !loja || !preco || !estoque || !descricao || !urlImagens || !categoria || !escificacoes) {
        res.status(401).json({
            errors: {
                default: "todos os campos são obrigatórios!"
            }
        })
        return
    }
    const result = await produto_provides.create(name, tipo, loja, preco, estoque, descricao, urlImagens, categoria, escificacoes)
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