import { DataSource } from "typeorm"
import { AppDataSource } from "../../data-source"
import { CreateUserService } from "../../services/clients/CreateUser.service"


describe("Testando service criação de client", () => {

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

    test("Testar a criação de um cliente", async () => {

        const name = "Client 1"
        const client1Data = {name}
        const newClient = await CreateUserService(client1Data);
        
        expect(newClient).toEqual(expect.objectContaining({name})
        );
    })
})