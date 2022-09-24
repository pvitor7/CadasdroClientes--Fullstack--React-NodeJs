import { Contact } from "../../entities/contact.entity";
import { AppDataSource } from "../../data-source"
import { AppError } from "../../errors/AppError";

const ListContactsClient = async (idUser: string) => {

    const ContactRepository = AppDataSource.getRepository(Contact);
    const contacts =  await ContactRepository.find({where: {client: {id: idUser}}})
    if(contacts.length == 0){ throw new AppError("Não existem contatos para o usuário informado!", 404) }
    let name = contacts[0].client

    return {name: name, contacts};
}

export default ListContactsClient;