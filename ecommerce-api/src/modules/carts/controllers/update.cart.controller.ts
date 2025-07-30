import { Request, Response } from "express"
import {CartService} from '../services/cart.services'

const service = new CartService()

export const updateCartController = async (req: Request, res: Response) => {
    const cart = await service.update(Number(req.params.id), req.body)
    if (cart instanceof Error) {
        res.status(500).json({
            errors: {
                default: cart.message
            }
        })
        return
    }
    return res.status(200).json(cart)
}