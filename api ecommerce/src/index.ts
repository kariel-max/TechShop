import sequelize from "./server/database/Sequelize/sequelize";
import { server } from "./server/Server"; 
import mongoose from "mongoose";

const port = Number(process.env.PORT || 8080)

server.listen(port, '0.0.0.0', () => {
    console.log('Servidor conectado!')
});

(async ()=> {
    try {
        await sequelize.authenticate();
        console.log("conexão bem-sucedida!");
        await sequelize.sync({alter: true});
        console.log("Banco de dados sincronizado!");
    } catch (error) {
        console.error("error ao sincronizar banco de dados!", error);
    };
})();
(async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL || "mongodb://localhost:27017/ecommerce");
        console.log("MongoDB conectado com sucesso!");
    } catch (error) {
        console.error("Erro ao conectar ao MongoDB:", error);
    }
})();