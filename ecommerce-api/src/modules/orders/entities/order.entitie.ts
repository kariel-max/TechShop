import { DataTypes, Model } from "sequelize";
import sequelize from "../../../database/sequelize"
import {IUsuario} from "../../users/entities/user.entitie";
import { IProduto } from "../../products/entities/product.entitie";
import { OrderProduct } from "./orderProduct.entities";

export class IOrder extends Model {
    declare id: number;
    declare user_id: number;
    declare total: number;
    declare status: string;
}

IOrder.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    total: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: "IOrder",
    timestamps: true
})

IOrder.belongsTo(IUsuario, {foreignKey: 'user_id'})
IOrder.belongsToMany(IProduto, {through: OrderProduct})
