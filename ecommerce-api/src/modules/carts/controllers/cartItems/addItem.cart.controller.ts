import { Request, Response } from "express"
import {CartItemService} from '../../services/cartItem.services'

const service = new CartItemService()

export const addCartItemController = async (req: Request, res: Response) => {
    const cartItem = await service.createCartItem(req.body)
    console.log(cartItem)
    if (cartItem instanceof Error) {
        res.status(500).json({
            errors: {
                default: cartItem.message
            }
        })
        return
    }
    res.status(201).json(cartItem)
}