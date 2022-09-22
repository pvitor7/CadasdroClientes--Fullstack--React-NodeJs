import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/AppError";
import { DeleteUserService } from "../../services/clients/DeleteUser.service";


export const DeleteUserController = async (request: Request, response: Response) => {

    try {
        const user = await DeleteUserService(request.params.id);

        return response.status(204).json(user);
    } catch (err) {
        if (err instanceof AppError) {
            handleError(err, response);
        }
    }
}
