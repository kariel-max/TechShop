import { IProduto} from "../../models/produtos";

export const getByNames = async (name: string): Promise<IProduto[] | Error> => {
    try {
        const result = await IProduto.findAll({
            where: {name}
        });
        if (result) {
            return result.map(item => item.toJSON() as IProduto);
        }
        return new Error("Produto não existe!");
    } catch {
        return new Error("Error ao buscar o produto!");
    }
};