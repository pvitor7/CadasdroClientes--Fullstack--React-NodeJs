import { AppDataSource } from "../../data-source";
import { Employee } from "../../entities/employee.entity";

export const ListAllEmployeesService = async () => {

    const userRepository = AppDataSource.getRepository(Employee);

    const employees = await userRepository.find();

    return employees;
}