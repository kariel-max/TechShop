import { IOrder } from "../entities/order.entitie";

export class OrderRepository {
  async create(data: Partial<IOrder>): Promise<IOrder | Error> {
    try {
      const order = await IOrder.create(data);
      if (!data) throw new Error("Error ao criar o pedido.");
      return order as IOrder;
    } catch (err) {
      console.error(err);
      throw new Error("'data' não encotrada.");
    }
  }

  async findAll(): Promise<IOrder[] | Error> {
    try {
      const order = await IOrder.findAll();
      if (!order) throw new Error(" Error ao busca pedidos");
      return order as IOrder[];
    } catch (err) {
      console.error(err);
      throw new Error("Error antes da busca.");
    }
  }

  async findById(id: number): Promise<IOrder | Error> {
    try {
      const order = await IOrder.findByPk(id);
      if (!order) throw new Error("Pedido não encontrado.");
      return order as IOrder;
    } catch (err) {
      console.error(err);
      throw new Error("Parametro 'id' não encotrado.");
    }
  }

  async update(id: number, data: Partial<IOrder>): Promise<IOrder | Error> {
    try {
      const order = await IOrder.findByPk(id);
      if (!order) throw new Error("pedido não encontrado.");
      const result = await order.update(data);
      if (!result) throw new Error("Erro ao atualizar o pedido");
      return result as IOrder;
    } catch (err) {
      console.error(err);
      throw new Error("'id' | 'data' não encotrado.");
    }
  }

  async delete(id: number): Promise<void | Error> {
    try {
      const order = await IOrder.findByPk(id);
      if (!order) throw new Error("pedido não encontrado.");
      return order.destroy();
    } catch (err) {
      console.error(err);
      throw new Error("Parametro 'id' não fio encontrado");
    }
  }
}
