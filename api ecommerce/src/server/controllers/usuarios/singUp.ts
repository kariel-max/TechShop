import { Request, Response } from "express";
import * as yup from "yup"
import { validation } from "../../shared/middleware/validation";
import { UsuarioProvides } from "../../database/provides/usuarios";

export const signUpValidation = validation((getSchema)=> ({
    body: getSchema(yup.object().shape({
        name: yup.string().required(),
        email: yup.string().required().email().min(5),
        senha: yup.string().required().min(6),
        confSenha: yup.string().required().min(6)
    }))
}))
export const signUp = async (req:Request, res: Response): Promise<void> => {
    const {name,email,senha,confSenha} = req.body;
    if(!name|| !email || !senha || !confSenha) {
        res.status(400).json({
            errors: {
                default: "Todos os campos são obrigatórios."
            }
        })
        return
    }
    if(senha !== confSenha) {
        res.status(400).json({
            errors: {
                default: "As senha não coincidem."
            }
        })
        return
    }
    const user = await UsuarioProvides.getByUser(email);
    if(user instanceof Error) {
        const result = await UsuarioProvides.create(name,email,senha)
        if(result instanceof Error) {
        res.status(400).json({
            errors: {
                default: result.message
            }
        });
            return
        }
        res.status(201).json({ok: true,message: 'Usuário criado com sucesso!'});
    } else {
        res.status(400).json({
            errors: {
                default: "Email já existe!"
            }
        })
        return
    }
};