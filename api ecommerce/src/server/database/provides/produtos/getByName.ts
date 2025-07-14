import IProdutos from "../../models/produtos";

export const getByName = async (name: string): Promise<IProdutos | Error> => {
    try {
        const result = await IProdutos.findOne({
            where: {name}
        });
        if (result) return result.toJSON() as IProdutos;
        return new Error("Usuario não existe!");
    } catch(error) {
        return new Error("Error ao buscar o usuario!");
    }
};