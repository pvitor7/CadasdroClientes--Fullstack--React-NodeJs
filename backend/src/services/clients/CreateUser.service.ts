import { Client } from "../../entities/clients.entity"
// import { IClient } from "../../../interfaces/clients"
import { AppDataSource } from "../../data-source"
import { AppError } from "../../errors/AppError"


export const CreateUserService = async (client: any) => {

    if(client.name === '' || client.name == null){ throw new AppError("Insira um nome válido!", 400)}
    const userRepository = AppDataSource.getRepository(Client)

    const newUser = {
        name: client.name,
        contacts: []
    }

    await userRepository.create(newUser)
    const userCreated = await userRepository.save(newUser)

    return userCreated;
}
