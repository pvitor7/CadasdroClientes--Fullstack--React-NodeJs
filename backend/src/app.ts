import "reflect-metadata";
import express from "express";
import contactRoutes from "./routes/contactsRoutes";
import clientsRoutes from "./routes/clientsRoutes";
import employeeRoutes from "./routes/employeeRoutes";
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());


app.use('', contactRoutes);
app.use('', clientsRoutes);
app.use('', employeeRoutes);

export default app