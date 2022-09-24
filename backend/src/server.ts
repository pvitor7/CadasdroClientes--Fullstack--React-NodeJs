import app from "./app";
import { AppDataSource } from "./data-source";

(async () => {

    await AppDataSource.initialize().catch((error) => {
    console.error("Failed to initialize AppDataSource", error) });
    app.listen(3001, () => { console.log("Servidor rodando") });
})();