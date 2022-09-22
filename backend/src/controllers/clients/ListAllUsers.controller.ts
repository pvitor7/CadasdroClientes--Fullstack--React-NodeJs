import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/AppError";
import { ListAllUsersService } from "../../services/clients/ListAllUsers.service";


export async function ListAllUsersController(request: Request, response: Response) {
    try {
        const users = await ListAllUsersService();
        return response.status(200).json(users);
    } catch (err) {
        if (err instanceof AppError) {
            handleError(err, response);
        }
    }
}