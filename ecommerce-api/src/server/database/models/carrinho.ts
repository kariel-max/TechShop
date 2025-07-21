import { DataTypes, Model } from "sequelize";
import sequelize from "../Sequelize/sequelize";
import type { BelongsToManyAddAssociationMixin } from "sequelize";
import IUsuario from "./usuario";
import IPedidos from "./pedidos";

export class ICarrinho extends Model {
    public id?: number;
    public usuarioId?: number;
    public addPedido!: BelongsToManyAddAssociationMixin<IPedidos, number>;
}

ICarrinho.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    usuarioId: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    sequelize,
    modelName: "ICarrinho",
})


IUsuario.hasOne(ICarrinho, {foreignKey: 'usuarioId'})
ICarrinho.belongsTo(IUsuario, {foreignKey: 'usuarioId'})

ICarrinho.belongsToMany(IPedidos, {through: "Carrinho_pedidos"})
IPedidos.belongsToMany(ICarrinho, {through: "Carrinho_pedidos"})


export default ICarrinho;