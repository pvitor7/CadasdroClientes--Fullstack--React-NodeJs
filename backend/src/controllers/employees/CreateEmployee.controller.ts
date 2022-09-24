import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/AppError";
import { CreateEmployeeService } from "../../services/employees/CreateEmployee.service";
import { instanceToPlain } from "class-transformer";

export const CreateEmployeeController = async (req: Request, response: Response) =>{
    try {
        const newEmployee = await CreateEmployeeService(req.body);
        return response.status(201).json(instanceToPlain(newEmployee))
    } catch (err) {
        if (err instanceof AppError) {
            handleError(err, response);
        }
    }
}

