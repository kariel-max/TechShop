import IPedidos from "../../models/pedidos";

export const getByIds = async (id: number): Promise<IPedidos[] | Error> => {
    try {
        const result = await IPedidos.findAll({
            where: {id}
        });
        if (result) return result;
        return new Error("Usuario não existe!");
    } catch(error) {
        return new Error("Error ao buscar o usuario!");
    }
};