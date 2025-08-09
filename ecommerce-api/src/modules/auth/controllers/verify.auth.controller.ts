import { Request, Response } from "express";

export const verifyRouter = (req: Request, res: Response)=> {
    console.log("token em controller",req.headers.cookie)
    res.status(200).json({ok: true})
}