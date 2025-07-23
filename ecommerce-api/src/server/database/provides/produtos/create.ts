import {type IProd, IProduto} from "../../models/produtos";

export const create = async (data: IProd): Promise< IProd | Error> => {
    try {
        const result = await IProduto.create(data) 
        if(!result) {
            return new Error("Error ao criar o produto!");
        }
        return result.toJSON() as IProd;
    } catch {
        return new Error("Error ao criar o produto!")
    }
}