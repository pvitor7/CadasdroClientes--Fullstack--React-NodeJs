import request from "supertest";
import { DataSource } from "typeorm";
import app from "../../app";
import { AppDataSource } from "../../data-source";

describe("Teste de rota de Clients", () => {

    let connection: DataSource

    beforeAll(async () => {
        await AppDataSource.initialize().then((res) => {
            connection = res
        }).catch((err) => {
            console.error("Erro durante a inicialização do banco de dados")
        });
    })

    afterAll(async () => {
        await connection.destroy();
    }),

        test("Testar a criação de um novo client", async () => {
            const name = "Client 1"
            const clientData = { name }
            const response = await request(app).post("/register").send(clientData);

            expect(response.status).toBe(201);
            expect(response.body).toHaveProperty("id")
            expect(response.body).toHaveProperty("name")
            expect(response.body).toHaveProperty("date")
            expect(response.body).toHaveProperty("contacts")
            expect(response.body.name).toBe(name)
            expect(response.body.contacts).toHaveProperty("map");
        })
});



describe("Teste de listagem de clients", () => {

    let connection: DataSource

    beforeAll(async () => {
        await AppDataSource.initialize().then((res) => {
            connection = res
        }).catch((err) => {
            console.error("Erro durante a inicialização do banco de dados")
        });
    })

    afterAll(async () => {
        await connection.destroy();
    })

    test("Testar listagem de clients", async () => {

    const response = await request(app).get("/users");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("map");
    })
})

