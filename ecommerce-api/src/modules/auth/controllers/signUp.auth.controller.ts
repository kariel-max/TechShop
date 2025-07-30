import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";

const service = new AuthService();

export const signUpAuthController = async (req: Request, res: Response) => {
      if(req.body.senha !== req.body.confSenha) {
        res.status(400).json({
            errors: {
                default: "As senha não coincidem."
            }
        })
        return
    }
    const auth = await service.createAuth(req.body)
    if (auth instanceof Error) {
        res.status(500).json({
            errors: {
                default: auth.message
            }
        })
        return
    }
    res.status(201).json(auth)
    return
}