import { Contact } from "../../entities/contact.entity";
import { AppDataSource } from "../../data-source"

const ListContactsClient = async (idUser: any) => {

    const ContactRepository = AppDataSource.getRepository(Contact);
    const teste = await ContactRepository.find()
    const contacts =  await ContactRepository.find({where: {client: {id: idUser}}})
    const { name } = contacts[0].client
    return {Name: name, contacts};
}

export default ListContactsClient;