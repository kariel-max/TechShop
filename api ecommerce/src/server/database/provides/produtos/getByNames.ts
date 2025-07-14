import IProdutos from "../../models/produtos";

export const getByNames = async (name: string): Promise<IProdutos[] | Error> => {
    try {
        const result = await IProdutos.find({
            where: {name}
        });
        if (result) return result.map(item => item.toJSON() as IProdutos);
        return new Error("Produto não existe!");
    } catch(error) {
        return new Error("Error ao buscar o produto!");
    }
};