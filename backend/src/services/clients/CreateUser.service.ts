import { Client } from "../../../entities/clients.entity"
import { AppDataSource } from "../../data-source"


export const CreateUserService = async (client: any) => {

    const userRepository = AppDataSource.getRepository(Client)

    const newUser = await userRepository.create({name: client.name})

    await userRepository.save(newUser)

    return newUser;
}
