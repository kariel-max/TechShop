import { type IProd, IProduto} from "../../models/produtos";

export const getByNames = async (name: string): Promise<IProd[] | Error> => {
    try {
        const result = await IProduto.find({
            where: {name}
        });
        if (result) {
            return result.map(item => item.toJSON() as IProd);
        }
        return new Error("Produto não existe!");
    } catch {
        return new Error("Error ao buscar o produto!");
    }
};