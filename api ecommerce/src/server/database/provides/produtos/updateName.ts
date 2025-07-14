import IProdutos from "../../models/produtos";

export const create = async (id:Number, newData: any): Promise<void | Error> => {
    try {
        const result = await IProdutos.updateOne(newData,{where: {id:id}});
        if(result.modifiedCount > 0) return;
        return new Error("Error ao atualizar o produto!")
    } catch (erro) {
        return new Error("Error ao atualizar o produto!")
    }
}