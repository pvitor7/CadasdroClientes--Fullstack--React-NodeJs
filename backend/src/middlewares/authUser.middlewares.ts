import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"
import { AppError } from "../errors/AppError";

export const authEmplooye = (req: Request, res: Response, next: NextFunction) => {

        const token: any = req.headers.authorization;
        if(!token){ throw new AppError("Token inválido", 401)}
        const tokenSplit = token.split(" ")[1];

        jwt.verify(tokenSplit as string,  "SECRET_KEY", (err: any, decoded: any) => {
                if(!decoded.is_active){throw new AppError("Usuário não autorizado!", 403)};
                next();
            })
}