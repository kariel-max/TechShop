import { IProduto } from "../entities/product.entitie";

export class ProductRepository {
  async create(data: Partial<IProduto>): Promise<IProduto | Error> {
    try {
      const product = await IProduto.create(data);
      if (!data) throw new Error("Error ao criar o produto.");
      return product as IProduto;
    } catch (err) {
      console.error(err);
      throw new Error("'data' não encotrada.");
    }
  }

  async findAll(): Promise<IProduto[] | Error> {
    try {
      const product = await IProduto.findAll();
      if (!product) throw new Error(" Error ao busca produtos");
      return product as IProduto[];
    } catch (err) {
      console.error(err);
      throw new Error("Error antes da busca.");
    }
  }

  async findById(id: number): Promise<IProduto | Error> {
    try {
      const product = await IProduto.findByPk(id);
      if (!product) throw new Error("Produto não encontrado.");
      return product as IProduto;
    } catch (err) {
      console.error(err);
      throw new Error("Parametro 'id' não encotrado.");
    }
  }

  async update(id: number, data: Partial<IProduto>): Promise<IProduto | Error> {
    try {
      const product = await IProduto.findByPk(id);
      if (!product) throw new Error("Produto não encontrado.");
      const result = await product.update(data);
      if (!result) throw new Error("Erro ao atualizar o produto");
      return result as IProduto;
    } catch (err) {
      console.error(err);
      throw new Error("'id' | 'data' não encotrado.");
    }
  }

  async delete(id: number): Promise<void | Error> {
    try {
      const product = await IProduto.findByPk(id);
      if (!product) throw new Error("Produto não encontrado.");
      return product.destroy();
    } catch (err) {
      console.error(err);
      throw new Error("Parametro 'id' não fio encontrado");
    }
  }
}
