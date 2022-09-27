import request from "supertest";
import { DataSource } from "typeorm";
import app from "../../app";
import { AppDataSource } from "../../data-source";
import { CreateUserService } from "../../services/clients/CreateUser.service";

describe("Teste de rota de Clients", () => {
    let connection: DataSource
    let idUser: string;
    let token: string;

    beforeAll(async () => {
        await AppDataSource.initialize().then((res) => {
            connection = res
        }).catch((err) => {
            console.error("Erro durante a inicialização do banco de dados", err)
        });
        await request(app).post("/employee/register").send({username: "Employee zero 1", password: "zeroUm1234"});
        const loginResp = await request(app).post(`/employee/login`).send({username: "Employee zero 1", password: "zeroUm1234"});
        token = loginResp.body.token

        await CreateUserService({ name: "Client 1" });
        await CreateUserService({ name: "Client 2" });
        await CreateUserService({name: "Client 3"});
        await CreateUserService({ name: "Client 4" });
        const responseAllUsers = await request(app).get("/users").set("Authorization", `Bearer ${token}`);
        idUser = responseAllUsers.body[0].id
    })

    afterAll(async () => {
        await connection.destroy();
    })

    const name = "Client teste"
    const clientData = { name }
    const invalidId = "a9aa99a9-999a-99a9-999a-9aa999aaaaaa"

    test("Testar a criação de um novo cliente", async () => {
        const response = await request(app).post("/register").set("Authorization", `Bearer ${token}`).send(clientData);
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("id")
        expect(response.body).toHaveProperty("name")
        expect(response.body).toHaveProperty("date")
        expect(response.body.name).toBe(name)
    })

    test("Testar a criação de um novo client com com nome inválido", async () => {
        const name = ""
        const clientData = { name }
        const response = await request(app).post("/register").set("Authorization", `Bearer ${token}`).send(clientData);
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty("message")
        expect(response.body.message).toBe("Insira um nome válido!")
    })

    test("Testar listagem de clients", async () => {
        const response = await request(app).get("/users").set("Authorization", `Bearer ${token}`);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("map");
    })

    test("Testar listar clients por id", async () => {
        const response = await request(app).get(`/user/${idUser}`).set("Authorization", `Bearer ${token}`);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("name")
        expect(response.body).toHaveProperty("contacts")
        expect(response.body.name).toBe("Client 1")
    })

    test("Testar listar cliente com id inválido", async () => {
        const response = await request(app).get(`/user/${invalidId}`).set("Authorization", `Bearer ${token}`);
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty("message")
        expect(response.body.message).toBe("Usuário não encontrado")
    })

    test("Testar atualizar cliente com id inválido", async () => {
        const response = await request(app).patch(`/user/${invalidId}`).set("Authorization", `Bearer ${token}`).send({name: "Teste update client"});
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty("message")
        expect(response.body.message).toBe("Usuário não encontrado")
    })

    test("Testar atualização de cliente", async () => {
        const response = await request(app).patch(`/user/${idUser}`).set("Authorization", `Bearer ${token}`).send({name: "Teste update client"});
        expect(response.status).toBe(200);
    })

    test("Testar exclusão de cliente com id inválido", async () => {
        const response = await request(app).delete(`/user/${invalidId}`).set("Authorization", `Bearer ${token}`);
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty("message")
        expect(response.body.message).toBe("Usuário não encontrado")
    })

    test("Testar exclusão de cliente", async () => {
        const response = await request(app).delete(`/user/${idUser}`).set("Authorization", `Bearer ${token}`);
        expect(response.status).toBe(204);
    })
});
