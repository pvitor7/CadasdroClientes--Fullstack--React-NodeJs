import { hash } from "bcrypt"
import { AppDataSource } from "../../data-source"
import { Employee } from "../../entities/employee.entity"
import { AppError } from "../../errors/AppError"

export const CreateEmployeeService = async (employee: any) => {

    if(employee.username == '' || employee.username == null){ throw new AppError("Insira um nome válido!", 400)}
    if(employee.username == '' || employee.username == null){ throw new AppError("Insira uma senha válida!", 400)}

    const EmployeeRepository = AppDataSource.getRepository(Employee);
    const employeeLogged = await EmployeeRepository.findOneBy({username: employee.username})
    if(employeeLogged){ throw new AppError("Username já existe", 409)}

    const hashPassword = await hash(employee.password, 12)

    const userRepository = AppDataSource.getRepository(Employee)

    const newEmployee = new Employee()
    newEmployee.username = employee.username
    newEmployee.password = hashPassword
    newEmployee.is_active = employee.is_active || true
    newEmployee.date = new Date()

    await userRepository.create(newEmployee)
    const employeeCreated = await userRepository.save(newEmployee)

    return employeeCreated;
}
