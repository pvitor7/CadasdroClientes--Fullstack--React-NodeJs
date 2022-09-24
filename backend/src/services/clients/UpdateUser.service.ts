
import { Client } from "../../entities/clients.entity";
import { AppError } from "../../errors/AppError";
import { AppDataSource } from "../../data-source"

export const UpdateUserService = async (id: any, data: any) => {

    const ClientRepository = AppDataSource.getRepository(Client);

    const user = await ClientRepository.findOneBy({id: id });
    if(!user){throw new AppError("Usuário não encontrado", 400)}

    await ClientRepository.update(id, {...data});

    return user;
}