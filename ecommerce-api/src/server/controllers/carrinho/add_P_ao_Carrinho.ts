import type { Request, Response } from "express";
import ICarrinho from "../../database/models/carrinho";
import IPedidos from "../../database/models/pedidos";

export const adicionarProdutosAoCarrinho = async (req: Request, res: Response) => {
    try {
    const { carrinhoId, pedidoId } = req.body;

    const carrinho = await ICarrinho.findByPk(carrinhoId);
    const pedido = await IPedidos.findByPk(pedidoId);

    if(!carrinho || !pedido) {
        res.status(404).json({
            errors: {
                default: "Carrinho ou produto não encontrado"
            }
        })
        return
    }
     await carrinho.addPedido(pedidoId); 

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