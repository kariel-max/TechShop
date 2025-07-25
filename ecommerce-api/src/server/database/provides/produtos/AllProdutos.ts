import { IProduto} from "../../models/produtos";

export const allProdutos = async (): Promise<IProduto[] | Error> => {
    try {
        const result = await IProduto.findAll();
        if (result.length === 0) {
            return new Error("Nenhum produto encontrado!");
        }
        if (result.length > 0) {
            const produtos = result.map(item=>item.get())
            return produtos as IProduto[]
        }
        return new Error("Produto não existe!");
    } catch {
        return new Error("Error ao buscar o produto!");
    }
};