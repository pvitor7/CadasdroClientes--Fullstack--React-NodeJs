import { DataSource } from "typeorm"
import { AppDataSource } from "../../data-source"
import { ListAllUsersService } from "../../services/clients/ListAllUsers.service"


describe("Testando listagem de clientes", () => {

    let connection: DataSource

    beforeAll(async() => {
        await AppDataSource.initialize().then((res) => {
            connection = res
        }).catch((err) => {
            console.error("Erro durante a inicialização do banco de dados")
        });
    })

    afterAll(async () => {
        await connection.destroy();
    }),

    test("Testar listagem dos usuários", async () => {
        const listClient = await ListAllUsersService();
        expect(listClient).toHaveProperty("map");
    })
})