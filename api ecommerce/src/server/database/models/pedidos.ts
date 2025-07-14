import { DataTypes, Model } from "sequelize";
import sequelize from "../Sequelize/sequelize";
import IProdutos from "./produtos";

export class IPedidos extends Model {
    public id?: number;
    public name?: string;
    public loja?: string;
    public dataDeEntrega?: string;
    public statusDoProduto?: string;
}

IPedidos.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    loja: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dataDeEntrega: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    statusDoProduto: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: "IPedidos",
})

export default IPedidos;