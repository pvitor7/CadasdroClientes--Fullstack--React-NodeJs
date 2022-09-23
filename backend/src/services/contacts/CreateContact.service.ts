
import { Client } from "../../entities/clients.entity";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/AppError";
import { AppDataSource } from "../../data-source"

export const ContactCreateService = async (id: any, type: string, email: string, phone: string) => {

    const clientRepository = AppDataSource.getRepository(Client);
    const clientId = await clientRepository.findOneBy({ id: id })

    if (!clientId) { throw new AppError("Client not found", 404) }

    const newContactData: any = { client: clientId, type: type, email: email, phone: phone };

    const ContactRepository = AppDataSource.getRepository(Contact);

    const emailAlreadyExists = await ContactRepository.findOneBy({ client: { id: id }, email: email });
    if (emailAlreadyExists) { throw new AppError("Email already register", 409)}

    const phoneAlreadyExists = await ContactRepository.findOneBy({ client: { id: id }, phone: phone });
    if (phoneAlreadyExists) { throw new AppError("Phone already register", 409) }

    await ContactRepository.create(newContactData);
    await ContactRepository.save(newContactData);

    return newContactData;
}

