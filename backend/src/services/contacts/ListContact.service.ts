import { Contact } from "../../entities/contact.entity";
import { AppDataSource } from "../../data-source"

const ListContactsClient = async (idUser: string) => {

    const ContactRepository = AppDataSource.getRepository(Contact);
    const contacts =  await ContactRepository.find({where: {client: {id: idUser}}})
    let name = contacts[0].client

    return {name: name, contacts};
}

export default ListContactsClient;