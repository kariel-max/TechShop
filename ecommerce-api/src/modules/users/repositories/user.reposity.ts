import { Usuario } from "../entities/user.entitie";

export class UserRepository {
  async findById(id: number): Promise<Usuario | Error> {
    try {
      const user = await Usuario.findByPk(id);
      if (!user) throw new Error("Error ao buscar usuario.");
      return user as Usuario;
    } catch (err) {
      console.error(err);
      throw new Error("O paramentro 'id' não encontrado.");
    }
  }
  async update(id: number, data: Partial<Usuario>): Promise<Usuario | Error> {
    try {
      const user = await Usuario.findByPk(id);
      if (!user) throw new Error("Usuario não encontrado.");
      return user.update(data);
    } catch (err) {
      console.error(err);
      throw new Error("'id' | 'data' não encontrado.");
    }
  }
  async delete(id: number): Promise<void | Error> {
    try {
      const user = await Usuario.findByPk(id);
      if (!user) throw new Error("Usuario não encontrado.");
      return user.destroy();
    } catch (err) {
      console.error(err);
      throw new Error("O paramentro 'id' não encontrado.");
    }
  }
}
