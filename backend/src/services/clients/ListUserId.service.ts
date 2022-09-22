import { Client } from "../../entities/clients.entity";
import { Contact } from "../../entities/contact.entity";
import { AppDataSource } from "../../data-source";

export const ListUserIdService = async (id: string) => {

    const clientsRepository = AppDataSource.getRepository(Client);

    const userId = await clientsRepository.findOneBy({id: id});

    const contactsRepository = AppDataSource.getRepository(Contact)
    const clientContacts = await contactsRepository.findBy({client:{id: id}})

    return {name: userId?.name, contacts: clientContacts}

}