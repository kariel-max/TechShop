import { Request, Response } from 'express';
import { ProductService } from '../services/product.service';

const service = new ProductService();

export const ProductController = async (req: Request, res: Response) => {
    const product = await service.updateProduct(Number(req.params.id), req.body)
    if (product instanceof Error) {
        res.status(500).json({
            errors: {
                default: product.message
            }
        })
        return
    }
    return res.status(200).json(product)
}