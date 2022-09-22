import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/AppError";
import UpdateContactService from "../../services/contacts/UpdateContact.service";

const UpdatedContactController = async (request: Request, response: Response) => {

    try {

        const { userId, contactId } = request.params;
        const contactUpdated = await UpdateContactService(userId, contactId, request.body)
        return response.status(200).json(contactUpdated);

    } catch (err) {
        if (err instanceof AppError) {

            handleError(err, response);

        }
    }

}

export default UpdatedContactController;