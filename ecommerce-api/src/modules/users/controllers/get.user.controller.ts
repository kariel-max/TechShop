import { Request, Response } from 'express';
import { UserService } from "../services/user.service"

const service = new UserService();

export const getUserController = async (req: Request, res: Response) => {
    const user = await service.getUser(Number(req.params.id))
    if (user instanceof Error) {
        res.status(500).json({
            errors: {
                default: user.message
            }
        })
        return
    }
    res.status(200).json(user)
}