import { Request, Response } from "express";
import { UsuarioProvides } from "../../database/provides/usuarios";

export const getUser = async (req: Request, res: Response)=> {
    const id = Number(req.params.id)

    const result = await UsuarioProvides.getByUserId(id)
    if( result instanceof Error) {
        res.status(400).json({
            errors: {
                default: result.message
            }
        })
        return
    }
    const userObj = typeof result.toJSON === 'function' ? result.toJSON() : result;
    res.status(200).json({ok: true, userObj})
}