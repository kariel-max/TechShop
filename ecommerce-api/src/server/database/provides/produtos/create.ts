import {type IProd, IProduto} from "../../models/produtos";

export const create = async (name: string, tipo: string, loja: string, preco:number, precoOriginal: string, rating: string, disconunt: string, estoque: number, descricao: string, image: string, categoria:string, escificacoes:string): Promise< IProd | Error> => {
    try {
        const result = await IProduto.create({
            tipo,
            loja,
            name,
            image,
            preco,
            rating,
            estoque,
            disconunt,
            categoria,
            descricao,
            escificacoes,
            precoOriginal,
        })
        if(!result) {
            return new Error("Error ao criar o produto!");
        }
        return result.toJSON() as IProd;
    } catch {
        return new Error("Error ao criar o produto!")
    }
}