import { Request, Response } from 'express';
import { AppError, handleError } from '../../errors/AppError';
import { CreateUserService } from '../../services/clients/CreateUser.service';

export const CreateUserController = async (req: Request, response: Response) => {
    try {
        const newUser = await CreateUserService(req.body);
        return response.status(201).json(newUser)
    } catch (err) {
        if (err instanceof AppError) {
            handleError(err, response);
        }
    }
}
