import { Request, Response } from "express"
import {CartService} from '../../services/cart.services'

const service = new CartService()

export const getAllCartController = async (req: Request, res: Response) => {
    const cart = await service.getAllCart()
    if (cart instanceof Error) {
        res.status(500).json({
            errors: {
                default: cart.message
            }
        })
        return
    }
    res.status(200).json(cart)
}