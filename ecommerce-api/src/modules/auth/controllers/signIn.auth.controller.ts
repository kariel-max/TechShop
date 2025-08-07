import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";
import { JWTService, passwordCrypto } from "../../../shared/services";

const service = new AuthService();

export const signInAuthController = async (req: Request, res: Response) => {
    
        const response = await service.getAuth(req.body.email)
    if (response instanceof Error) {
        res.status(400).json({
            ok: false,
            errors: {
                default: response.message
            }
        })
        return
    };
    const usuarioObj = typeof response.toJSON === 'function' ? response.toJSON() : response;
    const passwordMatch = await passwordCrypto.verifyPassword(req.body.senha, usuarioObj.senha);
    console.log(req.body.senha, usuarioObj)
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
    return
}