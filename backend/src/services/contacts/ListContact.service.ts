import { Contact } from "../../../entities/contact.entity";
import { AppDataSource } from "../../data-source"

const ListContactsClient = async (idUser: string) => {

    const ContactRepository = AppDataSource.getRepository(Contact);

    const contacts =  await ContactRepository.find()

    contacts.map(contact => console.log(contact))

    return contacts;

}

export default ListContactsClient;