import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/AppError";
import { ListAllEmployeesService } from "../../services/employees/ListAllEmployee.service";


export async function ListAllEmployeesController(request: Request, response: Response) {
    try {
        const employees = await ListAllEmployeesService();
        return response.status(200).json(employees);
    } catch (err) {
        if (err instanceof AppError) {
            handleError(err, response);
        }
    }
}