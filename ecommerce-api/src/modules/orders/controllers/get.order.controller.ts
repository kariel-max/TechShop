import { Request, Response } from "express";
import { OrderService } from "../services/order.sevice";

const service = new OrderService();

export const orderController = async (req: Request, res: Response) => {
    const order = await service.getOrder(Number(req.params.id))
    if (order instanceof Error) {
        res.status(500).json({
            errors: {
                default: order.message
            }
        })
        return
    }
    return res.status(200).json(order)
}