import { Request, Response } from "express"
import {CartService} from '../../services/cart.services'

const service = new CartService()

export const createCartController = async (req: Request, res: Response) => {
    const cart = await service.createCart(req.body)
    console.log(cart)
    if (cart instanceof Error) {
        res.status(500).json({
            errors: {
                default: cart.message
            }
        })
        return
    }
    res.status(201).json(cart)
}