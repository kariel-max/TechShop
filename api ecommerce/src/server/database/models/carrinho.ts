import { DataTypes, Model } from "sequelize";
import sequelize from "../Sequelize/sequelize";
import { BelongsToManyAddAssociationMixin } from "sequelize";
import IUsuario from "./usuario";
import IProdutos from "./produtos";

export class ICarrinho extends Model {
    public id?: number;
    public usuarioId?: number;
    public quantIten?: number;
    public totalValor?: number; 
    public addProduto!: BelongsToManyAddAssociationMixin<IProdutos, number>;
}

ICarrinho.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    idIten: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantIten: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    totalValor: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: "ICarrinho",
})


IUsuario.hasOne(ICarrinho, {foreignKey: 'usuarioId'})
ICarrinho.belongsTo(IUsuario, {foreignKey: 'usuarioId'})

ICarrinho.belongsToMany(IProdutos, {through: "Carrinho_produtos"})
IProdutos.belongsToMany(ICarrinho, {through: "Carrinho_produtos"})


export default ICarrinho;