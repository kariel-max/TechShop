import IPedidos from "../../models/pedidos";
import { IProduto } from "../../models/produtos";

interface ProdutoCarrinho {
    id: number,
    produto?: IProduto | null,
    carrinhoId: number,
    quantidade: number,
}

export const getAll = async ():Promise<ProdutoCarrinho[] | Error> => {
    try {
        const result = await IPedidos.findAll();
        if (result.length === 0) {
            return new Error("Nenhum pedido encontrado!");
        }
        console.log(result)
        const data: ProdutoCarrinho[] = await Promise.all(
            result.map(async (item)=> {
                 const { id, produtoId, carrinhoId, quantidade} = item;

                 const produto = await IProduto.findOne({where: {id: produtoId}})
                 console.log("produto provides", produto)
                return {id: id ?? 0, produto, carrinhoId: carrinhoId ?? 0, quantidade: quantidade ?? 0 };
            })
        
    )
    console.log(data)
    return data;
    } catch {
        return new Error("Error ao buscar o usuario!");
    }
};