import { findUserData } from "../dtos/getUser.auth.dto";
import {Usuario} from "../entities/auth.entitie";

export class AuthRepository {
    async create(data: Partial<Usuario>) {
        return await Usuario.create(data)
    }
    async find(data:findUserData) {
        return await Usuario.findOne({where: {email: data}})
    }
}