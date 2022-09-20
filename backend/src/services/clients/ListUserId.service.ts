import { Client } from "../../../entities/clients.entity";
import { AppDataSource } from "../../data-source";

export const ListUserIdService = async (id: string) => {

    const clientsRepository = AppDataSource.getRepository(Client);

    const userId = await clientsRepository.findOneBy({id: id});

    return userId;



}