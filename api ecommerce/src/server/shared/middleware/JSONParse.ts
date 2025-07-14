import { NextFunction, Response } from "express";

export const JSONParseError = (err: any,_: any, res: Response, next: NextFunction) => {
    if( err instanceof SyntaxError) {
        res.status(404).json({
            errors: {
                default: "Formato enviado é incorreto"
            }
        });
    } else {
        next();
    }
};