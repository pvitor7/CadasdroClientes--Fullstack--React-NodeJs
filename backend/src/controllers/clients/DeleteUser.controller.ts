import { Request, Response } from "express";
import { DeleteUserService } from "../../services/clients/DeleteUser.service";


export const DeleteUserController =  async (request: Request, response: Response) => {

    const user = await  DeleteUserService(request.params.id);

    return response.status(204).json(user);
}