import { AppDataSource } from "../../data-source";
import { Employee } from "../../entities/employee.entity";
import { AppError } from "../../errors/AppError";


export const DeleteEmployeService = async (id: string) => {

    const EmployeeRepository = AppDataSource.getRepository(Employee);
    const employee = await EmployeeRepository.findOneBy({id: id });
    if(!employee){throw new AppError("Funcionário não encontrado", 400)}
    const employeeExcluded = await EmployeeRepository.delete(id);

    return employeeExcluded
}