import { ProductRepository } from '../repositories/product.repository';
import { Produto } from '../entities/product.entitie';

export class ProductService {
  private repo = new ProductRepository();

  async createProduct(data: Partial<Produto>) {
    // lógica de validação ou regra de negócio pode ir aqui
    return this.repo.create(data);
  }

  async listProducts() {
    return this.repo.findAll();
  }

  async getProduct(id: number) {
    return this.repo.findById(id);
  }

  async updateProduct(id: number, data: Partial<Produto>) {
    return this.repo.update(id, data);
  }

  async deleteProduct(id: number) {
    return this.repo.delete(id);
  }
}
