import { Order } from "../entities/order.entitie";
import { OrderRepository } from "../repositories/order.repositorie";

export class OrderService {
  private repo = new OrderRepository();

  async createOrder(data: Partial<Order>) {
    // lógica de validação ou regra de negócio pode ir aqui
    return this.repo.create(data);
  }

  async listOrder() {
    return this.repo.findAll();
  }

  async getOrder(id: number) {
    return this.repo.findById(id);
  }

  async updateOrder(id: number, data: Partial<Order>) {
    return this.repo.update(id, data);
  }

  async deleteOrder(id: number) {
    return this.repo.delete(id);
  }
}
