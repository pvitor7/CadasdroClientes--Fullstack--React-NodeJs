import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";
import { Exclude } from "class-transformer";

@Entity("employee")
export class Employee{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    username: string;

    @Column()
    @Exclude()
    password: string;

    @Column()
    is_active: boolean;

    @CreateDateColumn()
    date: Date;
}