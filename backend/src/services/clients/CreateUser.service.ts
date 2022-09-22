import { Client } from "../../entities/clients.entity"
// import { IClient } from "../../../interfaces/clients"
import { AppDataSource } from "../../data-source"


export const CreateUserService = async (client: any) => {

    const userRepository = AppDataSource.getRepository(Client)

    const newUser = {
        name: client.name,
        contacts: []
    }

    await userRepository.create(newUser)
    const userCreated = await userRepository.save(newUser)

    return userCreated;
}
