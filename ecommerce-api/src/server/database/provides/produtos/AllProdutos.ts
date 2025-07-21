import { type IProd, IProduto} from "../../models/produtos";

export const allProdutos = async (): Promise<IProd[] | Error> => {
    try {
        const result = await IProduto.find();
        if (result.length === 0) {
            return new Error("Nenhum produto encontrado!");
        }
        if (result.length > 0) {
            const produtos: IProd[] = result.map((item)=> {
                 const { name, preco, precoOriginal, disconunt, rating, descricao, categoria, estoque, image, escificacoes, loja, tipo } = item;
                return { name, preco, precoOriginal, disconunt, rating, descricao, categoria, estoque, image, escificacoes, loja, tipo };
            })
            return produtos
        }
        return new Error("Usuario não existe!");
    } catch {
        return new Error("Error ao buscar o usuario!");
    }
};