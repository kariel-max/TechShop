import type { Request, Response } from "express";

export const verificar = (req: Request, res: Response) => {
    const idUsuario = req.headers.idUsuario;
    res.status(200).json({
        ok: true,
        message: "token valido!",
        idUsuario,
    })
}