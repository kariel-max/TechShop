import { Request, Response } from "express"
import {CartService} from '../services/cart.services'

const service = new CartService()

export const getCartController = async (req: Request, res: Response) => {
    const cart = await service.getCart(Number(req.params.id))
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