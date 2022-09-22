import { Client } from "../../entities/clients.entity";
import { AppDataSource } from "../../data-source";


export const DeleteUserService = async (id: any) => {

    const ClientRepository = AppDataSource.getRepository(Client);

    const userExcluded = await ClientRepository.delete(id);

    return userExcluded
}