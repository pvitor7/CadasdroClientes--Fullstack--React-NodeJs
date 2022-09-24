
import { Client } from "../../entities/clients.entity";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/AppError";
import { AppDataSource } from "../../data-source"

export const ContactCreateService = async (id: string, type: string, email: string, phone: string) => {

    if (email == "" && phone == "") { throw new AppError("Insira pelo menos um telefone ou email", 404) }

    const clientRepository = AppDataSource.getRepository(Client);
    const clientId = await clientRepository.findOneBy({ id: id })

    if (!clientId) { throw new AppError("Usuário não encontrado", 400) }

    const ContactRepository = AppDataSource.getRepository(Contact);

    const emailAlreadyExists = await ContactRepository.findOneBy({ client: { id: id }, email: email });
    if (email != null && emailAlreadyExists) {
        throw new AppError("O email do usuário já foi cadastrado", 409)
    }

    const phoneAlreadyExists = await ContactRepository.findOneBy({ client: { id: id }, phone: phone });
    if (phone != null && phoneAlreadyExists) {
        throw new AppError("O telefone do usuário já foi cadastrado", 409)
    }

    const newContactData = { client: clientId, type: type, email: email, phone: phone };
    await ContactRepository.create(newContactData);
    await ContactRepository.save(newContactData);

    return newContactData;
}

