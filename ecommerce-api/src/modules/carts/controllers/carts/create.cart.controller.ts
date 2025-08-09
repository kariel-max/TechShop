import { Request, Response } from "express"
import {CartService} from '../../services/cart.services'
import { Carrinho } from "../../entities/cart.entitie"

const service = new CartService()

export const createCartController = async (req: Request, res: Response) => {
    const data = req.body
    const verifyCart = await Carrinho.findOne({where:{ user_id: data.user_id}})
    if(verifyCart) {
        res.status(200).json(verifyCart)
        return
    }
    const cart = await service.createCart(data)
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