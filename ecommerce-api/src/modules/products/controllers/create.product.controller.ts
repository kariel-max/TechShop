import { Request, Response } from 'express';
import { ProductService } from '../services/product.service';

const service = new ProductService();

export const createProductController = async (req: Request, res: Response) => {
    const product = await service.createProduct(req.body)
    if (product instanceof Error) {
        res.status(500).json({
            errors: {
                default: product.message
            }
        })
        return
    } 
    res.status(201).json(product)
}