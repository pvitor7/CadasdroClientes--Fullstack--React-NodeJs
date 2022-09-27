import { Router } from "express";
import { CreateEmployeeController } from "../controllers/employees/CreateEmployee.controller";
import { DeleteEmployeeController } from "../controllers/employees/DeleteEmployee.controller";
import { ListAllEmployeesController } from "../controllers/employees/ListAllEmployee.controller";
import { ListEmployeeIdController } from "../controllers/employees/ListIdEmplooye.controller";
import { LoginEmployeeController } from "../controllers/employees/LoginEmployee.controller";
import { UpdateEmployeeController } from "../controllers/employees/UpdateEmplooye.controller";
import { authEmplooye } from "../middlewares/authUser.middlewares";

const employeeRoutes = Router();

employeeRoutes.post('/employee/register', CreateEmployeeController);
employeeRoutes.post('/employee/login', LoginEmployeeController);
employeeRoutes.get('/employees', authEmplooye, ListAllEmployeesController);
employeeRoutes.get('/employee/:id', authEmplooye, ListEmployeeIdController);
employeeRoutes.patch('/employee/:id', authEmplooye, UpdateEmployeeController);
employeeRoutes.delete('/employee/:id', authEmplooye, DeleteEmployeeController);

export default employeeRoutes;