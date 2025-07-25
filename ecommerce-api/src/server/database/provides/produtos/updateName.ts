import {IProduto} from "../../models/produtos";

export const create = async (id:number, newData: Partial<IProduto>): Promise<Error | undefined> => {
    try {
        const result = await IProduto.update(newData,{where: {id}});
        if(result.length > 0) {
            return;
        }
        return new Error("Error ao atualizar o produto!")
    } catch {
        return new Error("Error ao atualizar o produto!")
    }
}