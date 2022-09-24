import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/AppError";
import { UpdateEmployeeService } from "../../services/employees/UpdateEmplooye.service";


export const UpdateEmployeeController = async (request: Request, response: Response) => {
    try {
        const employeeUpdated = await UpdateEmployeeService(request.params.id, request.body);
        return response.status(200).json(employeeUpdated);
    } catch (err) {
        if (err instanceof AppError){
            handleError(err, response);
        }
    }
}