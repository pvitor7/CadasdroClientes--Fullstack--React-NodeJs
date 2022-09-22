import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/AppError";
import { UpdateUserService } from "../../services/clients/UpdateUser.service";


export const UpdateUserController = async (request: Request, response: Response) => {
    try {
        const user = await UpdateUserService(request.params.id, request.body);

        return response.status(200).json(user);
    } catch (err) {
        if (err instanceof AppError){
            handleError(err, response);
        }
    }
}