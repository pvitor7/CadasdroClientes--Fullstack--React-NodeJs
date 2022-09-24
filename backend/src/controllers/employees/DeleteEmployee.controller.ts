import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/AppError";
import { DeleteEmployeService } from "../../services/employees/DeleteEmployee.service";


export const DeleteEmployeeController = async (request: Request, response: Response) => {

    try {
        const employee = await DeleteEmployeService(request.params.id);
        return response.status(204).json(employee);
    } catch (err) {
        if (err instanceof AppError) {
            handleError(err, response);
        }
    }
}
