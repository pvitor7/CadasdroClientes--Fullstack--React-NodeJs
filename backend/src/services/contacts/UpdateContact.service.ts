
import { Client } from "../../entities/clients.entity";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/AppError";
import { AppDataSource } from "../../data-source";

const UpdateContactService = async (idUser: string, idContact: any, dataContact: any) => {
    const userExist = await AppDataSource.getRepository(Client).findOneBy({id: idUser});
    if (!userExist) {return "User not found"}

    const ContactRepository = AppDataSource.getRepository(Contact);

    // Tratar erro!
    if(!dataContact.email || dataContact.phone){ throw new AppError("Invalid data!")}

    await ContactRepository.update(idContact, {...dataContact});
    const contactUpdate = await ContactRepository.findOneBy({id: idContact});

    return contactUpdate;
}

export default UpdateContactService;