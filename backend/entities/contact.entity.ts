import { Client } from "./clients.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

@Entity("contacts")
export class Contact{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email?: string

    @Column()
    phone?: string

    @ManyToOne(() => Client, client => client.contacts, {nullable: true})
    client: Client
}