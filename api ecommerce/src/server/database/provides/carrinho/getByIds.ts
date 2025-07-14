import IProdutos from "../../models/produtos";

export const getByIds = async (id: Number): Promise<IProdutos[] | Error> => {
    try {
        const result = await IProdutos.findAll({
            where: {id}
        });
        if (result) return result;
        return new Error("Usuario não existe!");
    } catch(error) {
        return new Error("Error ao buscar o usuario!");
    }
};