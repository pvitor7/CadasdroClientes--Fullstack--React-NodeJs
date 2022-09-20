import { Request, Response } from 'express';
import { CreateUserService } from '../../services/clients/CreateUser.service';

export const CreateUserController = async (req: Request, response: Response) => {

    const newUser = await CreateUserService(req.body);

    return response.status(201).json({'detail': newUser})
}