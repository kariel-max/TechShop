import {Request, Response} from "express";
import { categoriasProviders } from "../../database/provides/categorias";
export const getCategorias = async (req: Request, res: Response) => {
    const categoria = await categoriasProviders.getCategorias()
    if(categoria instanceof Error) {
        res.status(401).json({
            ok: false,
            errors: {
                default: categoria.message
            }
        })
        return
    }
    res.status(200).json({ok: true, categoria: categoria})
}

export const getEspecificacoes = async (req: Request, res: Response) => {
    const especificacoes = await categoriasProviders.getEspecificacoes(req.params.name)
    if(especificacoes instanceof Error) {
        res.status(401).json({
            ok: false,
            errors: {
                default: especificacoes.message
            }
        })
        return
    }
    res.status(200).json({ok: true, especificacoes: especificacoes.especificacoes})
}