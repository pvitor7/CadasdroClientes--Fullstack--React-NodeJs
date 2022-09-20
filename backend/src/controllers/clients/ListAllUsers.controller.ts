import { Request, Response } from "express";
import { Client } from "../../../entities/clients.entity";
import { AppDataSource } from "../../data-source";


async function ListAllUsersController(request: Request, response: Response) {

    const userRepository = AppDataSource.getRepository(Client);

    const users = await userRepository.find();

    return response.status(200).json({ users: users });
}

export { ListAllUsersController };