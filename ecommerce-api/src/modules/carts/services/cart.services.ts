import { ICarrinho } from "../entities/cart.entities";
import { CartRepositorie } from "../repositories/cart.repositorie";

export class CartService {
    private repo = new CartRepositorie();
    async createCart(data: Partial<ICarrinho>) {
        return this.repo.create(data)
    }

    async getCart(id: number) {
        return this.repo.findById(id)
    }

    async getAllCart() {
        return this.repo.findAll()
    }
    async update(id, data) {
        return this.repo.update(id, data)
    }

    async deleteCart(id: number) {
        return this.repo.delete(id)
    }
}