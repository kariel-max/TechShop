import { Carrinho } from "../entities/cart.entitie";
import { CartRepositorie } from "../repositories/cart.repositorie";

export class CartService {
    private repo = new CartRepositorie();
    async createCart(data: Partial<Carrinho>) {
        return this.repo.create(data)
    }

    async getCart(cart_id: number) {
        return this.repo.findById(cart_id)
    }

    async getAllCart() {
        return this.repo.findAll()
    }
    async update(id: number, data: Partial<Carrinho>) {
        return this.repo.update(id, data)
    }

    async deleteCart(id: number) {
        return this.repo.delete(id)
    }
}