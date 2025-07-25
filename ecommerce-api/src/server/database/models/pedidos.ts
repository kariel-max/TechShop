import { DataTypes, Model } from "sequelize";
import sequelize from "../Sequelize/sequelize";
import type { BelongsToManyAddAssociationMixin } from "sequelize";
import { IProduto } from "./produtos";

export class IPedidos extends Model {
    public id?: number;
    public carrinhoId?: number;
    public produtoId?: number;
    public quantidade?: number;
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
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    pedido: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    sequelize,
    modelName: "IPedidos",
})
IPedidos.belongsTo(IProduto, {
  foreignKey: 'produtoId',
  as: 'IProduto',
   onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});
export default IPedidos;