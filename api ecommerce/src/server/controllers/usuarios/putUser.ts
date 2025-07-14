import {RequestHandler} from "express";
import * as yup from "yup";
import { validation } from "../../shared/middleware";
import { UsuarioProvides } from "../../database/provides/usuarios";

export const atualizarValidetion = validation((getSchema)=>({
    body: getSchema(yup.object().shape({
        name: yup.string().required().min(5),
        email: yup.string().required().email().min(5),
        number: yup.string().required().min(9)
    })),
    params: getSchema(yup.object().shape({
        id: yup.number().integer().required().moreThan(0),
    })),
}));

export const atualizarUser: RequestHandler = async (req,res) => {
    const id = Number(req.params.id)
    if(!id) {
        res.status(403).json({
            errors:{
                default: 'O parâmetro "id" precisa se informado!'
            }
        })
        return
    };

    const result = await UsuarioProvides.updateUser(id, req.body);
    if (result instanceof Error) {
        res.status(500).json({
            errors: {
                default: result.message
            }
        });
        return
    }
    res.status(200).json({ok: true, message: "Usuario atualizado com sucesso!",result})

}