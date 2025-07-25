import {IProduto} from "../../models/produtos";

type ProdutoInput = Omit<IProduto, 'id' | 'createdAt' | 'updatedAt'>;

export const create = async (data: ProdutoInput): Promise<IProduto | Error> => {
    console.log({data})
    try {
        const result = await IProduto.create(data) 
        console.log(result)
        if(!result) {
            return new Error("Error ao criar o produto!");
        }
        return result.toJSON() as IProduto;
    } catch {
        return new Error("Error ao criar o produto!")
    }
}