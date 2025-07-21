import IUsuario from "../../models/usuario"
import ICarrinho from "../../models/carrinho"

export const create = async (id: number): Promise<ICarrinho | Error> => {
    try {
        const userId = await IUsuario.findOne({where: {id}})
        if(!userId) {
            return new Error("Usuario não encontrado!")
        }
        const carrinhoId = await ICarrinho.findOne({
            where: {userId}
        })
        if(carrinhoId) {
            return new Error("Usuario já possuí carrinho já existe!")
        }
        return await ICarrinho.create({usuarioId: id})
    } catch (erro) {
        return new Error("Error ao criar o carrinho!")
    }
   
}