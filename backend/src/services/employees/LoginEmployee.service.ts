import { AppDataSource } from "../../data-source"
import { Employee } from "../../entities/employee.entity";
import { AppError } from "../../errors/AppError";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";

export const LoginEmployeeService = async (email: string, password: string) => {

    const EmployeeRepository = AppDataSource.getRepository(Employee);
    const employeeLogged = await EmployeeRepository.findOneBy({username: email})

    if(!employeeLogged){ throw new AppError("Email ou senha inválidos", 401)}

    const passwordCompare = bcrypt.compareSync(password, employeeLogged.password)

    if(!passwordCompare){ throw new AppError("Email ou senha inválidos", 401)}

    const token = jwt.sign({
        id: employeeLogged.id,
        username: employeeLogged.username,
        is_active: employeeLogged.is_active
        },"SECRET_KEY",
        {
            expiresIn: "12h"
        })

    return token;
}