import ICarrinho from "../../models/carrinho";

export const getById = async (id: number): Promise<ICarrinho | Error> => {
    try {
        const result = await ICarrinho.findByPk(id)
        if (result) return result
        return new Error("Usuario não existe!");
    } catch(error) {
        return new Error("Error ao buscar o usuario!")
    }
}