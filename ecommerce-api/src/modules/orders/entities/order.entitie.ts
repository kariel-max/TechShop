import { DataTypes, Model } from "sequelize";
import sequelize from "../../../database/sequelize"

export class Order extends Model {
    declare id: number;
    declare user_id: number;
    declare total: number;
    declare status: string;
}

Order.init({
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
    modelName: "Order",
    timestamps: true
})