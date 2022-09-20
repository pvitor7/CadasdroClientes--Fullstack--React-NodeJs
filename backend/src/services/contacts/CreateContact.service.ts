import { Contact } from "../../../entities/contact.entity";
import { AppDataSource } from "../../data-source"

export const ContactCreateService = async (id: string, contact: any) => {

    const ContactRepository = AppDataSource.getRepository(Contact);

    contact.client = id;

    const newContact = await ContactRepository.create(contact);

    await ContactRepository.save(newContact);

    return newContact;
}

