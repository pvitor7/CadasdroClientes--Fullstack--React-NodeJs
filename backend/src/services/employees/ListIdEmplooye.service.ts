import { AppDataSource } from "../../data-source";
import { Employee } from "../../entities/employee.entity";
import { AppError } from "../../errors/AppError";

export const ListEmployeeIdService = async (id: string) => {

    const employeesRepository = AppDataSource.getRepository(Employee);
    const employeeId = await employeesRepository.findOneBy({id: id});
    if(!employeeId){throw new AppError("Funcionário não encontrado", 400)}
    return employeeId;
}