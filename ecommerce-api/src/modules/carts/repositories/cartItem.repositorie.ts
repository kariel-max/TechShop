import { where } from "sequelize";
import { CartItem } from "../entities/cartItem.entitie";

export class CartItemRepositorie {

    async addItem(data: Partial<CartItem>): Promise<CartItem | number | Error> {
        console.log(data)
        try {
            const verifyItem = await CartItem.findOne({
                where: { product_id: data.product_id, cart_id: data.cart_id },
            })
            if (verifyItem) {
                let novaQuantidade = verifyItem.quantity + Number(data.quantity)
                if (novaQuantidade <= 0) return novaQuantidade = 0
                await verifyItem.update({quantity: novaQuantidade})
                return verifyItem;
            }
            return await CartItem.create(data)
        } catch(err) {
            console.error(err)
            throw new Error('data não encontrado.')
        }
    }
  
    async removeItem(id:number): Promise<void | Error> {
        console.log("id do repositorie", id)
        try {
            const item = await CartItem.findOne( {where:{product_id: id}})
            if (!item) throw new Error('item não encontrado.')
            return item.destroy()
        } catch(err) {
            console.error(err)
            throw new Error('id não encontrado')
        }
    }
}