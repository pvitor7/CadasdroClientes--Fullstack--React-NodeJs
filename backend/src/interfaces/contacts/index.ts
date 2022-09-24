import { IClient } from "../clients";

export interface IContact{
    type?: string;
    email?: string;
    phone?: string;
    client: IClient;
}

