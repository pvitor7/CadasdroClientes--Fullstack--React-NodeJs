import { Request, Response } from "express";
import ListContactsClient from "../../services/contacts/ListContact.service";
import { instanceToPlain } from "class-transformer"
import { AppError, handleError } from "../../errors/AppError";

const ListContactsClientController = async (request: Request, response: Response) => {
    try {
        const contacts = await ListContactsClient(request.params.id)
        return response.status(200).json(instanceToPlain(contacts));
    } catch (err) {
        if (err instanceof AppError) {

            handleError(err, response);

        }
    }
}

export default ListContactsClientController;