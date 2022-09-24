import { Router } from "express";
import { CreateUserController } from "../controllers/clients/CreateUser.controller";
import { DeleteUserController } from "../controllers/clients/DeleteUser.controller";
import { ListAllUsersController } from "../controllers/clients/ListAllUsers.controller";
import { ListUserIdController } from "../controllers/clients/ListUserId.controller";
import { UpdateUserController } from "../controllers/clients/UpdateUser.controller";
import { authEmplooye } from "../middlewares/authUser.middlewares";

const clientsRoutes = Router();

clientsRoutes.post('/register', authEmplooye, CreateUserController);
clientsRoutes.get('/users', authEmplooye, ListAllUsersController);
clientsRoutes.get('/user/:id', authEmplooye, ListUserIdController);
clientsRoutes.patch('/user/:id', authEmplooye, UpdateUserController);
clientsRoutes.delete('/user/:id', authEmplooye, DeleteUserController);

export default clientsRoutes;