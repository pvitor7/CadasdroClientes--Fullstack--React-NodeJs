import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { Client } from "./entities/clients.entity";
import { Contact } from "./entities/contact.entity";
import { Employee } from "./entities/employee.entity";

dotenv.config()

export const AppDataSource = new DataSource(
    process.env.NODE_ENV === "test" ? {
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
        entities: ["src/entities/*.ts"]

    } : {

        type: "postgres",
        host: process.env.DB_HOST,
        username: process.env.DB_USER,
        database: process.env.DATABASE,
        password: process.env.PASSWORD,
        port: Number(process.env.DB_PORT),
        logging: true,
        synchronize: false,
        entities: [Client, Contact, Employee],
        migrations: ['src/migrations/*.ts']
    });

