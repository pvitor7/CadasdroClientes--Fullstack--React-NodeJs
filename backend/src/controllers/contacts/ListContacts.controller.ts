import { Request, Response } from "express";
import ListContactsClient from "../../services/contacts/ListContact.service";

const ListContactsClientController = async (request: Request, response: Response) => {
    const contacts = await ListContactsClient(request.params.id)
    return response.status(200).json(contacts);
}

export default ListContactsClientController;