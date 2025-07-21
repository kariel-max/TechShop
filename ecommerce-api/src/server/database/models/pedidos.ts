import { DataTypes, Model } from "sequelize";
import sequelize from "../Sequelize/sequelize";
import type { BelongsToManyAddAssociationMixin } from "sequelize";
import IProduto from "./produtos";

export class IPedidos extends Model {
    public id?: number;
    public carrinhoId?: number;
    public produtoId?: number;
    public pedido?: boolean;
    public addProduto!: BelongsToManyAddAssociationMixin<IProduto, number>;
}

IPedidos.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    carrinhoId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    produtoId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    pedido: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    sequelize,
    modelName: "IPedidos",
})

export default IPedidos;