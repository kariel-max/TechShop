import type { Request, Response } from "express";
import IPedidos from "../../database/models/pedidos";
import IProduto from "../../database/models/produtos";

export const addProdutoPedido = async (req: Request, res: Response) => {
    try {
    const { produtoId, pedidoId } = req.body;

    const produto = await IProduto.findById(produtoId);
    const pedido = await IPedidos.findByPk(pedidoId);

    if(!produto || !pedido) {
        res.status(404).json({
            errors: {
                default: "Carrinho ou produto não encontrado"
            }
        })
        return
    }
     await pedido.addProduto(produtoId);

        return res.status(200).json({
            message: "Produto adicionado com sucesso!"
        });

    } catch (error) {
        console.error("Erro ao adicionar produto ao carrinho:", error);
        return res.status(500).json({
            errors: {
                default: "Erro interno ao adicionar produto ao carrinho."
            }
        });
    }
}