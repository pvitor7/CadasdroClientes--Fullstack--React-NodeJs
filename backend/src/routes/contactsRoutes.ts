import { Router} from "express";
import { ContactCreateController } from "../controllers/contacts/CreateContact.controller";
import DeleteContactController from "../controllers/contacts/DeleteContact.controller";
import ListContactsClientController from "../controllers/contacts/ListContacts.controller";
import UpdatedContactController from "../controllers/contacts/UpdateContact.controller";
import { authEmplooye } from "../middlewares/authUser.middlewares";


const contactRoutes = Router();

contactRoutes.post('/user/:id/contact', ContactCreateController)
contactRoutes.get('/user/:id/contact', ListContactsClientController)
contactRoutes.patch('/user/:userId/contact/:contactId', UpdatedContactController)
contactRoutes.delete('/user/:userId/contact/:contactId', DeleteContactController)

export default contactRoutes;