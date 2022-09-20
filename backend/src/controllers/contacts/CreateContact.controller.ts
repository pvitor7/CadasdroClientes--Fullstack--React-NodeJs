import { Request, Response } from "express";
import { ContactCreateService } from "../../services/contacts/CreateContact.service";

export const ContactCreateController = async (request: Request, response: Response) => {
    console.log("bem feito")
    const newContact = await ContactCreateService(request.params.id, request.body)
    return response.status(201).json(newContact);
}

