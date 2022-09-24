import { AppDataSource } from "../../data-source";
import { Employee } from "../../entities/employee.entity";
import { AppError } from "../../errors/AppError";
import { hash } from "bcrypt";

export const UpdateEmployeeService = async (id: string, data: any) => {

    const EmployeeRepository = AppDataSource.getRepository(Employee);

    const employee = await EmployeeRepository.findOneBy({id: id });
    if(!employee){throw new AppError("Funcionário não encontrado", 400)}

    if(data.password){
        data.password = await hash(data.password, 12)
    }

    await EmployeeRepository.update(id, {...data});
    const employeeUpdated = await EmployeeRepository.findOneBy({id: id })

    return employeeUpdated;
}