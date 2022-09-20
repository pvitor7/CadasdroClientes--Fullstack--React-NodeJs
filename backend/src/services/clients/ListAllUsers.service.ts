import { Client } from "pg";
import { AppDataSource } from "../../data-source";

export const ListAllUsersService = async () => {

    const userRepository = AppDataSource.getRepository(Client);

    const users = await userRepository.find();

    return users;
}