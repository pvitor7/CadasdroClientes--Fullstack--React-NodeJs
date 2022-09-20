import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from "typeorm";
import { Contact } from "./contact.entity";

@Entity("clients")
export class Client{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    date: Date;

    @OneToMany(() => Contact, (contacts) => contacts.client)
    contacts?: Contact;
}