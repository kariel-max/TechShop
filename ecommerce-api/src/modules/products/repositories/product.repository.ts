import { Produto } from "../entities/product.entitie";

export class ProductRepository {
  async create(data: Partial<Produto>): Promise<Produto | Error> {
    try {
      const product = await Produto.create(data);
      if (!data) throw new Error("Error ao criar o produto.");
      return product as Produto;
    } catch (err) {
      console.error(err);
      throw new Error("'data' não encotrada.");
    }
  }
  async findAll(): Promise<Produto[] | Error> {
    try {
      const product = await Produto.findAll();
      if (!product) throw new Error(" Error ao busca produtos");
      return product as Produto[];
    } catch (err) {
      console.error(err);
      throw new Error("Error antes da busca.");
    }
  }

  async findById(id: number): Promise<Produto | Error> {
    try {
      const product = await Produto.findByPk(id);
      if (!product) throw new Error("Produto não encontrado.");
      return product as Produto;
    } catch (err) {
      console.error(err);
      throw new Error("Parametro 'id' não encotrado.");
    }
  }

  async update(id: number, data: Partial<Produto>): Promise<Produto | Error> {
    try {
      const product = await Produto.findByPk(id);
      if (!product) throw new Error("Produto não encontrado.");
      const result = await product.update(data);
      if (!result) throw new Error("Erro ao atualizar o produto");
      return result as Produto;
    } catch (err) {
      console.error(err);
      throw new Error("'id' | 'data' não encotrado.");
    }
  }

  async delete(id: number): Promise<void | Error> {
    try {
      const product = await Produto.findByPk(id);
      if (!product) throw new Error("Produto não encontrado.");
      return product.destroy();
    } catch (err) {
      console.error(err);
      throw new Error("Parametro 'id' não fio encontrado");
    }
  }
}
