import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";
import { passwordCrypto } from "../../../shared/services";

const service = new AuthService();

export const signUpAuthController = async (req: Request, res: Response) => {
    console.log(req.body)
      if(req.body.senha !== req.body.confSenha) {
        res.status(400).json({
            errors: {
                default: "As senha não coincidem."
            }
        })
        return
    }
    const {name, email} = req.body
    const senha = (await passwordCrypto.hashPassword(req.body.senha)).toString()
    const auth = await service.createAuth({name, email, senha})
    if (auth instanceof Error) {
        res.status(500).json({
            errors: {
                default: auth.message
            }
        })
        return
    }
    res.status(201).json(auth.id)
    return
}