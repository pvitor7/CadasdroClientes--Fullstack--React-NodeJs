import { Client } from "../../entities/clients.entity";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/AppError";
import { AppDataSource } from "../../data-source";


const DeleteContactService = async (idUser: string, idContact: string) => {

    const userExist = await AppDataSource.getRepository(Client).findOneBy({id: idUser});
    if (!userExist) {throw new AppError("Usuário não encontrado", 400)}
    const ContactRepository = await AppDataSource.getRepository(Contact).delete(idContact);
    return ContactRepository;
}

export default DeleteContactService;