import { Request, Response } from "express";
import ListContactsClient from "../../services/contacts/ListContact.service";
import { instanceToPlain } from "class-transformer"

const ListContactsClientController = async (request: Request, response: Response) => {
    const contacts = await ListContactsClient(request.params.id)
    return response.status(200).json(instanceToPlain(contacts));
}

export default ListContactsClientController;