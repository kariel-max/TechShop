import {type IProd, IProduto} from "../../models/produtos";

export const getByName = async (name: string): Promise<IProd | Error> => {
    try {
        const result = await IProduto.findOne({
            where: {name}
        });
        if (result) {
            return result.toJSON() as IProd;
        }
        return new Error("Usuario não existe!");
    } catch {
        return new Error("Error ao buscar o usuario!");
    }
};