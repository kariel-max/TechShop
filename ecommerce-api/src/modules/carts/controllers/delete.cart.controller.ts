import { Request, Response } from "express"
import {CartService} from '../services/cart.services'

const service = new CartService()

export const deleteCartController = async (req: Request, res: Response) => {
    const cart = await service.deleteCart(Number(req.params.id))
    if (cart instanceof Error) {
        res.status(500).json({
            errors: {
                default: cart.message
            }
        })
        return
    }
    return res.status(204).json(cart)
}