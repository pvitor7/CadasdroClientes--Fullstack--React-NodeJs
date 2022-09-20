import "reflect-metadata";
import express from "express";
import clientsRoutes from "../routes/clientsRoutes";
import contactRoutes from "../routes/contactsRoutes";

const app = express();
app.use(express.json());

const port = 3000;

app.use('', contactRoutes);
app.use('', clientsRoutes);

app.listen(port, () => {console.log("Servidor rodando")});