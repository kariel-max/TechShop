import { Request, Response } from "express";
import ICarrinho from "../../database/models/carrinho";
import IProdutos from "../../database/models/produtos";

export const adicionarProdutosAoCarrinho = async (req: Request, res: Response) => {
    const { carrinhoId, produtoId, quantIten } = req.body;

    const carrinho = await ICarrinho.findByPk(carrinhoId);
    const produto = await IProdutos.findByPk(produtoId);

    if(!carrinho || !produto) {
        res.status(404).json({
            errors: {
                default: "Carrinho ou produto não encontrado"
            }
        })
        return
    }
    await carrinho?.addProduto(produto, quantIten);

    res.status(200).json({
        message: "Produto adicionado com sucesso!"
    })
}