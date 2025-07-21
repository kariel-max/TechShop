import ICarrinho from "../../models/carrinho";
import IPedidos from "../../models/pedidos";

export const create = async (carrinhoId: number, produtoId: number): Promise<IPedidos | Error> => {
    try {
        const result = await ICarrinho.findOne({
            where: {carrinhoId}
        })
        if (!result) return new Error('Carrinho não existe!')
        const reponse = await IPedidos.create({
            carrinhoId: carrinhoId,
            produtoId: produtoId,
            pedido: false
        })
        if(!reponse) return new Error('Falhar no pedido!')
        return reponse
    } catch (err) {
        return new Error('Falha ao procura o carrinho!')
    }
}