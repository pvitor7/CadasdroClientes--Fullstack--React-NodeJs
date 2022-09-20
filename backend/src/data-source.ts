import { DataSource } from "typeorm";
import "dotenv/config";
import { Client } from "../entities/clients.entity";
import { Contact } from "../entities/contact.entity";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: Number(process.env.DB_PORT),
    logging: true,
    synchronize: false,
    entities: [Client, Contact],
    migrations: ['src/migrations/*.ts']
});

AppDataSource.initialize().then(() => { console.log("Initialized!") }
).catch((error) => { console.error("Failed to initialize AppDataSource")});
