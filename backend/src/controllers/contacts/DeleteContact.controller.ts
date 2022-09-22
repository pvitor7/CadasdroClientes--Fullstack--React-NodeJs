import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/AppError";
import DeleteContactService from "../../services/contacts/DeleteContact.service";

const DeleteContactController = async (request: Request, response: Response) => {

    try {

        const contactDeleted = await DeleteContactService(request.params.userId, request.params.contactId)
        return response.status(204).json(contactDeleted);

    } catch (err) {
        if (err instanceof AppError) {

            handleError(err, response);

        }
    }
}


export default DeleteContactController;