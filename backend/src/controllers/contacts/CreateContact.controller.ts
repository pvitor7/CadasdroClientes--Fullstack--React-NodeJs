import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/AppError";
import { ContactCreateService } from "../../services/contacts/CreateContact.service";

export const ContactCreateController = async (request: Request, response: Response) => {

    try {

        const { type, email, phone } = request.body;
        const newContact = await ContactCreateService(request.params.id, type, email, phone)
        return response.status(201).json(newContact);

    } catch (err) {
        if (err instanceof AppError) {

            handleError(err, response);

        }
    }
}

