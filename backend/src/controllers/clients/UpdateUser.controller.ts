import { Request, Response } from "express";
import { UpdateUserService } from "../../services/clients/UpdateUser.service";


export const UpdateUserController = async (request: Request, response: Response) => {

    const user = await UpdateUserService(request.params.id, request.body);

    return response.status(200).json(user);
}