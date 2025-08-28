import { Request, Response } from "express";
import { OrderService } from "../services/order.sevice";
import { sendEmail } from "../../../shared/services/emailService";

const service = new OrderService();

export const createOrderController = async (req: Request, res: Response) => {
  const { emailCliente, numeroPedido } = req.body;

  await sendEmail(
    emailCliente,
    "Confirmação do Pedido",
    `<h1>Seu pedido #${numeroPedido} foi confirmado!</h1>`
  );

  const order = await service.createOrder(req.body);
  if (order instanceof Error) {
    res.status(500).json({
      errors: {
        default: order.message,
      },
    });
    return;
  }
  res.status(201).json({order, message: "Seu pedido foi feito com sucesso!"});
};
