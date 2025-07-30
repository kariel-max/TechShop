import { Request, Response } from "express";
import { OrderService } from "../services/order.sevice";

const service = new OrderService();

export const createOrderController = async (req: Request, res: Response) => {
    const order = await service.createOrder(req.body)
    if (order instanceof Error) {
        res.status(500).json({
            errors: {
                default: order.message
            }
        })
        return
    }
    return res.status(201).json(order)
}