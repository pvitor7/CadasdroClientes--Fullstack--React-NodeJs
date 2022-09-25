import request from "supertest";
import { DataSource } from "typeorm";
import app from "../../app";
import { AppDataSource } from "../../data-source";

describe("Teste de rota de Employees", () => {

    let connection: DataSource
    let token: string;
    const employeeZeroUm = {username: "Employee zero 1", password: "zeroUm1234"}
    let idZeroUm = '';
    beforeAll(async () => {
        await AppDataSource.initialize().then((res) => {
            connection = res
        }).catch((err) => {
            console.error("Erro durante a inicialização do banco de dados", err)
        });
        const response = await request(app).post("/employee/register").send(employeeZeroUm);
        idZeroUm = response.body.id;
        const loginResp = await request(app).post(`/employee/login`).send(employeeZeroUm);
        token = loginResp.body.token
    })

    afterAll(async () => {
        await connection.destroy();
    })

    const employeeTest1 = {username: "Employee 1", password: "senha1234"}

    test("Testar a criação de um novo employee", async () => {
        const response = await request(app).post("/employee/register").send(employeeTest1);
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("username");
        expect(response.body).toHaveProperty("is_active");
        expect(response.body).toHaveProperty("date");
        expect(response.body).toHaveProperty("id");
        expect(response.body.username).toBe(employeeTest1.username);
        expect(response.body.is_active).toBe(true);
    })

    test("Testar o login do employee", async () => {
        const response = await request(app).post(`/employee/login`).send(employeeZeroUm);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("token");
    })

    test("Testar listagem de employees", async () => {
        const response = await request(app).get("/employees").set("Authorization", `Bearer ${token}`);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("map");
    })

    test("Testar listagem de employee por id", async () => {
        const response = await request(app).get(`/employee/${idZeroUm}`).set("Authorization", `Bearer ${token}`);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("id");
        expect(response.body).toHaveProperty("username");
        expect(response.body).toHaveProperty("is_active");
        expect(response.body).toHaveProperty("date");
    })
})