import { findUserData } from "../dtos/getUser.auth.dto";
import IUsuario from "../entities/auth.entitie";
import { AuthRepository } from "../repositories/auth.repositorie";

export class AuthService {
    private repo = new AuthRepository();

    async getAuth(data:findUserData): Promise< IUsuario | Error > {
        try {
            const auth = await this.repo.find(data)
            if(!auth) return new Error('Usuario não encontrado!')
            return auth as IUsuario
        } catch {
            return new Error("Parametro 'id' undefined | null.")
        }
    }

    async createAuth(data: Partial<IUsuario>): Promise< IUsuario | Error > {
        try {
            const auth = await this.repo.create(data)
            if(!auth) return new Error('Erro ao criar o usuario.')
            return auth.toJSON() as IUsuario
        } catch {
            return new Error("Parametro 'data' undefined | null.")
        }
    }
}