import { Produto } from "../../products/entities/product.entitie";
import { Carrinho } from "../entities/cart.entitie";

export class CartRepositorie {
  async create(data: Partial<Carrinho>): Promise<Carrinho | Error> {
    try {
      const cart = await Carrinho.create(data);
      return cart;
    } catch (err) {
      console.error("Erro ao criar o carrinho:", err);
      throw new Error("Erro ao criar o carrinho.");
    }
  }

  async findById(cart_id: number): Promise<Carrinho | Error> {
    try {
      const cart = await Carrinho.findByPk(cart_id, {
        include: [{
          model: Produto,
          as: 'produtos'
        }]
      });
      if (!cart) {
        throw new Error(`Carrinho com id ${cart_id} não encontrado.`);
      }
      return cart;
    } catch (err) {
      console.error(`Erro ao buscar carrinho com id ${cart_id}:`, err);
      throw new Error("Erro ao buscar carrinho por ID.");
    }
  }

  async findAll(): Promise<Carrinho[] | Error> {
    try {
      return await Carrinho.findAll();
    } catch (err) {
      console.error("Erro ao buscar todos os carrinhos:", err);
      throw new Error("Erro ao buscar todos os carrinhos.");
    }
  }

  async update(id: number, data: Partial<Carrinho>): Promise<Carrinho | Error> {
    try {
      const cart = await Carrinho.findByPk(id);
      if (!cart) {
        throw new Error(`Carrinho com id ${id} não encontrado.`);
      }

      const updatedCart = await cart.update(data);
      return updatedCart;
    } catch (err) {
      console.error(`Erro ao atualizar carrinho com id ${id}:`, err);
      throw new Error("Erro ao atualizar carrinho.");
    }
  }

  async delete(id: number): Promise<void | Error> {
    try {
      const cart = await Carrinho.findByPk(id);
      if (!cart) {
        throw new Error(`Carrinho com id ${id} não encontrado.`);
      }

      await cart.destroy();
    } catch (err) {
      console.error(`Erro ao deletar carrinho com id ${id}:`, err);
      throw new Error("Erro ao deletar carrinho.");
    }
  }
}
