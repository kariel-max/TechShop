import { Request, Response } from "express"
import {CartService} from '../../services/cart.services'

const service = new CartService()

export const getCartController = async (req: Request, res: Response) => {
     const id = Number(req.params.id);

  if (isNaN(id)) {
    res.status(400).json({ error: "ID inválido. Esperado um número." });
    return
  }
    const cart = await service.getCart(id)
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