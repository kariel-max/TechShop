import IUsuario from "../../models/usuario";
import ICarrinho from "../../models/carrinho";

export const create = async (userId: number): Promise<ICarrinho | Error> => {
  try {
    const responce = await IUsuario.findOne({ where: { id: userId } });
    if (!responce) {
      return new Error("Usuario não encontrado!");
    }
    const carrinhoId = await ICarrinho.findOne({
      where: { userId: responce.id },
    });
    if (carrinhoId) {
      const result = await ICarrinho.findByPk(carrinhoId.id);
      if (result) return result;
      return new Error("Carrinho não encontrado!");
    }
    return await ICarrinho.create({ userId: responce.id  });
  } catch (erro) {
    return new Error("Error ao criar o carrinho!");
  }
};
