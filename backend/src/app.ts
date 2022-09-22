import "reflect-metadata";
import express from "express";
import contactRoutes from "./routes/contactsRoutes";
import clientsRoutes from "./routes/clientsRoutes";

const app = express();
app.use(express.json());


app.use('', contactRoutes);
app.use('', clientsRoutes);



export default app