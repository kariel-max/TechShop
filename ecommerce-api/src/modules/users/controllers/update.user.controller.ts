import { Request, Response } from 'express';
import { UserService } from "../services/user.service"

const service = new UserService();

export const updateUserController = async (req: Request, res: Response) => {
    const user = await service.updateUser(Number(req.params.id), req.body)
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