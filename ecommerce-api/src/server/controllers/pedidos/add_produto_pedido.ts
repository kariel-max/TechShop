import type { Request, Response } from "express";
import { pedidosProvides } from "../../database/provides/pedidos";
import ICarrinho from "../../database/models/carrinho";

export const addProdutoPedido = async (req: Request, res: Response) => {
    const carrinhoId = req.params.carrinhoId ? Number(req.params.carrinhoId) : null
    const { produtoId, quantidade } = req.body;
    if(!carrinhoId || isNaN(carrinhoId)) {
      res.status(400).json({
        errors: {
          default: "parametro não encotrado!"
        }
      })
      return;
    }
    const carrinhoExiste = await ICarrinho.findByPk(carrinhoId);
if (!carrinhoExiste) {
  res.status(400).json({
    errors: {
      default: "Carrinho não encontrado!"
    }
  });
  return
}
    const response = await pedidosProvides.create(carrinhoId, produtoId, quantidade);
    console.log("controllers",response)
    if (response instanceof Error) {
      res.status(400).json({
        errors: response.message,
      });
      return
    }
    res.status(200).json({
      message: "Produto adicionado com sucesso!",
    });
    return;
};
