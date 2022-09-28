import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/AppError";
import { LoginEmployeeService } from "../../services/employees/LoginEmployee.service";

export const LoginEmployeeController = async (req: Request, response: Response) =>{

    try {
        const loginEmployee = await LoginEmployeeService(req.body.username, req.body.password);
        return response.status(200).json({token: loginEmployee})
    } catch (err) {
        if (err instanceof AppError) {
            handleError(err, response);
        }
    }
}

