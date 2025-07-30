import { DataTypes, Model } from "sequelize";
import sequelize from "../../../database/sequelize";
import {IUsuario} from "../../users/entities/user.entitie";
import { IProduto } from "../../products/entities/product.entitie";
import { CartItem } from "./cartItem";

export class ICarrinho extends Model {
    declare id: number;
    declare user_Id: number;
}

ICarrinho.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_Id: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, { 
    sequelize,
    modelName: "ICarrinho",
    timestamps: true
})

ICarrinho.belongsTo(IUsuario, {foreignKey: 'userId'})
ICarrinho.belongsToMany(IProduto, {through: CartItem})