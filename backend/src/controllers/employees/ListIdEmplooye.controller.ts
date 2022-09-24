import { Request, Response } from "express"
import { AppError, handleError } from "../../errors/AppError";
import { ListEmployeeIdService } from "../../services/employees/ListIdEmplooye.service";

export const ListEmployeeIdController = async (request: Request, response: Response) => {
    try {
        const employee = await ListEmployeeIdService(request.params.id);
        return response.status(200).json(employee)
    } catch (err) {
        if (err instanceof AppError) {
            handleError(err, response);
        }
    }
}