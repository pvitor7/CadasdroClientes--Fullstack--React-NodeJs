
import { Client } from "../../../entities/clients.entity";
import { AppDataSource } from "../../data-source"

export const UpdateUserService = async (id: any, data: any) => {

    const ClientRepository = AppDataSource.getRepository(Client);

    await ClientRepository.update(id, {...data});

    const user = await ClientRepository.findOneBy({id: id });

    if(!user){
        throw new Error(`Could not find user ${id}`);
    }

    return user;
}