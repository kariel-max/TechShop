import IPedidos from "../../models/pedidos";
import { IProduto } from "../../models/produtos";

export const create = async (
  carrinhoId: number,
  produtoId: number,
  quantidade: number
): Promise<IPedidos | Error> => {
  try {
    const produto = await IProduto.findByPk(produtoId)
    if(!produto) return new Error("Produto não existe!")
    const response = await IPedidos.findOne({
      where: { produtoId, carrinhoId },
    });
    if (response) {
       await response.update({
          quantidade: response.quantidade! + quantidade
    })
    return response.toJSON() as IPedidos;
    }
    console.log("create",carrinhoId, produtoId, quantidade);
    const result = await IPedidos.create({
      produtoId: produtoId,
      carrinhoId: carrinhoId,
      quantidade: quantidade,
      pedido: true
    });
    console.log("result",result);
    if (!result) return new Error("Erro ao adicionar o produto!");
    return result.toJSON() as IPedidos;
  } catch (err: any) {
  console.error("Erro no create do pedido:", err);
  return new Error(err.message || "Erro ao adicionar produto ao pedido!");
}
};
