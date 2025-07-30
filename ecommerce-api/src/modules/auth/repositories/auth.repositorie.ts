import { findUserData } from "../dtos/getUser.auth.dto";
import IUsuario from "../entities/auth.entitie";

export class AuthRepository {
    async create(data: Partial<IUsuario>) {
        return await IUsuario.create(data)
    }
    async find(data:findUserData) {
        return await IUsuario.findOne({where: {data}})
    }
}