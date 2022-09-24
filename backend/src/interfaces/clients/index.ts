import { IContact } from "../contacts";

export interface IClient{
    id?: string;
    name: string;
    contacts: IContact[];
}

