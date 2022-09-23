import { Client } from "../../entities/clients.entity";
import { Contact } from "../../entities/contact.entity";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/AppError";

export const ListUserIdService = async (id: string) => {

    const clientsRepository = AppDataSource.getRepository(Client);

    const userId = await clientsRepository.findOneBy({id: id});

    if(!userId){throw new AppError("Usuário não encontrado", 400)}

    const contactsRepository = AppDataSource.getRepository(Contact)
    const clientContacts = await contactsRepository.findOneBy({client:{id: id}})
    console.log(userId)

    return {name: userId?.name, contacts: clientContacts}

}