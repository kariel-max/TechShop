import { Request, Response } from "express";
import { OrderService } from "../services/order.sevice";

const service = new OrderService();

export const orderController = async (req: Request, res: Response) => {
    const order = await service.deleteOrder(Number(req.params.id))
    if (order instanceof Error) {
        res.status(500).json({
            errors: {
                default: order.message
            }
        })
        return
    }
    return res.status(204).json(order)
}