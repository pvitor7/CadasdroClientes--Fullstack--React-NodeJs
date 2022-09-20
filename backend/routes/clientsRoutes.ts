import { Router } from "express";
import { CreateUserController } from "../src/controllers/clients/CreateUser.controller";
import { DeleteUserController } from "../src/controllers/clients/DeleteUser.controller";
import { ListAllUsersController } from "../src/controllers/clients/ListAllUsers.controller";
import { ListUserIdController } from "../src/controllers/clients/ListUserId.controller";
import { UpdateUserController } from "../src/controllers/clients/UpdateUser.controller";

const clientsRoutes = Router();

clientsRoutes.post('/register', CreateUserController);
clientsRoutes.get('/users', ListAllUsersController);
clientsRoutes.get('/user/:id', ListUserIdController);
clientsRoutes.patch('/user/:id', UpdateUserController);
clientsRoutes.delete('/user/:id', DeleteUserController);

export default clientsRoutes;