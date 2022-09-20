import { Request, Response } from "express"
import { ListUserIdService } from "../../services/clients/ListUserId.service";

export const ListUserIdController = async (request: Request, response: Response) => {

    const user = await ListUserIdService(request.params.id);

    return response.status(200).json({user});
}