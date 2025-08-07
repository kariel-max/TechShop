import { UserRepository } from "../repositories/user.reposity";
import { Usuario } from "../entities/user.entitie"
export class UserService {
    private repo = new UserRepository();

    async getUser(id:number) {
        return this.repo.findById(id);
    }

    async updateUser(id:number, data: Partial<Usuario>) {
        return this.repo.update(id, data);
    }

    async deleteUser(id:number) {
        return this.repo.delete(id);
    }
}