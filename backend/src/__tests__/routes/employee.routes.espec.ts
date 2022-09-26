import request from "supertest";
import { DataSource } from "typeorm";
import app from "../../app";
import { AppDataSource } from "../../data-source";

describe("Teste de rota de Employees", () => {

    let connection: DataSource
    let token: string;
    let idZeroUm: string;
    const employeeZeroUm = {username: "Employee zero 1", password: "zeroUm1234"}

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
    const invalidId = "a9aa99a9-999a-99a9-999a-9aa999aaaaaa"

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

    test("Testar listagem de um employee com id inválido", async () => {
        const response = await request(app).get(`/employee/${invalidId}`).set("Authorization", `Bearer ${token}`);
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty("message")
        expect(response.body.message).toBe("Funcionário não encontrado")
    })

    test("Testar a edição de um employee com id inválido", async () => {
        const employeeTestEdit = {username: "Employee Edit 1", password: "senha1234"}
        const response = await request(app).patch(`/employee/${invalidId}`).set("Authorization", `Bearer ${token}`).send(employeeTestEdit);
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty("message")
        expect(response.body.message).toBe("Funcionário não encontrado")
    })

    test("Testar a edição de um employee", async () => {
        const employeeTestEdit = {username: "Employee Edit 1", password: "senha1234"}
        const response = await request(app).patch(`/employee/${idZeroUm}`).set("Authorization", `Bearer ${token}`).send(employeeTestEdit);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("username");
        expect(response.body).toHaveProperty("is_active");
        expect(response.body).toHaveProperty("date");
        expect(response.body).toHaveProperty("id");
        expect(response.body.username).toBe(employeeTestEdit.username);
        expect(response.body.is_active).toBe(true);
    })

    test("Testar exclusão de employee com id inválido", async () => {
        const response = await request(app).delete(`/employee/${invalidId}`).set("Authorization", `Bearer ${token}`);
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty("message")
        expect(response.body.message).toBe("Funcionário não encontrado")
    })

    test("Testar exclusão de employee", async () => {
        const response = await request(app).delete(`/employee/${idZeroUm}`).set("Authorization", `Bearer ${token}`);
        expect(response.status).toBe(204);
    })
})