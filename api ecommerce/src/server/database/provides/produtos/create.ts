import IProdutos from "../../models/produtos";

export const create = async (name: string, tipo: string, loja: string, preco:number, estoque: number, descricao: string, urlImagens: string, categoria:string, escificacoes:string): Promise< IProdutos | Error> => {
    try {
        const result = await IProdutos.create({
            name,
            preco,
            loja,
            tipo,
            estoque,
            categoria,
            descricao,
            urlImagens,
            escificacoes,
        })
        if(!result) return new Error("Error ao criar o produto!")
        return result.toJSON() as IProdutos;
    } catch (erro) {
        return new Error("Error ao criar o produto!")
    }
}