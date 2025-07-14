import {Request, Response } from "express";
import * as yup from "yup"
import { validation } from "../../shared/middleware/validation";
import { UsuarioProvides } from "../../database/provides/usuarios";
import { passwordCrypto } from "../../shared/services/PasswoedCrypto";
import { JWTService } from "../../shared/services/JWTService";

export const signInValidation = validation((getSchema)=> ({
    body: getSchema(yup.object().shape({
        senha: yup.string().required().min(6),
        email: yup.string().required().email().min(5)
    }))
}))
export const signIn = async (req: Request, res: Response): Promise<void> => {
    const { email, senha } = req.body;
    const usuario = await UsuarioProvides.getByUser(email);
    if (usuario instanceof Error) {
        res.status(400).json({
            ok: false,
            errors: {
                default: usuario.message
            }
        })
        return
    };
    const usuarioObj = typeof usuario.toJSON === 'function' ? usuario.toJSON() : usuario;
    const passwordMatch = await passwordCrypto.verifyPassword(senha, usuarioObj.senha);
    if(!passwordMatch) {
         res.status(500).json({
            ok: false,
            errors: {
                default: "Erro ao gerar o token de acesso"
            }
        });
        return
    }
    const accessToken = JWTService.sign({uid: usuarioObj.id})
    if(accessToken === "JWT_SECRET_NOT_FOUND"){
        res.status(500).json({
            ok: false,
            errors: {
                default: 'Erro ao gerar o token de acesso'
            }
        });
        return
    }  
    res.status(200).json({id: usuarioObj.id ,ok: true, token: accessToken, message: "Token válido"})
}