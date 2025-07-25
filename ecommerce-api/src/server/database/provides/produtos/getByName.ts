import {IProduto} from "../../models/produtos";

export const getByName = async (name: string): Promise<IProduto | Error> => {
    try {
        const result = await IProduto.findOne({
            where: {name}
        });
        if (result) {
            return result.toJSON() as IProduto;
        }
        return new Error("Usuario não existe!");
    } catch {
        return new Error("Error ao buscar o usuario!");
    }
};