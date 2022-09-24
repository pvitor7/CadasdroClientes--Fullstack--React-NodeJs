import { Request, Response } from "express"
import { AppError, handleError } from "../../errors/AppError";
import { ListUserIdService } from "../../services/clients/ListUserId.service";
import { instanceToPlain } from "class-transformer"

export const ListUserIdController = async (request: Request, response: Response) => {
    try {
        const user = await ListUserIdService(request.params.id);
        return response.status(200).json(user)
    } catch (err) {
        if (err instanceof AppError) {
            handleError(err, response);
        }
    }
}