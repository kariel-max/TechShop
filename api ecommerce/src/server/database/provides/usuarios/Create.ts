import { passwordCrypto } from "../../../shared/services/PasswoedCrypto"
import IUsuario from "../../models/usuario";


export const create = async ( name:string, email: string, senha:string): Promise<IUsuario |Error> => {
    try {
        const hashedPassword = await passwordCrypto.hashPassword(senha);
        const result = await IUsuario.create({
            name: name,
            email: email,
            senha: hashedPassword
        });
        if (result) return result.toJSON() as IUsuario;
        return new Error('Erro ao cadastrar o registro')
    }catch (error) {
        console.log(error)
        return new Error('Erro ao cadastrar o registro')
    }
}