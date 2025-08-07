import { Request, Response } from 'express';
import { ProductService } from '../services/product.service';

const service = new ProductService();

export const deleteProductController = async (req: Request, res: Response) => {
    const product = await service.deleteProduct(Number(req.params.id))
    if (product instanceof Error) {
        res.status(500).json({
            errors: {
                default: product.message
            }
        })
        return
    }
    res.status(204).json(product)
}
