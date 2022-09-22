
import { Client } from "../../entities/clients.entity";
import { AppError } from "../../errors/AppError";
import { AppDataSource } from "../../data-source"

export const UpdateUserService = async (id: any, data: any) => {

    const ClientRepository = AppDataSource.getRepository(Client);

    await ClientRepository.update(id, {...data});

    const user = await ClientRepository.findOneBy({id: id });

    // Tratar erro!
    if(!user){
        throw new AppError("User not found", 404);
    }

    return user;
}