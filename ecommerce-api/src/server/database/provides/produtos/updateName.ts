import {type IProd, IProduto} from "../../models/produtos";

export const create = async (id:number, newData: Partial<IProd>): Promise<Error | undefined> => {
    try {
        const result = await IProduto.updateOne(newData,{where: {id}});
        if(result.modifiedCount > 0) {
            return;
        }
        return new Error("Error ao atualizar o produto!")
    } catch {
        return new Error("Error ao atualizar o produto!")
    }
}