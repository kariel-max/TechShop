import { ICarrinho } from "../entities/cart.entities";

export class CartRepositorie {
    async create(data: Partial<ICarrinho>): Promise<ICarrinho | Error> {
        try {
            const cart = await ICarrinho.create(data)
            if (!cart) throw new Error('Erro ao criar o carrinho.')
            return cart as ICarrinho
        } catch(err) {
            console.error(err)
            throw new Error("'data' não encontrado.")
        }
    }

    async findById(id: number): Promise<ICarrinho | Error> {
         try {
            const cart = await ICarrinho.findByPk(id)
            if (!cart) throw new Error('Carrinho não encontrado.')
            return cart as ICarrinho
        } catch(err) {
            console.error(err)
            throw new Error("Parametro id não encontrado")
        }
    }

    async findAll(): Promise<ICarrinho[] | Error> {
         try {
            const cart = await ICarrinho.findAll()
            if (!cart) throw new Error("Erro ao busca o carrinho.")
            return cart as ICarrinho[]
        } catch(err) {
            console.error(err)
            throw new Error('Erro antes da busca')
        }
    }

    async update(id: number, data: Partial<ICarrinho>): Promise<ICarrinho | Error> {
         try {
            const cart = await ICarrinho.findByPk(id);
        if (!cart) throw new Error('Carrinho não encontrado.')
        const result = cart.update(data)
    if(!result) throw new Error('Error ao atualizar o carrinho.')
        return result
        } catch(err) {
            console.error(err)
            throw new Error("'id' | 'data' não encontrado.")
        }
        

    }
    async delete(id: number): Promise<void | Error> {
         try {
            const cart = await ICarrinho.findByPk(id);
        if (!cart) throw new Error('Carrinho não encontrado.');
        return cart.destroy()
        } catch(err) {
            console.error(err)
            throw new Error("Parametro 'id' não encontrado.")
    }
}
}