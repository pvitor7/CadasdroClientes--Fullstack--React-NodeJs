import { Router} from "express";
import { ContactCreateController } from "../src/controllers/contacts/CreateContact.controller";
import ListContactsClientController from "../src/controllers/contacts/ListContacts.controller";

const contactRoutes = Router();

contactRoutes.post('/user/:id/contact', ContactCreateController)
contactRoutes.get('/user/:id/contact', ListContactsClientController)

export default contactRoutes;