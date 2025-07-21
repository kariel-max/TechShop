import type { Request, Response } from "express";
import { validation } from "../../shared/middleware";
import * as yup from "yup";
import { UsuarioProvides } from "../../database/provides/usuarios";
import { passwordCrypto } from "../../shared/services";

export const deleteValidation =  validation((getSchema)=> ({
    body: getSchema(yup.object().shape({
        senha: yup.string().required().min(6),
        email: yup.string().required().email().min(5)
    })),
    params: getSchema(yup.object().shape({
        id: yup.number().required().integer().moreThan(0),
    }))
}))
export const deleteByUser = async (req:Request, res:Response) => {
    const { email, senha } = req.body;
    const id = Number(req.params.id);
    const senhaUser = await UsuarioProvides.getByUser(email)
       if(senhaUser instanceof Error) {
                res.status(400).json({
                ok: false,
                errors: {
                    default: senhaUser.message
                }
            })
            return
       }
       const usuarioObj = typeof senhaUser.toJSON === 'function' ? senhaUser.toJSON() : senhaUser;
       const passwordMatch = await passwordCrypto.verifyPassword(senha, usuarioObj.senha);
       if(!passwordMatch) {
            res.status(400).json({
               ok: false,
               errors: {
                   default: "Senha incorreta!"
               }
           });
           return
       }
       const usuario = await UsuarioProvides.deleteByUser(id ,email);
       if (usuario instanceof Error) {
           res.status(400).json({
               ok: false,
               errors: {
                   default: usuario.message
               }
           })
           return
       };
       
       res.status(200).json({id: usuarioObj.id ,ok: true})

}