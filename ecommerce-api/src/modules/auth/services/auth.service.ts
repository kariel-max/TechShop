import { findUserData } from "../dtos/getUser.auth.dto";
import {Usuario} from "../entities/auth.entitie";
import { AuthRepository } from "../repositories/auth.repositorie";

export class AuthService {
    private repo = new AuthRepository();

    async getAuth(data:findUserData): Promise< Usuario | Error > {
        try {
            const auth = await this.repo.find(data)
            if(!auth) return new Error('Usuario não encontrado!')
            return auth as Usuario
        } catch {
            return new Error("'data' não encontrado")
        }
    }

    async createAuth(data: Partial<Usuario>): Promise< Usuario | Error > {
        try {
            const auth = await this.repo.create(data)
            if(!auth) return new Error('Erro ao criar o usuario.')
            return auth.toJSON() as Usuario
        } catch {
            return new Error("Parametro 'data' undefined | null.")
        }
    }
}