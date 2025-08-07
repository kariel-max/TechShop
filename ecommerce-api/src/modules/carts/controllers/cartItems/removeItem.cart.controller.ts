import { Request, Response } from "express"
import {CartItemService} from '../../services/cartItem.services'

const service = new CartItemService()

export const removeCartItemController = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    if (!id || isNaN(Number(id))) {
    console.error("ID do produto inválido:", id);
    throw new Error("ID do produto inválido");
  }
    const cartItem = await service.removeItem(id)
    if (cartItem instanceof Error) {
        res.status(500).json({
            errors: {
                default: cartItem.message
            }
        })
        return
    }
    res.status(204).json(cartItem)
}