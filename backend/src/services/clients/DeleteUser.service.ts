import { Client } from "../../entities/clients.entity";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/AppError";


export const DeleteUserService = async (id: string) => {

    const ClientRepository = AppDataSource.getRepository(Client);
    const user = await ClientRepository.findOneBy({id: id });
    if(!user){throw new AppError("Usuário não encontrado", 400)}
    const userExcluded = await ClientRepository.delete(id);

    return userExcluded
}