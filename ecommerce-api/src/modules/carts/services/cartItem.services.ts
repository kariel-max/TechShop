import { CartItem } from "../entities/cartItem.entitie";
import { CartItemRepositorie } from "../repositories/cartItem.repositorie";

export class CartItemService {
    private repo = new CartItemRepositorie()
    createCartItem(data: Partial<CartItem>) {
        return this.repo.addItem(data)
    }
    removeItem(id:number) {
        return this.repo.removeItem(id)
    }
}