import { Request, Response } from 'express';
import { UserService } from "../services/user.service"

const service = new UserService();

export const deleteUserController = async (req: Request, res: Response) => {
    const user = await service.deleteUser(Number(req.params.id))
    if (user instanceof Error) {
        res.status(500).json({
            errors: {
                default: user.message
            }
        })
        return
    }
    return res.status(204).json(user)

}